import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import SitesApps from './components/SitesApps';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-up animations for sections
      const fadeElements = document.querySelectorAll('.gsap-fade-up');
      fadeElements.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: (i % 4) * 0.08,
          }
        );
      });

      // Stagger for grid items
      const grids = document.querySelectorAll('.gsap-stagger');
      grids.forEach((grid) => {
        const children = grid.children;
        gsap.fromTo(
          children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: grid,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Parallax for hero
      const heroBg = document.querySelector('.hero-parallax');
      if (heroBg) {
        gsap.to(heroBg, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: heroBg,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="overflow-x-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function SitesAppsPage() {
  return (
    <div className="overflow-x-hidden">
      <Header solidOnTop />
      <main className="pt-16 md:pt-20">
        <SitesApps />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sites-apps" element={<SitesAppsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
