'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, PerspectiveCamera, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

// Individual team member avatar
function TeamMember({ position, color, name, role, isActive, onClick }) {
  const avatar = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame(({ clock }) => {
    if (avatar.current) {
      avatar.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5 + position[0]) * 0.1;
      
      if (isActive) {
        avatar.current.rotation.y = clock.getElapsedTime() * 0.5;
      }
    }
  });
  
  return (
    <group position={position} onClick={onClick}>
      <Sphere 
        ref={avatar}
        args={[0.6, 32, 32]} 
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={isActive ? 0.5 : (hovered ? 0.3 : 0.1)}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>
      
      <Text
        position={[0, -1.1, 0]}
        color="#ffffff"
        fontSize={0.2}
        font="sans-serif"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
      
      <Text
        position={[0, -1.4, 0]}
        color="#d1d5db"
        fontSize={0.15}
        font="sans-serif"
        anchorX="center"
        anchorY="middle"
      >
        {role}
      </Text>
    </group>
  );
}

// Central company logo
function CompanyLogo({ position }) {
  const logo = useRef();
  
  useFrame(({ clock }) => {
    if (logo.current) {
      logo.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });
  
  return (
    <group ref={logo} position={position}>
      <Box args={[1.5, 1.5, 0.2]} radius={0.3}>
        <meshStandardMaterial 
          color="#10b981" 
          metalness={0.6}
          roughness={0.2}
          emissive="#10b981"
          emissiveIntensity={0.5}
        />
      </Box>
      
      <Text
        position={[0, 0, 0.15]}
        color="#ffffff"
        fontSize={0.4}
        font="sans-serif"
        anchorX="center"
        anchorY="middle"
      >
        FlorAI
      </Text>
    </group>
  );
}

// Connection lines between team members and the center
function ConnectionLines({ memberPositions, activeIndex }) {
  const centerPosition = [0, 0, 0];
  const lines = [];
  
  for (let i = 0; i < memberPositions.length; i++) {
    const start = new THREE.Vector3(...memberPositions[i]);
    const end = new THREE.Vector3(...centerPosition);
    
    // Adjust starting point to be at the edge of the avatar sphere
    const direction = new THREE.Vector3().subVectors(end, start).normalize();
    const startAdjusted = new THREE.Vector3().copy(start).add(direction.multiplyScalar(0.7));
    
    const points = [];
    points.push(startAdjusted);
    points.push(end);
    
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    
    lines.push(
      <line key={i} geometry={geometry}>
        <lineBasicMaterial 
          color={i === activeIndex ? "#4ade80" : "#6b7280"} 
          linewidth={2}
          opacity={i === activeIndex ? 1 : 0.4}
          transparent
        />
      </line>
    );
  }
  
  return <group>{lines}</group>;
}

// Background particle system
function BackgroundParticles() {
  const particles = useRef();
  
  useFrame(({ clock }) => {
    if (particles.current) {
      particles.current.rotation.y = clock.getElapsedTime() * 0.05;
      particles.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.1;
    }
  });
  
  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    
    const radius = 10 + Math.random() * 5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);
    
    const c = new THREE.Color();
    c.setHSL(0.35 + Math.random() * 0.1, 0.7, 0.6);
    
    colors[i3] = c.r;
    colors[i3 + 1] = c.g;
    colors[i3 + 2] = c.b;
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
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function TeamScene() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const teamMembers = [
    { position: [3, 0, 0], color: "#059669", name: "Alex Chen", role: "CEO & Founder" },
    { position: [1.5, 2.6, 0], color: "#10b981", name: "Priya Shah", role: "CTO" },
    { position: [-1.5, 2.6, 0], color: "#34d399", name: "James Wilson", role: "Head of Design" },
    { position: [-3, 0, 0], color: "#6ee7b7", name: "Maria Garcia", role: "Plant Scientist" },
    { position: [-1.5, -2.6, 0], color: "#a7f3d0", name: "David Kim", role: "ML Engineer" },
    { position: [1.5, -2.6, 0], color: "#d1fae5", name: "Sofia Johnson", role: "Operations" }
  ];
  
  const memberPositions = teamMembers.map(member => member.position);
  
  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-gray-900/70 to-green-900/70 rounded-xl overflow-hidden shadow-2xl border border-green-700/30">
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[0, 0, 5]} intensity={0.6} />
        <spotLight position={[0, 5, 5]} intensity={0.5} angle={0.3} penumbra={1} color="#4ade80" />
        
        <fog attach="fog" args={['#0a2724', 8, 20]} />
        
        <BackgroundParticles />
        <ConnectionLines memberPositions={memberPositions} activeIndex={activeIndex} />
        <CompanyLogo position={[0, 0, 0]} />
        
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            position={member.position}
            color={member.color}
            name={member.name}
            role={member.role}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          />
        ))}
        
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