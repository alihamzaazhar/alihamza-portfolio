import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const getSystemTheme = (): Theme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const stored = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null
  const [theme, setThemeState] = useState<Theme>(
    stored === 'light' || stored === 'dark' ? stored : 'dark',
  )
  const [useSystem, setUseSystem] = useState(!stored)

  useEffect(() => {
    if (!stored) {
      setThemeState(getSystemTheme())
    }
  }, [stored])

  const setTheme = useCallback((next: Theme) => {
    setUseSystem(false)
    setThemeState(next)
    window.localStorage.setItem('theme', next)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      if (!useSystem) return
      setThemeState(media.matches ? 'dark' : 'light')
    }

    if (media.addEventListener) {
      media.addEventListener('change', handler)
    } else {
      media.addListener(handler)
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', handler)
      } else {
        media.removeListener(handler)
      }
    }
  }, [useSystem])

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export { ThemeProvider, useTheme }
export type { Theme }
