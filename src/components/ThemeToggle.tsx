import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 transition dark:border-white/15 dark:bg-white/10 dark:text-white/80"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      type="button"
      aria-label="Toggle theme"
    >
      <motion.span
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900"
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? '☾' : '☀'}
      </motion.span>
      <span className="hidden sm:inline">{theme}</span>
    </button>
  )
}

export default ThemeToggle
