import { PROJECTS } from '../data/projects'

const ProjectsList = () => {
  return (
    <ul className="border-t border-[var(--line)]">
      {PROJECTS.map((project) => {
        const primaryUrl =
          project.liveUrl ?? project.iosUrl ?? project.androidUrl ?? project.githubUrl
        const links = [
          project.iosUrl && { label: 'iOS', href: project.iosUrl },
          project.androidUrl && { label: 'Android', href: project.androidUrl },
          project.liveUrl && { label: 'Live', href: project.liveUrl },
          project.githubUrl && { label: 'Code', href: project.githubUrl },
        ].filter(Boolean) as { label: string; href: string }[]

        const Row = (
          <div className="group flex items-start gap-5 py-6">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-16 w-16 shrink-0 rounded-xl border border-[var(--line)] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="display text-xl transition-colors group-hover:text-[var(--accent)]">
                  {project.title}
                </h3>
                <span className="label">{project.category}</span>
                {project.status ? (
                  <span className="label text-[var(--accent)]">· {project.status}</span>
                ) : null}
              </div>
              <p className="mt-1.5 max-w-prose text-[15px] text-[var(--muted)]">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                {project.techStack.map((tech) => (
                  <span key={tech} className="label">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {links.length ? (
              <div className="hidden shrink-0 flex-col items-end gap-1 sm:flex">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="label link-underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        )

        return (
          <li key={project.title} className="border-b border-[var(--line)]">
            {primaryUrl ? (
              <a href={primaryUrl} target="_blank" rel="noreferrer" className="block">
                {Row}
              </a>
            ) : (
              Row
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default ProjectsList
