import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { personalInfo } from '../../../constants';
import { useMouseGlow } from '../hooks/useMouseGlow';

interface Highlight { value: string; label: string; detail: string; }

function StatCard({ h, i }: { h: Highlight; i: number }) {
  const { ref, onMouseMove } = useMouseGlow<HTMLDivElement>();
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="card p-4 sm:p-5"
    >
      <div className="card-glow" />
      <div className="relative z-10">
        <div
          className="font-display font-bold text-foreground mb-1.5"
          style={{ fontSize: 'clamp(20px, 2.5vw, 30px)', letterSpacing: '-0.03em' }}
        >
          {h.value}
        </div>
        <div className="text-[12px] text-[var(--text-2)] leading-snug mb-1">{h.label}</div>
        <div className="font-mono text-[10.5px] text-[var(--text-3)]">{h.detail}</div>
      </div>
    </motion.div>
  );
}

export function About() {
  const highlights: Highlight[] = [
    { value: '90%',  label: 'Latency reduced',   detail: '500ms → 50ms (p99)' },
    { value: '96×',  label: 'Batch throughput',   detail: '8 hrs → < 5 min' },
    { value: '300+', label: 'Problems solved',    detail: `LeetCode · Rating ${personalInfo.leetcode.rating}` },
    { value: '10k+', label: 'Events / minute',    detail: 'Fault-tolerant Kafka pipeline' },
  ];

  return (
    <section id="about" className="relative section-y">
      <div className="section-x">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-12 lg:gap-20 items-start">

          {/* Left: stat cards */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
            className="grid grid-cols-2 gap-3"
          >
            {highlights.map((h, i) => <StatCard key={h.label} h={h} i={i} />)}
          </motion.div>

          {/* Right: text */}
          <div>
            <SectionHeader
              index="01"
              label="About"
              title={<>Building systems that <span className="text-[#3b82f6]">scale</span> and last.</>}
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="mt-7 space-y-4 text-[16px] leading-[1.8] text-[var(--text-2)]"
            >
              <p>
                Backend developer building production systems for a live fintech platform. I design
                and implement APIs, optimize database queries, and resolve performance bottlenecks
                in systems handling thousands of daily transactions. My work spans the full backend
                stack —{' '}
                <span className="text-foreground font-medium">
                  from database schema design to service deployment and monitoring
                </span>.
              </p>
              <p>
                I focus on writing clean, maintainable code and building systems that handle edge
                cases reliably. Every feature ships with load testing, every query gets profiled,
                and every deployment has a rollback procedure. Outside work, I sharpen
                problem-solving through competitive programming and stay current with backend
                architecture patterns.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-7 flex flex-wrap gap-2.5"
            >
              <span className="tag inline-flex items-center gap-2 py-2 px-4" style={{ borderRadius: '8px', fontSize: '12.5px' }}>
                <GraduationCap className="w-3.5 h-3.5 text-[#3b82f6]" />
                {personalInfo.education.display}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
