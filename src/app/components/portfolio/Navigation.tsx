import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../../constants';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-slate-50/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(15,23,42,0.03)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16">
          {/* Identity */}
          <a
            href="#"
            className="flex items-center text-slate-900 group"
          >
            <div className="flex flex-col">
              <span className="font-bold text-[15px] leading-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                Manoj Tangella
              </span>
              <span className="text-[11.5px] text-slate-500 leading-tight">
                Backend Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-[13.5px] text-slate-600 hover:text-slate-950 font-medium rounded-md hover:bg-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="w-[1px] h-4 bg-slate-200 mx-2" />

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-[13px] font-medium text-slate-800 bg-white hover:bg-slate-50 rounded-md border border-slate-200/80 transition-colors shadow-xs"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 bg-slate-50/95 backdrop-blur-md rounded-b-xl shadow-lg px-2">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-[14px] text-slate-700 hover:text-slate-950 font-medium rounded-md hover:bg-slate-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-slate-200">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 text-[13.5px] font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <span>View Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
