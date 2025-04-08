'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, PerspectiveCamera, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

// Step visualization component
function InstallationStep({ position, number, title, isActive, onClick }) {
  const group = useRef();
  
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + number * 0.5) * 0.1;
    }
  });

  return (
    <group 
      ref={group} 
      position={position}
      onClick={onClick}
    >
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial 
          color={isActive ? "#4ade80" : "#16a34a"} 
          emissive={isActive ? "#4ade80" : "#16a34a"}
          emissiveIntensity={isActive ? 0.5 : 0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
      
      <Text
        position={[0, 0, 0.6]}
        color="#ffffff"
        fontSize={0.6}
        font="sans-serif"
        anchorX="center"
        anchorY="middle"
      >
        {number}
      </Text>
      
      <Text
        position={[0, -0.8, 0]}
        color="#ffffff"
        fontSize={0.3}
        font="sans-serif"
        maxWidth={2}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
    </group>
  );
}

// Device model that appears when a step is selected
function DeviceModel({ position, rotation, isVisible }) {
  const group = useRef();
  
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = rotation[1] + clock.getElapsedTime() * 0.5;
    }
  });
  
  if (!isVisible) return null;
  
  return (
    <group ref={group} position={position} rotation={rotation} scale={1.5}>
      {/* Simple device model */}
      <Box args={[1, 0.1, 0.5]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#34d399" 
          metalness={0.5}
          roughness={0.3}
        />
      </Box>
      
      {/* Sensor stick */}
      <Box args={[0.05, 1, 0.05]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#047857" />
      </Box>
      
      {/* Sensor node */}
      <Sphere args={[0.1, 16, 16]} position={[0, -1, 0]}>
        <meshStandardMaterial 
          color="#059669" 
          emissive="#059669"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </group>
  );
}

// Connection lines between steps
function ConnectionLines({ steps, activeStep }) {
  const lines = [];
  
  for (let i = 0; i < steps.length - 1; i++) {
    const start = new THREE.Vector3(...steps[i].position);
    const end = new THREE.Vector3(...steps[i + 1].position);
    
    const points = [];
    points.push(start);
    points.push(end);
    
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    
    const isActive = i < activeStep;
    
    lines.push(
      <line key={i} geometry={geometry}>
        <lineBasicMaterial 
          color={isActive ? "#4ade80" : "#1f2937"} 
          linewidth={2}
          opacity={isActive ? 1 : 0.5}
          transparent
        />
      </line>
    );
  }
  
  return <group>{lines}</group>;
}

// Background grid
function BackgroundGrid() {
  const grid = useRef();
  
  useFrame(({ clock }) => {
    if (grid.current) {
      grid.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });
  
  const lines = [];
  const size = 20;
  const divisions = 20;
  
  for (let i = -size; i <= size; i += size / divisions) {
    // Horizontal lines
    const hPoints = [];
    hPoints.push(new THREE.Vector3(-size, i, -10));
    hPoints.push(new THREE.Vector3(size, i, -10));
    const hGeometry = new THREE.BufferGeometry().setFromPoints(hPoints);
    
    // Vertical lines
    const vPoints = [];
    vPoints.push(new THREE.Vector3(i, -size, -10));
    vPoints.push(new THREE.Vector3(i, size, -10));
    const vGeometry = new THREE.BufferGeometry().setFromPoints(vPoints);
    
    lines.push(
      <line key={`h-${i}`} geometry={hGeometry}>
        <lineBasicMaterial color="#1f2937" transparent opacity={0.2} />
      </line>
    );
    
    lines.push(
      <line key={`v-${i}`} geometry={vGeometry}>
        <lineBasicMaterial color="#1f2937" transparent opacity={0.2} />
      </line>
    );
  }
  
  return <group ref={grid}>{lines}</group>;
}

export default function InstallScene() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    { position: [-4, 0, 0], number: 1, title: "Unbox Device" },
    { position: [-2, 0, 0], number: 2, title: "Download App" },
    { position: [0, 0, 0], number: 3, title: "Sync Device" },
    { position: [2, 0, 0], number: 4, title: "Insert Sensor" },
    { position: [4, 0, 0], number: 5, title: "Monitor Plants" }
  ];
  
  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-gray-900/70 to-green-900/70 rounded-xl overflow-hidden shadow-2xl border border-green-700/30">
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <spotLight position={[0, 5, 10]} intensity={0.9} angle={0.3} penumbra={1} color="#4ade80" />
        
        <fog attach="fog" args={['#0a2724', 10, 20]} />
        
        <BackgroundGrid />
        <ConnectionLines steps={steps} activeStep={activeStep} />
        
        {steps.map((step, index) => (
          <InstallationStep
            key={index}
            position={step.position}
            number={step.number}
            title={step.title}
            isActive={index === activeStep}
            onClick={() => setActiveStep(index)}
          />
        ))}
        
        <DeviceModel 
          position={[0, -2, 0]} 
          rotation={[0, 0, 0]} 
          isVisible={activeStep > 0}
        />
        
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