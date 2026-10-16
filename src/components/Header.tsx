import { useState, useEffect } from 'react';

interface HeaderProps {
  solidOnTop?: boolean;
}

export default function Header({ solidOnTop = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const solid = solidOnTop || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <span
              className="max-w-[190px] text-sm font-bold leading-tight md:max-w-none md:text-xl"
              style={{ fontFamily: 'var(--font-display)', color: solid ? 'var(--color-text)' : 'var(--color-text-inverse)' }}
            >
              DevLocal — Desenvolvimento Digital
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-3 lg:gap-8">
            {[
              { label: 'Soluções', href: '/#soluções' },
              { label: 'Sites/Apps', href: '/sites-apps', button: true },
              { label: 'Benefícios', href: '/#benefícios' },
              { label: 'Depoimentos', href: '/#depoimentos' },
              { label: 'FAQ', href: '/#faq' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={item.button ? 'btn-primary' : 'text-xs lg:text-sm font-medium transition-colors duration-200 hover:opacity-80'}
                style={item.button ? { padding: '8px 16px', fontSize: '14px' } : {
                  fontFamily: 'var(--font-body)',
                  color: solid ? 'var(--color-text)' : 'var(--color-text-inverse)',
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contato"
              className="btn-primary"
              style={{ padding: '8px 16px', fontSize: '14px' }}
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
              style={{ backgroundColor: solid ? 'var(--color-text)' : 'var(--color-text-inverse)' }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
              style={{ backgroundColor: solid ? 'var(--color-text)' : 'var(--color-text-inverse)' }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
              style={{ backgroundColor: solid ? 'var(--color-text)' : 'var(--color-text-inverse)' }}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-lg p-6 mt-2 absolute left-4 right-4">
            <div className="flex flex-col gap-4">
              {[
                { label: 'Soluções', href: '/#soluções' },
                { label: 'Sites/Apps', href: '/sites-apps', button: true },
                { label: 'Benefícios', href: '/#benefícios' },
                { label: 'Depoimentos', href: '/#depoimentos' },
                { label: 'FAQ', href: '/#faq' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={item.button ? 'btn-primary justify-center' : 'text-base font-medium py-2'}
                  style={item.button ? undefined : { fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/#contato"
                className="btn-primary justify-center mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
