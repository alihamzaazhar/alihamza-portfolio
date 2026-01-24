const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/alihamzaazhar',
    path: 'M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04 .9 1.53 2.36 1.09 2.94.83 .09-.65 .35-1.09 .64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.29.1-2.69 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0112 6.8c.85 0 1.71.11 2.51.32 1.9-1.29 2.74-1.02 2.74-1.02 .55 1.4 .2 2.43.1 2.69 .64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.58 4.95 .36.31.68.92.68 1.85 0 1.34-.01 2.41-.01 2.74 0 .27.18.59.69.49A10 10 0 0022 12c0-5.52-4.48-10-10-10z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ali-hamza-926041350/',
    path: 'M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18.34V9.67H5.67v8.67h2.67zM7 8.34a1.55 1.55 0 10-1.55-1.55A1.55 1.55 0 007 8.34zm11.34 10V13.5c0-2.33-1.24-3.42-2.9-3.42a2.5 2.5 0 00-2.26 1.24v-1.07H10.5c.03.71 0 8.67 0 8.67h2.68v-4.83c0-.26.02-.51.1-.7.2-.51.66-1.03 1.42-1.03 1 0 1.4.77 1.4 1.9v4.66z',
  },
  {
    label: 'Email',
    href: 'mailto:alihamza124.ah@gmail.com',
    path: 'M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13 20 6.01V6H4zm16 12V8.24l-7.38 6.46a1 1 0 01-1.24 0L4 8.24V18h16z',
  },
]

const SideSocial = () => {
  return (
    <div className="media-header" aria-hidden="true">
      <div className="media-header__links">
        {SOCIALS.map((social) => (
          <a key={social.label} className="media-icon" href={social.href} rel="noreferrer" target="_blank">
            <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d={social.path} />
            </svg>
          </a>
        ))}
      </div>
      <span className="media-header__line" />
    </div>
  )
}

export default SideSocial
