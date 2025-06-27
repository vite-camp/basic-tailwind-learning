import React, { useState } from 'react';

const Lesson13 = () => {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          CSS Variables Theme
        </h1>
        
        <button 
          onClick={() => setIsDark(!isDark)}
          className="themed-button mb-6"
        >
          Toggle Theme
        </button>
        
        <div className="bg-primary text-white p-4 rounded mb-4">
          Background using CSS variable (bg-primary)
        </div>
        
        <div className="section-spacing bg-gray-100 dark:bg-gray-800">
          <p className="text-gray-900 dark:text-white">
            This section uses custom CSS variable spacing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lesson13;