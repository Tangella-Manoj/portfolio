import { useEffect, useState } from 'react';
import { Navigation } from './components/portfolio/Navigation';
import { Hero } from './components/portfolio/Hero';
import { About } from './components/portfolio/About';
import { Experience } from './components/portfolio/Experience';
import { Projects } from './components/portfolio/Projects';
import { Skills } from './components/portfolio/Skills';
import { Contact } from './components/portfolio/Contact';
import { Footer } from './components/portfolio/Footer';
import { CustomCursor } from './components/portfolio/CustomCursor';
import { Background } from './components/portfolio/Background';

export default function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#09090b';
    const check = () =>
      setIsDesktop(
        window.innerWidth >= 1024 &&
          window.matchMedia('(pointer: fine)').matches
      );
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] overflow-x-hidden">
      <Background />
      {isDesktop && <CustomCursor />}
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
