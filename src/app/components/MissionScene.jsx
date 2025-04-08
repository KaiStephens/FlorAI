'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Planet() {
  const planet = useRef();
  
  useFrame(({ clock }) => {
    if (planet.current) {
      planet.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });
  
  return (
    <Sphere ref={planet} args={[2, 32, 32]} position={[0, 0, 0]}>
      <meshPhongMaterial 
        color="#2c7744" 
        emissive="#143a21"
        shininess={10}
        bumpScale={0.1}
      />
    </Sphere>
  );
}

function OrbitingElements() {
  const group = useRef();
  
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });
  
  // Create orbiting elements
  const elements = [];
  const count = 30;
  
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const radius = 4;
    
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = (Math.random() - 0.5) * 2;
    
    const scale = 0.1 + Math.random() * 0.2;
    
    elements.push(
      <mesh 
        key={i} 
        position={[x, y, z]}
        scale={scale}
      >
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#4ade80" 
          emissive="#2d8652"
          emissiveIntensity={0.5}
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
    );
  }
  
  return <group ref={group}>{elements}</group>;
}

function FloatingParticles() {
  const particles = useRef();

  const particleCount = 500;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    const radius = 8 + Math.random() * 4;
    const theta = THREE.MathUtils.randFloatSpread(360); 
    const phi = THREE.MathUtils.randFloatSpread(360);
    
    positions[i3] = radius * Math.sin(theta) * Math.cos(phi);
    positions[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    positions[i3 + 2] = radius * Math.cos(theta);
    
    const color = new THREE.Color();
    color.setHSL(0.35 + Math.random() * 0.05, 0.7, 0.5 + Math.random() * 0.3);
    
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }
  
  useFrame(({ clock }) => {
    if (particles.current) {
      particles.current.rotation.y = clock.getElapsedTime() * 0.02;
      particles.current.rotation.z = clock.getElapsedTime() * 0.01;
    }
  });
  
  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export default function MissionScene() {
  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-green-900 to-black rounded-lg overflow-hidden shadow-xl">
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        
        <Planet />
        <OrbitingElements />
        <FloatingParticles />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.5}
          minPolarAngle={Math.PI / 2 - 0.5}
        />
      </Canvas>
    </div>
  );
} 