import { useEffect, useRef, useState } from 'react'

type UseInViewOnceOptions = {
  rootMargin?: string
  threshold?: number
}

const useInViewOnce = ({ rootMargin = '-15% 0px', threshold = 0.2 }: UseInViewOnceOptions = {}) => {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return { ref, inView }
}

export default useInViewOnce
