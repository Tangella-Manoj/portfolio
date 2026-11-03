import { SectionHeader } from './SectionHeader';
import { projectsList } from '../../../constants';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="section-spacing border-t border-slate-200/80">
      <div className="container-site">
        <SectionHeader
          kicker="Selected Work"
          title="Featured Engineering Projects"
          description="Distributed transaction architectures, full-stack search systems, and developer tooling built from the ground up."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projectsList.map((project, idx) => {
            const projectThemes = [
              { borderTop: 'border-t-blue-500', badgeClass: 'text-blue-700 bg-blue-50 border-blue-200/70' },
              { borderTop: 'border-t-purple-500', badgeClass: 'text-purple-700 bg-purple-50 border-purple-200/70' },
              { borderTop: 'border-t-amber-500', badgeClass: 'text-amber-700 bg-amber-50 border-amber-200/70' },
              { borderTop: 'border-t-emerald-500', badgeClass: 'text-emerald-700 bg-emerald-50 border-emerald-200/70' },
            ];
            const theme = projectThemes[idx % projectThemes.length];

            return (
              <div
                key={project.id}
                className={`pro-card p-5 sm:p-7 space-y-4 group hover:border-slate-300 flex flex-col justify-between bg-white border-t-2 ${theme.borderTop}`}
              >
                <div className="space-y-4">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 pb-3 border-b border-slate-100">
                    <div className="space-y-1">
                      <span className={`inline-block text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${theme.badgeClass}`}>
                        {project.badge}
                      </span>
                      <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 pt-0.5 sm:pt-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] sm:text-[12.5px] font-medium text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-md border border-slate-200/80 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-400" />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] sm:text-[12.5px] font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md border border-blue-200 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                {/* Description */}
                <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights with dynamic hover bullet color */}
                <div className="space-y-1.5 sm:space-y-2 pt-1">
                  <div className="text-[11.5px] sm:text-[12px] font-semibold text-slate-800 uppercase tracking-wider">
                    Key Technical Highlights
                  </div>
                  <ul className="space-y-2 text-[13px] sm:text-[13.5px] text-slate-600 leading-relaxed">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 group/item">
                        {/* Bullet point: neutral gray by default, blue ONLY on hover */}
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-blue-600 group-hover:bg-blue-600 transition-colors duration-200 mt-2 shrink-0" />
                        <span className="group-hover/item:text-slate-900 transition-colors">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-3 pt-3">
                {/* Spec / Metrics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 pb-0.5">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-2 sm:p-2.5 rounded-lg bg-slate-50 border border-slate-200/70"
                    >
                      <div className="text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-wider text-slate-500 truncate">
                        {m.label}
                      </div>
                      <div className="font-mono text-[12px] sm:text-[13px] font-semibold text-slate-900 mt-0.5 truncate">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-2.5 border-t border-slate-100">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] sm:text-[11.5px] font-medium rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
