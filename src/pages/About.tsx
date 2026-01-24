const About = () => {
  return (
    <div className="flex w-full flex-col gap-[112px]">
      <section className="w-full">
        <h2 className="h2">about</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-[15px] text-[var(--gray)]">
            <p>
              Software Engineer with strong experience in React Native and cross-platform
              mobile development, specializing in AR/VR and 3D immersive experiences.
              Proven ability to design, develop, and maintain scalable apps focused on
              performance, reliability, and user experience.
            </p>
            <p>
              Adept at collaborating with cross-functional teams to deliver innovative,
              production-ready solutions.
            </p>
          </div>
          <div className="border border-[var(--gray)] p-4 text-[13px] text-[var(--gray)]">
            React Native Development · Cross-Platform Mobile Architecture · AR/VR &amp; 3D Mobile
            Experiences · Native Android &amp; iOS Module Development · Three.js, WebView &amp; Gaussian
            Splatting Integration · Unity–React Native Integration · Firebase Services &amp; REST API
            Integration · E-commerce Applications &amp; Stripe Payments · Real-Time Applications
            (WebSockets, Socket.io) · TypeScript &amp; JavaScript · Advanced Animations &amp; Gesture
            Handling · Performance Optimization &amp; App Scalability
          </div>
        </div>
      </section>

      <section className="w-full">
        <h2 className="h2">experience</h2>
        <div className="mt-10 grid gap-4 text-[15px] text-[var(--gray)]">
          <div>
            <p className="text-white">Software Engineer (React Native) — GeniusXR</p>
            <p>Oct 2024 – Present · Remote (Montreal, Canada)</p>
          </div>
          <div>
            <p className="text-white">Software Engineer (React Native) — Cyber Advance Solutions</p>
            <p>Mar 2023 – Sept 2024 · Lahore, Pakistan</p>
          </div>
          <div>
            <p className="text-white">Associate Software Engineer (Trainee) — NexusXperts</p>
            <p>Sept 2022 – Feb 2023 · Lahore, Pakistan</p>
          </div>
          <div>
            <p className="text-white">Application Consultant — Techlogix</p>
            <p>Jun 2022 – Aug 2022 · Lahore, Pakistan</p>
          </div>
        </div>
      </section>

      <section className="w-full">
        <h2 className="h2">education</h2>
        <div className="mt-10 grid gap-3 text-[15px] text-[var(--gray)]">
          <p>Bachelor’s — Computer Science · COMSATS University, Lahore (2018 – 2022)</p>
          <p>Intermediate (F.Sc Pre-Engineering) · Govt. Islamia College, Lahore (2016 – 2018)</p>
          <p>Matriculation · Govt. Central Model School, Lahore (2013 – 2015)</p>
        </div>
      </section>

      <section className="w-full">
        <h2 className="h2">certifications</h2>
        <div className="mt-10 grid gap-3 text-[15px] text-[var(--gray)]">
          <p>Frontend Development · EduShapers (Jul 2021 – Sept 2021)</p>
          <p>SQL Certification (Basic &amp; Intermediate) · HackerRank (Aug 2022 – Sept 2022)</p>
        </div>
      </section>
    </div>
  )
}

export default About
