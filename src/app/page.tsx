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
        <section className="relative z-10 flex flex-col items-start justify-center min-h-screen pl-6 md:pl-20 lg:pl-28">
          <div className="bg-gradient-to-br from-black/50 to-green-950/40 backdrop-blur-md p-8 md:p-10 rounded-2xl max-w-2xl border-l-4 border-green-400 shadow-[0_0_25px_rgba(0,200,100,0.2)]">
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 animate-fade-in-up drop-shadow-[0_0_15px_rgba(0,255,0,0.7)]">
              FlorAI
            </h1>
            <p className="text-3xl md:text-4xl text-green-300 animate-fade-in-up-delayed drop-shadow-[0_0_10px_rgba(168,230,207,0.7)]">
              Making plant care simple and smart.
            </p>
            <p className="text-xl text-green-100 leading-relaxed mt-4 animate-fade-in-up-delayed">
              FlorAI is your plant's new best friend - a smart monitoring system that takes the guesswork out of home gardening.
            </p>
            <div className="mt-10 opacity-0 animate-fade-in-up-delayed2 flex flex-wrap gap-4">
              <Link href="/features" className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-green-400/30">
                Explore Features
              </Link>
              <Link href="/how-it-works" className="border-2 border-green-400 text-green-400 hover:bg-green-400/20 text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105">
                How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* Section Teasers */}
        <section className="relative z-10 py-20 px-8 md:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission Teaser */}
            <div className="fade-in-section bg-gradient-to-br from-black/50 to-green-950/40 backdrop-blur-md p-8 rounded-2xl border-l-4 border-green-400 shadow-xl hover:shadow-green-900/30 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">Our Mission</h2>
                <p className="text-green-100 mb-4">
                  At FlorAI, we believe everyone deserves to experience the joy of successful gardening.
                </p>
              </div>
              <Link href="/mission" className="text-green-400 hover:text-green-300 font-semibold flex items-center group">
                Learn More 
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
            
            {/* Features Teaser */}
            <div className="fade-in-section bg-gradient-to-br from-black/50 to-green-950/40 backdrop-blur-md p-8 rounded-2xl border-l-4 border-green-400 shadow-xl hover:shadow-green-900/30 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">FlorAI Features</h2>
                <p className="text-green-100 mb-4">
                  Discover how our complete plant monitoring system will transform your gardening experience.
                </p>
              </div>
              <Link href="/features" className="text-green-400 hover:text-green-300 font-semibold flex items-center group">
                See Features 
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* How it Works Teaser */}
            <div className="fade-in-section bg-gradient-to-br from-black/50 to-green-950/40 backdrop-blur-md p-8 rounded-2xl border-l-4 border-green-400 shadow-xl hover:shadow-green-900/30 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">How FlorAI Works</h2>
                <p className="text-green-100 mb-4">
                  FlorAI combines simple hardware with powerful software to keep your plants happy and healthy.
                </p>
              </div>
              <Link href="/how-it-works" className="text-green-400 hover:text-green-300 font-semibold flex items-center group">
                Explore Technology 
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Success Stories Teaser */}
            <div className="fade-in-section bg-gradient-to-br from-black/50 to-green-950/40 backdrop-blur-md p-8 rounded-2xl border-l-4 border-green-400 shadow-xl hover:shadow-green-900/30 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">Success Stories</h2>
                <p className="text-green-100 mb-4">
                  Discover how plant enthusiasts have transformed their gardening experience with FlorAI.
                </p>
              </div>
              <Link href="/success-stories" className="text-green-400 hover:text-green-300 font-semibold flex items-center group">
                Read Testimonials 
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
          
          {/* Get Started CTA */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="fade-in-section bg-gradient-to-br from-black/60 to-green-950/50 backdrop-blur-md p-10 rounded-2xl border-l-4 border-green-400 text-center shadow-2xl">
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">Ready to Get Started?</h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Installing FlorAI is quick and easy. Start receiving personalized plant care recommendations today.
              </p>
              <Link href="https://expo.dev/accounts/kaios-org/projects/polysleep-xqumdyi4hwlagck68vr/builds/489ea920-e938-4e0a-a11c-c7ace5000719" className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500 text-white text-xl font-semibold py-4 px-10 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-green-400/30 inline-block">
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Plants background decorations */}
        <div className="fixed top-20 right-0 w-64 h-64 opacity-20 z-0 pointer-events-none">
          <Image 
            src="/images/plant-decoration.png" 
            alt="" 
            width={256} 
            height={256}
            className="object-contain"
          />
        </div>
        
        <div className="fixed bottom-0 left-0 w-80 h-80 opacity-20 z-0 pointer-events-none">
          <Image 
            src="/images/leaf-decoration.png" 
            alt="" 
            width={320} 
            height={320}
            className="object-contain"
          />
        </div>
      </main>

      {/* Add CSS for animations and effects */}
      <style jsx={true}>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        
        .fade-in-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .float {
          animation: float 6s ease-in-out infinite;
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
