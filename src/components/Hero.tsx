export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero hero-parallax" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10"
          style={{ backgroundColor: 'var(--color-primary-light)' }}
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: 'var(--color-secondary)' }}
        />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-white/20" />
        <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-white/10" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-white/15" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="gsap-fade-up mb-6">
            <span
              className="badge"
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'var(--color-primary-light)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              🚀 Soluções digitais para o seu negócio local
            </span>
          </div>

          {/* Headline */}
          <h1
            className="gsap-fade-up font-extrabold text-white mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
            }}
          >
            Pare de perder clientes para os{' '}
            <span style={{ color: 'var(--color-secondary)' }}>marketplaces</span>.{' '}
            Tenha seu canal de vendas próprio.
          </h1>

          {/* Subheadline */}
          <p
            className="gsap-fade-up mb-8 md:mb-10"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '560px',
            }}
          >
            Criamos sites, aplicativos de delivery e sistemas de agendamento 
            que transformam seu negócio local em uma máquina de vendas — 
            sem taxas abusivas de iFood ou Rappi.
          </p>

          {/* CTAs */}
          <div className="gsap-fade-up flex flex-col sm:flex-row gap-4">
            <a href="#contato" className="btn-secondary text-center justify-center">
              <span>Agendar Demonstração Grátis</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#soluções"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white border-2 transition-all duration-300 hover:bg-white/10"
              style={{
                fontFamily: 'var(--font-display)',
                borderColor: 'rgba(255,255,255,0.3)',
              }}
            >
              Ver Soluções
            </a>
          </div>

          {/* Trust indicators */}
          <div className="gsap-fade-up mt-12 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: `hsl(${i * 60}, 50%, 40%)` }}
                  >
                    {['M', 'J', 'A', 'R'][i - 1]}
                  </div>
                ))}
              </div>
              <span className="text-sm text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
                +150 negócios atendidos
              </span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--color-secondary)" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
              <span className="text-sm text-white/70 ml-1" style={{ fontFamily: 'var(--font-body)' }}>
                4.9/5 avaliação
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  );
}
