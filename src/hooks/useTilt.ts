import { useCallback, useRef, useState, type MouseEvent } from 'react'

type TiltState = {
  rotateX: number
  rotateY: number
}

const useTilt = (maxTilt = 12) => {
  const [tilt, setTilt] = useState<TiltState>({ rotateX: 0, rotateY: 0 })
  const ref = useRef<HTMLButtonElement | null>(null)

  const onMouseMove = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const element = ref.current
      if (!element) return
      const rect = element.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const xPercent = (x / rect.width) * 2 - 1
      const yPercent = (y / rect.height) * 2 - 1
      setTilt({
        rotateX: -yPercent * maxTilt,
        rotateY: xPercent * maxTilt,
      })
    },
    [maxTilt],
  )

  const onMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 })
  }, [])

  return { ref, tilt, onMouseMove, onMouseLeave }
}

export default useTilt
