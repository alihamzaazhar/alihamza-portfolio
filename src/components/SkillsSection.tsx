const SKILL_BLOCKS = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'SQL', 'Oracle'],
  },
  {
    title: 'Frameworks',
    items: ['React Native', 'React', 'Three.js', 'Redux'],
  },
  {
    title: 'Mobile',
    items: ['Android', 'iOS', 'Native Modules', 'Unity Integration'],
  },
  {
    title: 'Backend',
    items: ['Firebase', 'REST APIs', 'WebSockets', 'Socket.io'],
  },
  {
    title: 'Tools',
    items: ['Git', 'CI/CD', 'Stripe', 'Debugging & Testing'],
  },
]

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full">
      <h2 className="h2">skills</h2>
      <div className="mt-12 flex flex-wrap gap-8">
        <div className="min-w-[300px] flex-1">
          <div className="relative min-h-[300px]">
            <div className="absolute left-[70%] top-[30%] h-12 w-12 rounded-full border border-[var(--primary)] opacity-60" />
            <div className="absolute left-[10%] top-[70%] h-16 w-16 rounded-full border border-[var(--gray)] opacity-40" />
            <div className="absolute left-[40%] top-[20%] h-10 w-10 rounded-full border border-[var(--gray)] opacity-40" />
          </div>
        </div>
        <div className="min-w-[300px] flex-1">
          <div className="columns-2 gap-4 sm:columns-2 md:columns-3">
            {SKILL_BLOCKS.map((block) => (
              <div key={block.title} className="mb-4 break-inside-avoid border border-[var(--gray)] p-4 rounded-xl">
                <p className="text-sm font-semibold">{block.title}</p>
                <ul className="mt-3 space-y-2 text-[13px] text-[var(--gray)]">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
