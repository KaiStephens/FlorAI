'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Animated floating cube with color changes
function AnimatedCube({ position }) {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5);
      mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3);
      mesh.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <mesh
      position={position}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? '#4ade80' : '#16a34a'} />
    </mesh>
  );
}

// Animated floating torus
function AnimatedTorus({ position }) {
  const mesh = useRef();
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      mesh.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 1.3) * 0.15;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <torusGeometry args={[1, 0.3, 16, 50]} />
      <meshPhongMaterial color="#16a34a" />
    </mesh>
  );
}

// Particle system
function ParticleField() {
  const particles = useRef();
  
  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 30;
    positions[i3 + 1] = (Math.random() - 0.5) * 30;
    positions[i3 + 2] = (Math.random() - 0.5) * 30;
  }

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#ffffff"
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-[700px] bg-gradient-to-b from-green-800/30 to-green-950/30 rounded-xl overflow-hidden shadow-2xl border border-green-700/30">
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
        <spotLight position={[-10, -10, -10]} intensity={0.6} color="#4ade80" angle={0.3} penumbra={1} />
        
        <fog attach="fog" args={['#042f2e', 8, 30]} />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0.5} 
          fade
          speed={1}
        />
        
        <ParticleField />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <AnimatedCube position={[-3, 0, 0]} />
        </Float>
        
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
          <AnimatedTorus position={[3, 0, 0]} />
        </Float>
        
        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
          <Text
            position={[0, -3, 0]}
            color="#ffffff"
            fontSize={0.8}
            font="sans-serif"
            anchorX="center"
            anchorY="middle"
          >
            FlorAI 3D Visualization
          </Text>
        </Float>
        
        <OrbitControls 
          enableZoom={true}
          maxPolarAngle={Math.PI / 1.75}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
} 