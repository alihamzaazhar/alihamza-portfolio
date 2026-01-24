import { motion } from 'framer-motion'

type TimelineProps = {
  inView: boolean
}

const ITEMS = [
  {
    title: 'Software Engineer (React Native) — GeniusXR',
    date: 'Oct 2024 — Present',
    description:
      'Built immersive AR/VR mobile apps, Gaussian Splatting via Three.js/WebView, Unity integration, and native Android/iOS modules for media, notifications, and AR.',
  },
  {
    title: 'Software Engineer (React Native) — Cyber Advance Solutions',
    date: 'Mar 2023 — Sept 2024',
    description:
      'Delivered React Native apps with REST/Firebase integrations, advanced animations, and scalable mobile UX.',
  },
  {
    title: 'Associate Software Engineer (Trainee) — NexusXperts',
    date: 'Sept 2022 — Feb 2023',
    description:
      'Supported frontend delivery, platform workflows, and client task execution with HTML, CSS, and JavaScript.',
  },
  {
    title: 'Application Consultant — Techlogix',
    date: 'Jun 2022 — Aug 2022',
    description:
      'Assisted enterprise deployments, requirement gathering, and reliability improvements.',
  },
]

const Timeline = ({ inView }: TimelineProps) => {
  return (
    <div className="space-y-6">
      {ITEMS.map((item, index) => (
        <motion.div
          key={item.title}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="relative rounded-2xl border border-slate-200/70 bg-white p-5 dark:border-white/10 dark:bg-white/5"
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            {item.date}
          </p>
          <h4 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h4>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default Timeline
