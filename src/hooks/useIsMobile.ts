import { useEffect, useState } from 'react'

const DEFAULT_BREAKPOINT = 768

const useIsMobile = (breakpoint: number = DEFAULT_BREAKPOINT) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(`(max-width: ${breakpoint}px)`).matches
  })

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint}px)`)
    const handler = () => setIsMobile(media.matches)

    handler()
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
  }, [breakpoint])

  return isMobile
}

export default useIsMobile
