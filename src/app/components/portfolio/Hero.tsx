import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import { personalInfo } from '../../../constants';

function AnimatedWord({
  children,
  delay = 0,
  inView,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  inView: boolean;
  className?: string;
}) {
  return (
    <div className="overflow-hidden py-[0.06em]">
      <motion.span
        className={`inline-block ${className}`}
        initial={{ y: '100%', opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </div>
  );
}

function Terminal({ inView }: { inView: boolean }) {
  const lines = [
    { type: 'cmd', text: 'java -jar backend-service.jar --env=prod' },
    { type: 'ok', text: 'Spring Boot 3.2 · Java 17 runtime' },
    { type: 'ok', text: 'Distributed concurrency lock    READY' },
    { type: 'ok', text: 'RabbitMQ event processing       CONNECTED' },
    { type: 'info', text: 'Commit latency: 50ms (↓90% reduction)' },
    { type: 'info', text: 'Batch execution: multithreaded (8h → 30m)' },
    { type: 'ok', text: 'Service healthy · Listening on port 8080' },
  ];

  const [visible, setVisible] = useState(0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (!inView) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((_, i) => {
      timers.push(setTimeout(() => setVisible(i + 1), i * 450 + 200));
    });
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  useEffect(() => {
    if (!inView) return;
    const text = lines[0].text;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 20);
    return () => clearInterval(id);
  }, [inView]);

  const colorMap: Record<string, string> = {
    cmd: 'text-zinc-100',
    ok: 'text-emerald-400',
    info: 'text-blue-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[500px] mx-auto lg:mx-0"
    >
      {/* Subtle glow behind terminal */}
      <div
        className="absolute -inset-4 rounded-3xl"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="relative rounded-2xl overflow-hidden border shadow-2xl"
        style={{ background: '#0b0c10', borderColor: 'rgba(255,255,255,0.08)' }}
      >
        {/* Title bar */}
        <div
          className="flex items-center justify-between px-4 h-10 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="font-mono text-[11px] text-zinc-500 ml-2">~/production — zsh</span>
          </div>
          <span className="font-mono text-[10px] text-zinc-600">port 8080</span>
        </div>

        {/* Terminal body */}
        <div className="font-mono p-5 min-h-[235px] text-[12px] leading-[1.85] space-y-1">
          {lines.slice(0, visible).map((l, idx) => (
            <div key={idx} className="flex gap-2.5">
              {l.type === 'cmd' && (
                <span className="text-[#3b82f6] select-none flex-shrink-0">❯</span>
              )}
              {l.type === 'ok' && (
                <span className="text-emerald-400 select-none flex-shrink-0">✓</span>
              )}
              {l.type === 'info' && (
                <span className="text-blue-400 select-none flex-shrink-0">→</span>
              )}
              <span className={colorMap[l.type] ?? 'text-zinc-300'}>
                {idx === 0 ? typed : l.text}
                {idx === visible - 1 && (
                  <span className="inline-block w-1.5 h-3.5 bg-[#3b82f6] ml-0.5 align-middle animate-blink" />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Live badge */}
      <motion.div
        initial={{ opacity: 0, x: 16, y: -8 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute -right-3 -top-3 hidden md:flex items-center gap-1.5 glass px-3 py-1.5 rounded-full border border-emerald-500/20"
      >
        <span className="relative flex w-1.5 h-1.5">
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping-slow" />
          <span className="relative rounded-full w-1.5 h-1.5 bg-emerald-400" />
        </span>
        <span className="font-mono text-[10.5px] text-emerald-400 font-medium">PROD · HEALTHY</span>
      </motion.div>

      {/* Latency badge */}
      <motion.div
        initial={{ opacity: 0, x: -16, y: 10 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ delay: 2.2, duration: 0.5 }}
        className="absolute -left-3 -bottom-4 hidden md:block glass px-3.5 py-2 rounded-xl border border-blue-500/20"
      >
        <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-zinc-500">p99 latency</div>
        <div className="text-[#3b82f6] text-[13px] font-semibold font-mono">
          50ms <span className="text-zinc-500 font-normal">↓ 90%</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24"
    >
      <div className="section-x w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: headline + info */}
          <div className="max-w-[600px]">
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass px-3.5 py-1.5 rounded-full mb-6 sm:mb-8"
            >
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-[#3b82f6] animate-ping-slow" />
                <span className="relative w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              </span>
              <span className="font-mono text-[10.5px] sm:text-[11px] tracking-[0.18em] uppercase text-[var(--text-2)] font-medium">
                Software Engineer · Open to Work
              </span>
            </motion.div>

            {/* Staggered headline */}
            <h1 className="font-display" style={{ lineHeight: 1.0, letterSpacing: '-0.03em' }}>
              <div className="text-[var(--text-2)] text-[clamp(17px,2.5vw,24px)] font-medium mb-2">
                <AnimatedWord delay={0.05} inView={inView}>Hi, I'm</AnimatedWord>
              </div>
              <div style={{ fontSize: 'clamp(42px,8.5vw,88px)', fontWeight: 800 }}>
                <AnimatedWord delay={0.15} inView={inView}>
                  <span className="text-gradient">Manoj</span>
                </AnimatedWord>
                <AnimatedWord delay={0.24} inView={inView}>
                  <span className="text-foreground">Tangella.</span>
                </AnimatedWord>
              </div>
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 text-[17px] leading-[1.75] text-[var(--text-2)] max-w-[480px]"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[12px] text-[var(--text-3)]"
            >
              <span>{personalInfo.experience} experience</span>
              <span className="w-1 h-1 rounded-full bg-white/15" />
              <span>{personalInfo.specialization}</span>
              <span className="w-1 h-1 rounded-full bg-white/15" />
              <span className="text-[#3b82f6]">{personalInfo.techStack}</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 h-11 pl-6 pr-5 rounded-full text-[13.5px] font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] transition-all duration-300"
                style={{ background: '#3b82f6' }}
                aria-label="View my work"
              >
                <span className="relative">View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full text-[13.5px] text-[var(--text-2)] hover:text-foreground glass hover:border-white/15 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]/50"
                aria-label="Let's connect"
              >
                <MessageCircle className="w-4 h-4" />
                Let's Connect
              </a>
            </motion.div>

            {/* Stats — 3 numbers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="mt-12 flex flex-wrap items-start gap-x-8 gap-y-4"
            >
              {personalInfo.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <div className="font-display font-bold text-foreground" style={{ fontSize: 'clamp(24px,3vw,34px)', letterSpacing: '-0.03em' }}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.15em] text-[var(--text-3)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Terminal — hidden on mobile, shown md+ */}
          <div className="hidden md:flex justify-center lg:justify-end">
            <Terminal inView={inView} />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-8 hidden md:flex flex-col items-center gap-1.5 text-[var(--text-3)] hover:text-[var(--text-2)] transition-colors duration-300 focus:outline-none"
      >
        <span className="font-mono text-[9px] tracking-[0.35em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
