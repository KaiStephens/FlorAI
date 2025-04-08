'use client';

import React, { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Sphere, Box, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

// Plant model with sensor
function PlantWithSensor({ position, rotation, isActive }) {
  const group = useRef();
  
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });
  
  return (
    <group ref={group} position={position} rotation={rotation}>
      {/* Pot */}
      <Cylinder args={[0.5, 0.7, 0.7, 32]} position={[0, -0.35, 0]}>
        <meshStandardMaterial 
          color="#be7857"
          roughness={0.8}
        />
      </Cylinder>
      
      {/* Plant */}
      <group position={[0, 0.4, 0]}>
        {/* Stem */}
        <Cylinder args={[0.05, 0.05, 1, 8]} position={[0, 0.2, 0]}>
          <meshStandardMaterial color="#2e7d32" />
        </Cylinder>
        
        {/* Leaves */}
        <Sphere args={[0.3, 16, 16]} position={[0, 0.7, 0]} scale={[1, 0.5, 1]}>
          <meshStandardMaterial 
            color="#4caf50" 
            roughness={0.7}
          />
        </Sphere>
        <Sphere args={[0.25, 16, 16]} position={[-0.25, 0.5, 0.1]} scale={[1, 0.4, 1]}>
          <meshStandardMaterial 
            color="#388e3c" 
            roughness={0.7}
          />
        </Sphere>
        <Sphere args={[0.2, 16, 16]} position={[0.2, 0.4, -0.1]} scale={[1, 0.3, 1]}>
          <meshStandardMaterial 
            color="#66bb6a" 
            roughness={0.7}
          />
        </Sphere>
      </group>
      
      {/* Soil */}
      <Cylinder args={[0.48, 0.48, 0.2, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#5d4037"
          roughness={1}
        />
      </Cylinder>
      
      {/* Sensor */}
      <group position={[0.3, 0.2, 0]}>
        <Box args={[0.1, 0.1, 0.1]} position={[0, 0.3, 0]}>
          <meshStandardMaterial 
            color="#34d399" 
            metalness={0.5}
            roughness={0.3}
            emissive={isActive ? "#34d399" : "#000000"}
            emissiveIntensity={isActive ? 0.5 : 0}
          />
        </Box>
        <Cylinder args={[0.02, 0.02, 0.6, 8]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#047857" />
        </Cylinder>
      </group>
    </group>
  );
}

// Hub model
function HubModel({ position, isActive }) {
  const hub = useRef();
  
  useFrame(({ clock }) => {
    if (hub.current) {
      hub.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });
  
  return (
    <group position={position}>
      <Box 
        ref={hub}
        args={[1, 0.2, 0.6]} 
        radius={0.05}
      >
        <meshStandardMaterial 
          color="#059669" 
          metalness={0.7}
          roughness={0.2}
          emissive={isActive ? "#34d399" : "#000000"}
          emissiveIntensity={isActive ? 0.5 : 0}
        />
      </Box>
      
      {/* Status light */}
      <Sphere args={[0.05, 16, 16]} position={[0.4, 0.15, 0]}>
        <meshStandardMaterial 
          color={isActive ? "#4ade80" : "#6b7280"} 
          emissive={isActive ? "#4ade80" : "#000000"}
          emissiveIntensity={isActive ? 1 : 0}
        />
      </Sphere>
    </group>
  );
}

// Cloud processing model
function CloudModel({ position, isActive }) {
  const cloud = useRef();
  
  useFrame(({ clock }) => {
    if (cloud.current) {
      cloud.current.rotation.y = clock.getElapsedTime() * 0.1;
      cloud.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });
  
  return (
    <group ref={cloud} position={position}>
      {/* Base cloud shape */}
      <Sphere args={[0.6, 16, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color={isActive ? "#d1fae5" : "#e5e7eb"} 
          transparent
          opacity={0.9}
          emissive={isActive ? "#10b981" : "#000000"}
          emissiveIntensity={isActive ? 0.2 : 0}
        />
      </Sphere>
      <Sphere args={[0.4, 16, 16]} position={[0.4, 0.1, 0]}>
        <meshStandardMaterial 
          color={isActive ? "#d1fae5" : "#e5e7eb"} 
          transparent
          opacity={0.9}
          emissive={isActive ? "#10b981" : "#000000"}
          emissiveIntensity={isActive ? 0.2 : 0}
        />
      </Sphere>
      <Sphere args={[0.4, 16, 16]} position={[-0.4, 0.1, 0]}>
        <meshStandardMaterial 
          color={isActive ? "#d1fae5" : "#e5e7eb"} 
          transparent
          opacity={0.9}
          emissive={isActive ? "#10b981" : "#000000"}
          emissiveIntensity={isActive ? 0.2 : 0}
        />
      </Sphere>
      <Sphere args={[0.35, 16, 16]} position={[0, 0.3, 0]}>
        <meshStandardMaterial 
          color={isActive ? "#d1fae5" : "#e5e7eb"} 
          transparent
          opacity={0.9}
          emissive={isActive ? "#10b981" : "#000000"}
          emissiveIntensity={isActive ? 0.2 : 0}
        />
      </Sphere>
      
      {/* Data processing symbol */}
      <group position={[0, 0, 0]} scale={0.4}>
        <Box args={[0.8, 0.15, 0.15]} position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#047857" />
        </Box>
        <Box args={[0.8, 0.15, 0.15]} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 3]}>
          <meshStandardMaterial color="#047857" />
        </Box>
        <Box args={[0.8, 0.15, 0.15]} position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 3]}>
          <meshStandardMaterial color="#047857" />
        </Box>
      </group>
    </group>
  );
}

// Phone model
function PhoneModel({ position, isActive }) {
  const phone = useRef();
  
  useFrame(({ clock }) => {
    if (phone.current) {
      phone.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
      phone.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.7) * 0.1;
    }
  });
  
  return (
    <group ref={phone} position={position}>
      {/* Phone body */}
      <Box args={[0.6, 1.2, 0.1]} radius={0.05}>
        <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.2} />
      </Box>
      
      {/* Screen */}
      <Box args={[0.52, 1.1, 0.01]} position={[0, 0, 0.06]}>
        <meshStandardMaterial 
          color={isActive ? "#dcfce7" : "#94a3b8"} 
          emissive={isActive ? "#dcfce7" : "#000000"}
          emissiveIntensity={isActive ? 0.5 : 0}
        />
      </Box>
      
      {/* App UI elements */}
      {isActive && (
        <group position={[0, 0, 0.07]}>
          <Box args={[0.4, 0.15, 0.01]} position={[0, 0.4, 0]}>
            <meshStandardMaterial color="#059669" />
          </Box>
          <Box args={[0.4, 0.15, 0.01]} position={[0, 0.2, 0]}>
            <meshStandardMaterial color="#10b981" />
          </Box>
          <Box args={[0.4, 0.15, 0.01]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#34d399" />
          </Box>
          <Box args={[0.4, 0.15, 0.01]} position={[0, -0.2, 0]}>
            <meshStandardMaterial color="#6ee7b7" />
          </Box>
        </group>
      )}
    </group>
  );
}

// Main scene component
function MainScene() {
  const [activeStep, setActiveStep] = useState(1);
  
  useFrame(({ clock }) => {
    const time = Math.floor(clock.getElapsedTime() / 3) % 4;
    setActiveStep(time + 1);
  });
  
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
      
      {/* Background elements */}
      <fog attach="fog" args={['#0f172a', 10, 20]} />
      
      {/* Plants with sensors */}
      <PlantWithSensor 
        position={[-4, -1, 0]} 
        rotation={[0, Math.PI * 0.1, 0]} 
        isActive={activeStep >= 1}
      />
      
      {/* Hub */}
      <HubModel 
        position={[-1.5, -1, 0]} 
        isActive={activeStep >= 2}
      />
      
      {/* Cloud */}
      <CloudModel 
        position={[0, 1, 0]} 
        isActive={activeStep >= 3}
      />
      
      {/* Phone */}
      <PhoneModel 
        position={[3, -0.5, 0]} 
        isActive={activeStep >= 4}
      />
      
      {/* Simple step markers - no Text component, using meshes instead */}
      <group position={[0, -2.5, 0]}>
        <group position={[-4, 0, 0]}>
          <Cylinder 
            args={[0.4, 0.4, 0.1, 32]} 
            position={[0, 0, 0]}
          >
            <meshStandardMaterial 
              color={activeStep >= 1 ? "#4ade80" : "#9ca3af"} 
              emissive={activeStep >= 1 ? "#4ade80" : "#000000"}
              emissiveIntensity={activeStep >= 1 ? 0.5 : 0}
            />
          </Cylinder>
        </group>
        
        <group position={[-1.5, 0, 0]}>
          <Cylinder 
            args={[0.4, 0.4, 0.1, 32]} 
            position={[0, 0, 0]}
          >
            <meshStandardMaterial 
              color={activeStep >= 2 ? "#4ade80" : "#9ca3af"} 
              emissive={activeStep >= 2 ? "#4ade80" : "#000000"}
              emissiveIntensity={activeStep >= 2 ? 0.5 : 0}
            />
          </Cylinder>
        </group>
        
        <group position={[0, 0, 0]}>
          <Cylinder 
            args={[0.4, 0.4, 0.1, 32]} 
            position={[0, 0, 0]}
          >
            <meshStandardMaterial 
              color={activeStep >= 3 ? "#4ade80" : "#9ca3af"} 
              emissive={activeStep >= 3 ? "#4ade80" : "#000000"}
              emissiveIntensity={activeStep >= 3 ? 0.5 : 0}
            />
          </Cylinder>
        </group>
        
        <group position={[3, 0, 0]}>
          <Cylinder 
            args={[0.4, 0.4, 0.1, 32]} 
            position={[0, 0, 0]}
          >
            <meshStandardMaterial 
              color={activeStep >= 4 ? "#4ade80" : "#9ca3af"} 
              emissive={activeStep >= 4 ? "#4ade80" : "#000000"}
              emissiveIntensity={activeStep >= 4 ? 0.5 : 0}
            />
          </Cylinder>
        </group>
      </group>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 2 + 0.5}
        minPolarAngle={Math.PI / 2 - 0.5}
      />
    </>
  );
}

export default function HowItWorksScene() {
  const [canvasError, setCanvasError] = useState(false);
  
  // Error boundary for the canvas
  const handleError = () => {
    setCanvasError(true);
  };
  
  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-gray-900/70 to-green-900/70 rounded-xl overflow-hidden shadow-2xl border border-green-700/30">
      {canvasError ? (
        <div className="w-full h-full flex flex-col items-center justify-center text-white">
          <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">FlorAI Smart Monitoring System</h3>
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl px-4">
            <div className="flex-1 p-6 bg-green-800/40 rounded-xl border-l-2 border-green-400 shadow-lg backdrop-blur-sm">
              <h4 className="font-bold mb-2 text-green-300">1. Sensors</h4>
              <p className="text-gray-200">Precision sensors capture soil moisture, light levels, and temperature data from your plants.</p>
            </div>
            <div className="flex-1 p-6 bg-green-800/40 rounded-xl border-l-2 border-green-400 shadow-lg backdrop-blur-sm">
              <h4 className="font-bold mb-2 text-green-300">2. Smart Hub</h4>
              <p className="text-gray-200">Central hub collects and processes data from all connected sensors.</p>
            </div>
            <div className="flex-1 p-6 bg-green-800/40 rounded-xl border-l-2 border-green-400 shadow-lg backdrop-blur-sm">
              <h4 className="font-bold mb-2 text-green-300">3. App</h4>
              <p className="text-gray-200">Mobile app provides personalized plant care recommendations.</p>
            </div>
          </div>
        </div>
      ) : (
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white">Loading...</div>}>
          <Canvas 
            className="w-full h-full" 
            onError={handleError}
            gl={{ 
              alpha: true,
              antialias: true,
              preserveDrawingBuffer: true,
              failIfMajorPerformanceCaveat: false,
            }}
            shadows
          >
            <MainScene />
          </Canvas>
        </Suspense>
      )}
    </div>
  );
} 