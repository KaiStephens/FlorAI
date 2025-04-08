import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import the Scene component with no SSR to avoid Three.js server-side issues
const InstallScene = dynamic(() => import('../components/InstallScene'), { ssr: false });

export default function InstallPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-green-600 to-green-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Started with FlorAI</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Getting FlorAI up and running is quick and easy. Start receiving personalized plant care recommendations today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#download" 
                  className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors text-center"
                >
                  Download App
                </Link>
                <Link 
                  href="/how-it-works" 
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  How It Works
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <InstallScene />
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Simple Installation Process</h2>
            <p className="text-lg text-gray-600">
              Getting FlorAI up and running is simple. Follow these easy steps to start giving your plants the care they deserve.
            </p>
          </div>
          
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl mr-4">1</div>
                  <h3 className="text-2xl font-semibold text-gray-800">Purchase Your FlorAI Capsule</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The first step is to get your hands on the FlorAI hardware:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Visit our online store to purchase your FlorAI capsule</li>
                  <li>Each FlorAI kit includes the sensor capsule, charging cable, and quick start guide</li>
                  <li>Shipping is available worldwide with most areas receiving delivery within 3-5 business days</li>
                </ul>
                <div className="mt-6">
                  <Link 
                    href="#" 
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Buy Now
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-green-50 rounded-xl overflow-hidden shadow-sm">
                  <div className="aspect-w-16 aspect-h-9 bg-green-100">
                    <div className="flex items-center justify-center p-6">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <h4 className="text-xl font-semibold text-gray-800">FlorAI Capsule</h4>
                        <p className="text-green-600">ESP32-powered sensor capsule</p>
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
                  <h3 className="text-2xl font-semibold text-gray-800">Download the FlorAI App</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  While waiting for your capsule to arrive, download our mobile application:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Get the FlorAI app from the Google Play Store</li>
                  <li>Create your account and set up your plant profile</li>
                  <li>Familiarize yourself with the app interface and features</li>
                </ul>
                <p className="text-gray-600 mt-4 italic">
                  Note: The FlorAI app is currently available for Android devices only. iOS support coming in future updates.
                </p>
                <div className="mt-6" id="download">
                  <Link 
                    href="#" 
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download App
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-green-50 rounded-xl overflow-hidden shadow-sm">
                  <div className="aspect-w-4 aspect-h-6 bg-green-100">
                    <div className="flex items-center justify-center p-6">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <h4 className="text-xl font-semibold text-gray-800">FlorAI Mobile App</h4>
                        <p className="text-green-600">Available on Google Play</p>
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
                  <h3 className="text-2xl font-semibold text-gray-800">Connect Your Capsule</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Once your FlorAI capsule arrives, it's time to set it up:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Open the FlorAI app and follow the in-app setup instructions</li>
                  <li>Charge your capsule fully before first use (approximately 2 hours)</li>
                  <li>Enable Bluetooth on your phone and pair with your FlorAI capsule</li>
                  <li>The app will guide you through the entire connection process</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-green-50 rounded-xl overflow-hidden shadow-sm">
                  <div className="aspect-w-16 aspect-h-9 bg-green-100">
                    <div className="flex items-center justify-center p-6">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        <h4 className="text-xl font-semibold text-gray-800">Bluetooth Connection</h4>
                        <p className="text-green-600">Simple pairing process</p>
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
                  <h3 className="text-2xl font-semibold text-gray-800">Place the Capsule Near Your Plant</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Position your FlorAI capsule for optimal monitoring:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Insert the capsule into the soil near your plant's roots</li>
                  <li>Ensure the top portion of the capsule remains above the soil</li>
                  <li>For best results, place the capsule 2-3 inches from the plant stem</li>
                  <li>The capsule is water-resistant, so regular watering won't damage it</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-green-50 rounded-xl overflow-hidden shadow-sm">
                  <div className="aspect-w-16 aspect-h-9 bg-green-100">
                    <div className="flex items-center justify-center p-6">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h4 className="text-xl font-semibold text-gray-800">Perfect Placement</h4>
                        <p className="text-green-600">For accurate readings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl mr-4">5</div>
                  <h3 className="text-2xl font-semibold text-gray-800">Start Receiving Recommendations</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Your FlorAI system is now ready to help your plants thrive:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>The capsule begins monitoring immediately after placement</li>
                  <li>Initial plant assessment will be available within 24 hours</li>
                  <li>Personalized care recommendations will appear in your app</li>
                  <li>Follow the guidance to improve your plant's health and growth</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-green-50 rounded-xl overflow-hidden shadow-sm">
                  <div className="aspect-w-16 aspect-h-9 bg-green-100">
                    <div className="flex items-center justify-center p-6">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <h4 className="text-xl font-semibold text-gray-800">Smart Recommendations</h4>
                        <p className="text-green-600">Personalized plant care guidance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Transform Your Plant Care?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of plant enthusiasts who have transformed their relationship with their plants using FlorAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/features" 
              className="bg-white text-green-700 border border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 