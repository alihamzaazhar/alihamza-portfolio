import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import TypewriterText from './TypewriterText'
import useInViewOnce from '../hooks/useInViewOnce'

const AboutAvatar = lazy(() => import('./AboutAvatar'))

const AboutSection = () => {
  const { ref, inView } = useInViewOnce({ rootMargin: '-20% 0px', threshold: 0.15 })

  return (
    <section id="about" ref={ref} className="w-full">
      <div className="flex flex-wrap items-center justify-between gap-8">
        <motion.div
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
          className="min-w-[300px] flex-1 space-y-6"
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="h2">about</h2>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              <TypewriterText
                enabled={inView}
                text="Software Engineer focused on React Native and immersive 3D experiences."
              />
            </h3>
            <p className="text-[15px] leading-relaxed text-[var(--gray)]">
              Software Engineer with strong experience in React Native and cross-platform
              mobile development, specializing in AR/VR and 3D immersive experiences.
              Proven ability to design, develop, and maintain scalable apps focused on
              performance, reliability, and user experience.
            </p>
          </div>
          <a className="inline-flex text-sm text-[var(--gray)] underline hover:text-white" href="/about">
            Read more →
          </a>
        </motion.div>
        <motion.div
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
          className="min-w-[300px] flex-1 max-w-[340px] border-b border-[var(--primary)]"
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <Suspense
            fallback={<div className="h-[320px] w-full animate-pulse bg-[var(--gray-op)]" />}
          >
            <AboutAvatar />
          </Suspense>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
