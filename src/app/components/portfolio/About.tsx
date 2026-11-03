import { SectionHeader } from './SectionHeader';
import { GraduationCap, Award, Cpu, Database, Network, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../../../constants';

export function About() {
  const focusAreas = [
    {
      icon: Network,
      title: 'Distributed Transactions',
      description: 'Designing resilient microservices using SAGA orchestration, Transactional Outbox patterns, and event streaming with Kafka to preserve data integrity across independent datastores.',
      badgeColor: 'blue',
    },
    {
      icon: Cpu,
      title: 'Concurrency & Locking',
      description: 'Implementing distributed Redis mutexes and Java concurrent executor pools to eliminate race conditions and cut batch calculation execution times by orders of magnitude.',
      badgeColor: 'emerald',
    },
    {
      icon: Database,
      title: 'Database Optimization',
      description: 'Profiling MySQL InnoDB queries, tuning composite indexes, and managing HikariCP connection pools to ensure sub-50ms p99 latencies under heavy production load.',
      badgeColor: 'purple',
    },
    {
      icon: ShieldCheck,
      title: 'Production Resilience',
      description: 'Diagnosing connection pool starvation, transaction isolation deadlocks, and third-party webhook dropouts; building automated dead-letter retries and fallback paths.',
      badgeColor: 'amber',
    },
  ];

  return (
    <section id="about" className="section-spacing border-t border-slate-200/80">
      <div className="container-site">
        <SectionHeader
          kicker="Background"
          title="About & Engineering Philosophy"
          description="A look at my technical foundation, production focus, and approach to building resilient backend systems."
        />

        <div className="space-y-6">
          {/* Main Narrative */}
          <div className="pro-card p-5 sm:p-7 space-y-3 sm:space-y-4 text-[14.5px] sm:text-[15.5px] text-slate-600 leading-relaxed bg-white">
            <p>
              I am a Software Engineer at <strong className="text-slate-900 font-semibold">Ezfinanz</strong> with hands-on experience designing, scaling, and maintaining core backend microservices for financial operations. My daily work revolves around <strong className="text-slate-900 font-semibold">Java, Spring Boot, MySQL, RabbitMQ, and Apache Kafka</strong>.
            </p>
            <p>
              I believe great backend engineering is about predictability and defense in depth. Whether it's slashing batch processing times by 16x through concurrent worker pools or preventing duplicate balance deductions using distributed locks, I prioritize clean architectural boundaries, comprehensive audit trails, and deterministic failure recovery over quick hacks.
            </p>
          </div>

          {/* Academic & Algorithmic Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="pro-card p-5 flex items-start gap-4 bg-white border-t-2 border-t-blue-500">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200/60 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] sm:text-[12px] font-semibold text-blue-700 uppercase tracking-wider">
                  Education
                </div>
                <div className="text-[15px] font-bold text-slate-900">
                  {personalInfo.education.institution}
                </div>
                <div className="text-[13px] text-slate-600">
                  {personalInfo.education.degree} · <span className="font-semibold text-slate-800">CGPA {personalInfo.education.cgpa} / 10.0</span>
                </div>
                <div className="text-[12px] text-slate-500 pt-0.5">
                  6-year integrated B.Tech in Computer Science & Engineering
                </div>
              </div>
            </div>

            <div className="pro-card p-5 flex items-start gap-4 bg-white border-t-2 border-t-amber-500">
              <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/60 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] sm:text-[12px] font-semibold text-amber-700 uppercase tracking-wider">
                  Problem Solving
                </div>
                <div className="text-[15px] font-bold text-slate-900">
                  LeetCode Algorithmic Focus
                </div>
                <div className="text-[13px] text-slate-600">
                  <span className="font-semibold text-slate-800">{personalInfo.leetcode.solved}+ Problems Solved</span> · Rating {personalInfo.leetcode.rating}
                </div>
                <div className="text-[12px] text-slate-500 pt-0.5">
                  Data structures, graph algorithms, dynamic programming & concurrency
                </div>
              </div>
            </div>
          </div>

          {/* Core Focus Grid: 4 columns on large screens */}
          <div className="pt-2">
            <h3 className="text-[13px] sm:text-[14px] font-semibold text-slate-900 uppercase tracking-wider mb-3">
              Core Technical Focus
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {focusAreas.map((f) => {
                const Icon = f.icon;
                const iconColor =
                  f.badgeColor === 'blue'
                    ? 'text-blue-700 bg-blue-50 border-blue-200/60'
                    : f.badgeColor === 'emerald'
                    ? 'text-emerald-700 bg-emerald-50 border-emerald-200/60'
                    : f.badgeColor === 'purple'
                    ? 'text-purple-700 bg-purple-50 border-purple-200/60'
                    : 'text-amber-700 bg-amber-50 border-amber-200/60';

                const borderTop =
                  f.badgeColor === 'blue'
                    ? 'border-t-blue-500'
                    : f.badgeColor === 'emerald'
                    ? 'border-t-emerald-500'
                    : f.badgeColor === 'purple'
                    ? 'border-t-purple-500'
                    : 'border-t-amber-500';

                return (
                  <div
                    key={f.title}
                    className={`pro-card p-4 sm:p-5 flex flex-col justify-between bg-white border-t-2 ${borderTop}`}
                  >
                    <div className="space-y-2.5">
                      <div className={`p-2 w-fit rounded-lg border ${iconColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-[14.5px] font-semibold text-slate-900">
                        {f.title}
                      </h4>
                      <p className="text-[12.5px] sm:text-[13px] text-slate-600 leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
