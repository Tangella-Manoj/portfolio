import { SectionHeader } from './SectionHeader';
import { skillGroups } from '../../../constants';
import { Code2, Layers, Network, Database, Terminal, ShieldCheck } from 'lucide-react';

export function Skills() {
  const categoryStyles: Record<string, { icon: any; badgeClass: string; borderTop: string }> = {
    'Core Languages': {
      icon: Code2,
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-200/70',
      borderTop: 'border-t-blue-500',
    },
    'Frameworks & Architecture': {
      icon: Layers,
      badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200/70',
      borderTop: 'border-t-indigo-500',
    },
    'Distributed Systems & Concurrency': {
      icon: Network,
      badgeClass: 'bg-purple-50 text-purple-700 border-purple-200/70',
      borderTop: 'border-t-purple-500',
    },
    'Databases & Storage': {
      icon: Database,
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200/70',
      borderTop: 'border-t-emerald-500',
    },
    'DevOps & Cloud Delivery': {
      icon: Terminal,
      badgeClass: 'bg-amber-50 text-amber-700 border-amber-200/70',
      borderTop: 'border-t-amber-500',
    },
    'Software Craftsmanship': {
      icon: ShieldCheck,
      badgeClass: 'bg-teal-50 text-teal-700 border-teal-200/70',
      borderTop: 'border-t-teal-500',
    },
  };

  return (
    <section id="skills" className="section-spacing border-t border-slate-200/80">
      <div className="container-site">
        <SectionHeader
          kicker="Competencies"
          title="Technical Skills"
          description="Languages, frameworks, concurrency primitives, and storage engines I operate with in production."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => {
            const style = categoryStyles[group.category] || {
              icon: Code2,
              badgeClass: 'bg-slate-100 text-slate-700 border-slate-200',
              borderTop: 'border-t-slate-400',
            };
            const Icon = style.icon;

            return (
              <div
                key={group.category}
                className={`pro-card p-5 space-y-3.5 bg-white border-t-2 ${style.borderTop} flex flex-col justify-between`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 rounded-lg border ${style.badgeClass}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-[13.5px] font-bold text-slate-900 tracking-tight">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[11.5px] sm:text-[12px] font-medium rounded-md bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
