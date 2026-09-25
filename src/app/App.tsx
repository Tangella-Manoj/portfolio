import { useEffect } from 'react';
import { Navigation } from './components/portfolio/Navigation';
import { Hero } from './components/portfolio/Hero';
import { About } from './components/portfolio/About';
import { Experience } from './components/portfolio/Experience';
import { Projects } from './components/portfolio/Projects';
import { Skills } from './components/portfolio/Skills';
import { Contact } from './components/portfolio/Contact';
import { Footer } from './components/portfolio/Footer';
import { Background } from './components/portfolio/Background';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#08090c';
  }, []);

  return (
    <div className="relative min-h-screen bg-[#08090c] text-[#f8fafc] overflow-x-hidden">
      <Background />
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
