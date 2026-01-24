import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { BufferAttribute, Points, Vector3 } from 'three'
import useIsMobile from '../hooks/useIsMobile'

const ParticleField = () => {
  const pointsRef = useRef<Points | null>(null)
  const throttleRef = useRef(0)
  const isMobile = useIsMobile()

  const { positions, basePositions, count } = useMemo(() => {
    const particleCount = isMobile ? 600 : 1400
    const positionsArray = new Float32Array(particleCount * 3)
    const baseArray = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i += 1) {
      const i3 = i * 3
      const pos = new Vector3(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      )
      positionsArray[i3] = pos.x
      positionsArray[i3 + 1] = pos.y
      positionsArray[i3 + 2] = pos.z
      baseArray[i3] = pos.x
      baseArray[i3 + 1] = pos.y
      baseArray[i3 + 2] = pos.z
    }

    return { positions: positionsArray, basePositions: baseArray, count: particleCount }
  }, [isMobile])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    throttleRef.current += delta
    if (throttleRef.current < 1 / 20) return

    const time = state.clock.getElapsedTime()
    const positionAttr = pointsRef.current.geometry.getAttribute('position') as BufferAttribute

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3
      positionAttr.array[i3] = basePositions[i3] + Math.sin(time * 0.4 + i) * 0.02
      positionAttr.array[i3 + 1] = basePositions[i3 + 1] + Math.cos(time * 0.3 + i) * 0.02
    }

    positionAttr.needsUpdate = true
    throttleRef.current = 0
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#e2e8f0" size={0.05} sizeAttenuation transparent opacity={0.5} />
    </points>
  )
}

export default ParticleField
