import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Menu } from 'lucide-react';
import { personalInfo } from '../../../constants';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      for (const l of links) {
        const el = document.getElementById(l.href.slice(1));
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(l.href.slice(1));
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-[#09090b]/85 backdrop-blur-xl border-b border-white/[0.06] py-3 px-4 sm:px-6 md:px-8 shadow-lg shadow-black/30'
            : 'bg-transparent py-4 sm:py-5 px-4 sm:px-6 md:px-8'
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          aria-label="Back to top"
          className="relative z-50 flex items-center gap-2 group focus:outline-none"
        >
          {/* Auto-Animated M Monogram Logo */}
          <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
            {/* Outer subtle ring track */}
            <div className="absolute inset-0 rounded-full border border-blue-500/25 bg-blue-500/[0.04]" />

            {/* Smooth auto-orbiting glowing satellite bead */}
            <div
              className="absolute inset-0"
              style={{ animation: 'orbit 5s linear infinite' }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#3b82f6] shadow-[0_0_8px_rgba(59,130,246,0.9)]" />
            </div>

            {/* Centered M letter */}
            <span
              className="relative z-10 font-display font-black text-[14px] text-white group-hover:text-blue-400 transition-colors duration-300 select-none"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em', lineHeight: 1 }}
            >
              M
            </span>
          </div>
          <span
            className="font-display text-[15px] font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Manoj<span className="text-[#3b82f6]">.</span>
          </span>
        </a>

        {/* Desktop floating pill nav */}
        <nav
          className={`hidden lg:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-300 ${
            scrolled ? 'glass shadow-lg shadow-black/20' : 'glass'
          }`}
          aria-label="Main navigation"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-3.5 py-1.5 text-[13px] rounded-full transition-all duration-200 focus:outline-none ${
                active === l.href.slice(1)
                  ? 'text-white'
                  : 'text-[var(--text-2)] hover:text-foreground'
              }`}
            >
              {active === l.href.slice(1) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/[0.09]"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
            className="group relative inline-flex items-center gap-2 h-9 pl-4 pr-3.5 rounded-full text-[13px] font-medium text-white overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
            style={{ background: '#3b82f6' }}
          >
            <span
              className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative">Resume</span>
            <Download className="relative w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden relative z-50 glass w-10 h-10 flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-[18px] h-[18px] text-foreground" /> : <Menu className="w-[18px] h-[18px] text-[var(--text-2)]" />}
        </button>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: 'rgba(9,9,11,0.97)', backdropFilter: 'blur(24px)' }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-1 px-6 pt-16 pb-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-[1.8rem] sm:text-[2.2rem] font-bold text-foreground/80 hover:text-white hover:text-[#3b82f6] transition-colors py-2 focus:outline-none"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-6 inline-flex items-center gap-2 h-12 px-8 rounded-full text-[15px] font-medium text-white"
                style={{ background: '#3b82f6' }}
              >
                Resume <Download className="w-4 h-4" />
              </motion.a>
            </div>
            <div className="flex justify-center gap-8 pb-10">
              {personalInfo.social.slice(0, 2).map(s => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-3)] hover:text-[#3b82f6] transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
