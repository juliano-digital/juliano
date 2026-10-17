# portfolio
Landing Page Design System

## Notificações de leads pelo Hostinger Mail API

O formulário continua gravando os leads no Supabase e, em seguida, chama a Edge Function `send-lead-notification` para enviar os detalhes do pedido por e-mail. O token do Hostinger Mail API fica somente no servidor; não use variáveis `VITE_*` para credenciais.

Antes de usar, crie um token do **Mail API** em Hostinger > Agentic Mail > API access, com permissão para enviar mensagens. Esse token é diferente do token da Hostinger API. Configure também o ID de recurso da caixa postal autorizada e o endereço que receberá os leads.

Para desenvolvimento local, copie `supabase/functions/.env.example` para `supabase/functions/.env` e preencha os três valores. O `.env` é ignorado pelo Git.

Para publicar no projeto Supabase configurado:

```sh
supabase secrets set --env-file supabase/functions/.env
supabase functions deploy send-lead-notification
```

O destinatário `LEAD_NOTIFICATION_EMAIL` precisa ser preenchido antes do envio. A função só aceita chamadas do domínio `https://devlocal.appmodelo.com` e de origens locais de desenvolvimento.
