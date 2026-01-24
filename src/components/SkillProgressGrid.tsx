import { motion } from 'framer-motion'

type SkillGroup = {
  title: string
  skills: { label: string; value: number }[]
}

type SkillProgressGridProps = {
  inView: boolean
}

const GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { label: 'React Native', value: 92 },
      { label: 'TypeScript', value: 88 },
      { label: 'Animations', value: 84 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { label: 'REST APIs', value: 78 },
      { label: 'Firebase', value: 82 },
      { label: 'WebSockets', value: 76 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { label: 'Unity', value: 72 },
      { label: 'Three.js', value: 86 },
      { label: 'CI/CD', value: 74 },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { label: 'Android', value: 78 },
      { label: 'iOS', value: 75 },
      { label: 'Native Modules', value: 80 },
    ],
  },
]

const SkillProgressGrid = ({ inView }: SkillProgressGridProps) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
      {GROUPS.map((group, groupIndex) => (
        <motion.div
          key={group.title}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="rounded-3xl border border-slate-200/70 bg-white p-6 dark:border-white/10 dark:bg-white/5 overflow-hidden"
          transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            {group.title}
          </p>
          <div className="mt-5 grid gap-4">
            {group.skills.map((skill) => (
              <div key={skill.label} className="grid grid-cols-[64px_1fr] items-center gap-4">
                <div className="relative h-14 w-14 place-self-center">
                  <svg className="h-full w-full -rotate-90" viewBox="0 0 56 56">
                    <circle
                      cx="28"
                      cy="28"
                      r="22"
                      stroke="rgba(148,163,184,0.35)"
                      strokeWidth="6"
                      fill="none"
                    />
                    <motion.circle
                      cx="28"
                      cy="28"
                      r="22"
                      stroke="rgba(56,189,248,0.95)"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 22}
                      strokeDashoffset={
                        2 * Math.PI * 22 * (1 - (inView ? skill.value / 100 : 0))
                      }
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-slate-700 dark:text-white/80">
                    {skill.value}%
                  </div>
                </div>
                <div className="flex min-w-0 flex-col">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                    {skill.label}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                    Proficiency
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default SkillProgressGrid
