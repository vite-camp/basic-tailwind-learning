import React from 'react';

// LESSON 6: Layout with Flexbox
// Goal: Arrange items in rows and columns

const Lesson6 = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl">Basic Flex Row:</h2>
      <div className="flex gap-4 mb-4">
        <div className="bg-red-500 text-white p-4">Box 1</div>
        <div className="bg-blue-500 text-white p-4">Box 2</div>
        <div className="bg-green-500 text-white p-4">Box 3</div>
      </div>
      
      <h2 className="text-2xl">Centered Content:</h2>
      <div className="flex justify-center items-center h-20 bg-gray-100 mb-4">
        <div className="bg-purple-500 text-white p-4">I'm centered!</div>
      </div>
      
      <h2 className="text-2xl">Space Between:</h2>
      <div className="flex justify-between bg-gray-100 p-4 mb-4">
        <div className="bg-orange-500 text-white p-2">Left</div>
        <div className="bg-pink-500 text-white p-2">Right</div>
      </div>
      
      <h2 className="text-2xl">Flex Column:</h2>
      <div className="flex flex-col gap-2 w-32">
        <div className="bg-cyan-500 text-white p-2">Top</div>
        <div className="bg-teal-500 text-white p-2">Middle</div>
        <div className="bg-emerald-500 text-white p-2">Bottom</div>
      </div>
      
      {/* Try: justify-start, justify-end, items-start, items-end, gap-8 */}
    </div>
  );
};

export default Lesson6;
