import React from 'react';

const Lesson15 = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center mb-8">
          Responsive Mastery
        </h1>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {[1,2,3,4,5,6,7,8].map(num => (
            <div key={num} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">Card {num}</h3>
              <p className="text-sm text-gray-600">
                1 col mobile, 2 tablet, 3 desktop, 4 large
              </p>
            </div>
          ))}
        </div>
        
        {/* Responsive Layout */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 p-6 bg-blue-500 text-white">
              <h2 className="text-xl font-bold mb-4">Sidebar</h2>
              <p className="hidden lg:block">
                This content is hidden on mobile and shows on desktop
              </p>
              <p className="lg:hidden">
                Mobile sidebar content
              </p>
            </div>
            <div className="lg:w-2/3 p-6">
              <h2 className="text-xl font-bold mb-4">Main Content</h2>
              <div className="space-y-4">
                <p className="text-base lg:text-lg">
                  Content that adapts to screen size
                </p>
                
                {/* Responsive spacing */}
                <div className="grid gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                  <div className="p-2 sm:p-4 md:p-6 lg:p-8 bg-gray-100 rounded">
                    Responsive padding
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Container queries simulation */}
        <div className="mt-8 p-4 bg-white rounded-lg">
          <h3 className="text-lg font-bold mb-4">Responsive Typography</h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            This text scales with screen size: sm→base→lg→xl→2xl
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lesson15;