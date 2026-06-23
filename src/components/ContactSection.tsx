import SectionHead from './SectionHead'

const CONTACTS = [
  { label: 'Email', value: 'alihamza124.ah@gmail.com', href: 'mailto:alihamza124.ah@gmail.com' },
  { label: 'Phone', value: '+92 316 4136613', href: 'tel:+923164136613' },
  { label: 'GitHub', value: 'github.com/alihamzaazhar', href: 'https://github.com/alihamzaazhar' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ali-hamza',
    href: 'https://www.linkedin.com/in/ali-hamza-926041350/',
  },
]

const ContactSection = () => {
  return (
    <section id="contact" className="wrap pb-28 pt-24 scroll-mt-24">
      <SectionHead num="04" title="Contact" />
      <p className="display max-w-xl text-2xl leading-snug">
        Open to remote work and collaboration in React&nbsp;Native, AR/VR, and
        cross-platform mobile experiences.
      </p>
      <dl className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
        {CONTACTS.map((c) => (
          <div key={c.label} className="flex items-baseline gap-3">
            <dt className="label w-20 shrink-0">{c.label}</dt>
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
    </section>
  )
}

export default ContactSection
