export default function Services() {
  const services = [
    {
      tag: 'Alimentação & Delivery',
      tagColor: 'var(--color-secondary)',
      title: 'Cardápio Digital & App de Delivery',
      description: 'Sistema completo de pedidos online com cardápio digital, gestão de pedidos, integração com impressora térmica e automação via WhatsApp. Seu delivery sem as taxas do iFood.',
      features: ['Cardápio digital personalizável', 'Pedidos via WhatsApp', 'Gestão de entregas', 'Relatórios de vendas'],
      icon: '🍕',
      bgColor: 'rgba(247, 127, 0, 0.06)',
    },
    {
      tag: 'Serviços & Agendamento',
      tagColor: 'var(--color-primary)',
      title: 'Sites & Sistemas de Agendamento',
      description: 'Sites institucionais modernos com sistema de agendamento online integrado. Confirmações e lembretes automáticos via WhatsApp para reduzir faltas.',
      features: ['Site profissional responsivo', 'Agendamento online 24h', 'Lembretes automáticos', 'SEO otimizado para Google'],
      icon: '💈',
      bgColor: 'rgba(45, 106, 79, 0.06)',
    },
    {
      tag: 'Varejo & Catálogo',
      tagColor: 'var(--color-accent)',
      title: 'Catálogo Online & Automações',
      description: 'Catálogos de produtos online com controle de estoque, chatbots de triagem e automações de atendimento. Esteja no Google e facilite orçamentos para clientes locais.',
      features: ['Catálogo de produtos', 'Chatbot de atendimento', 'Controle de estoque', 'Orçamento rápido'],
      icon: '🏪',
      bgColor: 'rgba(29, 53, 87, 0.06)',
    },
  ];

  return (
    <section id="soluções" className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="badge badge-secondary mb-4 inline-block">Nossas Soluções</span>
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
            Soluções para cada{' '}
            <span style={{ color: 'var(--color-secondary)' }}>tipo de negócio</span>
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
            Do delivery ao agendamento, criamos a solução perfeita para o seu segmento.
          </p>
        </div>

        {/* Services Cards */}
        <div className="gsap-stagger grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-hover rounded-2xl overflow-hidden border"
              style={{
                backgroundColor: 'white',
                borderColor: 'var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Card Header */}
              <div className="p-6 md:p-8" style={{ backgroundColor: service.bgColor }}>
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <span
                  className="badge mb-3 inline-block"
                  style={{
                    backgroundColor: `${service.tagColor}15`,
                    color: service.tagColor,
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {service.tag}
                </span>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    lineHeight: '1.25',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: '1.6',
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="p-6 md:p-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-success)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.875rem',
                          color: 'var(--color-text)',
                          fontWeight: 500,
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className="btn-primary mt-6 w-full justify-center"
                  style={{ padding: '12px 24px', fontSize: '14px' }}
                >
                  Quero essa solução
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
