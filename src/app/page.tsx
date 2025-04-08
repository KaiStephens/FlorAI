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
              FlorAI
            </h1>
            <p className="text-3xl md:text-4xl text-green-300 animate-fade-in-up-delayed drop-shadow-[0_0_10px_rgba(168,230,207,0.7)]">
              Making plant care simple and smart.
            </p>
            <p className="text-xl text-green-100 leading-relaxed mt-4 animate-fade-in-up-delayed">
              FlorAI is your plant's new best friend - a smart monitoring system that takes the guesswork out of home gardening.
            </p>
            <div className="mt-10 opacity-0 animate-fade-in-up-delayed2">
              <Link href="/features" className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-green-400/30 mr-4">
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
            <div className="fade-in-section bg-black/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-green-400 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-green-100 mb-4">
                  At FlorAI, we believe everyone deserves to experience the joy of successful gardening.
                </p>
              </div>
              <Link href="/mission" className="text-green-400 hover:text-green-300 font-semibold flex items-center">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>
            
            {/* Features Teaser */}
            <div className="fade-in-section bg-black/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-green-400 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">FlorAI Features</h2>
                <p className="text-green-100 mb-4">
                  Discover how our complete plant monitoring system will transform your gardening experience.
                </p>
              </div>
              <Link href="/features" className="text-green-400 hover:text-green-300 font-semibold flex items-center">
                See Features <span className="ml-2">→</span>
              </Link>
            </div>

            {/* How it Works Teaser */}
            <div className="fade-in-section bg-black/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-green-400 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">How FlorAI Works</h2>
                <p className="text-green-100 mb-4">
                  FlorAI combines simple hardware with powerful software to keep your plants happy and healthy.
                </p>
              </div>
              <Link href="/how-it-works" className="text-green-400 hover:text-green-300 font-semibold flex items-center">
                Explore Technology <span className="ml-2">→</span>
              </Link>
            </div>
            
            {/* Who We Are Teaser */}
            <div className="fade-in-section bg-black/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-green-400 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Meet the Team</h2>
                <p className="text-green-100 mb-4">
                  FlorAI was created by four high school students with a passion for technology and plants.
                </p>
              </div>
              <Link href="/who-we-are" className="text-green-400 hover:text-green-300 font-semibold flex items-center">
                Meet Us <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
          
          {/* Get Started CTA */}
          <div className="max-w-6xl mx-auto mt-10">
            <div className="fade-in-section bg-black/30 backdrop-blur-sm p-8 rounded-lg border-l-4 border-green-400 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-green-100 mb-6">
                Installing FlorAI is quick and easy. Start receiving personalized plant care recommendations today.
              </p>
              <Link href="/install" className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 px-10 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-green-400/30 inline-block">
                Get Started
              </Link>
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
