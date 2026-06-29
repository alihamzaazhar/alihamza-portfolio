import SectionHead from '../components/SectionHead'

const EXPERIENCE = [
  {
    role: 'Software Engineer (React Native)',
    org: 'GeniusXR',
    period: 'Oct 2024 – Present',
    place: 'Remote · Montreal, Canada',
  },
  {
    role: 'Software Engineer (React Native)',
    org: 'Cyber Advance Solutions',
    period: 'Mar 2023 – Sept 2024',
    place: 'Lahore, Pakistan',
  },
  {
    role: 'Associate Software Engineer (Trainee)',
    org: 'NexusXperts',
    period: 'Sept 2022 – Feb 2023',
    place: 'Lahore, Pakistan',
  },
  {
    role: 'Application Consultant',
    org: 'Techlogix',
    period: 'Jun 2022 – Aug 2022',
    place: 'Lahore, Pakistan',
  },
]

const EDUCATION = [
  {
    title: 'B.S. Computer Science',
    org: 'COMSATS University, Lahore',
    period: '2018 – 2022',
  },
  {
    title: 'Intermediate (F.Sc Pre-Engineering)',
    org: 'Govt. Islamia College, Lahore',
    period: '2016 – 2018',
  },
  {
    title: 'Matriculation',
    org: 'Govt. Central Model School',
    period: '2013 – 2015',
  },
]

const CERTS = [
  { title: 'Frontend Development', org: 'EduShapers', period: 'Jul – Sept 2021' },
  { title: 'SQL (Basic & Intermediate)', org: 'HackerRank', period: 'Aug – Sept 2022' },
]

const EXPERTISE = [
  'React Native Development',
  'Cross-Platform Architecture',
  'Native Android & iOS Modules',
  'AR/VR & 3D Mobile Experiences',
  'Three.js + WebView',
  'Gaussian Splatting',
  'Unity Integration',
  'Firebase + REST APIs',
  'Stripe + E-commerce',
  'Real-time (WebSockets)',
  'TypeScript & JavaScript',
  'Performance Optimization',
]

const About = () => {
  return (
    <div className="shell">
      <section className="wrap pt-16 pb-16 sm:pt-20 lg:pt-28">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-6" data-reveal>
            <h1 className="display text-[clamp(40px,6vw,72px)] leading-[0.95] tracking-[-0.05em]">
              About the engineer behind the portfolio.
            </h1>
            <p className="max-w-2xl text-[16px] leading-8 text-[var(--muted)] sm:text-[18px]">
              Software Engineer with strong experience in React Native and
              cross-platform mobile development, specializing in AR/VR and 3D
              immersive experiences. I build production-focused apps and native
              integrations without losing sight of the UX details.
            </p>
          </div>

          <div className="panel rounded-[28px] p-6" data-reveal data-reveal-delay="120">
            <p className="label">Career summary</p>
            <div className="mt-4 space-y-4 text-[15px] leading-7 text-[var(--muted)]">
              <p>
                Proven ability to design, develop, and maintain scalable apps
                focused on performance, reliability, and user experience.
              </p>
              <p>
                Adept at collaborating with cross-functional teams to deliver
                innovative, production-ready solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="wrap scroll-mt-24 py-16">
        <SectionHead num="01" title="Expertise" />
        <div className="flex flex-wrap gap-3">
          {EXPERTISE.map((item) => (
            <span key={item} className="stack-pill" data-reveal>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="experience" className="wrap scroll-mt-24 py-16">
        <SectionHead num="02" title="Experience" />
        <div className="space-y-3">
          {EXPERIENCE.map((job) => (
            <article key={job.org} className="panel rounded-[24px] p-5 sm:p-6" data-reveal>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <h3 className="display text-[20px]">{job.role}</h3>
                  <p className="mt-1 text-[15px] text-[var(--muted)]">{job.org}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="label">{job.period}</p>
                  <p className="mt-1 text-[13px] text-[var(--faint)]">{job.place}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="wrap scroll-mt-24 py-16">
        <SectionHead num="03" title="Education" />
        <div className="space-y-3">
          {EDUCATION.map((item) => (
            <article key={item.title} className="panel rounded-[24px] p-5 sm:p-6" data-reveal>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <h3 className="display text-[20px]">{item.title}</h3>
                  <p className="mt-1 text-[15px] text-[var(--muted)]">{item.org}</p>
                </div>
                <p className="label">{item.period}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="certifications" className="wrap scroll-mt-24 py-16 pb-28">
        <SectionHead num="04" title="Certifications" />
        <div className="space-y-3">
          {CERTS.map((item) => (
            <article key={item.title} className="panel rounded-[24px] p-5 sm:p-6" data-reveal>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <h3 className="display text-[20px]">{item.title}</h3>
                  <p className="mt-1 text-[15px] text-[var(--muted)]">{item.org}</p>
                </div>
                <p className="label">{item.period}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
