import { useEffect, useMemo, useState } from 'react'

type TypewriterTextProps = {
  text: string
  speed?: number
  enabled?: boolean
}

const TypewriterText = ({
  text,
  speed = 28,
  enabled = true,
}: TypewriterTextProps) => {
  const [index, setIndex] = useState(0)
  const chars = useMemo(() => text.split(''), [text])

  useEffect(() => {
    if (!enabled) {
      setIndex(0)
      return
    }
    if (index >= chars.length) return
    const timer = window.setTimeout(() => setIndex((prev) => prev + 1), speed)
    return () => window.clearTimeout(timer)
  }, [chars.length, enabled, index, speed])

  return (
    <span>
      {enabled ? chars.slice(0, index).join('') : ''}
      {enabled ? (
        <span className="ml-1 inline-block h-5 w-2 animate-pulse rounded-full bg-sky-300 align-middle" />
      ) : null}
    </span>
  )
}

export default TypewriterText
