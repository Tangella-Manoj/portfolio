import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Linkedin, Mail, MapPin } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { personalInfo } from '../../../constants';

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  linkedin: Linkedin,
  github: GitHubIcon,
  mail: Mail,
};

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
      setTimeout(() => window.open(`mailto:${personalInfo.email}`, '_blank'), 150);
    } catch {
      window.open(`mailto:${personalInfo.email}`, '_blank');
    }
  };

  return (
    <section id="contact" className="relative section-y">
      <div className="section-x">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader
            index="05"
            label="Contact"
            align="center"
            title={<>Let's discuss your next <span className="text-[#3b82f6]">backend challenge.</span></>}
            subtitle="Available for full-time backend engineering roles and technical consulting."
          />

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              onClick={handleEmail}
              className="group inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] rounded-xl max-w-full"
              aria-label={`Email ${personalInfo.email}`}
            >
              <span
                className="font-display font-bold text-foreground group-hover:text-[#60a5fa] transition-colors duration-300 break-all sm:break-normal"
                style={{ fontSize: 'clamp(18px, 4.5vw, 36px)', letterSpacing: '-0.025em' }}
              >
                {personalInfo.email}
              </span>
              {copied ? (
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              ) : (
                <ArrowUpRight className="w-5 h-5 text-[var(--text-3)] group-hover:text-[#3b82f6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
              )}
            </a>

            {/* Copy toast */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: copied ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="mt-2 font-mono text-[12px] text-emerald-400"
              aria-live="polite"
            >
              ✓ Copied to clipboard
            </motion.p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-2.5"
          >
            {personalInfo.social.map((s) => {
              const Icon = iconMap[s.icon] ?? Mail;
              const isEmail = s.icon === 'mail';
              return (
                <a
                  key={s.name}
                  href={s.url}
                  onClick={isEmail ? handleEmail : undefined}
                  target={!isEmail ? '_blank' : undefined}
                  rel={!isEmail ? 'noopener noreferrer' : undefined}
                  className="group glass inline-flex items-center gap-2 h-9 sm:h-10 px-4 sm:px-5 rounded-full text-[12px] sm:text-[13px] text-[var(--text-2)] hover:text-foreground hover:border-[rgba(59,130,246,0.3)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]/50"
                  aria-label={`${s.name} profile`}
                >
                  <Icon className="w-3.5 h-3.5 text-[#3b82f6]" />
                  <span className="font-medium">{s.name}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              );
            })}
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-7 inline-flex items-center gap-1.5 font-mono text-[12px] text-[var(--text-3)]"
          >
            <MapPin className="w-3.5 h-3.5" />
            Based in {personalInfo.location}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
