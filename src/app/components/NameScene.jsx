'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function FloatingLeaves() {
  const group = useRef();
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });
  
  // Create multiple leaves
  const leaves = [];
  for (let i = 0; i < 20; i++) {
    const scale = 0.3 + Math.random() * 0.5;
    const position = [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ];
    
    leaves.push(
      <Float 
        key={i}
        speed={1 + Math.random()} 
        rotationIntensity={0.2} 
        floatIntensity={0.3}
        position={position}
      >
        <mesh scale={scale}>
          <coneGeometry args={[0.5, 1, 4]} />
          <meshStandardMaterial 
            color={new THREE.Color().setHSL(0.33, 0.7, 0.3 + Math.random() * 0.4)} 
            flatShading 
          />
        </mesh>
      </Float>
    );
  }
  
  return <group ref={group}>{leaves}</group>;
}

function AnimatedTitle() {
  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.1}>
      <Text
        position={[0, 1, 0]}
        color="#ffffff"
        fontSize={1.5}
        font="sans-serif"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.1}
      >
        FlorAI
      </Text>
      <Text
        position={[0, -1, 0]}
        color="#b4ffa8"
        fontSize={0.7}
        font="sans-serif"
        anchorX="center"
        anchorY="middle"
      >
        The Future of Plant Care
      </Text>
    </Float>
  );
}

export default function NameScene() {
  return (
    <div className="w-full h-[700px] bg-gradient-to-b from-green-800/30 to-green-950/30 rounded-xl overflow-hidden shadow-2xl border border-green-700/30">
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <directionalLight position={[-5, 5, 5]} intensity={0.8} castShadow />
        
        <fog attach="fog" args={['#0f2417', 5, 20]} />
        
        <FloatingLeaves />
        <AnimatedTitle />
        
        {/* Question prompt with glow effect */}
        <group position={[0, 4.5, 0]}>
          <Text
            position={[0, 0, 0]}
            color="#ffffff"
            fontSize={0.8}
            anchorX="center"
            anchorY="middle"
            font="sans-serif"
          >
            What would you like to name your plant?
          </Text>
          <mesh position={[0, 0, -0.1]} scale={[8, 1.2, 0.1]}>
            <planeGeometry />
            <meshStandardMaterial 
              color="#064e3b" 
              emissive="#064e3b"
              emissiveIntensity={0.5}
              transparent
              opacity={0.6}
            />
          </mesh>
        </group>
        
        <Text
          position={[0, 3.5, 0]}
          color="#ffffff"
          fontSize={0.4}
          anchorX="center"
          anchorY="middle"
          font="sans-serif"
        >
          Type a name and press enter
        </Text>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 1.75}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
} 