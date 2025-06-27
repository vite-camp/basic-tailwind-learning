import React from 'react';

const Lesson11 = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Custom Components with @apply</h1>
      
      <div className="space-y-4">
        <button className="btn-primary">Primary Button</button>
        <button className="btn-secondary">Secondary Button</button>
      </div>
      
      <div className="card mt-8">
        <h2 className="text-xl font-bold mb-2">Card Component</h2>
        <p className="text-gray-600">This card uses a custom class with @apply directive.</p>
      </div>
    </div>
  );
};

export default Lesson11;