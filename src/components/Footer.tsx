const LINKS = [
  { label: 'GitHub', href: 'https://github.com/alihamzaazhar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ali-hamza-926041350/' },
  { label: 'Email', href: 'mailto:alihamza124.ah@gmail.com' },
]

const Footer = () => {
  return (
    <footer className="wrap pb-10" data-reveal>
      <div className="border-t border-[var(--line)] pt-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="display text-[18px]">Ali Hamza</p>
            <p className="label mt-1">Software Engineer · Lahore, Pakistan</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {LINKS.map((link) => (
              <a key={link.label} href={link.href} className="label link-underline">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-6 text-[13px] text-[var(--faint)]">
          Designed for mobile engineering, AR/VR and production-grade app delivery.
        </p>
      </div>
    </footer>
  )
}

export default Footer
