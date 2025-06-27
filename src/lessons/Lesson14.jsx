import React, { useState, useEffect } from 'react';

const Lesson14 = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dark Mode Demo
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Card Component
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This card adapts to both light and dark themes seamlessly.
            </p>
            <button className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700">
              Action Button
            </button>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-850 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Features
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Automatic color switching</li>
              <li>• Smooth transitions</li>
              <li>• Custom dark variants</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson14;