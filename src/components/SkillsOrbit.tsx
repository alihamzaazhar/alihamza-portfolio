import { Billboard, Html, Text } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useMemo, useRef, useState } from 'react'
import { Group, MathUtils, Vector3 } from 'three'
import useIsMobile from '../hooks/useIsMobile'

type SkillItem = {
  label: string
  level: string
  color: string
}

const SKILLS: SkillItem[] = [
  { label: 'React Native', level: 'Expert', color: '#38bdf8' },
  { label: 'TypeScript', level: 'Advanced', color: '#22d3ee' },
  { label: 'Three.js', level: 'Advanced', color: '#a3e635' },
  { label: 'AR/VR', level: 'Advanced', color: '#f59e0b' },
  { label: 'Unity', level: 'Intermediate', color: '#f472b6' },
  { label: 'Firebase', level: 'Advanced', color: '#c084fc' },
]

const OrbitGroup = () => {
  const groupRef = useRef<Group | null>(null)
  const [hovered, setHovered] = useState<SkillItem | null>(null)

  const nodes = useMemo(() => {
    const radius = 2.3
    return SKILLS.map((skill, index) => {
      const angle = (index / SKILLS.length) * Math.PI * 2
      const position = new Vector3(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.6,
        Math.sin(angle) * 0.8,
      )
      return { skill, position }
    })
  }, [])

  useFrame((state, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.35
    groupRef.current.rotation.x = MathUtils.lerp(
      groupRef.current.rotation.x,
      Math.sin(state.clock.getElapsedTime() * 0.4) * 0.2,
      0.04,
    )
  })

  return (
    <group ref={groupRef}>
      {nodes.map(({ skill, position }) => (
        <group key={skill.label} position={position}>
          <Billboard>
            <Text
              fontSize={0.32}
              color={skill.color}
              onPointerOut={() => setHovered(null)}
              onPointerOver={() => setHovered(skill)}
            >
              {skill.label}
            </Text>
          </Billboard>
        </group>
      ))}
      {hovered ? (
        <Html center>
          <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-700 dark:border-white/20 dark:bg-slate-900/80 dark:text-white">
            {hovered.label} · {hovered.level}
          </div>
        </Html>
      ) : null}
    </group>
  )
}

const SkillsOrbit = () => {
  const isMobile = useIsMobile()

  return (
    <div className="h-[280px] w-full overflow-hidden rounded-3xl border border-slate-200/70 bg-white dark:border-white/10 dark:bg-white/5">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={isMobile ? 1 : 1.5}
        gl={{ antialias: !isMobile, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 4, 3]} intensity={1.2} />
          <OrbitGroup />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default SkillsOrbit
