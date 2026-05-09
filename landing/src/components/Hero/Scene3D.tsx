import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleSphere() {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const count = 2800
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 1.8 + (Math.random() - 0.5) * 0.6
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.y = t * 0.06
    ref.current.rotation.x = Math.sin(t * 0.04) * 0.12
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#84C9D9"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

function FloatingRing() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.x = t * 0.15
    ref.current.rotation.z = t * 0.08
    ref.current.position.y = Math.sin(t * 0.4) * 0.12
  })

  return (
    <mesh ref={ref}>
      <torusGeometry args={[1.4, 0.025, 16, 120]} />
      <meshBasicMaterial color="#3370A6" transparent opacity={0.5} />
    </mesh>
  )
}

function FloatingRing2() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.y = t * 0.1
    ref.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.3) * 0.1
    ref.current.position.y = Math.cos(t * 0.35) * 0.08
  })

  return (
    <mesh ref={ref}>
      <torusGeometry args={[1.9, 0.015, 16, 120]} />
      <meshBasicMaterial color="#5095BF" transparent opacity={0.35} />
    </mesh>
  )
}

function CoreSphere() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    const scale = 1 + Math.sin(t * 0.8) * 0.04
    ref.current.scale.setScalar(scale)
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.55, 64, 64]} />
      <meshStandardMaterial
        color="#0B0940"
        emissive="#3370A6"
        emissiveIntensity={0.6}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 50 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.4} color="#84C9D9" />
      <pointLight position={[3, 3, 3]} intensity={1.5} color="#5095BF" />
      <pointLight position={[-3, -2, 2]} intensity={0.8} color="#3370A6" />
      <ParticleSphere />
      <FloatingRing />
      <FloatingRing2 />
      <CoreSphere />
    </Canvas>
  )
}
