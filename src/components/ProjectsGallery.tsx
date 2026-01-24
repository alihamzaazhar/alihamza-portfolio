import { PROJECTS } from '../data/projects'

const ProjectsGallery = () => {
  return (
    <section id="projects" className="w-full">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <h2 className="h2">projects</h2>
        <a className="text-sm text-[var(--gray)] underline hover:text-white" href="#contact">
          contact me →
        </a>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <div key={project.title} className="border border-[var(--gray)] rounded-xl">
            <div className="flex aspect-video items-center justify-center overflow-hidden border-b border-[var(--gray)] bg-[var(--gray-op)]">
              <img
                alt={project.title}
                className="h-full w-full object-contain p-6"
                loading="lazy"
                src={project.image}
              />
            </div>
            <div className="border-b border-[var(--gray)] px-4 py-2 text-[13px] text-[var(--gray)]">
              {project.techStack.join(' • ')}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium">{project.title}</h3>
              <p className="mt-3 text-[13px] text-[var(--gray)]">{project.description}</p>
              {project.status ? (
                <p className="mt-3 text-[13px] text-[var(--gray)]">{project.status}</p>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-3 text-[13px] text-[var(--gray)]">
                {project.iosUrl ? (
                  <a className="underline hover:text-white" href={project.iosUrl} rel="noreferrer" target="_blank">
                    iOS
                  </a>
                ) : null}
                {project.androidUrl ? (
                  <a className="underline hover:text-white" href={project.androidUrl} rel="noreferrer" target="_blank">
                    Android
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a className="underline hover:text-white" href={project.liveUrl} rel="noreferrer" target="_blank">
                    Live
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a className="underline hover:text-white" href={project.githubUrl} rel="noreferrer" target="_blank">
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsGallery
