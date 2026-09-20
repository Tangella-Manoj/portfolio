import { personalInfo } from '../../../constants';

export function Footer() {
  return (
    <footer
      className="relative border-t mt-10"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="section-x py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="font-display font-bold text-[13px] tracking-tight text-[var(--text-2)]"
          style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}
        >
          Manoj<span className="text-[#3b82f6]">.</span>Tangella
        </span>
        <div className="flex items-center gap-6">
          {personalInfo.social.slice(0, 2).map((s) => (
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
        <span className="font-mono text-[11px] text-[var(--text-3)]">
          © 2026 Manoj Tangella
        </span>
      </div>
    </footer>
  );
}
