import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, FileText, MapPin, Copy, Check } from 'lucide-react';
import { personalInfo } from '../../../constants';

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const metrics = [
    {
      value: '50ms',
      label: 'p99 Commit Latency',
      note: '90% drop from 500ms via distributed locking',
      borderTop: 'border-t-blue-500',
      badge: 'Latency',
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-200/70',
    },
    {
      value: '16x',
      label: 'Batch Runtime Speedup',
      note: '8 hours reduced to 30 mins using worker pools',
      borderTop: 'border-t-emerald-500',
      badge: 'Throughput',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200/70',
    },
    {
      value: '300+',
      label: 'LeetCode Solved',
      note: `Contest rating ${personalInfo.leetcode.rating} · 324 problems across DSA`,
      borderTop: 'border-t-amber-500',
      badge: 'Algorithms',
      badgeClass: 'bg-amber-50 text-amber-700 border-amber-200/70',
    },
    {
      value: '1+ yr',
      label: 'Production Systems',
      note: 'Core backend microservices in financial tech',
      borderTop: 'border-t-indigo-500',
      badge: 'Domain',
      badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200/70',
    },
  ];

  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-8 sm:space-y-10"
        >
          {/* Main Hero Narrative */}
          <div className="max-w-3xl space-y-6">
            {/* Top row: Status Badge */}
            <div className="flex items-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Available for opportunities</span>
              </span>
            </div>

            {/* Title & Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Manoj Tangella
              </h1>
              <p className="text-[17px] sm:text-xl font-medium text-slate-700 leading-snug">
                Backend Software Engineer at <span className="text-slate-900 font-semibold">Ezfinanz</span> · Distributed Systems
              </p>
              <div className="flex items-center gap-1.5 text-[13px] sm:text-[13.5px] text-slate-500 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            {/* Bio Narrative */}
            <div className="space-y-3 text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed">
              <p>
                I build resilient distributed systems, transactional pipelines, and high-throughput microservices using <strong className="text-slate-900 font-semibold">Java, Spring Boot, MySQL</strong>, and event-driven architectures with <strong className="text-slate-900 font-semibold">RabbitMQ</strong> and <strong className="text-slate-900 font-semibold">Apache Kafka</strong>.
              </p>
              <p>
                At Ezfinanz, my engineering focuses on concurrency safety and backend performance—eliminating race conditions with distributed Redis locks, scaling batch settlement engines with parallel worker pools, and maintaining zero data drift across production services.
              </p>
            </div>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-[13px] sm:text-[13.5px] font-medium px-4 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Get in touch</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] sm:text-[13.5px] font-medium px-4 py-2.5 rounded-lg bg-white text-slate-800 hover:bg-slate-50 hover:-translate-y-0.5 border border-slate-200 transition-all shadow-xs"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 text-[12.5px] sm:text-[13px] font-medium px-3.5 py-2.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:-translate-y-0.5 border border-slate-200/80 transition-all"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy email</span>
                  </>
                )}
              </button>
            </div>

            {/* Profile Links Row */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <a
                href="https://github.com/Tangella-Manoj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[12.5px] sm:text-[13px] text-slate-600 hover:text-slate-950 font-medium px-3 py-1.5 rounded-md bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all shadow-xs"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="https://www.linkedin.com/in/manoj-tangella/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[12.5px] sm:text-[13px] text-slate-600 hover:text-slate-950 font-medium px-3 py-1.5 rounded-md bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all shadow-xs"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={personalInfo.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[12.5px] sm:text-[13px] text-slate-600 hover:text-slate-950 font-medium px-3 py-1.5 rounded-md bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all shadow-xs"
              >
                <span>LeetCode (300+)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Understated Metrics Grid across full container with dedicated light colors */}
          <div className="pt-2 sm:pt-4 border-t border-slate-200">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className={`pro-card p-4 sm:p-5 border-t-2 ${m.borderTop} hover:border-slate-300 transition-all bg-white flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${m.badgeClass}`}>
                        {m.badge}
                      </span>
                    </div>
                    <div className="font-mono text-[22px] sm:text-[26px] font-bold text-slate-900 tracking-tight mt-1.5">
                      {m.value}
                    </div>
                    <div className="text-[12.5px] sm:text-[13px] font-semibold text-slate-800 mt-1">
                      {m.label}
                    </div>
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] text-slate-500 mt-2 leading-snug">
                    {m.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
