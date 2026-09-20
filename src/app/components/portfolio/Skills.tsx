import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { skillGroups } from '../../../constants';
import { useMouseGlow } from '../hooks/useMouseGlow';

function SkillGroup({ group, i }: { group: typeof skillGroups[0]; i: number }) {
  const { ref, onMouseMove } = useMouseGlow<HTMLDivElement>();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: i * 0.07 }}
      ref={ref}
      onMouseMove={onMouseMove}
      className="card p-4 sm:p-5 md:p-6"
    >
      <div className="card-glow" />
      <div className="relative z-10">
        <h3 className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#3b82f6] mb-4">
          {group.category}
        </h3>
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span key={skill} className="tag">{skill}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative section-y">
      <div className="section-x">
        <SectionHeader
          index="04"
          label="Toolkit"
          title={<>What I <span className="text-[#3b82f6]">build</span> with.</>}
          subtitle="Technologies I rely on to build reliable, scalable backend systems."
        />
        <div className="mt-10 lg:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.category} group={group} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
