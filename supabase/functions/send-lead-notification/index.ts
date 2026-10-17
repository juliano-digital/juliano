import {
  Configuration,
  SendApi,
  type V1SendRequest,
} from "hostinger-mail-api-sdk";

interface LeadPayload {
  name: string;
  business: string;
  phone: string;
  state: string;
  city: string;
  message: string;
}

const allowedOrigins = new Set([
  "https://devlocal.appmodelo.com",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:4173",
  "http://127.0.0.1:4173",
]);

function jsonResponse(
  body: Record<string, string>,
  status: number,
  origin: string,
) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Headers":
        "authorization, x-client-info, apikey, content-type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Content-Type": "application/json",
      "Vary": "Origin",
    },
  });
}

function isLeadPayload(value: unknown): value is LeadPayload {
  if (typeof value !== "object" || value === null) return false;

  const payload = value as Record<string, unknown>;
  const limits: Record<keyof LeadPayload, number> = {
    name: 120,
    business: 160,
    phone: 32,
    state: 2,
    city: 120,
    message: 2000,
  };

  return Object.entries(limits).every(([key, maxLength]) => {
    const field = payload[key];
    return typeof field === "string" && field.length <= maxLength;
  }) && ["name", "business", "phone"].every((key) => {
    const field = payload[key];
    return typeof field === "string" && field.trim().length > 0;
  });
}

Deno.serve(async (request: Request) => {
  const origin = request.headers.get("Origin") ?? "";
  if (!allowedOrigins.has(origin)) {
    return new Response("Origem não autorizada.", { status: 403 });
  }

  if (request.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Headers":
          "authorization, x-client-info, apikey, content-type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Vary": "Origin",
      },
    });
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Método não permitido." }, 405, origin);
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse(
      { error: "O corpo da solicitação precisa ser JSON válido." },
      400,
      origin,
    );
  }

  if (!isLeadPayload(payload)) {
    return jsonResponse(
      { error: "Os dados do formulário são inválidos." },
      400,
      origin,
    );
  }

  const accessToken = Deno.env.get("HOSTINGER_MAIL_API_TOKEN");
  const mailboxResourceId = Deno.env.get("HOSTINGER_MAILBOX_RESOURCE_ID");
  const recipient = Deno.env.get("LEAD_NOTIFICATION_EMAIL");
  if (!accessToken || !mailboxResourceId || !recipient) {
    const missingSettings = [
      ["HOSTINGER_MAIL_API_TOKEN", accessToken],
      ["HOSTINGER_MAILBOX_RESOURCE_ID", mailboxResourceId],
      ["LEAD_NOTIFICATION_EMAIL", recipient],
    ].filter(([, value]) => !value).map(([name]) => name);
    return jsonResponse(
      {
        error: `Configuração de e-mail ausente: ${missingSettings.join(", ")}.`,
      },
      500,
      origin,
    );
  }

  const configuration = new Configuration({ accessToken });
  const mailApi = new SendApi(configuration);
  // The SDK types API-optional fields as required; omitted fields must stay out of the JSON payload.
  const email = {
    to: [recipient],
    subject: "Novo pedido de demonstração pelo site",
    text: [
      "Um novo pedido de demonstração foi recebido.",
      "",
      `Nome: ${payload.name}`,
      `Negócio: ${payload.business}`,
      `WhatsApp: ${payload.phone}`,
      `Estado: ${payload.state}`,
      `Cidade: ${payload.city}`,
      "",
      "Mensagem:",
      payload.message,
    ].join("\n"),
  } as V1SendRequest;

  try {
    await mailApi.sendEmail(mailboxResourceId, email);
  } catch (error: unknown) {
    const message = error instanceof Error
      ? error.message
      : "Erro desconhecido.";
    console.error("Hostinger Mail API não enviou a notificação:", message);
    return jsonResponse(
      {
        error:
          "A API de e-mail não enviou a notificação. Verifique o token, a caixa postal e o destinatário.",
      },
      502,
      origin,
    );
  }

  return jsonResponse({ status: "Notificação enviada." }, 200, origin);
});
