import { useState } from 'react';

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0">
        <div
          className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: 'var(--color-primary-light)' }}
        />
        <div
          className="absolute bottom-10 left-10 w-80 h-80 rounded-full opacity-5"
          style={{ backgroundColor: 'var(--color-secondary)' }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span
                className="badge mb-6 inline-block"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'var(--color-primary-light)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                🎯 Comece agora
              </span>
              <h2
                className="gsap-fade-up mb-4"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  fontWeight: 800,
                  color: 'var(--color-text-inverse)',
                  lineHeight: '1.15',
                }}
              >
                Pronto para transformar seu negócio?
              </h2>
              <p
                className="gsap-fade-up mb-8"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.6',
                }}
              >
                Agende uma demonstração gratuita e descubra como podemos aumentar suas vendas, 
                reduzir custos e fidelizar seus clientes com tecnologia sob medida.
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                {[
                  'Demonstração 100% gratuita e sem compromisso',
                  'Orçamento personalizado em até 24h',
                  'Suporte dedicado do início ao fim',
                  'Garantia de satisfação ou seu dinheiro de volta',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-success)' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9375rem',
                        color: 'rgba(255,255,255,0.9)',
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="gsap-fade-up">
              {submitted ? (
                <div
                  className="rounded-2xl p-8 text-center"
                  style={{
                    backgroundColor: 'white',
                    boxShadow: 'var(--shadow-lg)',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: 'var(--color-primary-light)' }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                    }}
                  >
                    Recebemos sua mensagem!
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    Em até 24h entraremos em contato pelo WhatsApp. Fique atento!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl p-6 md:p-8"
                  style={{
                    backgroundColor: 'white',
                    boxShadow: 'var(--shadow-lg)',
                  }}
                >
                  <h3
                    className="mb-6"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.375rem',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                    }}
                  >
                    Agende sua demonstração grátis
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label
                        className="block mb-1.5"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.8125rem',
                          fontWeight: 500,
                          color: 'var(--color-text)',
                        }}
                      >
                        Seu nome
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                        style={{
                          borderColor: 'var(--color-border)',
                          fontFamily: 'var(--font-body)',
                        }}
                        placeholder="Como podemos te chamar?"
                      />
                    </div>

                    <div>
                      <label
                        className="block mb-1.5"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.8125rem',
                          fontWeight: 500,
                          color: 'var(--color-text)',
                        }}
                      >
                        Nome do negócio
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                        style={{ borderColor: 'var(--color-border)', fontFamily: 'var(--font-body)' }}
                        placeholder="Ex: Pizzaria do João"
                      />
                    </div>

                    <div>
                      <label
                        className="block mb-1.5"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.8125rem',
                          fontWeight: 500,
                          color: 'var(--color-text)',
                        }}
                      >
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                        style={{ borderColor: 'var(--color-border)', fontFamily: 'var(--font-body)' }}
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label
                        className="block mb-1.5"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.8125rem',
                          fontWeight: 500,
                          color: 'var(--color-text)',
                        }}
                      >
                        O que precisa? (opcional)
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border text-sm transition-all duration-200 focus:outline-none focus:ring-2 resize-none"
                        style={{ borderColor: 'var(--color-border)', fontFamily: 'var(--font-body)' }}
                        rows={3}
                        placeholder="Conte um pouco sobre seu negócio..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-secondary w-full justify-center mt-2"
                      style={{ padding: '14px 24px' }}
                    >
                      <span>Quero minha demonstração grátis</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>

                    <p
                      className="text-center mt-3"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      🔒 Seus dados estão seguros. Não enviamos spam.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
