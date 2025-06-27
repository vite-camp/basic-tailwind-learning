import React from 'react';

const Lesson12 = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Custom Configuration</h1>
      
      {/* Using custom colors */}
      <div className="bg-brand-500 text-white p-4 rounded mb-4">
        Custom brand color (bg-brand-500)
      </div>
      
      {/* Using custom spacing */}
      <div className="p-18 bg-gray-100 rounded">
        Custom padding (p-18 = 4.5rem)
      </div>
      
      {/* Custom font family */}
      <p className="font-serif text-lg mt-4">
        This text uses custom serif font family
      </p>
    </div>
  );
};

export default Lesson12;