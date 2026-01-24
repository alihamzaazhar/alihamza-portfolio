import { useFrame, useThree } from '@react-three/fiber'
import { useMemo } from 'react'
import { MathUtils, Vector3 } from 'three'
import useIsMobile from '../hooks/useIsMobile'

const ParallaxCamera = () => {
  const { camera, pointer } = useThree()
  const isMobile = useIsMobile()
  const basePosition = useMemo(() => new Vector3(0, 0, 8), [])

  useFrame(() => {
    const intensity = isMobile ? 0.15 : 0.35
    const targetX = basePosition.x + pointer.x * intensity * 2
    const targetY = basePosition.y + pointer.y * intensity

    camera.position.x = MathUtils.lerp(camera.position.x, targetX, 0.08)
    camera.position.y = MathUtils.lerp(camera.position.y, targetY, 0.08)
    camera.position.z = MathUtils.lerp(camera.position.z, basePosition.z, 0.08)
    camera.lookAt(0, 0, 0)
  })

  return null
}

export default ParallaxCamera
