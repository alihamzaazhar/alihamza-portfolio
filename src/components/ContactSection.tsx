import SectionHead from './SectionHead'

const CONTACTS = [
  { label: 'Email', value: 'alihamza124.ah@gmail.com', href: 'mailto:alihamza124.ah@gmail.com' },
  { label: 'Phone', value: '+92 316 4136613', href: 'tel:+923164136613' },
  { label: 'GitHub', value: 'github.com/alihamzaazhar', href: 'https://github.com/alihamzaazhar' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ali-hamza-926041350',
    href: 'https://www.linkedin.com/in/ali-hamza-926041350/',
  },
]

const ContactSection = () => {
  return (
    <section id="contact" className="wrap scroll-mt-24 pb-28 pt-16">
      <SectionHead num="04" title="Contact" />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="panel rounded-[28px] p-6 sm:p-8" data-reveal>
          <p className="display max-w-2xl text-[clamp(28px,4vw,42px)] leading-[1.05] tracking-[-0.04em]">
            Open to remote work and collaboration in React Native, AR/VR, and
            cross-platform mobile experiences.
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--muted)]">
            If you need a React Native engineer who can move from native module
            work to immersive product experiences without losing delivery pace,
            reach out directly.
          </p>
        </div>

        <div className="panel rounded-[28px] p-6 sm:p-8" data-reveal data-reveal-delay="100">
          <p className="label">Direct links</p>
          <dl className="mt-5 space-y-4">
            {CONTACTS.map((c) => (
              <div
                key={c.label}
                className="grid gap-1 sm:grid-cols-[96px_1fr] sm:items-start"
                data-reveal
              >
                <dt className="label pt-1">{c.label}</dt>
                <dd className="m-0">
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="link-underline text-[15px]"
                  >
                    {c.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
