'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, PerspectiveCamera, Sphere, Box, Cylinder } from '@react-three/drei';
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
      
      <Text
        position={[0, 0.2, 0]}
        rotation={[0, 0, 0]}
        color="#ffffff"
        fontSize={0.15}
        font="/fonts/Inter-Bold.woff"
        anchorX="center"
        anchorY="middle"
      >
        FlorAI
      </Text>
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

// Data flow lines
function DataFlow({ start, end, isActive }) {
  const flow = useRef();
  const [points, setPoints] = useState([]);
  
  useFrame(({ clock }) => {
    if (flow.current) {
      // Create a curved path between points
      const time = clock.getElapsedTime();
      const startVec = new THREE.Vector3(...start);
      const endVec = new THREE.Vector3(...end);
      
      // Middle control point with some height
      const control = new THREE.Vector3(
        (startVec.x + endVec.x) / 2,
        Math.max(startVec.y, endVec.y) + 1,
        (startVec.z + endVec.z) / 2
      );
      
      // Create curve
      const curve = new THREE.QuadraticBezierCurve3(startVec, control, endVec);
      
      // Generate points along curve
      const newPoints = [];
      for (let i = 0; i <= 20; i++) {
        newPoints.push(curve.getPoint(i / 20));
      }
      
      setPoints(newPoints);
    }
  });
  
  if (!isActive) return null;
  
  return (
    <group ref={flow}>
      <line>
        <bufferGeometry attach="geometry" 
          onUpdate={(self) => {
            if (points.length > 0) {
              self.setFromPoints(points);
            }
          }}
        />
        <lineBasicMaterial 
          color="#4ade80" 
          linewidth={2}
          transparent
          opacity={0.7}
        />
      </line>
      
      {/* Data packets moving along the path */}
      {points.length > 0 && [0.2, 0.5, 0.8].map((offset, i) => {
        const position = (() => {
          const time = Date.now() * 0.001;
          const t = ((time + offset) % 1);
          const index = Math.floor(t * points.length);
          return points[Math.min(index, points.length - 1)];
        })();
        
        return (
          <Sphere 
            key={i}
            args={[0.07, 8, 8]}
            position={position}
          >
            <meshStandardMaterial 
              color="#4ade80" 
              emissive="#4ade80"
              emissiveIntensity={1}
            />
          </Sphere>
        );
      })}
    </group>
  );
}

export default function HowItWorksScene() {
  const [activeStep, setActiveStep] = useState(1);
  
  // Advance step every 3 seconds
  useFrame(({ clock }) => {
    const time = Math.floor(clock.getElapsedTime() / 3) % 4;
    setActiveStep(time + 1);
  });
  
  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-gray-900 to-green-900 rounded-lg overflow-hidden shadow-xl">
      <Canvas className="w-full h-full">
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
        
        {/* Data flows */}
        <DataFlow 
          start={[-3.5, -0.8, 0]} 
          end={[-1.5, -0.9, 0]} 
          isActive={activeStep >= 2}
        />
        <DataFlow 
          start={[-1.5, -0.8, 0]} 
          end={[0, 0.8, 0]} 
          isActive={activeStep >= 3}
        />
        <DataFlow 
          start={[0, 0.8, 0]} 
          end={[3, -0.5, 0]} 
          isActive={activeStep >= 4}
        />
        
        {/* Labels */}
        <group position={[0, -2.5, 0]}>
          <Text
            position={[-4, 0, 0]}
            color={activeStep >= 1 ? "#4ade80" : "#9ca3af"}
            fontSize={0.3}
            font="/fonts/Inter-Medium.woff"
            anchorX="center"
            anchorY="middle"
          >
            1. Sensors
          </Text>
          <Text
            position={[-1.5, 0, 0]}
            color={activeStep >= 2 ? "#4ade80" : "#9ca3af"}
            fontSize={0.3}
            font="/fonts/Inter-Medium.woff"
            anchorX="center"
            anchorY="middle"
          >
            2. Hub
          </Text>
          <Text
            position={[0, 0, 0]}
            color={activeStep >= 3 ? "#4ade80" : "#9ca3af"}
            fontSize={0.3}
            font="/fonts/Inter-Medium.woff"
            anchorX="center"
            anchorY="middle"
          >
            3. AI Processing
          </Text>
          <Text
            position={[3, 0, 0]}
            color={activeStep >= 4 ? "#4ade80" : "#9ca3af"}
            fontSize={0.3}
            font="/fonts/Inter-Medium.woff"
            anchorX="center"
            anchorY="middle"
          >
            4. Mobile App
          </Text>
        </group>
        
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