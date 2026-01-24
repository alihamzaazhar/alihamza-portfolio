import { Suspense, lazy } from 'react'
import AboutSection from '../components/AboutSection'
import ProjectsGallery from '../components/ProjectsGallery'
import SkillsSection from '../components/SkillsSection'
import ContactSection from '../components/ContactSection'

const HeroCanvas = lazy(() => import('../components/HeroCanvas'))

const Home = () => {
  return (
    <div className="flex w-full flex-col gap-[112px]">
      <section id="home" className="w-full">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="min-w-[300px] flex-1 space-y-6">
            <h1 className="text-3xl font-semibold">
              Ali Hamza is a <span className="text-[var(--primary)]">Software Engineer</span>
            </h1>
            <p className="text-[15px] text-[var(--gray)]">
              Building cross-platform mobile apps with React Native, AR/VR, and immersive 3D
              experiences.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a className="border border-[var(--primary)] px-4 py-2 text-sm text-white rounded-sm" href="#contact">
                Contact me
              </a>
              <a className="text-sm text-[var(--gray)] underline hover:text-white" href="#projects">
                View projects
              </a>
            </div>
          </div>
          <div className="min-w-[300px] flex-1">
            <div className="relative">
              <div className="border-b border-[var(--primary)]">
                <div className="h-[320px] w-full">
                  <Suspense
                    fallback={<div className="h-full w-full animate-pulse bg-[var(--gray-op)]" />}
                  >
                    <HeroCanvas />
                  </Suspense>
                </div>
              </div>
              <div className="mt-3 inline-flex items-center gap-2 border border-[var(--gray)] px-3 py-2 text-[13px] text-[var(--gray)] rounded-sm">
                <span className="inline-block h-2 w-2 border border-[var(--primary)] bg-[var(--primary-op)]" />
                Currently working at GeniusXR
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <SkillsSection />
      <ProjectsGallery />
      <ContactSection />
    </div>
  )
}

export default Home
