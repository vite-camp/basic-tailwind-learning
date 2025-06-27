# Vite React Tailwind Template

A modern, fast, and feature-rich development template combining Vite, React, and Tailwind CSS.

## 🚀 Features

- ⚡ **Vite** - Lightning fast build tool with HMR
- ⚛️ **React 18** - Latest React with concurrent features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- 🔧 **Modern Tooling** - ESM, PostCSS, Autoprefixer
- 🎯 **Developer Experience** - Fast refresh, TypeScript ready

## 📦 What's Included

```
├── src/
│   ├── components/         # React components
│   │   └── App.jsx         # Main App component
│   ├── main.jsx            # Entry point
│   └── index.css           # Tailwind CSS imports
├── public/                 # Static assets
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🎨 Tailwind CSS

### Utility Classes

This template includes common Tailwind utility classes. Here are some examples:

```jsx
// Layout
<div className="flex items-center justify-center">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

// Styling
<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
<h1 className="text-4xl font-bold text-gray-800">

// Responsive
<div className="w-full md:w-1/2 lg:w-1/3">
```

### Custom Components

The template includes custom component classes in `src/index.css`:

```css
@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-semibold transition-colors duration-200;
  }
  
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-600 text-white;
  }
}
```

Usage:
```jsx
<button className="btn btn-primary">Click me</button>
```

## 🔧 Configuration

### Tailwind CSS

Edit `tailwind.config.js` to customize your design system:

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
      },
    },
  },
  plugins: [],
}
```

### Vite

Edit `vite.config.js` for build customization:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Add your custom config here
})
```

## 📱 Responsive Design

The template follows mobile-first responsive design:

```jsx
<div className="
  w-full          // Mobile: full width
  md:w-1/2        // Tablet: half width
  lg:w-1/3        // Desktop: one-third width
">
```

## 🎯 Best Practices

### Component Structure

```jsx
import React from 'react'

const MyComponent = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  )
}

export default MyComponent
```

### State Management

```jsx
import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])
  
  return (
    <div className="text-center">
      <p className="text-2xl mb-4">{count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="btn btn-primary"
      >
        Increment
      </button>
    </div>
  )
}
```

## 🚀 Deployment

### Vercel
```bash
npm run build
# Deploy dist folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## 🔍 Troubleshooting

### Common Issues

**HMR not working:**
- Check if your component exports are correct
- Restart the dev server: `npm run dev`

**Tailwind classes not applying:**
- Check `tailwind.config.js` content paths
- Ensure `@tailwind` directives are in `src/index.css`
- Clear browser cache

**Build errors:**
- Check for unused imports
- Verify all dependencies are installed
- Run `npm run build` to see detailed errors

## 📚 Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite React Plugin](https://github.com/vitejs/vite-plugin-react)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy coding! 🎉**
# basic-tailwind-learning
