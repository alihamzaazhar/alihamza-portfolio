const LINKS = [
  { label: 'GitHub', href: 'https://github.com/alihamzaazhar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ali-hamza-926041350/' },
  { label: 'Email', href: 'mailto:alihamza124.ah@gmail.com' },
]

const Footer = () => {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="wrap flex flex-wrap items-center justify-between gap-4 py-8">
        <p className="label">
          © {new Date().getFullYear()} Ali Hamza · Lahore, Pakistan
        </p>
        <div className="flex gap-5">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="label link-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
