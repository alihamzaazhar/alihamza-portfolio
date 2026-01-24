import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import FloatingShapes from './FloatingShapes'
import ParallaxCamera from './ParallaxCamera'
import SceneLoader from './SceneLoader'

const HeroCanvas = () => {
  const isMobile = useIsMobile()

  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [0, 0, 8], fov: 50 }}
      dpr={isMobile ? 1 : 1.5}
      gl={{ antialias: !isMobile, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={<SceneLoader />}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 4, 5]} intensity={1.1} />
        <FloatingShapes />
        <ParallaxCamera />
      </Suspense>
    </Canvas>
  )
}

export default HeroCanvas
