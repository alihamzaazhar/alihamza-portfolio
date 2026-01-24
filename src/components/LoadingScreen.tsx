import { motion } from 'framer-motion'

type LoadingScreenProps = {
  visible: boolean
}

const LoadingScreen = ({ visible }: LoadingScreenProps) => {
  return (
    <motion.div
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950 text-white dark:bg-slate-950"
      initial={{ opacity: 1 }}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        animate={{ scale: [0.9, 1, 0.9], opacity: [0.6, 1, 0.6] }}
        className="flex flex-col items-center gap-3"
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-lg font-semibold">
          AH
        </div>
        <span className="text-xs uppercase tracking-[0.4em] text-white/70">
          Loading
        </span>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen
