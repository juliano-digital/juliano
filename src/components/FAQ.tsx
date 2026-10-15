import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Quanto tempo leva para ficar pronto?',
      answer: 'Dependendo da complexidade, entre 7 a 30 dias. Sites institucionais ficam prontos em 7-10 dias. Apps de delivery e sistemas mais completos levam de 15 a 30 dias. Você acompanha cada etapa do desenvolvimento.',
    },
    {
      question: 'Preciso saber mexer em tecnologia?',
      answer: 'Não! Tudo é pensado para ser simples. Você recebe treinamento completo e nosso suporte está sempre disponível. O painel é intuitivo e qualquer pessoa consegue usar sem dificuldades.',
    },
    {
      question: 'E se eu já tiver um site? Vocês substituem?',
      answer: 'Podemos tanto criar do zero quanto modernizar o que você já tem. Fazemos uma análise gratuita e indicamos o melhor caminho. Muitas vezes, vale mais a pena começar novo com tecnologia atual.',
    },
    {
      question: 'Como funciona a integração com WhatsApp?',
      answer: 'Utilizamos a API oficial do WhatsApp Business. Seus clientes recebem confirmações de pedido, lembretes de agendamento e novidades diretamente no WhatsApp — o canal que eles já usam todo dia.',
    },
    {
      question: 'Quanto custa?',
      answer: 'Cada projeto é único, então o valor varia conforme as funcionalidades. Oferecemos planos a partir de R$ 97/mês com tudo incluso: hospedagem, manutenção, atualizações e suporte. Agende uma conversa para receber um orçamento personalizado.',
    },
    {
      question: 'Vocês dão suporte depois que entregar?',
      answer: 'Sim! Suporte é nosso diferencial. Você tem acesso a atendimento por WhatsApp, atualizações mensais e melhorias contínuas. Nosso compromisso é com o sucesso do seu negócio a longo prazo.',
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="badge badge-primary mb-4 inline-block">Dúvidas Frequentes</span>
            <h2
              className="gsap-fade-up mb-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                fontWeight: 700,
                color: 'var(--color-text)',
                lineHeight: '1.15',
              }}
            >
              Perguntas{' '}
              <span style={{ color: 'var(--color-primary)' }}>frequentes</span>
            </h2>
            <p
              className="gsap-fade-up"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                color: 'var(--color-text-muted)',
                lineHeight: '1.6',
              }}
            >
              Tire suas dúvidas sobre nossos serviços e como podemos ajudar seu negócio.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="gsap-stagger space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: 'white',
                  borderColor: openIndex === index ? 'var(--color-primary)' : 'var(--color-border)',
                  boxShadow: openIndex === index ? 'var(--shadow-sm)' : 'none',
                }}
              >
                <button
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      paddingRight: '16px',
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: openIndex === index ? 'var(--color-primary)' : 'var(--color-bg-alt)',
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={openIndex === index ? 'white' : 'var(--color-text-muted)'}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openIndex === index ? '300px' : '0',
                    opacity: openIndex === index ? 1 : 0,
                  }}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9375rem',
                        color: 'var(--color-text-muted)',
                        lineHeight: '1.7',
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
