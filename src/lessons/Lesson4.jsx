import React from 'react';

// LESSON 4: Spacing (Padding & Margin)
// Goal: Add space inside (padding) and outside (margin)
// Scale: 1 unit = 4px

const Lesson4 = () => {
  return (
    <div>
      <h2 className="text-2xl">Padding Examples:</h2>
      <div className="p-2 bg-blue-100">Small padding (p-2 = 8px)</div>
      <div className="p-4 bg-green-100">Medium padding (p-4 = 16px)</div>
      <div className="p-8 bg-red-100">Large padding (p-8 = 32px)</div>
      
      <h2 className="text-2xl">Directional Spacing:</h2>
      <div className="px-8 py-2 bg-yellow-100">px-8 py-2 (horizontal 32px, vertical 8px)</div>
      <div className="pt-6 bg-purple-100">pt-6 (padding-top: 24px)</div>
      
      <h2 className="text-2xl">Margin Examples:</h2>
      <div className="m-4 bg-gray-100">Box with margin (m-4)</div>
      <div className="mt-8 bg-pink-100">Top margin only (mt-8)</div>
      
      {/* Try: p-1, p-6, p-12, mx-4, my-2, ml-6, mr-3 */}
    </div>
  );
};

export default Lesson4;
