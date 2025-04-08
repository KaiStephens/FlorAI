'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, PerspectiveCamera, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// Animated feature box that lights up on hover
function FeatureBox({ position, title, color, hoverColor, scale = 1, onClick }) {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
      mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
      mesh.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() + position[0]) * 0.1;
    }
  });

  return (
    <group>
      <RoundedBox
        args={[1.8, 1.8, 0.2]}
        radius={0.1}
        position={position}
        ref={mesh}
        scale={active ? scale * 1.2 : scale}
        onClick={() => {
          setActive(!active);
          onClick && onClick();
        }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial 
          color={hovered ? hoverColor : color} 
          metalness={0.5}
          roughness={0.2}
          emissive={hovered ? hoverColor : '#000000'}
          emissiveIntensity={hovered ? 0.5 : 0}
        />
      </RoundedBox>
      <Text
        position={[position[0], position[1], position[2] + 0.15]}
        color="#ffffff"
        fontSize={0.15}
        maxWidth={1.5}
        lineHeight={1.2}
        font="/fonts/Inter-Medium.woff"
        anchorX="center"
        anchorY="middle"
        textAlign="center"
      >
        {title}
      </Text>
    </group>
  );
}

// Light beams that connect features
function LightBeams() {
  const mesh = useRef();
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });
  
  const beams = [];
  const positions = [
    [-2, 1.5, 0],
    [-2, -1.5, 0],
    [2, 1.5, 0],
    [2, -1.5, 0],
    [0, 0, 0]
  ];
  
  // Connect all positions to the center
  for (let i = 0; i < positions.length - 1; i++) {
    const start = new THREE.Vector3(...positions[i]);
    const end = new THREE.Vector3(...positions[positions.length - 1]);
    
    // Create a line
    const points = [];
    points.push(start);
    points.push(end);
    
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    
    beams.push(
      <line key={i} geometry={geometry}>
        <lineBasicMaterial 
          color="#4ade80" 
          transparent 
          opacity={0.3}
          linewidth={1}
        />
      </line>
    );
  }
  
  return <group ref={mesh}>{beams}</group>;
}

// Background particles
function BackgroundParticles() {
  const particles = useRef();
  
  useFrame(({ clock }) => {
    if (particles.current) {
      particles.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });
  
  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 15;
    positions[i3 + 1] = (Math.random() - 0.5) * 15;
    positions[i3 + 2] = (Math.random() - 0.5) * 15 - 5;
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
        opacity={0.6}
      />
    </points>
  );
}

export default function FeaturesScene() {
  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-green-800 to-green-950 rounded-lg overflow-hidden shadow-xl">
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={60} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <spotLight position={[0, 0, 10]} intensity={0.5} angle={0.3} penumbra={1} />
        
        <BackgroundParticles />
        <LightBeams />
        
        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
          <Text
            position={[0, 0, 0]}
            color="#ffffff"
            fontSize={0.3}
            font="/fonts/Inter-Bold.woff"
            anchorX="center"
            anchorY="middle"
          >
            AI CORE
          </Text>
        </Float>
        
        <FeatureBox 
          position={[-2, 1.5, 0]} 
          title="Real-time Monitoring" 
          color="#16a34a" 
          hoverColor="#4ade80"
        />
        
        <FeatureBox 
          position={[2, 1.5, 0]} 
          title="Smart Recommendations" 
          color="#16a34a" 
          hoverColor="#4ade80"
        />
        
        <FeatureBox 
          position={[-2, -1.5, 0]} 
          title="Plant Database" 
          color="#16a34a" 
          hoverColor="#4ade80"
        />
        
        <FeatureBox 
          position={[2, -1.5, 0]} 
          title="Care Scheduling" 
          color="#16a34a" 
          hoverColor="#4ade80"
        />
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
} 