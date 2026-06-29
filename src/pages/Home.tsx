import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import ContactSection from '../components/ContactSection'
import ProjectsList from '../components/ProjectsList'
import SectionHead from '../components/SectionHead'

const HIGHLIGHTS = [
  {
    title: 'React Native',
    body: 'Cross-platform apps with production-ready architecture and native integrations.',
  },
  {
    title: 'Immersive 3D',
    body: 'AR/VR, Three.js, WebView and Unity integrations when the product needs depth.',
  },
  {
    title: 'Mobile Systems',
    body: 'Firebase, Stripe, WebSockets, notifications and native modules for real apps.',
  },
]

const EXPERTISE = [
  'React Native Development',
  'Cross-Platform Architecture',
  'Native Android & iOS Modules',
  'AR/VR & 3D Mobile Experiences',
  'Three.js + WebView',
  'Unity Integration',
  'Firebase + REST APIs',
  'Stripe + E-commerce',
]

const Home = () => {
  const featured = PROJECTS[0]

  return (
    <div className="shell">
      <section className="wrap pt-16 pb-16 sm:pt-20 lg:pt-28">
        <div className="hero-grid items-start lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-7" data-reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="chip">Mobile engineering</span>
              <span className="chip">AR/VR and 3D</span>
            </div>

            <h1 className="display max-w-4xl text-[clamp(40px,7vw,84px)] leading-[0.95] tracking-[-0.05em]">
              Building portfolio-grade mobile products with real engineering depth.
            </h1>

            <p className="max-w-2xl text-[16px] leading-8 text-[var(--muted)] sm:text-[18px]">
              I design and ship React Native apps that feel deliberate, fast, and
              technically solid. My work spans native modules, immersive 3D,
              Firebase, Stripe, and production mobile systems.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(94,234,212,0.35)] bg-[rgba(94,234,212,0.1)] px-5 py-3 text-sm font-medium text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[rgba(94,234,212,0.6)]"
              >
                View selected work
              </a>
              <Link to="/about" className="label link-underline">
                Read the full background
              </Link>
            </div>

            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {HIGHLIGHTS.map((item) => (
                <div key={item.title} className="panel rounded-3xl p-5" data-reveal>
                  <p className="label">{item.title}</p>
                  <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4" data-reveal data-reveal-delay="120">
            <article className="hero-card rounded-[28px]">
              <div className="img-frame border-b border-[var(--line)]">
                <img src={featured.image} alt={featured.title} className="img-cover" />
              </div>
              <div className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="label">Featured project</p>
                    <h2 className="display mt-1 text-[28px]">{featured.title}</h2>
                  </div>
                  <span className="chip border-[rgba(94,234,212,0.28)] bg-[rgba(94,234,212,0.06)]">
                    {featured.status}
                  </span>
                </div>
                <p className="text-[15px] leading-7 text-[var(--muted)]">{featured.description}</p>
                <div className="stack-list">
                  {featured.techStack.map((tech) => (
                    <span key={tech} className="stack-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="panel rounded-3xl p-5" data-reveal data-reveal-delay="160">
                <p className="label">Based in</p>
                <p className="mt-3 text-[18px] font-medium">Lahore, Pakistan</p>
              </div>
              <div className="panel rounded-3xl p-5" data-reveal data-reveal-delay="200">
                <p className="label">Currently</p>
                <p className="mt-3 text-[18px] font-medium">GeniusXR · Remote</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="wrap scroll-mt-24 py-16">
        <SectionHead num="01" title="Selected Work" />
        <ProjectsList />
      </section>

      <section id="expertise" className="wrap scroll-mt-24 py-16">
        <SectionHead num="02" title="Expertise" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {EXPERTISE.map((item) => (
            <div key={item} className="panel rounded-3xl p-5" data-reveal>
              <p className="text-[15px] font-medium text-[var(--ink)]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="approach" className="wrap scroll-mt-24 py-16">
        <SectionHead num="03" title="Approach" />
        <div className="grid gap-4 md:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="panel rounded-3xl p-6" data-reveal>
              <h3 className="display text-[22px]">{item.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-[var(--muted)]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  )
}

export default Home
