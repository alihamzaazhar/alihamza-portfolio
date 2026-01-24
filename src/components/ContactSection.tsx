const CONTACTS = [
  { label: 'Email', value: 'alihamza124.ah@gmail.com', href: 'mailto:alihamza124.ah@gmail.com' },
  { label: 'Phone', value: '+92 316 4136613', href: 'tel:+923164136613' },
  { label: 'Location', value: 'Lahore, Pakistan' },
]

const MEDIA = [
  { label: 'GitHub', href: 'https://github.com/alihamzaazhar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ali-hamza-926041350/' },
  { label: 'Email', href: 'mailto:alihamza124.ah@gmail.com' },
]

const ContactSection = () => {
  return (
    <section id="contact" className="w-full">
      <h2 className="h2">contacts</h2>
      <div className="mt-12 flex flex-wrap items-start justify-between gap-8">
        <div className="min-w-[280px] flex-1">
          <p className="text-[15px] text-[var(--gray)]">
            I’m interested in remote opportunities and collaboration in AR/VR, 3D,
            and cross-platform mobile experiences.
          </p>
          <div className="mt-6 space-y-2 text-[13px] text-[var(--gray)]">
            {CONTACTS.map((contact) => (
              <div key={contact.label} className="flex items-center gap-2">
                <span>{contact.label}:</span>
                {contact.href ? (
                  <a className="underline hover:text-white" href={contact.href}>
                    {contact.value}
                  </a>
                ) : (
                  <span>{contact.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="min-w-[220px] border border-[var(--gray)] p-4">
          <p className="text-sm font-semibold">message me here</p>
          <div className="mt-4 space-y-2 text-[13px] text-[var(--gray)]">
            {MEDIA.map((item) => (
              <a key={item.label} className="block underline hover:text-white" href={item.href} rel="noreferrer" target="_blank">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
