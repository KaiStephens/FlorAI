'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

// Dynamically import the Scene component with no SSR to avoid Three.js server-side issues
const HowItWorksScene = dynamic(() => import('../components/HowItWorksScene'), { ssr: false });

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-green-600 to-green-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">How FlorAI Works</h1>
              <p className="text-xl mb-8 leading-relaxed">
                FlorAI combines simple hardware with powerful software to keep your plants happy and healthy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/features" 
                  className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors text-center"
                >
                  Explore Features
                </Link>
                <Link 
                  href="/install" 
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <HowItWorksScene />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Overview */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">The FlorAI System</h2>
            <p className="text-lg text-gray-600">
              Our system combines innovative hardware with intelligent software to create a complete plant care solution that's easy to use and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* The FlorAI Capsule */}
            <div>
              <div className="bg-green-50 p-8 rounded-xl mb-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">The FlorAI Capsule</h3>
                <p className="text-gray-700 mb-6">
                  Our innovative spike-like capsule contains an ESP32 microcontroller and multiple sensors that are placed in the soil near your plant. The capsule continuously monitors:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-200 text-green-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-gray-700">Soil and air temperature using GROVE temperature sensors</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-200 text-green-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-gray-700">Humidity levels with GROVE humidity sensors</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-200 text-green-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-gray-700">Light exposure with standard photoresistors</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Technical Specifications</h4>
                <div className="space-y-2">
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-1/3">Processor:</span>
                    <span className="text-gray-600">ESP32 microcontroller</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-1/3">Power:</span>
                    <span className="text-gray-600">Rechargeable battery (up to 6 months)</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-1/3">Connectivity:</span>
                    <span className="text-gray-600">Bluetooth Low Energy</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-1/3">Water resistance:</span>
                    <span className="text-gray-600">IP67 rated</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* The FlorAI App */}
            <div>
              <div className="bg-green-50 p-8 rounded-xl mb-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">The FlorAI App</h3>
                <p className="text-gray-700 mb-6">
                  Our companion mobile application receives data from the FlorAI capsule and:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-200 text-green-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-gray-700">Analyzes environmental conditions around your plant</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-200 text-green-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-gray-700">Compares current conditions to ideal parameters for your specific plant type</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-200 text-green-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-gray-700">Provides easy-to-follow recommendations to improve plant health</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-200 text-green-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-gray-700">Tracks changes over time to help you understand your plant's needs</p>
                  </li>
                </ul>
                <p className="text-gray-700 mt-6">
                  You can also use our app's AI vision feature to identify unknown plants and receive tailored care instructions instantly.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">App Features</h4>
                <div className="space-y-2">
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-1/3">Plant ID:</span>
                    <span className="text-gray-600">AI-powered plant recognition</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-1/3">Analytics:</span>
                    <span className="text-gray-600">Historical data and trend analysis</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-1/3">Notifications:</span>
                    <span className="text-gray-600">Customizable care reminders</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-1/3">Community:</span>
                    <span className="text-gray-600">Connect with other plant enthusiasts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Flow */}
      <section className="w-full py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">How It All Works Together</h2>
          
          <div className="relative">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center mb-16 md:mb-24">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500 md:mr-8">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-500 font-bold text-xl mb-4">1</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Plant Monitoring</h3>
                  <p className="text-gray-700">
                    Insert the FlorAI capsule near your plant's roots. It immediately begins collecting data about soil moisture, light levels, and temperature.
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="h-24 w-24 rounded-full bg-green-50 border-4 border-green-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10.5a7.5 7.5 0 1015 0m0 0a7.5 7.5 0 10-15 0m15 0v4a3 3 0 01-3 3h-9a3 3 0 01-3-3v-4" />
                  </svg>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white p-6 rounded-xl shadow-sm md:ml-8">
                  <h4 className="font-semibold text-gray-800 mb-2">What's happening:</h4>
                  <p className="text-gray-700">The sensors collect real-time data and store it locally in the capsule's memory before transmitting to your phone.</p>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center mb-16 md:mb-24">
              <div className="md:w-1/3 mb-8 md:mb-0 md:order-3">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500 md:ml-8">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-500 font-bold text-xl mb-4">2</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Data Transmission</h3>
                  <p className="text-gray-700">
                    The FlorAI capsule transmits collected data to your smartphone via Bluetooth whenever you're in range.
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center md:order-2">
                <div className="h-24 w-24 rounded-full bg-green-50 border-4 border-green-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-1/3 md:order-1">
                <div className="bg-white p-6 rounded-xl shadow-sm md:mr-8">
                  <h4 className="font-semibold text-gray-800 mb-2">What's happening:</h4>
                  <p className="text-gray-700">Bluetooth Low Energy technology ensures efficient power usage while reliably transferring data to your mobile device.</p>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center mb-16 md:mb-24">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500 md:mr-8">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-500 font-bold text-xl mb-4">3</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Data Analysis</h3>
                  <p className="text-gray-700">
                    The FlorAI app analyzes the collected data and compares it with ideal parameters for your specific plant species.
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="h-24 w-24 rounded-full bg-green-50 border-4 border-green-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white p-6 rounded-xl shadow-sm md:ml-8">
                  <h4 className="font-semibold text-gray-800 mb-2">What's happening:</h4>
                  <p className="text-gray-700">Our algorithms process the sensor data to identify patterns and assess whether your plant's environment is optimal.</p>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 md:order-3">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500 md:ml-8">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-500 font-bold text-xl mb-4">4</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Personalized Recommendations</h3>
                  <p className="text-gray-700">
                    Receive customized care instructions and alerts to help your plant thrive, based on the real-time conditions and analysis.
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center md:order-2">
                <div className="h-24 w-24 rounded-full bg-green-50 border-4 border-green-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-1/3 md:order-1">
                <div className="bg-white p-6 rounded-xl shadow-sm md:mr-8">
                  <h4 className="font-semibold text-gray-800 mb-2">What's happening:</h4>
                  <p className="text-gray-700">Based on analysis results, you receive actionable recommendations like "Move to a sunnier spot" or "Water your plant today."</p>
                </div>
              </div>
            </div>
            
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 bottom-12 left-1/2 w-0.5 bg-green-200 -translate-x-1/2 z-0"></div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the FlorAI difference and start giving your plants the care they deserve. Setup is quick and easy!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/install" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/features" 
              className="bg-white text-green-700 border border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              See All Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 