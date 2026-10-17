export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-3 gap-3 md:gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-3 md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-x-6 lg:col-span-1 lg:block">
            <div className="flex items-center gap-2 mb-4 md:mb-0 lg:mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-primary-light)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <span
                className="font-bold text-sm md:text-base lg:text-lg"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-inverse)' }}
              >
                DevLocal — Desenvolvimento Digital
              </span>
            </div>
            <p
              className="mb-6 md:mb-0 lg:mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: '1.6',
                maxWidth: '280px',
              }}
            >
              Soluções digitais sob medida para comércios locais que querem crescer, 
              vender mais e conquistar seus clientes.
            </p>
            <div className="flex gap-3 md:col-start-2 md:row-span-2 md:row-start-1 md:items-center lg:col-auto lg:row-auto lg:items-start">
              {['instagram', 'whatsapp', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                  aria-label={social}
                >
                  {social === 'instagram' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  )}
                  {social === 'whatsapp' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  )}
                  {social === 'linkedin' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="min-w-0">
            <h4
              className="mb-3 text-[0.65rem] leading-tight tracking-normal md:mb-4 md:text-sm md:tracking-wider"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: 'var(--color-text-inverse)',
                textTransform: 'uppercase',
              }}
            >
              Soluções
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {['Cardápio Digital', 'App de Delivery', 'Sites Institucionais', 'Agendamento Online', 'Catálogo de Produtos'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="break-words text-[0.7rem] leading-snug transition-colors duration-200 hover:text-white md:text-sm"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h4
              className="mb-3 text-[0.65rem] leading-tight tracking-normal md:mb-4 md:text-sm md:tracking-wider"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: 'var(--color-text-inverse)',
                textTransform: 'uppercase',
              }}
            >
              Segmentos
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {['Restaurantes & Delivery', 'Barbearias & Salões', 'Clínicas & Estética', 'Lojas & Varejo', 'Prestadores de Serviço'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="break-words text-[0.7rem] leading-snug transition-colors duration-200 hover:text-white md:text-sm"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h4
              className="mb-3 text-[0.65rem] leading-tight tracking-normal md:mb-4 md:text-sm md:tracking-wider"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: 'var(--color-text-inverse)',
                textTransform: 'uppercase',
              }}
            >
              Contato
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-1 md:gap-2">
                <svg className="mt-0.5 h-3 w-3 flex-shrink-0 md:h-4 md:w-4" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="min-w-0 break-words text-[0.7rem] leading-snug md:text-sm" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.6)' }}>
                  (11) 99999-9999
                </span>
              </li>
              <li className="flex items-start gap-1 md:gap-2">
                <svg className="mt-0.5 h-3 w-3 flex-shrink-0 md:h-4 md:w-4" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="min-w-0 break-words text-[0.7rem] leading-snug md:text-sm" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.6)' }}>
                  contato@devlocal.com.br
                </span>
              </li>
              <li className="mt-3 flex items-start gap-1 md:mt-4 md:gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-3 w-3 flex-shrink-0 md:h-4 md:w-4">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="min-w-0 break-words text-[0.7rem] leading-snug md:text-sm" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.6)' }}>
                  Atendimento 100% online<br />para todo o Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            © 2024 DevLocal — Desenvolvimento Digital. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {['Privacidade', 'Termos de Uso'].map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors duration-200 hover:text-white"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
