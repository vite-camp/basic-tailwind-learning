# Tailwind CSS Learning Guide - From Hero to Captain

**Prerequisite**: Complete "From Zero to Hero" guide first (Lessons 1-10)

Now that you understand Tailwind basics, let's dive into advanced concepts that will make you a Tailwind captain!

---

## 🎯 **Advanced Learning Path: 8 Mastery Lessons**

### **Lesson 11: The @apply Directive**

**Goal**: Learn to create custom CSS components using Tailwind utilities

**The Problem**: Sometimes you need to reuse the same combination of classes repeatedly:
```jsx
// Repetitive!
<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
```

**The Solution**: Use `@apply` in your CSS file:

**Update your `src/index.css`**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom component using @apply */
@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-semibold;
  }
  
  .btn-secondary {
    @apply bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 font-semibold;
  }
  
  .card {
    @apply bg-white p-6 rounded-lg shadow-lg border;
  }
}
```

**Practice App.jsx**:
```jsx
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
```

**Key Concepts**:
- `@layer components` = Creates custom component classes
- `@apply` = Applies Tailwind utilities to custom classes
- Still get all Tailwind benefits (hover, responsive, etc.)

---

### **Lesson 12: Tailwind Configuration Basics**

**Goal**: Understand how to customize your design system

**The `tailwind.config.js` file is your theme control center**:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ADD custom values (keeps defaults)
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
    // REPLACE default values completely
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Georgia', 'serif'],
    }
  },
  plugins: [],
}
```

**Practice App.jsx**:
```jsx
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
```

**Configuration Sections**:
- `extend` = Adds to existing values
- Direct properties = Replace defaults
- `colors`, `spacing`, `fontFamily` = Most commonly customized

---

### **Lesson 13: CSS Variables with Tailwind**

**Goal**: Create dynamic themes using CSS custom properties

**This is how you create Less-like variables in Tailwind**:

**Update your `src/index.css`**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CSS Variables (like Less variables) */
:root {
  --color-primary: #3b82f6;
  --color-secondary: #10b981;
  --spacing-section: 4rem;
  --border-radius-card: 12px;
}

/* Dark theme variables */
.dark {
  --color-primary: #60a5fa;
  --color-secondary: #34d399;
}

@layer components {
  .themed-button {
    background-color: var(--color-primary);
    @apply text-white px-6 py-3 font-semibold;
    border-radius: var(--border-radius-card);
  }
  
  .section-spacing {
    padding-top: var(--spacing-section);
    padding-bottom: var(--spacing-section);
  }
}
```

**Update `tailwind.config.js`**:
```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      }
    }
  },
  plugins: [],
}
```

**Practice App.jsx**:
```jsx
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
```

**Key Benefits**:
- Runtime theme switching
- Dynamic color changes
- Familiar to Less users
- Works with Tailwind utilities

---

### **Lesson 14: Dark Mode Mastery**

**Goal**: Build comprehensive dark mode support

**Enable dark mode in `tailwind.config.js`**:
```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' for system preference
  theme: {
    extend: {
      colors: {
        // Custom dark mode colors
        gray: {
          850: '#1f2937',
          950: '#111827',
        }
      }
    }
  },
  plugins: [],
}
```

**Practice App.jsx**:
```jsx
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
```

**Dark Mode Patterns**:
- `dark:bg-gray-900` = Dark mode background
- `text-gray-900 dark:text-white` = Light/dark text
- `transition-colors duration-300` = Smooth switching

---

### **Lesson 15: Responsive Design Mastery**

**Goal**: Master advanced responsive layouts

**Practice App.jsx**:
```jsx
import React from 'react';

const Lesson15 = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center mb-8">
          Responsive Mastery
        </h1>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {[1,2,3,4,5,6,7,8].map(num => (
            <div key={num} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">Card {num}</h3>
              <p className="text-sm text-gray-600">
                1 col mobile, 2 tablet, 3 desktop, 4 large
              </p>
            </div>
          ))}
        </div>
        
        {/* Responsive Layout */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 p-6 bg-blue-500 text-white">
              <h2 className="text-xl font-bold mb-4">Sidebar</h2>
              <p className="hidden lg:block">
                This content is hidden on mobile and shows on desktop
              </p>
              <p className="lg:hidden">
                Mobile sidebar content
              </p>
            </div>
            <div className="lg:w-2/3 p-6">
              <h2 className="text-xl font-bold mb-4">Main Content</h2>
              <div className="space-y-4">
                <p className="text-base lg:text-lg">
                  Content that adapts to screen size
                </p>
                
                {/* Responsive spacing */}
                <div className="grid gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                  <div className="p-2 sm:p-4 md:p-6 lg:p-8 bg-gray-100 rounded">
                    Responsive padding
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Container queries simulation */}
        <div className="mt-8 p-4 bg-white rounded-lg">
          <h3 className="text-lg font-bold mb-4">Responsive Typography</h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            This text scales with screen size: sm→base→lg→xl→2xl
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lesson15;
```

**Responsive Breakpoints**:
- `sm:` 640px+ (small tablet)
- `md:` 768px+ (tablet)  
- `lg:` 1024px+ (desktop)
- `xl:` 1280px+ (large desktop)
- `2xl:` 1536px+ (extra large)

---

### **Lesson 16: Advanced Layout Techniques**

**Goal**: Master Grid, Flexbox, and positioning

**Practice App.jsx**:
```jsx
import React from 'react';

const Lesson16 = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Advanced Layouts</h1>
      
      {/* CSS Grid Advanced */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">CSS Grid Layouts</h2>
        
        {/* Complex Grid */}
        <div className="grid grid-cols-4 grid-rows-3 gap-4 h-64 mb-6">
          <div className="col-span-2 row-span-2 bg-blue-500 text-white p-4 rounded">
            Span 2 cols, 2 rows
          </div>
          <div className="bg-red-500 text-white p-4 rounded">1</div>
          <div className="bg-green-500 text-white p-4 rounded">2</div>
          <div className="bg-yellow-500 text-white p-4 rounded">3</div>
          <div className="bg-purple-500 text-white p-4 rounded">4</div>
          <div className="col-span-2 bg-pink-500 text-white p-4 rounded">
            Span 2 cols
          </div>
        </div>
        
        {/* Auto-fit Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          {[1,2,3,4,5].map(num => (
            <div key={num} className="bg-white p-4 rounded shadow">
              Auto-fit {num}
            </div>
          ))}
        </div>
      </section>
      
      {/* Advanced Flexbox */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Advanced Flexbox</h2>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold truncate">
                This title will truncate if too long for the container
              </h3>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Action
              </button>
            </div>
          <