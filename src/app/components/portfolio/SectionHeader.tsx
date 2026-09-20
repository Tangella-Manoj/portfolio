import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  index: string;
  label: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ index, label, title, subtitle, align = 'left' }: SectionHeaderProps) {
  const centered = align === 'center';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={centered ? 'text-center' : ''}
    >
      <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
        <span className="font-mono text-[11px] text-[#3b82f6] tracking-widest">{index}</span>
        <span className="h-px w-8 bg-[rgba(59,130,246,0.35)]" />
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-3)]">
          {label}
        </span>
      </div>
      <h2
        className="font-display text-foreground"
        style={{
          fontSize: 'clamp(30px, 4.5vw, 48px)',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[16px] text-[var(--text-2)] leading-relaxed max-w-xl" style={centered ? { margin: '0.75rem auto 0' } : {}}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
