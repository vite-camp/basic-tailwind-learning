import React from 'react';

// LESSON 1: Your First Tailwind Class
// Goal: Understand how one CSS property = one class

const Lesson1 = () => {
  return (
    <div>
      <h1 className="text-blue-500">Hello Tailwind!</h1>
      <p>This text is blue using className="text-blue-500"</p>
      
      {/* Try changing the color: */}
      {/* text-red-500, text-green-500, text-purple-500 */}
    </div>
  );
};

export default Lesson1;
