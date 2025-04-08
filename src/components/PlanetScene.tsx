'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function PlanetScene() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        
        // Add fog for depth
        scene.fog = new THREE.FogExp2(0x000511, 0.01);
        
        // Use a wider field of view to capture more of the scene
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        // Enhanced renderer with better shadows
        const renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            alpha: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000511);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.2;
        containerRef.current.appendChild(renderer.domElement);

        // Enhanced Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 2);
        pointLight.position.set(25, 5, 15); // Position light to illuminate planet from right
        scene.add(pointLight);

        // Add a second point light for better illumination
        const pointLight2 = new THREE.PointLight(0xc4f1de, 1.5);
        pointLight2.position.set(-10, -5, -5);
        scene.add(pointLight2);

        // Create stars - simple and spread throughout the scene
        const createStarField = () => {
            const starCount = 3000;
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(starCount * 3);
            
            // Create stars with a wider distribution
            for (let i = 0; i < starCount; i++) {
                // Distribute stars in a cube formation that extends well beyond the camera view
                positions[i * 3] = (Math.random() - 0.5) * 200;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
            }
            
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            
            // Use a single star size instead of different sizes
            const material = new THREE.PointsMaterial({ 
                color: 0xffffff, 
                size: 0.2, // Smaller, equal-sized stars
                transparent: true, 
                opacity: 0.8 
            });
            
            const stars = new THREE.Points(geometry, material);
            scene.add(stars);
            
            return [stars]; // Return as an array to maintain compatibility with animation code
        };
        
        const starGroups = createStarField();

        // Create planet (on the right side)
        const planetGeometry = new THREE.SphereGeometry(12, 64, 64);
        const planetMaterial = new THREE.MeshPhongMaterial({
            map: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg'),
            bumpMap: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg'),
            bumpScale: 0.05,
            specularMap: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg'),
            specular: new THREE.Color('grey'),
            shininess: 15
        });
        const planet = new THREE.Mesh(planetGeometry, planetMaterial);
        scene.add(planet);

        // Add plant-like atmosphere
        const atmosphereGeometry = new THREE.SphereGeometry(12.4, 64, 64);
        const atmosphereMaterial = new THREE.ShaderMaterial({
            transparent: true,
            side: THREE.BackSide,
            vertexShader: `
                varying vec3 vNormal;
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec3 vNormal;
                void main() {
                    float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
                    gl_FragColor = vec4(0.4, 0.8, 0.4, 1.0) * intensity;
                }
            `
        });
        const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
        scene.add(atmosphere);

        // Camera position - adjusted for the much larger and further-right planet
        camera.position.set(-20, 0, 25);
        // Look at a point much further to the right
        camera.lookAt(new THREE.Vector3(60, 0, 0));

        // Animation
        // Track target positions for smoother interpolation
        let targetX = 20;
        let targetZ = 30;
        let targetRotationY = 0.5; // Add target rotation for smooth transitions
        const interpolationSpeed = 0.05; // Controls smoothness of transitions
        
        function animate() {
            requestAnimationFrame(animate);
            
            // Smoothly interpolate current position toward target position
            const currentX = planet.position.x;
            const currentZ = planet.position.z;
            
            // Interpolate X position (right movement)
            if (Math.abs(targetX - currentX) > 0.01) {
                planet.position.x += (targetX - currentX) * interpolationSpeed;
            }
            
            // Interpolate Z position (distance)
            if (Math.abs(targetZ - currentZ) > 0.01) {
                planet.position.z += (targetZ - currentZ) * interpolationSpeed;
            }
            
            // Interpolate rotation for smooth transitions
            const rotationDelta = targetRotationY - planet.rotation.y;
            if (Math.abs(rotationDelta) > 0.01) {
                planet.rotation.y += rotationDelta * interpolationSpeed;
                atmosphere.rotation.y = planet.rotation.y;
            }
            
            // Keep atmosphere with planet
            atmosphere.position.copy(planet.position);
            
            // Rotate star fields slightly for subtle movement
            starGroups.forEach((stars, i) => {
                stars.rotation.y += 0.0001 * (i + 1);
                stars.rotation.x += 0.00005 * (i + 1);
            });
            
            renderer.render(scene, camera);
        }
        
        // Handle wheel events for rotation - this is more direct than scroll
        const handleWheel = (event) => {
            // Determine direction and force of wheel event
            const delta = event.deltaY;
            
            // Apply rotation directly to the planet (via target)
            targetRotationY += delta * 0.002;
            
            // Check scroll direction
            if (delta > 0) {
                // Scrolling down - move planet closer (decrease z) - faster
                if (targetZ > 0) {
                    // Decrease z proportional to rotation amount but always moving forward
                    const zDelta = Math.abs(delta) * 0.03; // Increased from 0.01 to 0.03
                    targetZ = Math.max(0, targetZ - zDelta);
                }
            } else if (delta < 0) {
                // Scrolling up - move planet farther (increase z)
                if (targetZ < 30) {
                    // Increase z proportional to rotation amount
                    const zDelta = Math.abs(delta) * 0.03; // Increased from 0.01 to 0.03
                    targetZ = Math.min(30, targetZ + zDelta);
                }
            }
        };
        
        // Track touch position for mobile devices
        let touchStartY = 0;
        
        // Handle touch events for mobile
        const handleTouchStart = (event) => {
            touchStartY = event.touches[0].clientY;
        };
        
        const handleTouchMove = (event) => {
            // Skip if no starting position
            if (touchStartY === 0) return;
            
            // Calculate delta (negative to match wheel direction)
            const touchDelta = -(event.touches[0].clientY - touchStartY) * 10;
            
            // Apply rotation just like with wheel events
            targetRotationY += touchDelta * 0.002;
            
            // Check scroll direction
            if (touchDelta > 0) {
                // Scrolling down - move planet closer (decrease z)
                if (targetZ > 0) {
                    // Decrease z proportional to rotation amount
                    const zDelta = Math.abs(touchDelta) * 0.03; // Increased from 0.01 to 0.03
                    targetZ = Math.max(0, targetZ - zDelta);
                }
            } else if (touchDelta < 0) {
                // Scrolling up - move planet farther (increase z)
                if (targetZ < 30) {
                    // Increase z proportional to rotation amount
                    const zDelta = Math.abs(touchDelta) * 0.03; // Increased from 0.01 to 0.03
                    targetZ = Math.min(30, targetZ + zDelta);
                }
            }
            
            // Update start position
            touchStartY = event.touches[0].clientY;
        };
        
        const handleTouchEnd = () => {
            touchStartY = 0;
        };

        // Handle scroll events to update planet position
        const handleScroll = () => {
            // Get current scroll position as percentage of page height
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollPercent = Math.min(scrollTop / scrollHeight, 1);
            
            // Calculate x-position: 20 at top of page, gradually increasing to 100 as we scroll
            let xPos = 20;
            if (scrollPercent > 0.1) {
                // Map 10%-30% scroll to full x-position change (20 to 100) - much faster
                // Decreased from 0.4 to 0.2 to make it move even faster
                const xScrollPercent = Math.min((scrollPercent - 0.1) / 0.2, 1);
                xPos = 20 + (80 * xScrollPercent); // Move from 20 to 100
            }
            
            // Update target X position - actual movement happens in animation loop
            targetX = xPos;
        };

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            
            // Update planet position on resize too
            handleScroll();
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Add wheel event listener to the container
        window.addEventListener('wheel', handleWheel, { passive: true });
        
        // Add touch events for mobile
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });
        
        // Initial rotation and position
        targetRotationY = 0.5;
        planet.rotation.y = 0.5;
        atmosphere.rotation.y = 0.5;
        
        // Set initial target positions (actual planet movement will be done smoothly in animation loop)
        targetX = 20;
        targetZ = 30;
        planet.position.set(20, 0, 30); // Set initial position to match targets
        atmosphere.position.copy(planet.position);
        
        // Start animation
        animate();

        // Create an IntersectionObserver to rotate the planet when page sections come into view
        // This provides a backup method in case wheel events don't work well
        setTimeout(() => {
            const sections = document.querySelectorAll('section');
            if (sections.length > 0) {
                let currentSectionIndex = 0;
                
                const sectionObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // Get the section index
                            const section = entry.target as HTMLElement;
                            const index = Array.from(sections).indexOf(section);
                            
                            // Determine rotation based on section index
                            // Ensure we only rotate if we're moving to a new section
                            if (index !== currentSectionIndex) {
                                // Set target rotation - actual rotation will happen smoothly in animation loop
                                targetRotationY = Math.PI / 2 * index;
                                currentSectionIndex = index;
                            }
                        }
                    });
                }, { threshold: 0.3 }); // Trigger when 30% of section is visible
                
                // Observe all sections
                sections.forEach(section => {
                    sectionObserver.observe(section);
                });
            }
        }, 1000); // Wait for sections to be ready

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
            containerRef.current?.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return (
        <div 
            ref={containerRef} 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1
            }}
        />
    );
} 