import React from 'react';

// LESSON 7: Interactive States (Hover)
// Goal: Make things change when you hover
// Pattern: hover:{normal-class}

const Lesson7 = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl">Hover Effects:</h2>
      
      <button className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600 m-2">
        Hover me! (Background changes)
      </button>
      
      <button className="bg-green-500 text-white p-4 rounded hover:bg-red-500 m-2">
        Hover for surprise color!
      </button>
      
      <div className="p-4 border hover:bg-gray-100 m-2 cursor-pointer">
        This div changes background on hover
      </div>
      
      <div className="p-4 bg-yellow-200 hover:bg-yellow-400 hover:text-white m-2 cursor-pointer">
        Background AND text color change
      </div>
      
      <h2 className="text-2xl">Text Hover Effects:</h2>
      <p className="text-blue-500 hover:text-blue-800 cursor-pointer">
        This text gets darker on hover
      </p>
      
      <p className="text-lg hover:text-2xl cursor-pointer">
        This text gets bigger on hover!
      </p>
      
      {/* Try: hover:text-red-500, hover:p-8, hover:rounded-lg, hover:shadow-lg */}
    </div>
  );
};

export default Lesson7;
