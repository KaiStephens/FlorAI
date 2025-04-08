export default function Mission() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Making home plants more accessible by taking the guesswork out of gardening
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why We Created FlorAI</h2>
            <p className="text-gray-600 mb-4">
              Many people love the idea of having plants at home but struggle with keeping them alive. 
              They're unsure about watering schedules, light requirements, and often feel overwhelmed by 
              the complexity of plant care.
            </p>
            <p className="text-gray-600 mb-4">
              We believe that everyone should be able to enjoy the benefits of living with plants: 
              cleaner air, reduced stress, and a connection to nature. That's why we created FlorAI.
            </p>
            <p className="text-gray-600">
              Our AI-powered plant monitor removes the uncertainty from plant care, making it accessible to everyone, 
              regardless of their gardening experience.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 shadow-inner">
            <div className="h-64 bg-green-200 rounded-lg flex items-center justify-center">
              <p className="text-green-800 font-semibold">Image: Plant lover struggling with plant care</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1 bg-gray-100 rounded-lg p-8 shadow-inner">
            <div className="h-64 bg-green-200 rounded-lg flex items-center justify-center">
              <p className="text-green-800 font-semibold">Image: AI analyzing plant data</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">The Power of AI in Plant Care</h2>
            <p className="text-gray-600 mb-4">
              FlorAI uses artificial intelligence to analyze multiple factors affecting your plants' health—soil moisture, 
              light levels, temperature, and humidity—and provides personalized recommendations based on each plant's specific needs.
            </p>
            <p className="text-gray-600 mb-4">
              Our AI algorithms learn and adapt over time, becoming more accurate with each interaction. 
              They can detect early signs of plant stress before they become visible to the human eye, 
              allowing you to address issues before they become serious problems.
            </p>
            <p className="text-gray-600">
              By harnessing the power of AI, we're not just helping you keep your plants alive—we're helping them thrive.
            </p>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision for the Future</h2>
          <p className="text-gray-600 mb-4">
            We envision a world where everyone can experience the joy of growing plants, where urban spaces 
            are filled with greenery, and where technology enhances our connection to nature rather than 
            separating us from it.
          </p>
          <p className="text-gray-600 mb-8">
            FlorAI is just the beginning. As we continue to develop our AI capabilities, we're working towards 
            creating a comprehensive ecosystem that makes plant care intuitive, educational, and enjoyable for everyone.
          </p>
          <div className="bg-green-600 text-white py-12 px-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Join Us in Our Mission</h3>
            <p className="mb-6">
              Help us make the world greener, one plant at a time.
            </p>
            <a 
              href="/features" 
              className="inline-block bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors"
            >
              Explore Our Features
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 