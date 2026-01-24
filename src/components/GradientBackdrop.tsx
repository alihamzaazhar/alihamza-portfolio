import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { Color, ShaderMaterial, Vector2 } from 'three'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec2 uNoiseScale;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  void main() {
    vec2 uv = vUv * uNoiseScale;
    float n = noise(uv + uTime * 0.05);
    vec3 gradient = mix(uColorA, uColorB, vUv.y + n * 0.2);
    gl_FragColor = vec4(gradient, 1.0);
  }
`

const GradientBackdrop = () => {
  const materialRef = useRef<ShaderMaterial | null>(null)

  const material = useMemo(() => {
    return new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColorA: { value: new Color('#0f172a') },
        uColorB: { value: new Color('#38bdf8') },
        uNoiseScale: { value: new Vector2(2.5, 2.5) },
      },
      vertexShader,
      fragmentShader,
    })
  }, [])

  useFrame(({ clock }) => {
    if (!materialRef.current) return
    materialRef.current.uniforms.uTime.value = clock.getElapsedTime()
  })

  return (
    <mesh position={[0, 0, -8]} scale={[30, 20, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <primitive object={material} ref={materialRef} attach="material" />
    </mesh>
  )
}

export default GradientBackdrop
