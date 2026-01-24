import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SECTIONS = ['home', 'about', 'projects', 'skills', 'contact'] as const

const Navbar = () => {
  const location = useLocation()
  const [activeSection, setActiveSection] = useState<string>('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (location.pathname !== '/') return

    const elements = SECTIONS.map((section) =>
      document.getElementById(section),
    ).filter(Boolean) as HTMLElement[]

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0.2 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const links = useMemo(
    () =>
      SECTIONS.map((section) => ({
        id: section,
        label: section.charAt(0).toUpperCase() + section.slice(1),
      })),
    [],
  )

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[var(--background)]">
      <div className="container flex items-center justify-between py-8">
        <Link
          className="text-xs font-semibold uppercase tracking-[0.4em] text-white"
          to="/"
        >
          AH
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              className={`nav-link ${activeSection === link.id ? 'nav-link-active' : ''}`}
              href={`/#${link.id}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="relative flex h-8 w-8 items-center justify-center md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="absolute h-[2px] w-5 bg-[var(--gray)]"
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute h-[2px] w-5 bg-[var(--gray)]"
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="absolute h-[2px] w-5 bg-[var(--gray)]"
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            initial={{ opacity: 0, y: -16 }}
            className="md:hidden"
            transition={{ duration: 0.25 }}
          >
            <div className="container pb-6">
              <div className="flex flex-col gap-4 text-base">
                {links.map((link) => (
                  <a
                    key={link.id}
                    className={
                      activeSection === link.id ? 'nav-link nav-link-active' : 'nav-link'
                    }
                    href={`/#${link.id}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
