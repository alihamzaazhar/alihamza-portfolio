import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '../data/projects'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-6 backdrop-blur"
          onClick={onClose}
        >
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            initial={{ opacity: 0, y: 20 }}
            className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-200/70 bg-white p-8 text-slate-900 dark:border-white/10 dark:bg-slate-900 dark:text-white"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
              </div>
              <button
                className="rounded-full border border-slate-200 px-4 py-2 text-xs uppercase tracking-[0.3em] dark:border-white/20"
                onClick={onClose}
                type="button"
              >
                Close
              </button>
            </div>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-white/15 dark:text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {project.liveUrl ? (
                <a
                  className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white dark:bg-white dark:text-slate-900"
                  href={project.liveUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Live site
                </a>
              ) : null}
              {project.githubUrl ? (
                <a
                  className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-900 dark:border-white/30 dark:text-white"
                  href={project.githubUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default ProjectModal
