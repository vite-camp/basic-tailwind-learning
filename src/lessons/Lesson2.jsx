import React from 'react';

// LESSON 2: Text Sizing
// Goal: Control text size with classes

const Lesson2 = () => {
  return (
    <div>
      <h1 className="text-4xl">Extra Large (text-4xl)</h1>
      <h2 className="text-2xl">Large (text-2xl)</h2>
      <h3 className="text-xl">Medium (text-xl)</h3>
      <p className="text-base">Normal size (text-base)</p>
      <p className="text-sm">Small text (text-sm)</p>
      <p className="text-xs">Extra small (text-xs)</p>
      
      {/* Try: text-lg, text-3xl, text-5xl, text-6xl */}
    </div>
  );
};

export default Lesson2;
