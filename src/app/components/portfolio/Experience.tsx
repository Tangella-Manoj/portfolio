import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { experiences } from '../../../constants';
import { useMouseGlow } from '../hooks/useMouseGlow';

const badgeColors: Record<string, { text: string; bg: string; border: string }> = {
  green: { text: '#34d399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)' },
  blue: { text: '#60a5fa', bg: 'rgba(96,165,250,0.08)', border: 'rgba(96,165,250,0.2)' },
  gray: { text: '#a1a1aa', bg: 'rgba(161,161,170,0.08)', border: 'rgba(161,161,170,0.15)' },
};

function ExperienceCard({ exp, i }: { exp: typeof experiences[0]; i: number }) {
  const { ref, onMouseMove } = useMouseGlow<HTMLDivElement>();
  const badge = badgeColors[exp.badgeColor] ?? badgeColors.gray;
  const dates = `${exp.startDate} — ${exp.endDate}`;
  const role = `${exp.role} · ${exp.type}`;

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-7 sm:pl-9 md:pl-14"
    >
      {/* Timeline dot */}
      <span className="absolute left-0 md:left-5 top-6 flex">
        <span className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-[#3b82f6] opacity-30 animate-ping-slow" />
        <span className="relative w-2.5 h-2.5 rounded-full bg-[#3b82f6]" />
      </span>

      <div
        ref={ref}
        onMouseMove={onMouseMove}
        className="card p-4 sm:p-6 md:p-7"
      >
        <div className="card-glow" />
        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <h3
                className="font-display text-foreground font-semibold"
                style={{ fontSize: 'clamp(17px, 2vw, 20px)' }}
              >
                {exp.company}
              </h3>
              <span
                className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full border"
                style={{ color: badge.text, background: badge.bg, borderColor: badge.border }}
              >
                {exp.badge}
              </span>
            </div>
            <div className="font-mono inline-flex items-center gap-1.5 text-[11.5px] text-[var(--text-3)] flex-shrink-0">
              <Calendar className="w-3 h-3" />
              <span className="whitespace-nowrap">{dates}</span>
            </div>
          </div>

          {/* Role */}
          <div className="font-mono text-[13px] text-[#3b82f6] mb-5">{role}</div>

          {/* Bullets */}
          <ul className="space-y-2.5">
            {exp.bullets.map((b, idx) => (
              <li key={idx} className="flex gap-2.5 text-[14px] text-[var(--text-2)] leading-[1.65]">
                <span className="mt-[9px] flex-shrink-0 w-1 h-1 rounded-full bg-[rgba(59,130,246,0.5)]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {exp.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative section-y">
      <div className="section-x">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            index="02"
            label="Experience"
            title={<>Where I've <span className="text-[#3b82f6]">shipped</span> to production.</>}
            subtitle="Production code, real users, real consequences."
          />

          <div className="relative mt-12 lg:mt-14">
            {/* Timeline line */}
            <div
              className="absolute left-[5px] md:left-[25px] top-0 bottom-0 w-px"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(59,130,246,0.6) 0%, rgba(59,130,246,0.15) 70%, transparent 100%)',
              }}
            />
            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, i) => (
                <ExperienceCard key={exp.id} exp={exp} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
