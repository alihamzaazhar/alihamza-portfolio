import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useMemo, useRef } from 'react'
import { Mesh, MathUtils } from 'three'
import useIsMobile from '../hooks/useIsMobile'

const AvatarMesh = () => {
  const headRef = useRef<Mesh | null>(null)
  const ringRef = useRef<Mesh | null>(null)
  const basePosition = useMemo(() => ({ y: 0.15 }), [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (headRef.current) {
      headRef.current.position.y = basePosition.y + Math.sin(t * 1.2) * 0.08
      headRef.current.rotation.y = MathUtils.lerp(
        headRef.current.rotation.y,
        Math.sin(t * 0.8) * 0.4,
        0.05,
      )
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.01
    }
  })

  return (
    <group>
      <mesh ref={headRef}>
        <sphereGeometry args={[0.9, 48, 48]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.2} metalness={0.6} />
      </mesh>
      <mesh ref={ringRef} position={[0, -0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.2, 0.05, 16, 120]} />
        <meshStandardMaterial color="#38bdf8" roughness={0.3} metalness={0.4} />
      </mesh>
    </group>
  )
}

const AboutAvatar = () => {
  const isMobile = useIsMobile()

  return (
    <div className="h-[320px] w-full overflow-hidden">
      <Canvas
        camera={{ position: [0, 0.2, 3.2], fov: 45 }}
        dpr={isMobile ? 1 : 1.5}
        gl={{ antialias: !isMobile, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 3, 2]} intensity={1.2} />
          <AvatarMesh />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default AboutAvatar
