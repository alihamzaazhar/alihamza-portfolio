import { PROJECTS } from '../data/projects'

const ProjectsList = () => {
  return (
    <div className="card-grid sm:grid-cols-2 xl:grid-cols-3">
      {PROJECTS.map((project, index) => {
        const links = [
          project.iosUrl && { label: 'iOS', href: project.iosUrl },
          project.androidUrl && { label: 'Android', href: project.androidUrl },
          project.liveUrl && { label: 'Live', href: project.liveUrl },
          project.githubUrl && { label: 'Code', href: project.githubUrl },
        ].filter(Boolean) as { label: string; href: string }[]

        const imageClass = project.mediaFit === 'contain' ? 'img-contain' : 'img-cover'

        return (
          <article
            key={project.title}
            className="card overflow-hidden"
            data-reveal
            data-reveal-delay={String(index * 80)}
          >
            <div className="img-frame">
              <img src={project.image} alt={project.title} loading="lazy" className={imageClass} />
            </div>
            <div className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="label">{project.category}</p>
                  <h3 className="display mt-1 text-[22px] leading-tight">{project.title}</h3>
                </div>
                {project.status ? (
                  <span className="chip shrink-0 border-[rgba(94,234,212,0.28)] bg-[rgba(94,234,212,0.06)]">
                    {project.status}
                  </span>
                ) : null}
              </div>

              <p className="text-[15px] text-[var(--muted)]">{project.description}</p>

              <div className="stack-list">
                {project.techStack.map((tech) => (
                  <span key={tech} className="stack-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {links.length ? (
                <div className="flex flex-wrap gap-4 pt-1">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="label link-underline text-[12px]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default ProjectsList
