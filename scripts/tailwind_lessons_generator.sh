#!/bin/bash

# Tailwind Learning Lessons Generator
# Usage: ./generate-lessons.sh
# Run this in your existing project directory

set -e

echo "🎓 Generating Tailwind CSS Learning Lessons..."

# Create lessons directory
mkdir -p src/lessons

# Lesson 1: First Tailwind Class
echo "📝 Creating Lesson 1: First Tailwind Class..."
cat > src/lessons/Lesson1.jsx << 'EOF'
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
EOF

# Lesson 2: Text Sizing
echo "📝 Creating Lesson 2: Text Sizing..."
cat > src/lessons/Lesson2.jsx << 'EOF'
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
EOF

# Lesson 3: Colors Deep Dive
echo "📝 Creating Lesson 3: Colors..."
cat > src/lessons/Lesson3.jsx << 'EOF'
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
EOF

# Lesson 4: Spacing
echo "📝 Creating Lesson 4: Spacing..."
cat > src/lessons/Lesson4.jsx << 'EOF'
import React from 'react';

// LESSON 4: Spacing (Padding & Margin)
// Goal: Add space inside (padding) and outside (margin)
// Scale: 1 unit = 4px

const Lesson4 = () => {
  return (
    <div>
      <h2 className="text-2xl">Padding Examples:</h2>
      <div className="p-2 bg-blue-100">Small padding (p-2 = 8px)</div>
      <div className="p-4 bg-green-100">Medium padding (p-4 = 16px)</div>
      <div className="p-8 bg-red-100">Large padding (p-8 = 32px)</div>
      
      <h2 className="text-2xl">Directional Spacing:</h2>
      <div className="px-8 py-2 bg-yellow-100">px-8 py-2 (horizontal 32px, vertical 8px)</div>
      <div className="pt-6 bg-purple-100">pt-6 (padding-top: 24px)</div>
      
      <h2 className="text-2xl">Margin Examples:</h2>
      <div className="m-4 bg-gray-100">Box with margin (m-4)</div>
      <div className="mt-8 bg-pink-100">Top margin only (mt-8)</div>
      
      {/* Try: p-1, p-6, p-12, mx-4, my-2, ml-6, mr-3 */}
    </div>
  );
};

export default Lesson4;
EOF

# Lesson 5: Borders and Rounded Corners
echo "📝 Creating Lesson 5: Borders..."
cat > src/lessons/Lesson5.jsx << 'EOF'
import React from 'react';

// LESSON 5: Borders and Rounded Corners
// Goal: Add borders and make things rounded

const Lesson5 = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl">Border Examples:</h2>
      
      <div className="border p-4 m-2">Simple border</div>
      <div className="border-2 p-4 m-2">Thick border (border-2)</div>
      <div className="border-4 border-red-500 p-4 m-2">Red thick border</div>
      
      <h2 className="text-2xl">Rounded Corners:</h2>
      <div className="border rounded p-4 m-2 bg-blue-100">Small rounded (rounded)</div>
      <div className="border rounded-lg p-4 m-2 bg-green-100">Large rounded (rounded-lg)</div>
      <div className="border rounded-full p-4 m-2 bg-yellow-100 w-20 h-20 text-center">Circle!</div>
      
      <h2 className="text-2xl">Border Colors:</h2>
      <div className="border-2 border-purple-500 p-4 m-2">Purple border</div>
      <div className="border-2 border-green-300 p-4 m-2">Light green border</div>
      
      {/* Try: border-8, rounded-xl, border-pink-600, rounded-none */}
    </div>
  );
};

export default Lesson5;
EOF

# Lesson 6: Flexbox Layout
echo "📝 Creating Lesson 6: Flexbox..."
cat > src/lessons/Lesson6.jsx << 'EOF'
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
EOF

# Lesson 7: Interactive States
echo "📝 Creating Lesson 7: Interactive States..."
cat > src/lessons/Lesson7.jsx << 'EOF'
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
EOF

# Lesson 8: Responsive Design
echo "📝 Creating Lesson 8: Responsive Design..."
cat > src/lessons/Lesson8.jsx << 'EOF'
import React from 'react';

// LESSON 8: Responsive Design Basics
// Goal: Make things look different on mobile vs desktop
// Pattern: {screen}:{class}
// Screens: sm: (640px+), md: (768px+), lg: (1024px+), xl: (1280px+)

const Lesson8 = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl">Responsive Text:</h2>
      <h1 className="text-xl md:text-3xl lg:text-5xl text-center mb-4">
        Small on mobile, huge on desktop!
      </h1>
      
      <h2 className="text-2xl">Responsive Colors:</h2>
      <div className="bg-red-500 md:bg-blue-500 lg:bg-green-500 p-4 text-white text-center mb-4">
        Red on mobile, blue on tablet, green on desktop
      </div>
      
      <h2 className="text-2xl">Responsive Layout:</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="bg-purple-500 text-white p-4">Column on mobile,</div>
        <div className="bg-pink-500 text-white p-4">Row on tablet+</div>
      </div>
      
      <h2 className="text-2xl">Responsive Padding:</h2>
      <div className="p-2 md:p-8 lg:p-16 bg-yellow-100">
        Small padding on mobile, huge on desktop
      </div>
      
      <h2 className="text-2xl">Hidden/Visible:</h2>
      <div className="block md:hidden bg-red-200 p-4 mb-2">
        Only visible on mobile
      </div>
      <div className="hidden md:block bg-blue-200 p-4">
        Only visible on tablet and up
      </div>
      
      {/* Try resizing your browser window to see the changes! */}
      {/* Try: sm:text-lg, md:p-12, lg:bg-indigo-500, xl:text-6xl */}
    </div>
  );
};

export default Lesson8;
EOF

# Lesson 9: Shadows and Effects
echo "📝 Creating Lesson 9: Shadows and Effects..."
cat > src/lessons/Lesson9.jsx << 'EOF'
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
EOF

# Lesson 10: Complete Card Example
echo "📝 Creating Lesson 10: Putting It All Together..."
cat > src/lessons/Lesson10.jsx << 'EOF'
import React from 'react';

// LESSON 10: Putting It All Together
// Goal: Build a complete card component using everything learned

const Lesson10 = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        🎓 Graduation Project
      </h1>
      
      <div className="max-w-4xl mx-auto">
        {/* Card Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: Profile Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
            <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
              👤
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
              John Doe
            </h3>
            <p className="text-gray-600 text-center mb-4">
              Web Developer
            </p>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              View Profile
            </button>
          </div>
          
          {/* Card 2: Product Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
            <div className="w-full h-32 bg-green-200 rounded mb-4 flex items-center justify-center text-4xl">
              📱
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Awesome Product
            </h3>
            <p className="text-gray-600 mb-4">
              This is an amazing product that you'll love using every day.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-green-600">$99</span>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Buy Now
              </button>
            </div>
          </div>
          
          {/* Card 3: Feature Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl md:col-span-2 lg:col-span-1">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Fast Performance
            </h3>
            <p className="text-gray-600 mb-4">
              Lightning-fast loading times that will improve your user experience.
            </p>
            <div className="flex gap-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Fast</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Reliable</span>
            </div>
          </div>
          
        </div>
        
        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg shadow-lg mt-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            🎉 Congratulations!
          </h2>
          <p className="text-lg mb-6">
            You've completed all 10 Tailwind CSS lessons!
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lesson10;
EOF

# Create an index file to easily import lessons
echo "📝 Creating Lessons Index..."
cat > src/lessons/index.js << 'EOF'
// Import all lessons for easy switching
export { default as Lesson1 } from './Lesson1';
export { default as Lesson2 } from './Lesson2';
export { default as Lesson3 } from './Lesson3';
export { default as Lesson4 } from './Lesson4';
export { default as Lesson5 } from './Lesson5';
export { default as Lesson6 } from './Lesson6';
export { default as Lesson7 } from './Lesson7';
export { default as Lesson8 } from './Lesson8';
export { default as Lesson9 } from './Lesson9';
export { default as Lesson10 } from './Lesson10';
EOF

# Create a practice App.jsx that lets you switch between lessons
echo "📝 Creating Practice App with Lesson Switcher..."
cat > src/components/AppWithLessons.jsx << 'EOF'
import React, { useState } from 'react';
import {
  Lesson1, Lesson2, Lesson3, Lesson4, Lesson5,
  Lesson6, Lesson7, Lesson8, Lesson9, Lesson10
} from '../lessons';

const AppWithLessons = () => {
  const [currentLesson, setCurrentLesson] = useState(1);
  
  const lessons = {
    1: { component: <Lesson1 />, title: "First Tailwind Class" },
    2: { component: <Lesson2 />, title: "Text Sizing" },
    3: { component: <Lesson3 />, title: "Colors Deep Dive" },
    4: { component: <Lesson4 />, title: "Spacing" },
    5: { component: <Lesson5 />, title: "Borders & Rounded" },
    6: { component: <Lesson6 />, title: "Flexbox Layout" },
    7: { component: <Lesson7 />, title: "Interactive States" },
    8: { component: <Lesson8 />, title: "Responsive Design" },
    9: { component: <Lesson9 />, title: "Shadows & Effects" },
    10: { component: <Lesson10 />, title: "Putting It Together" }
  };
  
  return (
    <div>
      {/* Lesson Navigation */}
      <div className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-4">📚 Tailwind CSS Lessons</h1>
        <div className="flex flex-wrap gap-2">
          {Object.keys(lessons).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentLesson(parseInt(num))}
              className={`px-3 py-1 rounded text-sm ${
                currentLesson === parseInt(num)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
              }`}
            >
              Lesson {num}
            </button>
          ))}
        </div>
        <p className="mt-2 text-gray-300">
          Current: Lesson {currentLesson} - {lessons[currentLesson].title}
        </p>
      </div>
      
      {/* Lesson Content */}
      <div className="min-h-screen">
        {lessons[currentLesson].component}
      </div>
    </div>
  );
};

export default AppWithLessons;
EOF

echo "✅ All lessons created successfully!"
echo ""
echo "📁 Generated files:"
echo "   src/lessons/Lesson1.jsx through Lesson10.jsx"
echo "   src/lessons/index.js"
echo "   src/components/AppWithLessons.jsx"
echo ""
echo "🚀 To use the lessons:"
echo "   1. Import any lesson in your App.jsx:"
echo "      import Lesson1 from './lessons/Lesson1';"
echo "      // Then use <Lesson1 /> in your component"
echo ""
echo "   2. OR use the lesson switcher:"
echo "      import AppWithLessons from './components/AppWithLessons';"
echo "      // Then use <AppWithLessons /> to navigate all lessons"
echo ""
echo "📖 Each lesson file contains:"
echo "   - Clear learning goal"
echo "   - Working examples"
echo "   - Comments with things to try"
echo "   - Progressive difficulty"