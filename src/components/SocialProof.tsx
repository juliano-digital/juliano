import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SocialProof() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = statsRef.current?.querySelectorAll('.counter-animate');
      counters?.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const suffix = counter.getAttribute('data-suffix') || '';
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            (counter as HTMLElement).textContent = Math.round(obj.val) + suffix;
          },
        });
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      name: 'Marcos Oliveira',
      role: 'Dono - Pizzaria Don Corleone',
      text: 'Reduzi meus custos com delivery em 70% depois que saí do iFood. O app próprio paga o investimento em menos de 2 meses. Meus clientes adoraram a facilidade!',
      avatar: 'MO',
      color: '#2D6A4F',
    },
    {
      name: 'Ana Paula Santos',
      role: 'Studio Bella Forma',
      text: 'Antes perdia clientes por não responder na hora. Agora o sistema agenda e confirma sozinho pelo WhatsApp. Minhas faltas caíram 80%!',
      avatar: 'AS',
      color: '#F77F00',
    },
    {
      name: 'Carlos Eduardo',
      role: 'Auto Peças Central',
      text: 'O catálogo online com chatbot triplicou meus orçamentos. Clientes pesquisam no Google, veem os produtos e já pedem cotação. Simples e eficiente.',
      avatar: 'CE',
      color: '#1D3557',
    },
  ];

  const stats = [
    { value: 150, suffix: '+', label: 'Negócios atendidos' },
    { value: 70, suffix: '%', label: 'Redução de custos com delivery' },
    { value: 3, suffix: 'x', label: 'Mais pedidos via canal próprio' },
    { value: 98, suffix: '%', label: 'Clientes satisfeitos' },
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container-custom">
        {/* Stats Section */}
        <div
          ref={statsRef}
          className="gsap-fade-up rounded-2xl p-8 md:p-12 mb-16 md:mb-20"
          style={{ backgroundColor: 'var(--color-accent)' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="counter-animate text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
                  data-target={stat.value}
                  data-suffix={stat.suffix}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-text-inverse)',
                  }}
                >
                  0{stat.suffix}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.7)',
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge badge-primary mb-4 inline-block">Prova Social</span>
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
            Quem já usa,{' '}
            <span style={{ color: 'var(--color-primary)' }}>recomenda</span>
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
            Veja o que nossos clientes dizem sobre a transformação digital dos seus negócios.
          </p>
        </div>

        {/* Testimonials */}
        <div className="gsap-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-hover p-6 md:p-8 rounded-2xl border"
              style={{
                backgroundColor: 'white',
                borderColor: 'var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--color-secondary)" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--color-text)',
                  lineHeight: '1.7',
                  fontStyle: 'italic',
                }}
              >
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: testimonial.color }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
