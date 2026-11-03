import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { personalInfo } from '../../../constants';
import { Mail, Copy, Check, ArrowUpRight, MapPin, Linkedin, Github } from 'lucide-react';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-spacing border-t border-slate-200/80">
      <div className="container-site">
        <SectionHeader
          kicker="Connect"
          title="Get in Touch"
          description="Whether you have an opportunity, a technical question about distributed systems, or just want to connect—my inbox is open."
        />

        <div className="pro-card p-5 sm:p-8 space-y-6 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Direct Email
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-xl font-bold text-slate-950 hover:text-blue-600 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
              <div className="flex items-center gap-1.5 text-[13px] text-slate-500 mt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1 sm:pt-0">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[12.5px] sm:text-[13px] font-medium rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200/80 transition-colors"
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

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-[12.5px] sm:text-[13px] font-medium rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Send email</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
            <a
              href="https://www.linkedin.com/in/manoj-tangella/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/70 flex items-center justify-between transition-all group hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-[13.5px] font-semibold text-slate-800">
                  LinkedIn
                </span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
            </a>

            <a
              href="https://github.com/Tangella-Manoj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/70 flex items-center justify-between transition-all group hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5">
                <Github className="w-4 h-4 text-slate-900 shrink-0" />
                <span className="text-[13.5px] font-semibold text-slate-800">
                  GitHub
                </span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
            </a>

            <a
              href={personalInfo.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/70 flex items-center justify-between transition-all group hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-4 flex items-center justify-center font-bold text-[10px] text-amber-700 bg-amber-100 rounded shrink-0">
                  LC
                </span>
                <span className="text-[13.5px] font-semibold text-slate-800">
                  LeetCode (300+)
                </span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
