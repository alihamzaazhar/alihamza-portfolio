import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className="sticky top-0 z-50 border-b border-transparent transition-all"
      style={{
        background: scrolled ? 'rgba(7, 17, 29, 0.78)' : 'rgba(7, 17, 29, 0.42)',
        backdropFilter: scrolled ? 'blur(18px)' : 'blur(10px)',
        borderBottomColor: scrolled ? 'var(--line)' : 'transparent',
      }}
    >
      <div className="wrap flex h-[72px] items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(94,234,212,0.08)] font-semibold text-[var(--ink)]">
            AH
          </span>
          <div className="leading-tight">
            <p className="display text-[15px]">Ali Hamza</p>
            <p className="label">Software Engineer</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a key={link.label} href={link.href} className="label hover:text-[var(--ink)]">
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="chip border-[rgba(94,234,212,0.35)] bg-[rgba(94,234,212,0.08)] text-[var(--ink)]"
          >
            Available for work
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-6 bg-[var(--ink)]" />
          <span className="mt-1.5 block h-0.5 w-4 bg-[var(--ink)]" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--line)] bg-[rgba(7,17,29,0.95)] md:hidden">
          <div className="wrap flex flex-col gap-4 py-4">
            {LINKS.map((link) => (
              <a key={link.label} href={link.href} className="label text-[13px]">
                {link.label}
              </a>
            ))}
            <a href="/#contact" className="chip w-fit">
              Available for work
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
