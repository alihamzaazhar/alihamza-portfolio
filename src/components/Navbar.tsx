import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LINKS = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors"
      style={{
        background: scrolled ? 'rgba(251,250,247,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(180%) blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      }}
    >
      <div className="wrap flex items-center justify-between py-5">
        <Link to="/" className="display text-lg" style={{ letterSpacing: '-0.02em' }}>
          Ali&nbsp;Hamza
        </Link>
        <nav className="flex items-center gap-6">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="label hover:text-[var(--ink)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
