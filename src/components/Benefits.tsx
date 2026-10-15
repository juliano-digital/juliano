export default function Benefits() {
  const benefits = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: 'Zero taxas de marketplace',
      description: 'Pare de entregar 15-27% de cada pedido para iFood e Rappi. Com seu canal próprio, o lucro fica no seu bolso.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Clientes fiéis e recorrentes',
      description: 'Fidelize sua base com um canal direto. Notificações, promoções exclusivas e atendimento personalizado via WhatsApp.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: 'Atendimento 24 horas',
      description: 'Automação inteligente que responde clientes, confirma agendamentos e envia lembretes — mesmo quando você está dormindo.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: 'Presença digital profissional',
      description: 'Sites modernos que aparecem no Google, transmitem confiança e convertem visitantes em clientes pagantes.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: 'Painel de controle completo',
      description: 'Acompanhe pedidos, agendamentos, estoque e métricas em tempo real. Tudo em um só lugar, do celular ou computador.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: 'Integração com WhatsApp',
      description: 'Pedidos, agendamentos e confirmações direto no WhatsApp — onde seu cliente já está. Sem complicação.',
    },
  ];

  return (
    <section id="benefícios" className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="badge badge-primary mb-4 inline-block">Por que nos escolher</span>
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
            Tudo que seu negócio precisa para{' '}
            <span style={{ color: 'var(--color-primary)' }}>crescer online</span>
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
            Soluções completas pensadas para comércios locais que querem vender mais, 
            atender melhor e parar de depender de plataformas de terceiros.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="gsap-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-hover p-6 md:p-8 rounded-2xl border transition-all"
              style={{
                backgroundColor: 'var(--color-bg)',
                borderColor: 'var(--color-border)',
                boxShadow: 'var(--shadow-xs)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}
              >
                {benefit.icon}
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: '1.6',
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
