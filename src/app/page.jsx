export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-green-950 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <Scene />
      </section>
      
      {/* Content Sections */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-8 rounded-2xl border-l-4 border-green-400 shadow-xl backdrop-blur-sm transition-all hover:shadow-green-900/30">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">Our Mission</h2>
            <p className="text-lg mb-6 text-gray-200">At FlorAI, we believe everyone deserves to experience the joy of successful gardening.</p>
            <a href="#" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors">
              Learn More 
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-8 rounded-2xl border-l-4 border-green-400 shadow-xl backdrop-blur-sm transition-all hover:shadow-green-900/30">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">FlorAI Features</h2>
            <p className="text-lg mb-6 text-gray-200">Discover how our complete plant monitoring system will transform your gardening experience.</p>
            <a href="#" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors">
              See Features
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mb-24 bg-gradient-to-br from-green-900/40 to-green-800/20 p-8 rounded-2xl border-l-4 border-green-400 shadow-xl backdrop-blur-sm transition-all hover:shadow-green-900/30">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">How FlorAI Works</h2>
          <p className="text-lg mb-6 text-gray-200">FlorAI combines simple hardware with powerful software to keep your plants happy and healthy.</p>
          <a href="#" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors">
            Explore Technology
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <div className="mt-8">
            <HowItWorksScene />
          </div>
        </div>
        
        <div className="mb-24">
          <FeaturesScene />
        </div>
      </section>
      
      {/* Success Stories Section */}
      <section className="container mx-auto px-4 py-12 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">Success Stories</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">Discover how plant enthusiasts have transformed their gardening experience with FlorAI.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-6 rounded-xl border-l-4 border-green-400 shadow-lg backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center mr-4">
                <span className="text-green-900 font-bold">JD</span>
              </div>
              <div>
                <h3 className="font-bold text-white">John D.</h3>
                <p className="text-green-300 text-sm">Apartment Gardener</p>
              </div>
            </div>
            <p className="text-gray-200">"My herbs used to die within weeks. With FlorAI, they've been thriving for months. The watering recommendations are spot-on!"</p>
          </div>
          <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-6 rounded-xl border-l-4 border-green-400 shadow-lg backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center mr-4">
                <span className="text-green-900 font-bold">SL</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Sarah L.</h3>
                <p className="text-green-300 text-sm">Plant Collector</p>
              </div>
            </div>
            <p className="text-gray-200">"The light monitoring feature helped me rearrange my plants for optimal growth. My collection has never looked better!"</p>
          </div>
          <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-6 rounded-xl border-l-4 border-green-400 shadow-lg backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center mr-4">
                <span className="text-green-900 font-bold">MP</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Mike P.</h3>
                <p className="text-green-300 text-sm">Beginner Gardener</p>
              </div>
            </div>
            <p className="text-gray-200">"As a first-time plant owner, FlorAI's guidance has been invaluable. The app's notifications help me stay on top of care routines."</p>
          </div>
        </div>
      </section>
      
      {/* Name Your Plant Section */}
      <section className="container mx-auto px-4 py-12 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">Personalize Your Experience</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">Give your plants unique identities to track their progress and care.</p>
        </div>
        <NameScene />
      </section>
      
      {/* Installation Guide */}
      <section className="container mx-auto px-4 py-12 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">Easy Installation</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">Get started with FlorAI in just a few simple steps.</p>
        </div>
        <InstallScene />
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 mb-24 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-900/60 to-green-800/40 p-12 rounded-2xl shadow-2xl backdrop-blur-sm">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-200">Installing FlorAI is quick and easy. Start receiving personalized plant care recommendations today.</p>
          <a href="https://expo.dev/accounts/kaios-org/projects/polysleep-xqumdyi4hwlagck68vr/builds/489ea920-e938-4e0a-a11c-c7ace5000719" className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1">
            Get Started
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-green-950 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white">FlorAI</h3>
              <p className="text-green-300">The Future of Plant Care</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">About</a>
              <a href="#" className="text-gray-300 hover:text-white">Features</a>
              <a href="#" className="text-gray-300 hover:text-white">Contact</a>
              <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} FlorAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 