import { useEffect, useRef } from 'react'

const AnimatedCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const dotRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor || !dot) return

    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) return

    document.body.setAttribute('data-cursor', 'true')

    const move = (event: MouseEvent) => {
      const { clientX, clientY } = event
      cursor.style.transform = `translate(${clientX}px, ${clientY}px)`
      dot.style.transform = `translate(${clientX}px, ${clientY}px)`
    }

    window.addEventListener('mousemove', move)
    return () => {
      document.body.removeAttribute('data-cursor')
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <>
      <div className="cursor-ring" ref={cursorRef} />
      <div className="cursor-dot" ref={dotRef} />
    </>
  )
}

export default AnimatedCursor
