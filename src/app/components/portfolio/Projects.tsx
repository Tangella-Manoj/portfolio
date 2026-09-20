import { motion } from 'framer-motion';
import { ArrowUpRight, Boxes, Activity, GitBranch } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { projects as projectsData } from '../../../constants';
import { useMouseGlow } from '../hooks/useMouseGlow';

const projectMeta: Record<string, {
  icon: React.FC<{ className?: string }>;
  metric: { value: string; label: string };
}> = {
  'loan-management': { icon: Boxes, metric: { value: '4', label: 'microservices' } },
  'event-processing': { icon: Activity, metric: { value: '10k+', label: 'events/min' } },
  'devops-platform': { icon: GitBranch, metric: { value: '100%', label: 'automated' } },
};

function ProjectCard({ project, i }: { project: typeof projectsData[0]; i: number }) {
  const { ref, onMouseMove } = useMouseGlow<HTMLAnchorElement>();
  const meta = projectMeta[project.id] ?? { icon: Boxes, metric: { value: '—', label: 'project' } };
  const Icon = meta.icon;

  return (
    <motion.a
      ref={ref}
      onMouseMove={onMouseMove}
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
      aria-label={`View ${project.title} on GitHub`}
    >
      <div className="card-glow" />
      <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
        {/* Icon + metric */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center border transition-colors duration-300"
            style={{ background: 'rgba(59,130,246,0.06)', borderColor: 'rgba(59,130,246,0.15)' }}
          >
            <Icon className="w-[18px] h-[18px] text-[#3b82f6]" />
          </div>
          <div className="text-right">
            <div
              className="font-display font-bold text-foreground"
              style={{ fontSize: 'clamp(18px,2vw,22px)', letterSpacing: '-0.03em' }}
            >
              {meta.metric.value}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)] mt-0.5">
              {meta.metric.label}
            </div>
          </div>
        </div>

        {/* Title + desc */}
        <h3
          className="font-display font-semibold text-foreground group-hover:text-[#60a5fa] transition-colors duration-300 mb-2 leading-snug"
          style={{ fontSize: 'clamp(16px,1.8vw,19px)' }}
        >
          {project.title}
        </h3>
        <p className="text-[13.5px] text-[var(--text-2)] leading-relaxed mb-2">
          {project.description}
        </p>
        <p className="text-[12.5px] text-[var(--text-3)] leading-relaxed">
          {project.impact}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Footer */}
        <div
          className="mt-auto pt-5 flex items-center justify-between border-t"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#3b82f6]">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </span>
          <ArrowUpRight
            className="w-4 h-4 text-[var(--text-3)] group-hover:text-[#3b82f6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
          />
        </div>
      </div>
    </motion.a>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative section-y">
      <div className="section-x">
        <SectionHeader
          index="03"
          label="Selected Work"
          title={<>Projects built for <span className="text-[#3b82f6]">production</span>.</>}
          subtitle="End-to-end systems from architecture to deployment."
        />
        <div className="mt-10 lg:mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
