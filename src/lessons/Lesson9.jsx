import React from 'react';

// LESSON 9: Shadows and Effects
// Goal: Add visual depth

const Lesson9 = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-2xl mb-6">Shadow Examples:</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 shadow-sm rounded">
          <h3 className="font-bold">Small Shadow</h3>
          <p>shadow-sm</p>
        </div>
        
        <div className="bg-white p-6 shadow rounded">
          <h3 className="font-bold">Normal Shadow</h3>
          <p>shadow</p>
        </div>
        
        <div className="bg-white p-6 shadow-md rounded">
          <h3 className="font-bold">Medium Shadow</h3>
          <p>shadow-md</p>
        </div>
        
        <div className="bg-white p-6 shadow-lg rounded">
          <h3 className="font-bold">Large Shadow</h3>
          <p>shadow-lg</p>
        </div>
        
        <div className="bg-white p-6 shadow-xl rounded">
          <h3 className="font-bold">Extra Large Shadow</h3>
          <p>shadow-xl</p>
        </div>
        
        <div className="bg-white p-6 shadow-2xl rounded">
          <h3 className="font-bold">Huge Shadow</h3>
          <p>shadow-2xl</p>
        </div>
      </div>
      
      <h2 className="text-2xl mt-8 mb-6">Interactive Shadows:</h2>
      <div className="bg-white p-6 shadow hover:shadow-lg rounded cursor-pointer mb-4">
        Hover me for shadow change!
      </div>
      
      <button className="bg-blue-500 text-white px-6 py-3 rounded shadow-md hover:shadow-lg">
        Button with shadow effect
      </button>
      
      {/* Try: shadow-inner, shadow-none */}
    </div>
  );
};

export default Lesson9;
