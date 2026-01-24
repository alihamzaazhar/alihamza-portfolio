import { motion } from 'framer-motion'

const FOOTER_LINKS = [
  { label: 'GitHub', href: 'https://github.com/alihamzaazhar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ali-hamza-926041350/' },
  { label: 'Email', href: 'mailto:alihamza124.ah@gmail.com' },
]

const Footer = () => {
  return (
    <footer className="w-full border-t border-[var(--gray)] pt-8">
      <div className="flex flex-wrap items-start justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 text-lg font-medium">
            <span>Ali Hamza</span>
            <span className="text-[13px] text-[var(--gray)]">Software Engineer</span>
          </div>
          <p className="mt-4 text-[13px] text-[var(--gray)]">
            React Native · AR/VR · 3D Mobile Experiences
          </p>
        </div>
        <div>
          <p className="text-lg font-medium">Media</p>
          <div className="mt-3 flex gap-3 text-[13px] text-[var(--gray)]">
            {FOOTER_LINKS.map((link) => (
              <motion.a
                key={link.label}
                className="underline hover:text-white"
                href={link.href}
                rel="noreferrer"
                target="_blank"
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-[13px] text-[var(--gray)]">
        © {new Date().getFullYear()} Ali Hamza · Lahore, Pakistan
      </p>
    </footer>
  )
}

export default Footer
