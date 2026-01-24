import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type PageTransitionProps = {
  children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
