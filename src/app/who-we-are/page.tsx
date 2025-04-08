import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

// Dynamically import the Scene component with no SSR to avoid Three.js server-side issues
const WhoWeAreScene = dynamic(() => import('../components/WhoWeAreScene'), { ssr: false });

export default function WhoWeArePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-green-600 to-green-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet the FlorAI Team</h1>
              <p className="text-xl mb-8 leading-relaxed">
                FlorAI was created by four high school students with a passion for technology and plants. We combined our interests in programming, environmental science, and design to create a solution for people who struggle to keep their plants alive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/features" 
                  className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors text-center"
                >
                  Explore Features
                </Link>
                <Link 
                  href="/mission" 
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Our Mission
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <WhoWeAreScene />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
            <p className="text-lg text-gray-600">
              As students, we understand the challenges of balancing busy schedules with proper plant care. That's why we built FlorAI to be straightforward, affordable, and effective.
            </p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-8 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">The Problem We Saw</h3>
                <p className="text-gray-700 mb-4">
                  Many of us enjoyed having plants in our homes, but despite our best efforts, we often struggled to keep them alive. We noticed a common problem:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>People buy plants with the best intentions</li>
                  <li>Busy schedules make consistent care difficult</li>
                  <li>Lack of knowledge about specific plant needs leads to mistakes</li>
                  <li>Frustration when plants decline despite efforts</li>
                </ul>
                <p className="text-gray-700">
                  We realized technology could bridge this gap, making plant care more accessible to everyone, regardless of experience level or schedule constraints.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="aspect-w-16 aspect-h-9 bg-green-100">
                    <div className="flex items-center justify-center p-4">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <h4 className="text-xl font-semibold text-gray-800">The Lightbulb Moment</h4>
                        <p className="text-gray-600">Our hackathon project was born</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-xl p-8">
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">From Concept to Reality</h3>
                <p className="text-gray-700 mb-4">
                  Our team developed this project for our school hackathon, bringing together our diverse skills to make plant care accessible to everyone.
                </p>
                <p className="text-gray-700 mb-4">
                  What started as a 48-hour hackathon project quickly evolved into something more. We received such positive feedback that we decided to refine our prototype and develop it into a full product.
                </p>
                <p className="text-gray-700">
                  We believe that technology should make life simpler, and that's exactly what FlorAI aims to do for plant enthusiasts of all experience levels.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="aspect-w-16 aspect-h-9 bg-green-100">
                    <div className="flex items-center justify-center p-4">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <h4 className="text-xl font-semibold text-gray-800">Turning Our Project Into a Product</h4>
                        <p className="text-gray-600">From hackathon to reality</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="w-full py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Alex</h3>
                  <p className="text-green-600">Software Developer</p>
                </div>
              </div>
              <p className="text-gray-700">
                Alex led the development of our ESP32 firmware and backend systems. With a passion for IoT devices and sustainable technology, Alex ensured our hardware and software work seamlessly together.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Jamie</h3>
                  <p className="text-green-600">UI/UX Designer</p>
                </div>
              </div>
              <p className="text-gray-700">
                Jamie designed our intuitive mobile interface and brand identity. With a background in both design and environmental science, Jamie ensures our app is both beautiful and functional for users of all experience levels.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Taylor</h3>
                  <p className="text-green-600">Plant Science Specialist</p>
                </div>
              </div>
              <p className="text-gray-700">
                Taylor is our resident plant expert who helped develop our plant care algorithms. With extensive knowledge of botany and plant physiology, Taylor ensures our recommendations are scientifically sound and effective.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Morgan</h3>
                  <p className="text-green-600">Hardware Engineer</p>
                </div>
              </div>
              <p className="text-gray-700">
                Morgan designed our sensor hardware and prototyped the physical components. With a keen interest in electronics and sustainable design, Morgan created compact, energy-efficient sensors that are both functional and unobtrusive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Values</h2>
            <p className="text-lg text-gray-600">
              As young innovators, we're guided by these core principles in everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-xl border-t-4 border-green-500">
              <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Simplicity</h3>
              <p className="text-gray-700">
                We believe that technology should simplify life, not complicate it. Our designs focus on intuitive interfaces and straightforward experiences.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl border-t-4 border-green-500">
              <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Accessibility</h3>
              <p className="text-gray-700">
                We're committed to making plant care accessible to everyone, regardless of experience, schedule, or natural ability. Everyone deserves to experience the joy of healthy plants.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl border-t-4 border-green-500">
              <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Sustainability</h3>
              <p className="text-gray-700">
                Our products are designed with environmental impact in mind. From low-power sensors to helping plants thrive longer, we want to contribute to a greener planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Join Us On Our Journey</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We're just getting started, and we'd love for you to be part of our growing community of plant lovers and tech enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/install" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/mission" 
              className="bg-white text-green-700 border border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Learn About Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 