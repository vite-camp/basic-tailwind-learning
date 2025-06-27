import React from 'react';

// LESSON 10: Putting It All Together
// Goal: Build a complete card component using everything learned

const Lesson10 = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        🎓 Graduation Project
      </h1>
      
      <div className="max-w-4xl mx-auto">
        {/* Card Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: Profile Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
            <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
              👤
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
              John Doe
            </h3>
            <p className="text-gray-600 text-center mb-4">
              Web Developer
            </p>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              View Profile
            </button>
          </div>
          
          {/* Card 2: Product Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
            <div className="w-full h-32 bg-green-200 rounded mb-4 flex items-center justify-center text-4xl">
              📱
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Awesome Product
            </h3>
            <p className="text-gray-600 mb-4">
              This is an amazing product that you'll love using every day.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-green-600">$99</span>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Buy Now
              </button>
            </div>
          </div>
          
          {/* Card 3: Feature Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl md:col-span-2 lg:col-span-1">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Fast Performance
            </h3>
            <p className="text-gray-600 mb-4">
              Lightning-fast loading times that will improve your user experience.
            </p>
            <div className="flex gap-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Fast</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Reliable</span>
            </div>
          </div>
          
        </div>
        
        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg shadow-lg mt-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            🎉 Congratulations!
          </h2>
          <p className="text-lg mb-6">
            You've completed all 10 Tailwind CSS lessons!
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lesson10;
