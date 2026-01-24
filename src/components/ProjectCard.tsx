import { useState } from 'react'
import type { Project } from '../data/projects'
import useTilt from '../hooks/useTilt'

type ProjectCardProps = {
  project: Project
  onOpen: (project: Project) => void
}

const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  const { ref, tilt, onMouseMove, onMouseLeave } = useTilt(14)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  return (
    <button
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white text-left text-slate-900 transition hover:border-slate-300 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/30"
      onClick={() => onOpen(project)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false)
        onMouseLeave()
      }}
      onMouseMove={onMouseMove}
      ref={ref}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${isHovering ? 1.02 : 1})`
      }}
      type="button"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          alt={project.title}
          className={`h-full w-full object-cover transition duration-500 ${
            isLoaded ? 'scale-100 blur-0' : 'scale-110 blur-xl'
          } group-hover:scale-105`}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          src={project.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent dark:from-slate-950/80" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-white/70">
          {project.liveUrl ? (
            <a
              className="underline-offset-4 transition hover:text-white hover:underline"
              href={project.liveUrl}
              onClick={(event) => event.stopPropagation()}
              rel="noreferrer"
              target="_blank"
            >
              Live
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              className="underline-offset-4 transition hover:text-white hover:underline"
              href={project.githubUrl}
              onClick={(event) => event.stopPropagation()}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          ) : null}
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-white/15 dark:text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 rounded-3xl border border-sky-400/30 shadow-[0_0_30px_rgba(56,189,248,0.25)]" />
      </div>
    </button>
  )
}

export default ProjectCard
