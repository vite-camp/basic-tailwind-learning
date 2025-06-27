import React from 'react';

// LESSON 5: Borders and Rounded Corners
// Goal: Add borders and make things rounded

const Lesson5 = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl">Border Examples:</h2>
      
      <div className="border p-4 m-2">Simple border</div>
      <div className="border-2 p-4 m-2">Thick border (border-2)</div>
      <div className="border-4 border-red-500 p-4 m-2">Red thick border</div>
      
      <h2 className="text-2xl">Rounded Corners:</h2>
      <div className="border rounded p-4 m-2 bg-blue-100">Small rounded (rounded)</div>
      <div className="border rounded-lg p-4 m-2 bg-green-100">Large rounded (rounded-lg)</div>
      <div className="border rounded-full p-4 m-2 bg-yellow-100 w-20 h-20 text-center">Circle!</div>
      
      <h2 className="text-2xl">Border Colors:</h2>
      <div className="border-2 border-purple-500 p-4 m-2">Purple border</div>
      <div className="border-2 border-green-300 p-4 m-2">Light green border</div>
      
      {/* Try: border-8, rounded-xl, border-pink-600, rounded-none */}
    </div>
  );
};

export default Lesson5;
