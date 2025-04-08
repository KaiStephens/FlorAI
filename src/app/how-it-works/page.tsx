import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import the Scene component with no SSR to avoid Three.js server-side issues
const HowItWorksScene = dynamic(() => import('../components/HowItWorksScene'), { ssr: false });

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-green-700 to-green-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">How FlorAI Works</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Discover the technology behind FlorAI's intelligent plant monitoring system 
                and how it transforms data into personalized plant care recommendations.
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
                  Installation Guide
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <HowItWorksScene />
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">A Seamless Four-Step Process</h2>
            <p className="text-lg text-gray-600">
              FlorAI's intelligent system works through a synchronized process that connects 
              plant data with AI-powered analytics to deliver personalized care recommendations.
            </p>
          </div>
          
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl mr-4">1</div>
                  <h3 className="text-2xl font-semibold text-gray-800">Precision Sensors</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The FlorAI journey begins with our advanced sensors that monitor critical plant vitals:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Soil moisture sensors precisely measure water content at the root level</li>
                  <li>Light sensors track intensity, duration, and quality of light exposure</li>
                  <li>Temperature and humidity monitors record environmental conditions</li>
                  <li>pH sensors evaluate soil acidity and nutrient availability</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  These sensors take readings at regular intervals, creating a comprehensive 
                  profile of your plant's environment and health status.
                </p>
              </div>
              <div className="md:w-1/2 bg-green-50 rounded-xl p-8">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 bg-green-100 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-green-700 text-center p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <h4 className="text-xl font-semibold mb-2">Precision Monitoring</h4>
                        <p>Our sensors capture data with industry-leading accuracy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl mr-4">2</div>
                  <h3 className="text-2xl font-semibold text-gray-800">The FlorAI Hub</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Our central hub serves as the communication center for your plant monitoring system:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Collects data wirelessly from all connected sensors</li>
                  <li>Processes initial readings to detect urgent issues</li>
                  <li>Securely transmits information to our cloud platform</li>
                  <li>Manages up to 20 plant sensors simultaneously</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  The hub maintains constant connection with your home WiFi network, 
                  ensuring your plants are monitored even when you're away.
                </p>
              </div>
              <div className="md:w-1/2 bg-green-50 rounded-xl p-8">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 bg-green-100 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-green-700 text-center p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <h4 className="text-xl font-semibold mb-2">Central Processing</h4>
                        <p>The hub orchestrates data collection across your entire plant collection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl mr-4">3</div>
                  <h3 className="text-2xl font-semibold text-gray-800">AI-Powered Analysis</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Our proprietary AI engine analyzes your plant data in the cloud:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Processes environmental readings against optimal conditions</li>
                  <li>Compares your plant's data with millions of data points from our research</li>
                  <li>Identifies patterns and trends to predict future needs</li>
                  <li>Generates personalized care recommendations based on species-specific requirements</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Our machine learning algorithms continuously improve as they collect more data,
                  making your plant care recommendations increasingly accurate over time.
                </p>
              </div>
              <div className="md:w-1/2 bg-green-50 rounded-xl p-8">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 bg-green-100 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-green-700 text-center p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <h4 className="text-xl font-semibold mb-2">Intelligent Analysis</h4>
                        <p>Our AI processes complex data patterns to understand your plant's needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl mr-4">4</div>
                  <h3 className="text-2xl font-semibold text-gray-800">Mobile Application</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The FlorAI app brings everything together in your pocket:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Real-time dashboard showing current plant status and health</li>
                  <li>Personalized care notifications and reminders</li>
                  <li>Detailed analytics tracking plant growth and environmental changes</li>
                  <li>Care recommendations with step-by-step instructions</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  The intuitive interface makes it easy to monitor all your plants 
                  at a glance and take action when needed.
                </p>
              </div>
              <div className="md:w-1/2 bg-green-50 rounded-xl p-8">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 bg-green-100 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-green-700 text-center p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <h4 className="text-xl font-semibold mb-2">Intuitive Interface</h4>
                        <p>Monitor your plants and receive recommendations on any device</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="w-full py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">The Technology Behind FlorAI</h2>
            <p className="text-lg text-gray-600">
              We've combined cutting-edge hardware with advanced AI to create 
              a system that truly understands how to care for plants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Precision Sensors</h3>
              <p className="text-gray-700">
                Our custom-designed sensors use low-power, high-accuracy components 
                to deliver reliable readings without disturbing your plants. Each sensor 
                is calibrated individually for maximum precision.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">ML Algorithms</h3>
              <p className="text-gray-700">
                Our proprietary machine learning models are trained on millions of 
                plant health data points. They can identify subtle patterns that indicate 
                potential issues long before they become visible problems.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Adaptive System</h3>
              <p className="text-gray-700">
                FlorAI learns from your specific environment and plants' responses 
                to adjustments. This means recommendations become increasingly 
                tailored to your exact conditions over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Privacy */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Data, Your Privacy</h2>
              <p className="text-lg text-gray-700 mb-6">
                We take data security and privacy seriously. All plant data is securely 
                transmitted using end-to-end encryption, and you have complete control 
                over your information.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-green-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">End-to-end encryption for all data transmission</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-green-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Anonymous data processing for AI improvements</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-green-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Full control over data sharing preferences</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-green-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Option to download or delete your data at any time</p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-green-50 p-8 rounded-2xl">
              <div className="aspect-w-4 aspect-h-3 relative overflow-hidden rounded-xl bg-green-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 px-8 py-6 rounded-lg text-center shadow-lg max-w-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure by Design</h3>
                    <p className="text-gray-600">
                      Our architecture is built from the ground up with security in mind,
                      ensuring your plant data stays private and protected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Plant Care?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the FlorAI difference and give your plants the precise care they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/install" 
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-100 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/features" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 