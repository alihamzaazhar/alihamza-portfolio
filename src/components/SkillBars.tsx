import { motion } from 'framer-motion'

type SkillBarsProps = {
  inView: boolean
}

const SKILLS = [
  { label: 'Three.js', value: 85 },
  { label: 'React', value: 90 },
  { label: 'Design Systems', value: 75 },
  { label: 'Motion', value: 80 },
]

const SkillBars = ({ inView }: SkillBarsProps) => {
  return (
    <div className="space-y-4">
      {SKILLS.map((skill) => (
        <div key={skill.label} className="space-y-2">
          <div className="flex items-center justify-between text-sm text-slate-700 dark:text-white/80">
            <span>{skill.label}</span>
            <span>{skill.value}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/60 dark:bg-white/10">
            <motion.div
              animate={inView ? { width: `${skill.value}%` } : { width: '0%' }}
              className="h-full rounded-full bg-sky-500 dark:bg-sky-400"
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillBars
