import React from 'react';

// LESSON 3: Colors Deep Dive
// Goal: Master the color system
// Pattern: {property}-{color}-{intensity}

const Lesson3 = () => {
  return (
    <div>
      <h2 className="text-2xl">Text Colors:</h2>
      <p className="text-red-500">Red text (text-red-500)</p>
      <p className="text-blue-700">Dark blue text (text-blue-700)</p>
      <p className="text-green-400">Light green text (text-green-400)</p>
      
      <h2 className="text-2xl">Background Colors:</h2>
      <div className="bg-yellow-200">Yellow background (bg-yellow-200)</div>
      <div className="bg-purple-500 text-white">Purple bg with white text</div>
      <div className="bg-gray-100">Light gray background</div>
      
      {/* Try different intensities: 100, 300, 500, 700, 900 */}
      {/* Try different colors: pink, indigo, cyan, orange */}
    </div>
  );
};

export default Lesson3;
