import { useState, useEffect, useRef, useCallback } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function SitesApps() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Dados dos projetos
  const projects: Project[] = [
    {
      id: 1,
      title: 'Pizzaria Don Corleone',
      description: 'App de delivery completo com cardápio digital, gestão de pedidos e integração WhatsApp.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=450&fit=crop',
      link: '#',
    },
    {
      id: 2,
      title: 'Studio Bella Forma',
      description: 'Site institucional com sistema de agendamento online e lembretes automáticos.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=450&fit=crop',
      link: '#',
    },
    {
      id: 3,
      title: 'Auto Peças Central',
      description: 'Catálogo online com chatbot de atendimento e controle de estoque integrado.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=450&fit=crop',
      link: '#',
    },
    {
      id: 4,
      title: 'Padaria Pão Dourado',
      description: 'Sistema completo de encomendas online com pagamento integrado e notificações.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=450&fit=crop',
      link: '#',
    },
    {
      id: 5,
      title: 'Barbearia Old School',
      description: 'Landing page de alta conversão com agendamento em tempo real e galeria de cortes.',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=450&fit=crop',
      link: '#',
    },
    {
      id: 6,
      title: 'Pet Shop Amigo Fiel',
      description: 'E-commerce simplificado com catálogo de produtos e agendamento de banho e tosa.',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=450&fit=crop',
      link: '#',
    },
  ];

  // Autoplay
  useEffect(() => {
    if (!isHovered && !isDragging) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isHovered, isDragging, projects.length]);

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Swipe/Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentTranslate(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setCurrentTranslate(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 100;
    if (currentTranslate > threshold) {
      goToPrev();
    } else if (currentTranslate < -threshold) {
      goToNext();
    }
    setCurrentTranslate(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentTranslate(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setCurrentTranslate(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50;
    if (currentTranslate > threshold) {
      goToPrev();
    } else if (currentTranslate < -threshold) {
      goToNext();
    }
    setCurrentTranslate(0);
  };

  // Calcular posição e estilo de cada card
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const absDiff = Math.abs(diff);
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024;

    let translateX = 0;
    let scale = 1;
    let opacity = 1;
    let rotateY = 0;
    let zIndex = 10;

    // Ajustar espaçamento baseado no breakpoint
    const spacing = isMobile ? 260 : isTablet ? 240 : 320;
    const farSpacing = isMobile ? 200 : isTablet ? 300 : 400;

    // Card ativo
    if (diff === 0) {
      translateX = 0;
      scale = 1;
      opacity = 1;
      rotateY = 0;
      zIndex = 10;
    }
    // Cards laterais próximos
    else if (absDiff === 1) {
      translateX = diff * spacing;
      scale = isMobile ? 0.9 : 0.85;
      opacity = isMobile ? 0.7 : 0.6;
      rotateY = diff * (isMobile ? 10 : 15);
      zIndex = 5;
    }
    // Cards distantes
    else {
      translateX = diff * farSpacing;
      scale = isMobile ? 0.75 : 0.7;
      opacity = isMobile ? 0.4 : 0.3;
      rotateY = diff * (isMobile ? 20 : 25);
      zIndex = 1;
    }

    return {
      transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      transition: isDragging ? 'none' : 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    };
  };

  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg-dark)' }}
      aria-label="Portfólio de Projetos"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: 'var(--color-primary)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-5"
          style={{ backgroundColor: 'var(--color-secondary)' }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="badge mb-4 inline-block"
            style={{
              backgroundColor: 'rgba(247, 127, 0, 0.15)',
              color: 'var(--color-secondary)',
            }}
          >
            Nossos Projetos
          </span>
          <h2
            className="gsap-fade-up mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'var(--color-text-inverse)',
              lineHeight: '1.15',
            }}
          >
            Conheça alguns dos nossos{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-light) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              cases de sucesso
            </span>
          </h2>
          <p
            className="gsap-fade-up max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: '1.6',
            }}
          >
            Transformamos negócios locais com soluções digitais sob medida. Veja o que já fizemos.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="relative max-w-6xl mx-auto portfolio-carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ perspective: '2000px', cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {/* Cards Container */}
          <div
            className="relative h-[500px] md:h-[550px] flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="portfolio-card absolute w-[280px] md:w-[320px] rounded-2xl overflow-hidden"
                style={{
                  ...getCardStyle(index),
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 0 20px rgba(255,255,255,0.12), 0 20px 60px rgba(0,0,0,0.5)',
                  willChange: 'transform, opacity',
                }}
                onClick={() => !isDragging && goToSlide(index)}
                role="button"
                tabIndex={0}
                aria-label={`Projeto: ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    goToSlide(index);
                  }
                }}
              >
                {/* Card Content */}
                <div className="relative h-full flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <h3
                      className="mb-3"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #fff 0%, #b7e4c7 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: '1.3',
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="mb-4 flex-1"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: '1.6',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
                      style={{
                        fontFamily: 'var(--font-display)',
                        background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-light) 100%)',
                        color: 'white',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Ver Projeto</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>

                  {/* Decorative border effect */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      border: '2px solid transparent',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1), transparent) border-box',
                      WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
            aria-label="Projeto anterior"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
            aria-label="Próximo projeto"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: activeIndex === index ? '32px' : '8px',
                height: '8px',
                backgroundColor: activeIndex === index ? 'var(--color-secondary)' : 'rgba(255,255,255,0.3)',
              }}
              aria-label={`Ir para projeto ${index + 1}`}
              aria-current={activeIndex === index ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
