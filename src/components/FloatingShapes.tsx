import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { Color, Group, Vector3 } from 'three'
import useIsMobile from '../hooks/useIsMobile'

const SHAPES = [
  { geometry: 'box', position: new Vector3(-2.5, 0.8, 0) },
  { geometry: 'sphere', position: new Vector3(2.2, -0.4, 0.6) },
  { geometry: 'torus', position: new Vector3(0.6, 1.6, -0.8) },
  { geometry: 'box', position: new Vector3(1.4, -1.3, -0.6) },
  { geometry: 'sphere', position: new Vector3(-1.8, -1.2, 0.5) },
]

const FloatingShapes = () => {
  const groupRef = useRef<Group | null>(null)
  const timeRef = useRef(0)
  const throttleRef = useRef(0)
  const isMobile = useIsMobile()

  const shapes = useMemo(() => {
    const count = isMobile ? 3 : SHAPES.length
    return SHAPES.slice(0, count)
  }, [isMobile])

  useFrame((_, delta) => {
    if (!groupRef.current) return
    throttleRef.current += delta
    if (throttleRef.current < 1 / 30) return

    timeRef.current += throttleRef.current
    const t = timeRef.current
    groupRef.current.children.forEach((child, index) => {
      const speed = 0.2 + index * 0.05
      child.position.y += Math.sin(t * speed + index) * 0.0015
      child.rotation.x += 0.002 + index * 0.0004
      child.rotation.y += 0.0015 + index * 0.0003
      child.rotation.z += 0.001 + index * 0.0002
    })

    throttleRef.current = 0
  })

  return (
    <group ref={groupRef}>
      {shapes.map((shape, index) => {
        const color = new Color().setHSL(0.55 + index * 0.08, 0.7, 0.6)
        if (shape.geometry === 'sphere') {
          return (
            <mesh key={`sphere-${index}`} position={shape.position.toArray()}>
              <sphereGeometry args={[0.6, 32, 32]} />
              <meshStandardMaterial color={color} metalness={0.4} roughness={0.2} />
            </mesh>
          )
        }
        if (shape.geometry === 'torus') {
          return (
            <mesh key={`torus-${index}`} position={shape.position.toArray()}>
              <torusKnotGeometry args={[0.45, 0.18, 120, 16]} />
              <meshStandardMaterial color={color} metalness={0.5} roughness={0.25} />
            </mesh>
          )
        }
        return (
          <mesh key={`box-${index}`} position={shape.position.toArray()}>
            <boxGeometry args={[0.9, 0.9, 0.9]} />
            <meshStandardMaterial color={color} metalness={0.4} roughness={0.3} />
          </mesh>
        )
      })}
    </group>
  )
}

export default FloatingShapes
