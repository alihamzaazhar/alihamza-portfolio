import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          initial={{ opacity: 0, y: 16 }}
          className="fixed bottom-6 right-6 z-40 rounded-full border border-slate-200/70 bg-white/80 px-4 py-3 text-xs uppercase tracking-[0.3em] text-slate-700 shadow-lg backdrop-blur transition hover:-translate-y-1 dark:border-white/15 dark:bg-slate-900/60 dark:text-white/80"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          type="button"
        >
          Top
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}

export default ScrollToTopButton
