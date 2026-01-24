import { motion } from 'framer-motion'

const ICONS = ['TS', '3D', 'R3F', 'UX', 'GL']

const TechStackOrbits = () => {
  return (
    <div className="relative h-40">
      <div className="absolute inset-0 rounded-full border border-slate-200 dark:border-white/10" />
      {ICONS.map((icon, index) => (
        <motion.div
          key={icon}
          animate={{
            rotate: 360,
          }}
          className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2"
          style={{
            rotate: (360 / ICONS.length) * index,
            transformOrigin: '0 0',
          }}
          transition={{
            repeat: Infinity,
            duration: 10 + index * 2,
            ease: 'linear',
          }}
        >
          <div
            className="flex h-10 w-10 -translate-x-20 -translate-y-5 items-center justify-center rounded-full border border-slate-200 bg-white text-xs text-slate-700 dark:border-white/15 dark:bg-white/10 dark:text-white"
            style={{ transformOrigin: 'center' }}
          >
            {icon}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default TechStackOrbits
