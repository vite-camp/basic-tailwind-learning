import React from 'react';

// LESSON 8: Responsive Design Basics
// Goal: Make things look different on mobile vs desktop
// Pattern: {screen}:{class}
// Screens: sm: (640px+), md: (768px+), lg: (1024px+), xl: (1280px+)

const Lesson8 = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl">Responsive Text:</h2>
      <h1 className="text-xl md:text-3xl lg:text-5xl text-center mb-4">
        Small on mobile, huge on desktop!
      </h1>
      
      <h2 className="text-2xl">Responsive Colors:</h2>
      <div className="bg-red-500 md:bg-blue-500 lg:bg-green-500 p-4 text-white text-center mb-4">
        Red on mobile, blue on tablet, green on desktop
      </div>
      
      <h2 className="text-2xl">Responsive Layout:</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="bg-purple-500 text-white p-4">Column on mobile,</div>
        <div className="bg-pink-500 text-white p-4">Row on tablet+</div>
      </div>
      
      <h2 className="text-2xl">Responsive Padding:</h2>
      <div className="p-2 md:p-8 lg:p-16 bg-yellow-100">
        Small padding on mobile, huge on desktop
      </div>
      
      <h2 className="text-2xl">Hidden/Visible:</h2>
      <div className="block md:hidden bg-red-200 p-4 mb-2">
        Only visible on mobile
      </div>
      <div className="hidden md:block bg-blue-200 p-4">
        Only visible on tablet and up
      </div>
      
      {/* Try resizing your browser window to see the changes! */}
      {/* Try: sm:text-lg, md:p-12, lg:bg-indigo-500, xl:text-6xl */}
    </div>
  );
};

export default Lesson8;
