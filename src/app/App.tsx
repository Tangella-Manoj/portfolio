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
    document.documentElement.classList.remove('dark');
    document.body.style.backgroundColor = '#f8fafc';
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
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
