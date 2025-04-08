import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

function Plant(props) {
  const group = useRef();
  // Attempt to load a plant model - fallback to simple geometry if not available
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
    // Fallback geometry in case the model isn't available
    return (
      <group ref={group} {...props}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.2, 0.4, 0.5, 32]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <group position={[0, 0.4, 0]}>
          {[...Array(5)].map((_, i) => (
            <mesh 
              key={i} 
              castShadow 
              position={[
                Math.sin(i / 5 * Math.PI * 2) * 0.4,
                0.5,
                Math.cos(i / 5 * Math.PI * 2) * 0.4
              ]}
            >
              <sphereGeometry args={[0.4, 16, 16]} />
              <meshStandardMaterial color="#228B22" />
            </mesh>
          ))}
        </group>
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