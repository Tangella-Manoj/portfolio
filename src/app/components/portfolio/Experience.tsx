import { SectionHeader } from './SectionHeader';
import { experiences } from '../../../constants';

export function Experience() {
  return (
    <section id="experience" className="section-spacing border-t border-slate-200/80">
      <div className="container-site">
        <SectionHeader
          kicker="Career"
          title="Work Experience"
          description="My journey at Ezfinanz, designing and operating production backend services for financial transactions."
        />

        <div className="relative border-l border-slate-200 ml-2 sm:ml-4 pl-4 sm:pl-8 space-y-6 sm:space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[23px] sm:-left-[39px] top-2 w-3.5 h-3.5 rounded-full bg-white border-2 border-slate-400 group-hover:border-blue-600 transition-colors shadow-xs" />

              {/* Role Card */}
              <div
                className={`pro-card p-5 sm:p-7 space-y-3.5 sm:space-y-4 group/card hover:border-slate-300 bg-white border-t-2 ${
                  exp.badge === 'Full-time'
                    ? 'border-t-emerald-500'
                    : exp.badge === 'Promotion'
                    ? 'border-t-blue-500'
                    : 'border-t-purple-500'
                }`}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2.5 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <h3 className="text-[16px] sm:text-[18px] font-bold text-slate-900 group-hover/card:text-blue-600 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-slate-400 font-normal">·</span>
                      <span className="text-[14px] sm:text-[15px] font-semibold text-slate-700">
                        {exp.company}
                      </span>
                      <span
                        className={`text-[10.5px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full ${
                          exp.badge === 'Full-time'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/80'
                            : exp.badge === 'Promotion'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200/80'
                            : 'bg-purple-50 text-purple-700 border border-purple-200/80'
                        }`}
                      >
                        {exp.badge}
                      </span>
                    </div>
                  </div>

                  <div className="text-[12px] sm:text-[12.5px] font-mono text-slate-500 font-medium">
                    {exp.startDate} – {exp.endDate}
                  </div>
                </div>

                {/* Bullets: neutral gray by default, blue ONLY on hover */}
                <ul className="space-y-2 sm:space-y-2.5 text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed list-none">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-blue-600 group-hover/card:bg-blue-600 transition-colors duration-200 mt-2 shrink-0" />
                      <span className="group-hover/item:text-slate-900 transition-colors">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-2 border-t border-slate-100">
                  {exp.tags.map((tag) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
