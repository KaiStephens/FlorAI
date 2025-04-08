'use client';

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import PlanetScene from '../components/PlanetScene';

// Dynamically import the Scene component with no SSR to avoid Three.js server-side issues
const Scene = dynamic(() => import('./components/Scene'), { ssr: false });

export default function Home() {
  return (
    <>
      <main className="relative">
        {/* Fixed background with planet */}
        <PlanetScene />

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-start justify-center min-h-screen pl-16 md:pl-28">
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg max-w-2xl border-l-4 border-green-400">
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 animate-fade-in-up drop-shadow-[0_0_15px_rgba(0,255,0,0.7)]">
              Green Planet
            </h1>
            <p className="text-3xl md:text-4xl text-green-300 animate-fade-in-up-delayed drop-shadow-[0_0_10px_rgba(168,230,207,0.7)]">
              Growing a Sustainable Future
            </p>
            <div className="mt-10 opacity-0 animate-fade-in-up-delayed2">
              <Link href="#about" className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-green-400/30 mr-4">
                Explore
              </Link>
              <Link href="#mission" className="border-2 border-green-400 text-green-400 hover:bg-green-400/20 text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative z-10 min-h-screen flex items-center py-32 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="fade-in-section">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 border-l-4 border-green-400 pl-6">
                About Green Planet
              </h2>
              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border-l-4 border-green-400">
                <p className="text-xl text-green-100 leading-relaxed mb-6">
                  Green Planet is an innovative AI-powered solution designed to help individuals and organizations monitor and maintain plant health. Our technology combines advanced sensors, machine learning algorithms, and user-friendly interfaces to revolutionize how we interact with our natural environment.
                </p>
                <p className="text-xl text-green-100 leading-relaxed mb-6">
                  In a world facing unprecedented environmental challenges, Green Planet empowers users to make a positive impact by optimizing plant care, reducing resource waste, and contributing to a greener future.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="bg-green-800/50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-white mb-3">Smart Monitoring</h3>
                    <p className="text-green-200">Utilize AI-powered sensors to track soil moisture, light conditions, and plant health in real-time.</p>
                  </div>
                  <div className="bg-green-800/50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-white mb-3">Sustainable Practices</h3>
                    <p className="text-green-200">Reduce water waste and optimize resource usage with data-driven recommendations.</p>
                  </div>
                  <div className="bg-green-800/50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-white mb-3">Global Impact</h3>
                    <p className="text-green-200">Join a community of environmentally conscious individuals making a difference.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="relative z-10 min-h-screen flex items-center py-32 px-8 md:px-16 bg-gradient-to-b from-transparent to-green-950/20">
          <div className="max-w-6xl mx-auto">
            <div className="fade-in-section">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 border-l-4 border-green-400 pl-6">
                Our Mission
              </h2>
              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border-l-4 border-green-400">
                <p className="text-xl text-green-100 leading-relaxed mb-10">
                  At Green Planet, our mission is to harness the power of technology to create a more sustainable and environmentally conscious world. We believe that by making plant care more accessible and data-driven, we can inspire individuals to foster stronger connections with nature.
                </p>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-3xl font-bold text-white mb-4">Goals for Sustainability</h3>
                    <ul className="list-disc list-inside space-y-3 text-green-200">
                      <li>Reduce global water consumption in agriculture by 20%</li>
                      <li>Improve urban green spaces through smarter plant management</li>
                      <li>Educate 1 million people about sustainable gardening</li>
                      <li>Decrease plant mortality rates by 40% through predictive care</li>
                      <li>Build a global database of plant health to advance botanical research</li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 bg-green-800/30 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-white mb-4">Our Commitment</h3>
                    <p className="text-green-100 mb-6">
                      We're committed to environmental stewardship in everything we do. From our eco-friendly manufacturing processes to our carbon-neutral operations, sustainability isn't just what we promote—it's how we operate.
                    </p>
                    <p className="text-green-100">
                      With each Green Planet device deployed, we plant a tree in regions affected by deforestation, creating a tangible positive impact beyond our digital solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="relative z-10 min-h-screen flex items-center py-32 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="fade-in-section">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 border-l-4 border-green-400 pl-6">
                Our Technology
              </h2>
              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border-l-4 border-green-400">
                <p className="text-xl text-green-100 leading-relaxed mb-10">
                  Green Planet leverages cutting-edge technology to revolutionize how we interact with plants. Our proprietary hardware and software solutions work in harmony to create an intelligent ecosystem of care.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">Hardware Components</h3>
                    <div className="space-y-6">
                      <div className="bg-green-900/40 p-6 rounded-lg">
                        <h4 className="text-2xl font-semibold text-green-300 mb-2">Precision Sensors</h4>
                        <p className="text-green-100">
                          Our multi-spectral sensors capture over 20 different data points, from soil moisture and pH levels to light intensity and chlorophyll concentration.
                        </p>
                      </div>
                      <div className="bg-green-900/40 p-6 rounded-lg">
                        <h4 className="text-2xl font-semibold text-green-300 mb-2">Smart Hub</h4>
                        <p className="text-green-100">
                          The central processing unit aggregates data from all connected sensors and provides initial analysis before securely transmitting information to the cloud.
                        </p>
                      </div>
                      <div className="bg-green-900/40 p-6 rounded-lg">
                        <h4 className="text-2xl font-semibold text-green-300 mb-2">Automated Systems</h4>
                        <p className="text-green-100">
                          Optional integration with watering and lighting systems allows for automated care based on AI recommendations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">Software Intelligence</h3>
                    <div className="space-y-6">
                      <div className="bg-green-900/40 p-6 rounded-lg">
                        <h4 className="text-2xl font-semibold text-green-300 mb-2">AI Analysis Engine</h4>
                        <p className="text-green-100">
                          Our proprietary algorithms analyze thousands of data points per plant to provide personalized care recommendations optimized for plant health and resource efficiency.
                        </p>
                      </div>
                      <div className="bg-green-900/40 p-6 rounded-lg">
                        <h4 className="text-2xl font-semibold text-green-300 mb-2">Plant Database</h4>
                        <p className="text-green-100">
                          Access to a comprehensive library of over 10,000 plant species with detailed care information, growth patterns, and optimal conditions.
                        </p>
                      </div>
                      <div className="bg-green-900/40 p-6 rounded-lg">
                        <h4 className="text-2xl font-semibold text-green-300 mb-2">Predictive Analytics</h4>
                        <p className="text-green-100">
                          Anticipate plant needs before issues arise with our forward-looking analysis system that learns and improves with each growing cycle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="cta" className="relative z-10 min-h-screen flex items-center py-32 px-8 md:px-16 bg-gradient-to-b from-transparent to-green-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-section">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Join the Movement
              </h2>
              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg">
                <p className="text-xl text-green-100 leading-relaxed mb-10">
                  Be part of the green revolution. Whether you're a hobbyist gardener, a commercial grower, or an environmentally conscious individual, Green Planet offers solutions tailored to your needs.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
                  <Link href="/features" className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-green-400/30">
                    Explore Features
                  </Link>
                  <Link href="/how-it-works" className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400/20 text-lg font-semibold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105">
                    How It Works
                  </Link>
                  <Link href="/install" className="bg-green-800 hover:bg-green-700 text-white text-lg font-semibold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Add CSS for fade-in sections */}
      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        
        .fade-in-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Add JavaScript to handle scroll-based fade-ins */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.fade-in-section');
            
            const fadeInObserver = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                }
              });
            }, { threshold: 0.1 });
            
            sections.forEach(section => {
              fadeInObserver.observe(section);
            });
          });
        `
      }} />
    </>
  );
}
