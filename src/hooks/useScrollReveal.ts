import { useEffect } from 'react'

const useScrollReveal = (scopeKey: string) => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (!elements.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          const target = entry.target as HTMLElement
          const delay = Number(target.dataset.revealDelay ?? 0)

          window.setTimeout(() => {
            target.dataset.revealed = 'true'
          }, delay)

          observer.unobserve(target)
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [scopeKey])
}

export default useScrollReveal
