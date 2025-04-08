import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

function Plant(props) {
  const group = useRef();
  // Attempt to load a plant model - fallback to enhanced geometry if not available
  const { nodes, materials } = useGLTF('/models/plant.glb', true) || {};
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 4) / 8;
    group.current.position.y = Math.sin(t / 2) / 10 - 0.2;
  });

  // If the model is successfully loaded, render it. Otherwise, render fallback geometry
  if (nodes && materials) {
    return (
      <group ref={group} {...props}>
        <primitive object={nodes.Plant} />
      </group>
    );
  } else {
    // Enhanced fallback geometry in case the model isn't available
    return (
      <group ref={group} {...props}>
        {/* Pot */}
        <mesh castShadow receiveShadow position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.3, 0.4, 0.5, 32]} />
          <meshStandardMaterial color="#A0522D" roughness={0.8} />
        </mesh>
        
        {/* Soil */}
        <mesh castShadow receiveShadow position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 0.1, 32]} />
          <meshStandardMaterial color="#3E2723" roughness={1} />
        </mesh>
        
        {/* Plant Stem */}
        <mesh castShadow position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.03, 0.05, 0.5, 8]} />
          <meshStandardMaterial color="#33691E" roughness={0.7} />
        </mesh>
        
        {/* Main Leaves */}
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const height = 0.2 + Math.random() * 0.4;
          return (
            <group 
              key={i} 
              position={[0, 0.3 + height/2, 0]}
              rotation={[Math.random() * 0.5, angle, Math.random() * 0.3]}
            >
              <mesh castShadow>
                <boxGeometry args={[0.1, height, 0.4]} />
                <meshStandardMaterial 
                  color={i % 2 === 0 ? "#4CAF50" : "#388E3C"} 
                  roughness={0.8} 
                />
              </mesh>
            </group>
          );
        })}
        
        {/* Small Leaves */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2 + 0.2;
          const posX = Math.sin(angle) * 0.2;
          const posZ = Math.cos(angle) * 0.2;
          const height = 0.1 + Math.random() * 0.2;
          
          return (
            <mesh 
              key={`leaf-small-${i}`} 
              castShadow 
              position={[posX, 0.4 + Math.random() * 0.3, posZ]}
              rotation={[
                Math.random() * 0.5 - 0.25, 
                Math.random() * Math.PI * 2, 
                Math.random() * 0.5 - 0.25
              ]}
            >
              <sphereGeometry args={[0.1, 8, 8]} />
              <meshStandardMaterial 
                color={i % 3 === 0 ? "#81C784" : "#66BB6A"} 
                roughness={0.7} 
              />
            </mesh>
          );
        })}
      </group>
    );
  }
}

// Team representation using simple geometries
function TeamFigures() {
  const group = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 5) * 0.3;
  });

  return (
    <group ref={group}>
      {/* Four figures representing the team members arranged in a circle */}
      {[...Array(4)].map((_, i) => {
        const angle = (i / 4) * Math.PI * 2;
        const radius = 1.5;
        return (
          <group 
            key={i} 
            position={[
              Math.sin(angle) * radius,
              0,
              Math.cos(angle) * radius
            ]}
            rotation={[0, -angle, 0]}
          >
            {/* Body */}
            <mesh castShadow>
              <capsuleGeometry args={[0.2, 0.6, 8, 16]} />
              <meshStandardMaterial color={
                i === 0 ? "#4CAF50" : 
                i === 1 ? "#2196F3" : 
                i === 2 ? "#FFC107" : 
                "#E91E63"
              } />
            </mesh>
            
            {/* Head */}
            <mesh castShadow position={[0, 0.6, 0]}>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshStandardMaterial color="#FFDEAD" />
            </mesh>
          </group>
        );
      })}
      
      {/* Center plant */}
      <Plant position={[0, -0.5, 0]} scale={[0.8, 0.8, 0.8]} />
    </group>
  );
}

export default function WhoWeAreScene() {
  return (
    <div className="w-full aspect-square md:aspect-video rounded-lg overflow-hidden shadow-lg">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <TeamFigures />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        <Environment preset="sunset" />
        
        {/* Ground plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </Canvas>
    </div>
  );
} 