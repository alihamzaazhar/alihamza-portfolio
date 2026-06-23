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
    org: 'Govt. Central Model School, Lahore',
    period: '2013 – 2015',
  },
]

const CERTS = [
  { title: 'Frontend Development', org: 'EduShapers', period: 'Jul – Sept 2021' },
  {
    title: 'SQL (Basic & Intermediate)',
    org: 'HackerRank',
    period: 'Aug – Sept 2022',
  },
]

const About = () => {
  return (
    <div className="pt-28">
      {/* Intro */}
      <section className="wrap pb-12">
        <p className="label">About</p>
        <p className="display mt-6 max-w-2xl text-2xl leading-snug sm:text-3xl">
          Software Engineer with strong experience in React Native and
          cross-platform mobile development, specializing in AR/VR and 3D
          immersive experiences.
        </p>
        <p className="mt-6 max-w-2xl text-[16px] text-[var(--muted)]">
          I design, develop and maintain scalable apps focused on performance,
          reliability and user experience — and I enjoy collaborating with
          cross-functional teams to ship innovative, production-ready solutions.
        </p>
      </section>

      {/* Experience */}
      <section className="wrap scroll-mt-24 py-16">
        <SectionHead num="01" title="Experience" />
        <ul className="border-t border-[var(--line)]">
          {EXPERIENCE.map((job) => (
            <li
              key={job.org}
              className="grid grid-cols-1 gap-1 border-b border-[var(--line)] py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
            >
              <div>
                <h3 className="display text-lg">{job.role}</h3>
                <p className="text-[15px] text-[var(--muted)]">{job.org}</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="label">{job.period}</p>
                <p className="mt-1 text-[13px] text-[var(--faint)]">{job.place}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="wrap scroll-mt-24 py-16">
        <SectionHead num="02" title="Education" />
        <ul className="border-t border-[var(--line)]">
          {EDUCATION.map((item) => (
            <li
              key={item.title}
              className="grid grid-cols-1 gap-1 border-b border-[var(--line)] py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
            >
              <div>
                <h3 className="display text-lg">{item.title}</h3>
                <p className="text-[15px] text-[var(--muted)]">{item.org}</p>
              </div>
              <p className="label sm:text-right">{item.period}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Certifications */}
      <section className="wrap scroll-mt-24 py-16 pb-28">
        <SectionHead num="03" title="Certifications" />
        <ul className="border-t border-[var(--line)]">
          {CERTS.map((item) => (
            <li
              key={item.title}
              className="grid grid-cols-1 gap-1 border-b border-[var(--line)] py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
            >
              <div>
                <h3 className="display text-lg">{item.title}</h3>
                <p className="text-[15px] text-[var(--muted)]">{item.org}</p>
              </div>
              <p className="label sm:text-right">{item.period}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default About
