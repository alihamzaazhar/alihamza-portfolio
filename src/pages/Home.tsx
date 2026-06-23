import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import ProjectsList from '../components/ProjectsList'
import SectionHead from '../components/SectionHead'

const META = [
  { label: 'Role', value: 'Mobile & Immersive Engineer' },
  { label: 'Based in', value: 'Lahore, Pakistan' },
  { label: 'Currently', value: 'GeniusXR · Remote' },
]

const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/alihamzaazhar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ali-hamza-926041350/' },
  { label: 'Email', href: 'mailto:alihamza124.ah@gmail.com' },
]

const APPROACH = [
  {
    title: 'Cross-platform first',
    body: 'Build once with React Native and ship reliably to both iOS and Android, dropping to native modules when performance demands it.',
  },
  {
    title: 'Immersive by design',
    body: 'Bring AR/VR, 3D and Gaussian splatting into mobile through Three.js, WebView bridges and Unity integration.',
  },
  {
    title: 'Production-minded',
    body: 'Care about performance, reliability and the small details of user experience — from first paint to release.',
  },
]

const TOOLS: Record<string, string[]> = {
  Core: ['React Native', 'TypeScript', 'JavaScript', 'React'],
  'Immersive / 3D': ['Three.js', 'Gaussian Splatting', 'Unity', 'WebView Bridges'],
  Platform: ['Native iOS Modules', 'Native Android Modules', 'Firebase', 'REST APIs'],
  Systems: ['WebSockets', 'Stripe', 'E-commerce', 'Performance Tuning'],
}

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="wrap pt-36 pb-20">
        <p className="label">Software Engineer · React Native</p>
        <h1 className="display mt-5 text-[clamp(34px,6vw,64px)] leading-[1.08]">
          Ali Hamza builds cross-platform mobile apps with{' '}
          <span className="text-[var(--accent)]">React Native</span>, AR/VR and
          immersive <span className="italic">3D experiences</span>.
        </h1>

        {/* Meta strip fills the width and grounds the hero */}
        <div className="mt-12 grid gap-x-10 gap-y-6 border-t border-[var(--line)] pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {META.map((m) => (
            <div key={m.label}>
              <p className="label">{m.label}</p>
              <p className="mt-1 text-[15px]">{m.value}</p>
            </div>
          ))}
          <div>
            <p className="label">Links</p>
            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[15px]">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)] px-6 py-2.5 text-sm transition-colors hover:bg-[var(--ink)] hover:text-[var(--bg)]"
          >
            View selected work →
          </a>
          <a href="#contact" className="label link-underline">
            Get in touch
          </a>
        </div>
      </section>

      {/* 01 — Selected Work */}
      <section id="work" className="wrap scroll-mt-24 py-16">
        <SectionHead num="01" title="Selected Work" />
        <ProjectsList />
      </section>

      {/* 02 — Approach */}
      <section id="approach" className="wrap scroll-mt-24 py-16">
        <SectionHead num="02" title="Approach" />
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-3">
          {APPROACH.map((item) => (
            <div key={item.title}>
              <h3 className="display text-xl">{item.title}</h3>
              <p className="mt-3 text-[15px] text-[var(--muted)]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 03 — Tools */}
      <section id="tools" className="wrap scroll-mt-24 py-16">
        <SectionHead num="03" title="Tools" />
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {Object.entries(TOOLS).map(([group, items]) => (
            <div key={group} className="border-t border-[var(--line)] pt-4">
              <p className="label mb-3">{group}</p>
              <ul className="flex flex-wrap gap-x-5 gap-y-1">
                {items.map((item) => (
                  <li key={item} className="text-[15px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-[15px] text-[var(--muted)]">
          More on my background, experience and education{' '}
          <Link to="/about" className="link-underline text-[var(--ink)]">
            on the about page
          </Link>
          .
        </p>
      </section>

      {/* 04 — Contact */}
      <ContactSection />
    </div>
  )
}

export default Home
