                    <div className={`p-4 bg-purple-100 dark:bg-purple-900 rounded-lg transition-all duration-500 ${isAnimating ? 'animate-scale-in' : ''}`}>
                      Scale In
                    </div>
                  </div>
                </div>

                {/* Hover Effects */}
                <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-semibold mb-6">Hover Effects</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-100 dark:bg-orange-900 rounded-lg hover-lift cursor-pointer">
                      Hover Lift
                    </div>
                    <div className="p-4 bg-pink-100 dark:bg-pink-900 rounded-lg hover-glow cursor-pointer">
                      Hover Glow
                    </div>
                    <div className="p-4 bg-cyan-100 dark:bg-cyan-900 rounded-lg hover-tilt cursor-pointer">
                      Hover Tilt
                    </div>
                  </div>
                </div>

                {/* Continuous Animations */}
                <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-semibold mb-6">Continuous</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg animate-float">
                      Float
                    </div>
                    <div className="p-4 bg-red-100 dark:bg-red-900 rounded-lg animate-pulse-soft">
                      Pulse Soft
                    </div>
                    <div className="p-4 bg-indigo-100 dark:bg-indigo-900 rounded-lg animate-bounce-gentle">
                      Bounce Gentle
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={triggerAnimation}
                  className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover-lift"
                >
                  Trigger Entrance Animations
                </button>
              </div>
            </section>
          )}

          {/* Theming Demo */}
          {activeDemo === 'theming' && (
            <section className="animate-fade-in-up">
              <h2 className="text-fluid-2xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
                Dynamic Theming System
              </h2>
              
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Theme Examples */}
                {['light', 'dark', 'blue', 'purple'].map(theme => (
                  <div key={theme} className={`theme-${theme} p-8 rounded-2xl shadow-lg`}>
                    <h3 className="text-lg font-semibold mb-6 capitalize">{theme} Theme</h3>
                    
                    <div className="space-y-4">
                      <div className="card p-4">
                        <h4 className="font-semibold mb-2">Card Component</h4>
                        <p className="text-sm opacity-75">
                          This card adapts to the {theme} theme automatically.
                        </p>
                      </div>
                      
                      <div className="flex space-x-3">
                        <button className="btn-primary px-4 py-2 rounded-lg text-sm">
                          Primary Button
                        </button>
                        <button className="card px-4 py-2 rounded-lg text-sm border">
                          Secondary Button
                        </button>
                      </div>
                      
                      <div className="card p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full"></div>
                          <div>
                            <h5 className="font-medium">Theme Colors</h5>
                            <p className="text-xs opacity-75">Dynamic color adaptation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>

        {/* Plugin Showcase */}
        <section className="mt-16 bg-white dark:bg-neutral-800 p-12 rounded-3xl shadow-xl">
          <h2 className="text-fluid-2xl font-bold text-center mb-12 text-neutral-900 dark:text-neutral-100">
            Plugin Ecosystem Features
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '🎨',
                title: 'Color Science',
                description: 'Advanced color mixing, complementary colors, and alpha variations',
                features: ['Alpha utilities', 'Color theory', 'Dynamic mixing'],
              },
              {
                icon: '📱',
                title: 'Fluid Design',
                description: 'Responsive typography and layouts that scale smoothly',
                features: ['Clamp functions', 'Viewport units', 'Container queries'],
              },
              {
                icon: '⚡',
                title: 'Animation Engine',
                description: 'Rich animation system with entrance, hover, and continuous effects',
                features: ['Custom keyframes', 'Easing functions', 'Performance optimized'],
              },
              {
                icon: '🎭',
                title: 'Theme System',
                description: 'Dynamic theming with CSS variables and component adaptation',
                features: ['Runtime switching', 'CSS variables', 'Component theming'],
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="text-center hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {feature.description}
                </p>
                <ul className="text-xs space-y-1 text-neutral-500 dark:text-neutral-500">
                  {feature.features.map(item => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="mt-16 prose-enhanced max-w-none">
          <h2>Implementation Guide</h2>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3>Plugin Installation</h3>
              <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-auto">
                <code>{`// Install the plugin
npm install @company/tailwind-advanced

// Add to tailwind.config.js
const advancedPlugin = require('@company/tailwind-advanced');

module.exports = {
  plugins: [
    advancedPlugin({
      includeColorMix: true,
      includeFluidTypography: true,
      includeAdvancedGrid: true,
      includeAnimations: true,
    })
  ]
};`}</code>
              </pre>
            </div>
            
            <div>
              <h3>Usage Examples</h3>
              <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-auto">
                <code>{`<!-- Color mixing -->
<div class="bg-blue-500-alpha-25"></div>

<!-- Fluid typography -->
<h1 class="text-fluid-4xl"></h1>

<!-- Advanced grid -->
<div class="grid-auto-fit-md"></div>

<!-- Custom animations -->
<div class="animate-fade-in-up hover-lift"></div>`}</code>
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Lesson26;
```

---

### **Lesson 27: Real-World Case Studies**

**Goal**: Apply Tailwind CSS to complex real-world scenarios

**Case Study 1: E-commerce Platform**:

```jsx
import React, { useState } from 'react';

// E-commerce Product Component System
const ProductCard = ({ product, variant = 'default' }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const variants = {
    default: 'bg-white border border-neutral-200',
    featured: 'bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-200',
    compact: 'bg-white border border-neutral-200',
  };

  return (
    <article className={`
      relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300
      hover:shadow-xl hover:-translate-y-1 ${variants[variant]}
    `}>
      {/* Product Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className={`
            px-2 py-1 text-xs font-semibold rounded-full
            ${product.badge.type === 'sale' ? 'bg-red-500 text-white' : ''}
            ${product.badge.type === 'new' ? 'bg-green-500 text-white' : ''}
            ${product.badge.type === 'featured' ? 'bg-primary text-white' : ''}
          `}>
            {product.badge.text}
          </span>
        </div>
      )}

      {/* Wishlist Button */}
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="
          absolute top-3 right-3 z-10 p-2 bg-white bg-opacity-80 backdrop-blur-sm
          rounded-full shadow-md hover:bg-opacity-100 transition-all duration-200
          group-hover:scale-110
        "
        aria-label="Add to wishlist"
      >
        <svg 
          className={`w-5 h-5 transition-colors ${
            isWishlisted ? 'text-red-500 fill-red-500' : 'text-neutral-400'
          }`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>

      {/* Product Images */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.images[currentImage]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`
                  w-2 h-2 rounded-full transition-all duration-200
                  ${index === currentImage ? 'bg-white' : 'bg-white bg-opacity-50'}
                `}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Brand & Category */}
        <div className="flex items-center justify-between text-xs text-neutral-500">
          <span className="font-medium uppercase tracking-wide">{product.brand}</span>
          <span>{product.category}</span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-neutral-900 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-neutral-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-neutral-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-neutral-900">
              ${product.price.current}
            </span>
            {product.price.original && (
              <span className="text-sm text-neutral-500 line-through">
                ${product.price.original}
              </span>
            )}
          </div>
          {product.price.original && (
            <span className="text-sm font-semibold text-green-600">
              Save {Math.round(((product.price.original - product.price.current) / product.price.original) * 100)}%
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="
          w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold
          hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary
          transform transition-all duration-200 hover:scale-105
          disabled:opacity-50 disabled:cursor-not-allowed
        ">
          Add to Cart
        </button>
      </div>
    </article>
  );
};

// E-commerce Grid Layout
const EcommerceShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      brand: "AudioTech",
      category: "Electronics",
      images: ["/api/placeholder/400/400", "/api/placeholder/400/400"],
      price: { current: 299, original: 399 },
      rating: 4.5,
      reviews: 234,
      badge: { type: 'sale', text: '25% OFF' },
    },
    {
      id: 2,
      name: "Minimalist Desk Organizer",
      brand: "ModernSpace",
      category: "Office",
      images: ["/api/placeholder/400/400"],
      price: { current: 89 },
      rating: 4.8,
      reviews: 156,
      badge: { type: 'new', text: 'NEW' },
    },
    {
      id: 3,
      name: "Sustainable Coffee Tumbler",
      brand: "EcoLiving",
      category: "Lifestyle",
      images: ["/api/placeholder/400/400", "/api/placeholder/400/400"],
      price: { current: 45, original: 55 },
      rating: 4.3,
      reviews: 89,
    },
    // Add more products...
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium products
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              variant={index === 0 ? 'featured' : 'default'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
```

**Case Study 2: SaaS Dashboard**:

```jsx
// SaaS Dashboard Components
const MetricCard = ({ title, value, change, trend, icon }) => {
  const trendColor = trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-neutral-600';
  const trendIcon = trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→';

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-primary-100 rounded-lg">
          <span className="text-2xl">{icon}</span>
        </div>
        <div className={`flex items-center text-sm font-medium ${trendColor}`}>
          <span>{change}</span>
          <span className="ml-1">{trendIcon}</span>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-neutral-600 mb-1">{title}</h3>
        <p className="text-2xl font-bold text-neutral-900">{value}</p>
      </div>
    </div>
  );
};

const ActivityFeed = ({ activities }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-200">
      <div className="p-6 border-b border-neutral-200">
        <h3 className="text-lg font-semibold text-neutral-900">Recent Activity</h3>
      </div>
      
      <div className="divide-y divide-neutral-200">
        {activities.map((activity, index) => (
          <div key={index} className="p-6 hover:bg-neutral-50 transition-colors">
            <div className="flex space-x-3">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-white text-sm
                ${activity.type === 'success' ? 'bg-green-500' : ''}
                ${activity.type === 'warning' ? 'bg-yellow-500' : ''}
                ${activity.type === 'error' ? 'bg-red-500' : ''}
                ${activity.type === 'info' ? 'bg-blue-500' : ''}
              `}>
                {activity.icon}
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-neutral-900">
                  {activity.title}
                </p>
                <p className="text-sm text-neutral-600 mt-1">
                  {activity.description}
                </p>
                <p className="text-xs text-neutral-500 mt-2">
                  {activity.timestamp}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SaaSDashboard = () => {
  const metrics = [
    { title: 'Total Revenue', value: '$24,680', change: '+12.3%', trend: 'up', icon: '💰' },
    { title: 'Active Users', value: '1,234', change: '+8.1%', trend: 'up', icon: '👥' },
    { title: 'Conversion Rate', value: '3.2%', change: '-0.5%', trend: 'down', icon: '📈' },
    { title: 'Avg. Session', value: '4m 32s', change: '+2.1%', trend: 'up', icon: '⏱️' },
  ];

  const activities = [
    {
      type: 'success',
      icon: '✓',
      title: 'Payment processed',
      description: 'John Doe upgraded to Pro plan',
      timestamp: '2 minutes ago'
    },
    {
      type: 'info',
      icon: 'i',
      title: 'New user registered',
      description: 'Sarah Wilson created an account',
      timestamp: '5 minutes ago'
    },
    {
      type: 'warning',
      icon: '!',
      title: 'Server load high',
      description: 'CPU usage at 85% on server-02',
      timestamp: '10 minutes ago'
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
              <p className="text-neutral-600">Welcome back, here's what's happening</p>
            </div>
            
            <div className="flex space-x-3">
              <button className="bg-white border border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg hover:bg-neutral-50">
                Export
              </button>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600">
                New Report
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
            <h3 className="text-lg font-semibold text-neutral-900 mb-6">Revenue Overview</h3>
            
            {/* Mock Chart */}
            <div className="h-64 bg-gradient-to-t from-primary-100 to-transparent rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-end justify-around p-4">
                {[40, 65, 45, 80, 60, 75, 90].map((height, index) => (
                  <div
                    key={index}
                    className="bg-primary rounded-t-lg w-8 transition-all duration-500 hover:bg-primary-600"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div>
            <ActivityFeed activities={activities} />
          </div>
        </div>
      </main>
    </div>
  );
};
```

**Case Study 3: Content Management System**:

```jsx
// CMS Interface Components
const ContentEditor = () => {
  const [content, setContent] = useState('');
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    setWordCount(content.trim().split(/\s+/).filter(word => word.length > 0).length);
  }, [content]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-200">
      {/* Editor Toolbar */}
      <div className="border-b border-neutral-200 p-4">
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-neutral-100 rounded-lg">
            <strong>B</strong>
          </button>
          <button className="p-2 hover:bg-neutral-100 rounded-lg">
            <em>I</em>
          </button>
          <button className="p-2 hover:bg-neutral-100 rounded-lg">
            <u>U</u>
          </button>
          <div className="w-px h-6 bg-neutral-300"></div>
          <button className="p-2 hover:bg-neutral-100 rounded-lg">📷</button>
          <button className="p-2 hover:bg-neutral-100 rounded-lg">🔗</button>
          <button className="p-2 hover:bg-neutral-100 rounded-lg">📊</button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="p-6">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing your content..."
          className="w-full h-64 resize-none border-none outline-none text-neutral-900 placeholder-neutral-400"
        />
      </div>

      {/* Editor Footer */}
      <div className="border-t border-neutral-200 p-4 flex justify-between items-center">
        <span className="text-sm text-neutral-500">
          {wordCount} words
        </span>
        <div className="flex space-x-2">
          <button className="text-sm text-neutral-600 hover:text-neutral-900">
            Save Draft
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-600">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

const Lesson27 = () => {
  const [activeCase, setActiveCase] = useState('ecommerce');

  const cases = {
    ecommerce: 'E-commerce Platform',
    saas: 'SaaS Dashboard',
    cms: 'Content Management',
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Real-World Case Studies
          </h1>
          <p className="text-lg text-neutral-600">
            Complex implementations of Tailwind CSS in production applications
          </p>
        </header>

        {/* Case Study Navigation */}
        <nav className="mb-12">
          <div className="flex justify-center space-x-4">
            {Object.entries(cases).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCase(key)}
                className={`
                  px-6 py-3 rounded-xl font-medium transition-all duration-300
                  ${activeCase === key
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-neutral-700 hover:bg-neutral-50'
                  }
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>

        {/* Case Study Content */}
        <main>
          {activeCase === 'ecommerce' && <EcommerceShowcase />}
          {activeCase === 'saas' && <SaaSDashboard />}
          {activeCase === 'cms' && (
            <div className="max-w-4xl mx-auto">
              <ContentEditor />
            </div>
          )}
        </main>

        {/* Implementation Insights */}
        <section className="mt-16 bg-white p-12 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-8 text-neutral-900">
            Implementation Insights
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-lg font-semibold mb-3">Architecture</h3>
              <p className="text-sm text-neutral-600">
                Component-based design with consistent spacing, typography, and color systems
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-3">Performance</h3>
              <p className="text-sm text-neutral-600">
                Optimized bundle sizes through purging and smart component composition
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">♿</div>
              <h3         '@keyframes fadeInDown': {
          'from': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        '@keyframes fadeInLeft': {
          'from': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        '@keyframes fadeInRight': {
          'from': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        '@keyframes scaleIn': {
          'from': {
            opacity: '0',
            transform: 'scale(0.8)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        '@keyframes slideUp': {
          'from': {
            transform: 'translateY(100%)',
          },
          'to': {
            transform: 'translateY(0)',
          },
        },
        '@keyframes slideDown': {
          'from': {
            transform: 'translateY(-100%)',
          },
          'to': {
            transform: 'translateY(0)',
          },
        },
        '@keyframes rotateIn': {
          'from': {
            opacity: '0',
            transform: 'rotate(-180deg) scale(0.5)',
          },
          'to': {
            opacity: '1',
            transform: 'rotate(0deg) scale(1)',
          },
        },
        '@keyframes flipInX': {
          'from': {
            opacity: '0',
            transform: 'perspective(400px) rotateX(90deg)',
          },
          'to': {
            opacity: '1',
            transform: 'perspective(400px) rotateX(0deg)',
          },
        },
        '@keyframes flipInY': {
          'from': {
            opacity: '0',
            transform: 'perspective(400px) rotateY(90deg)',
          },
          'to': {
            opacity: '1',
            transform: 'perspective(400px) rotateY(0deg)',
          },
        },
      });

      addUtilities(animationUtilities);
    }

    // Typography Enhancement Components
    addComponents({
      '.prose-enhanced': {
        '& h1, & h2, & h3, & h4, & h5, & h6': {
          fontWeight: '700',
          letterSpacing: '-0.025em',
          lineHeight: '1.2',
        },
        '& h1': {
          fontSize: 'clamp(2.25rem, 4vw, 3.75rem)',
        },
        '& h2': {
          fontSize: 'clamp(1.875rem, 3vw, 2.25rem)',
        },
        '& h3': {
          fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)',
        },
        '& p': {
          fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
          lineHeight: '1.7',
          marginBottom: '1.5em',
        },
        '& a': {
          color: theme('colors.blue.600'),
          textDecoration: 'underline',
          textDecorationColor: theme('colors.blue.300'),
          textUnderlineOffset: '0.2em',
          transition: 'all 0.2s ease',
          '&:hover': {
            color: theme('colors.blue.700'),
            textDecorationColor: theme('colors.blue.500'),
          },
        },
        '& blockquote': {
          borderLeftWidth: '4px',
          borderLeftColor: theme('colors.blue.400'),
          paddingLeft: '1.5em',
          fontStyle: 'italic',
          backgroundColor: theme('colors.blue.50'),
          padding: '1.5em',
          borderRadius: '0.5rem',
        },
        '& code': {
          backgroundColor: theme('colors.gray.100'),
          color: theme('colors.gray.800'),
          padding: '0.25em 0.5em',
          borderRadius: '0.25rem',
          fontSize: '0.875em',
          fontFamily: theme('fontFamily.mono').join(', '),
        },
        '& pre': {
          backgroundColor: theme('colors.gray.900'),
          color: theme('colors.gray.100'),
          padding: '1.5em',
          borderRadius: '0.75rem',
          overflow: 'auto',
          fontSize: '0.875em',
          lineHeight: '1.5',
        },
      },
    });

    // Utility Generators
    const generateSpacingUtilities = (prefix, property) => {
      const spacing = theme('spacing');
      const utilities = {};
      
      Object.entries(spacing).forEach(([key, value]) => {
        utilities[`.${prefix}-${key}`] = { [property]: value };
      });
      
      return utilities;
    };

    // Custom spacing utilities
    addUtilities({
      ...generateSpacingUtilities('gap-x', 'columnGap'),
      ...generateSpacingUtilities('gap-y', 'rowGap'),
      ...generateSpacingUtilities('scroll-m', 'scrollMargin'),
      ...generateSpacingUtilities('scroll-p', 'scrollPadding'),
    });

    // CSS Logical Properties
    addUtilities({
      '.border-inline': {
        borderInlineWidth: '1px',
      },
      '.border-block': {
        borderBlockWidth: '1px',
      },
      '.p-inline': {
        paddingInline: theme('spacing.4'),
      },
      '.p-block': {
        paddingBlock: theme('spacing.4'),
      },
      '.m-inline': {
        marginInline: theme('spacing.4'),
      },
      '.m-block': {
        marginBlock: theme('spacing.4'),
      },
      '.text-start': {
        textAlign: 'start',
      },
      '.text-end': {
        textAlign: 'end',
      },
    });

    // Container Queries Simulation
    addUtilities({
      '.container-xs': {
        '@media (min-width: 320px)': {
          // Styles for small containers
        },
      },
      '.container-sm': {
        '@media (min-width: 640px)': {
          // Styles for medium containers
        },
      },
      '.container-md': {
        '@media (min-width: 768px)': {
          // Styles for large containers
        },
      },
    });
  };
});

// Theming Plugin
const themingPlugin = plugin(function({ addUtilities, addComponents, theme }) {
  // Dynamic theme utilities
  const themes = ['light', 'dark', 'blue', 'purple', 'green'];
  const themeUtilities = {};

  themes.forEach(themeName => {
    themeUtilities[`.theme-${themeName}`] = {
      colorScheme: themeName === 'dark' ? 'dark' : 'light',
    };

    // Theme-specific component styles
    themeUtilities[`.theme-${themeName} .card`] = {
      backgroundColor: getThemeColor(themeName, 'surface'),
      borderColor: getThemeColor(themeName, 'border'),
      color: getThemeColor(themeName, 'text'),
    };

    themeUtilities[`.theme-${themeName} .btn-primary`] = {
      backgroundColor: getThemeColor(themeName, 'primary'),
      borderColor: getThemeColor(themeName, 'primary'),
      color: getThemeColor(themeName, 'primary-text'),
      '&:hover': {
        backgroundColor: getThemeColor(themeName, 'primary-hover'),
        borderColor: getThemeColor(themeName, 'primary-hover'),
      },
    };
  });

  addUtilities(themeUtilities);

  function getThemeColor(theme, type) {
    const colors = {
      light: {
        surface: '#ffffff',
        border: '#e5e7eb',
        text: '#111827',
        primary: '#3b82f6',
        'primary-text': '#ffffff',
        'primary-hover': '#2563eb',
      },
      dark: {
        surface: '#1f2937',
        border: '#374151',
        text: '#f9fafb',
        primary: '#60a5fa',
        'primary-text': '#111827',
        'primary-hover': '#3b82f6',
      },
      blue: {
        surface: '#1e3a8a',
        border: '#3730a3',
        text: '#dbeafe',
        primary: '#60a5fa',
        'primary-text': '#1e3a8a',
        'primary-hover': '#3b82f6',
      },
      purple: {
        surface: '#581c87',
        border: '#6b21a8',
        text: '#e9d5ff',
        primary: '#a855f7',
        'primary-text': '#581c87',
        'primary-hover': '#9333ea',
      },
      green: {
        surface: '#14532d',
        border: '#166534',
        text: '#dcfce7',
        primary: '#22c55e',
        'primary-text': '#14532d',
        'primary-hover': '#16a34a',
      },
    };

    return colors[theme]?.[type] || colors.light[type];
  }
});
```

**Advanced Configuration System**:

```javascript
// tailwind.config.advanced.js
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const advancedUtilities = require('./plugins/advanced-utilities');
const themingPlugin = require('./plugins/theming');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
      './src/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
      './pages/**/*.{js,jsx,ts,tsx}',
    ],
    transform: {
      // Transform dynamic classes
      js: (content) => {
        // Handle template literals and dynamic class construction
        return content.replace(/`([^`]*)`/g, (match, p1) => {
          return p1.replace(/\$\{[^}]*\}/g, '');
        });
      },
    },
    extract: {
      // Custom extraction for complex patterns
      js: (content) => {
        const classes = [];
        
        // Extract from className patterns
        const classNameRegex = /className\s*=\s*['"`]([^'"`]*)['"`]/g;
        let match;
        while ((match = classNameRegex.exec(content)) !== null) {
          classes.push(...match[1].split(/\s+/));
        }
        
        // Extract from template literals
        const templateRegex = /`([^`]*)`/g;
        while ((match = templateRegex.exec(content)) !== null) {
          const template = match[1];
          // Simple extraction - in production, use a more sophisticated parser
          const templateClasses = template.match(/\b[\w-]+:[\w-]+\b/g) || [];
          classes.push(...templateClasses);
        }
        
        return classes.filter(Boolean);
      },
    },
  },

  darkMode: ['class', '[data-theme="dark"]'],

  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
      '3xl': '1600px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      
      // Semantic colors
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      accent: 'rgb(var(--color-accent) / <alpha-value>)',
      
      // State colors
      success: colors.emerald,
      warning: colors.amber,
      error: colors.red,
      info: colors.blue,
      
      // Neutral palette
      neutral: colors.slate,
      
      // Brand colors
      brand: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
        950: '#172554',
      },
    },

    spacing: {
      ...defaultTheme.spacing,
      '18': '4.5rem',
      '88': '22rem',
      '112': '28rem',
      '128': '32rem',
      '144': '36rem',
    },

    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },

    fontFamily: {
      sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
      serif: ['Charter', ...defaultTheme.fontFamily.serif],
      mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      display: ['Cal Sans', 'Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
    },

    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-out': 'slideOut 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'scale-out': 'scaleOut 0.2s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-soft': 'pulseSoft 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.9)', opacity: '0' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },

      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.15)',
        'colored': '0 4px 14px 0 rgba(59, 130, 246, 0.15)',
      },

      backdropBlur: {
        xs: '2px',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': `
          radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
          radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
          radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
          radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)
        `,
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.neutral.700'),
            '--tw-prose-headings': theme('colors.neutral.900'),
            '--tw-prose-lead': theme('colors.neutral.600'),
            '--tw-prose-links': theme('colors.primary.600'),
            '--tw-prose-bold': theme('colors.neutral.900'),
            '--tw-prose-counters': theme('colors.neutral.500'),
            '--tw-prose-bullets': theme('colors.neutral.300'),
            '--tw-prose-hr': theme('colors.neutral.200'),
            '--tw-prose-quotes': theme('colors.neutral.900'),
            '--tw-prose-quote-borders': theme('colors.neutral.200'),
            '--tw-prose-captions': theme('colors.neutral.500'),
            '--tw-prose-code': theme('colors.neutral.900'),
            '--tw-prose-pre-code': theme('colors.neutral.200'),
            '--tw-prose-pre-bg': theme('colors.neutral.800'),
            '--tw-prose-th-borders': theme('colors.neutral.300'),
            '--tw-prose-td-borders': theme('colors.neutral.200'),
          },
        },
      }),
    },
  },

  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    
    // Custom plugins
    advancedUtilities({
      includeColorMix: true,
      includeFluidTypography: true,
      includeAdvancedGrid: true,
      includeAnimations: true,
    }),
    themingPlugin,
    
    // Custom utility plugin
    plugin(function({ addUtilities, theme }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-default': {
          '-ms-overflow-style': 'auto',
          'scrollbar-width': 'auto',
          '&::-webkit-scrollbar': {
            display: 'block',
          },
        },
      });
    }),
  ],

  // Experimental features
  experimental: {
    optimizeUniversalDefaults: true,
  },

  // Future features
  future: {
    hoverOnlyWhenSupported: true,
  },
};
```

**Practice: Advanced Customization Showcase**:

```jsx
import React, { useState, useEffect } from 'react';

// Component showcasing advanced features
const Lesson26 = () => {
  const [activeDemo, setActiveDemo] = useState('colors');
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = {
    colors: 'Advanced Color System',
    typography: 'Fluid Typography',
    grid: 'Advanced Grid Layouts',
    animations: 'Custom Animations',
    theming: 'Dynamic Theming',
  };

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="max-w-7xl mx-auto p-8">
        <header className="text-center mb-12">
          <h1 className="text-fluid-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Advanced Customization & Plugin Ecosystem
          </h1>
          <p className="text-fluid-lg text-neutral-600 dark:text-neutral-300">
            Showcase of advanced Tailwind CSS capabilities and custom plugins
          </p>
        </header>

        {/* Demo Navigation */}
        <nav className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(demos).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`
                  px-6 py-3 rounded-xl font-medium transition-all duration-300
                  ${activeDemo === key
                    ? 'bg-primary text-white shadow-colored hover-lift'
                    : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700'
                  }
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>

        {/* Demo Content */}
        <main className="space-y-12">
          {/* Color System Demo */}
          {activeDemo === 'colors' && (
            <section className="animate-fade-in-up">
              <h2 className="text-fluid-2xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
                Advanced Color System
              </h2>
              
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Alpha Variations */}
                <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-semibold mb-6">Alpha Variations</h3>
                  <div className="space-y-4">
                    <div className="bg-primary-500-alpha-10 p-4 rounded-lg">
                      10% Alpha
                    </div>
                    <div className="bg-primary-500-alpha-25 p-4 rounded-lg">
                      25% Alpha
                    </div>
                    <div className="bg-primary-500-alpha-50 p-4 rounded-lg">
                      50% Alpha
                    </div>
                  </div>
                </div>

                {/* Color Theory */}
                <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-semibold mb-6">Color Theory</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary-500 p-4 rounded-lg text-white text-center">
                      Primary
                    </div>
                    <div className="bg-primary-500-complement p-4 rounded-lg text-white text-center">
                      Complement
                    </div>
                    <div className="bg-primary-500-triadic-1 p-4 rounded-lg text-white text-center">
                      Triadic 1
                    </div>
                    <div className="bg-primary-500-triadic-2 p-4 rounded-lg text-white text-center">
                      Triadic 2
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Typography Demo */}
          {activeDemo === 'typography' && (
            <section className="animate-fade-in-up">
              <h2 className="text-fluid-2xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
                Fluid Typography System
              </h2>
              
              <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg">
                <div className="prose-enhanced max-w-none">
                  <h1>Fluid Heading 1</h1>
                  <h2>Fluid Heading 2</h2>
                  <h3>Fluid Heading 3</h3>
                  
                  <p>
                    This paragraph uses fluid typography that scales smoothly between 
                    viewport sizes. The text size adapts based on screen width using 
                    CSS clamp() functions.
                  </p>
                  
                  <blockquote>
                    "Typography is the craft of endowing human language with a durable 
                    visual form."
                  </blockquote>
                  
                  <p>
                    Here's some <code>inline code</code> and a 
                    <a href="#">responsive link</a> that demonstrates the enhanced prose styles.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Grid Demo */}
          {activeDemo === 'grid' && (
            <section className="animate-fade-in-up">
              <h2 className="text-fluid-2xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
                Advanced Grid Layouts
              </h2>
              
              <div className="space-y-8">
                {/* Auto-fit Grid */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Auto-fit Grid</h3>
                  <div className="grid-auto-fit-md">
                    {Array.from({ length: 8 }, (_, i) => (
                      <div
                        key={i}
                        className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg text-center hover-lift"
                      >
                        <div className="w-12 h-12 bg-primary mx-auto rounded-lg mb-4"></div>
                        <h4 className="font-semibold">Item {i + 1}</h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          Auto-fit layout
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Masonry Grid */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Masonry Layout</h3>
                  <div className="grid-masonry">
                    {Array.from({ length: 12 }, (_, i) => (
                      <div
                        key={i}
                        className="grid-item-break-inside-avoid bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg mb-6"
                        style={{ height: `${150 + (i % 3) * 100}px` }}
                      >
                        <h4 className="font-semibold mb-2">Masonry Item {i + 1}</h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          Variable height content that flows naturally in columns.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Animations Demo */}
          {activeDemo === 'animations' && (
            <section className="animate-fade-in-up">
              <h2 className="text-fluid-2xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
                Custom Animation System
              </h2>
              
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Entrance Animations */}
                <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-semibold mb-6">Entrance Animations</h3>
                  <div className="space-y-4">
                    <div className={`p-4 bg-blue-100 dark:bg-blue-900 rounded-lg transition-all duration-500 ${isAnimating ? 'animate-fade-in-up' : ''}`}>
                      Fade In Up
                    </div>
                    <div className={`p-4 bg-green-100 dark:bg-green-900 rounded-lg transition-all duration-500 ${isAnimating ? 'animate-fade-in-left' : ''}`}>
                      Fade In Left
                    </div>
                    <div className={`p-4 bg-purple-100 dark:bg-purple-900 rounded-lg transition-all duration-500 ${isAnimating ? 'animate-scale-in' : ''}`}>
                      Scale In# Tailwind CSS Learning Guide - From Captain to Admiral (Enterprise)

**Prerequisites**: Complete "From Zero to Hero" (Lessons 1-10) and "From Hero to Captain" (Lessons 11-18)

Welcome to the ultimate level of Tailwind CSS mastery! These enterprise-level lessons will transform you into a Tailwind CSS Admiral, capable of leading large-scale implementations and creating world-class design systems.

---

## 🎯 **Enterprise Learning Path: 10 Admiral Lessons**

### **Lesson 19: Enterprise Design System Architecture**

**Goal**: Build scalable design systems for large organizations

**Enterprise Design Token Structure**:

```javascript
// tailwind.config.js - Enterprise Design System
const designTokens = {
  colors: {
    // Brand System
    brand: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6', // Main brand color
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
        950: '#172554',
      },
      secondary: {
        50: '#f0fdf4',
        500: '#22c55e',
        900: '#14532d',
      }
    },
    // Semantic System
    semantic: {
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
    // Neutral System
    neutral: {
      0: '#ffffff',
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      1000: '#000000',
    }
  },
  spacing: {
    // 8pt Grid System
    0: '0',
    1: '0.125rem', // 2px
    2: '0.25rem',  // 4px
    3: '0.375rem', // 6px
    4: '0.5rem',   // 8px
    5: '0.625rem', // 10px
    6: '0.75rem',  // 12px
    8: '1rem',     // 16px
    10: '1.25rem', // 20px
    12: '1.5rem',  // 24px
    16: '2rem',    // 32px
    20: '2.5rem',  // 40px
    24: '3rem',    // 48px
    32: '4rem',    // 64px
    40: '5rem',    // 80px
    48: '6rem',    // 96px
    56: '7rem',    // 112px
    64: '8rem',    // 128px
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
    }
  }
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: designTokens,
    // Override defaults for consistency
    colors: designTokens.colors,
    spacing: designTokens.spacing,
    fontFamily: designTokens.typography.fontFamily,
    fontSize: designTokens.typography.fontSize,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('./src/plugins/enterprise-components'),
  ]
}
```

**Enterprise Component System**:

```jsx
// Design System Components
import React from 'react';

// Button Component with Design System Integration
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-brand-primary-500 text-white hover:bg-brand-primary-600 focus:ring-brand-primary-500',
    secondary: 'bg-brand-secondary-500 text-white hover:bg-brand-secondary-600 focus:ring-brand-secondary-500',
    outline: 'border-2 border-brand-primary-500 text-brand-primary-500 hover:bg-brand-primary-500 hover:text-white',
    ghost: 'text-brand-primary-500 hover:bg-brand-primary-50',
    danger: 'bg-semantic-error text-white hover:bg-red-600 focus:ring-semantic-error',
  };
  
  const sizes = {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
    xl: 'px-10 py-4 text-xl',
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Typography System
const Typography = ({ variant = 'body', children, className = '', ...props }) => {
  const variants = {
    h1: 'text-5xl font-bold text-neutral-900 dark:text-neutral-0',
    h2: 'text-4xl font-bold text-neutral-900 dark:text-neutral-0',
    h3: 'text-3xl font-semibold text-neutral-900 dark:text-neutral-0',
    h4: 'text-2xl font-semibold text-neutral-800 dark:text-neutral-100',
    h5: 'text-xl font-medium text-neutral-800 dark:text-neutral-100',
    h6: 'text-lg font-medium text-neutral-700 dark:text-neutral-200',
    body: 'text-base text-neutral-600 dark:text-neutral-300',
    small: 'text-sm text-neutral-500 dark:text-neutral-400',
    caption: 'text-xs text-neutral-400 dark:text-neutral-500',
  };
  
  const Component = variant.startsWith('h') ? variant : 'p';
  
  return (
    <Component className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

// Layout System
const Container = ({ children, size = 'lg', className = '' }) => {
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };
  
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
};

// Practice: Enterprise Dashboard Layout
const Lesson19 = () => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Container size="xl" className="py-12">
        <Typography variant="h1" className="mb-8 text-center">
          Enterprise Design System
        </Typography>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg">
            <Typography variant="h3" className="mb-4">Brand Colors</Typography>
            <div className="grid grid-cols-5 gap-2">
              {[50, 100, 200, 500, 900].map(shade => (
                <div key={shade} className={`h-12 w-12 rounded-lg bg-brand-primary-${shade}`} />
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg">
            <Typography variant="h3" className="mb-4">Button System</Typography>
            <div className="space-y-3">
              <Button variant="primary" size="sm">Primary</Button>
              <Button variant="secondary" size="md">Secondary</Button>
              <Button variant="outline" size="lg">Outline</Button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg">
            <Typography variant="h3" className="mb-4">Typography Scale</Typography>
            <div className="space-y-2">
              <Typography variant="h6">Heading 6</Typography>
              <Typography variant="body">Body Text</Typography>
              <Typography variant="small">Small Text</Typography>
              <Typography variant="caption">Caption</Typography>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Lesson19;
```

---

### **Lesson 20: Advanced Plugin Development**

**Goal**: Create enterprise-level Tailwind plugins

**Custom Enterprise Plugin**:

```javascript
// src/plugins/enterprise-components.js
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, addComponents, addBase, theme }) {
  // Base Styles
  addBase({
    // Custom Scrollbar
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-track': {
      background: theme('colors.neutral.100'),
    },
    '::-webkit-scrollbar-thumb': {
      background: theme('colors.neutral.400'),
      borderRadius: '4px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: theme('colors.neutral.500'),
    },
    
    // Focus Styles
    '*:focus': {
      outline: 'none',
    },
  });

  // Component Layer
  addComponents({
    // Card Component
    '.card': {
      backgroundColor: theme('colors.white'),
      borderRadius: theme('borderRadius.xl'),
      boxShadow: theme('boxShadow.lg'),
      padding: theme('spacing.6'),
      border: `1px solid ${theme('colors.neutral.200')}`,
      transition: 'all 0.2s ease-in-out',
      
      '&:hover': {
        boxShadow: theme('boxShadow.xl'),
        transform: 'translateY(-2px)',
      },
      
      '.dark &': {
        backgroundColor: theme('colors.neutral.800'),
        borderColor: theme('colors.neutral.700'),
      }
    },
    
    // Form Components
    '.form-input': {
      backgroundColor: theme('colors.white'),
      borderColor: theme('colors.neutral.300'),
      borderRadius: theme('borderRadius.lg'),
      padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
      fontSize: theme('fontSize.base'),
      transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      
      '&:focus': {
        borderColor: theme('colors.brand.primary.500'),
        boxShadow: `0 0 0 3px ${theme('colors.brand.primary.500')}20`,
      },
      
      '&:invalid': {
        borderColor: theme('colors.semantic.error'),
      },
      
      '.dark &': {
        backgroundColor: theme('colors.neutral.700'),
        borderColor: theme('colors.neutral.600'),
        color: theme('colors.neutral.100'),
      }
    },
    
    // Navigation Components
    '.nav-link': {
      display: 'flex',
      alignItems: 'center',
      padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
      borderRadius: theme('borderRadius.lg'),
      fontSize: theme('fontSize.sm'),
      fontWeight: theme('fontWeight.medium'),
      color: theme('colors.neutral.600'),
      textDecoration: 'none',
      transition: 'all 0.2s ease-in-out',
      
      '&:hover': {
        backgroundColor: theme('colors.neutral.100'),
        color: theme('colors.neutral.900'),
      },
      
      '&.active': {
        backgroundColor: theme('colors.brand.primary.500'),
        color: theme('colors.white'),
      },
      
      '.dark &': {
        color: theme('colors.neutral.300'),
        
        '&:hover': {
          backgroundColor: theme('colors.neutral.700'),
          color: theme('colors.neutral.100'),
        }
      }
    },
  });

  // Utility Layer
  addUtilities({
    // Glass Morphism
    '.glass': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    
    // Gradient Text
    '.gradient-text': {
      background: `linear-gradient(135deg, ${theme('colors.brand.primary.500')}, ${theme('colors.brand.secondary.500')})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    
    // Animation Utilities
    '.animate-fade-in': {
      animation: 'fadeIn 0.5s ease-in-out',
    },
    
    '.animate-slide-up': {
      animation: 'slideUp 0.3s ease-out',
    },
    
    '.animate-scale-in': {
      animation: 'scaleIn 0.2s ease-out',
    },
  });

  // Add keyframes
  addBase({
    '@keyframes fadeIn': {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    '@keyframes slideUp': {
      '0%': { transform: 'translateY(20px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    '@keyframes scaleIn': {
      '0%': { transform: 'scale(0.9)', opacity: '0' },
      '100%': { transform: 'scale(1)', opacity: '1' },
    },
  });
});
```

**Practice: Using Custom Plugin**:

```jsx
import React from 'react';

const Lesson20 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary-50 to-brand-secondary-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="gradient-text text-6xl font-bold text-center mb-12">
          Enterprise Plugin System
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Glass Card */}
          <div className="glass p-8 rounded-2xl animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Glass Morphism</h3>
            <p className="text-neutral-700">Beautiful glassmorphism effect using custom utilities.</p>
          </div>
          
          {/* Standard Card */}
          <div className="card animate-slide-up">
            <h3 className="text-xl font-bold mb-4">Card Component</h3>
            <p className="text-neutral-600 mb-4">Predefined card component with hover effects.</p>
            <button className="bg-brand-primary-500 text-white px-4 py-2 rounded-lg hover:bg-brand-primary-600">
              Action
            </button>
          </div>
          
          {/* Form Card */}
          <div className="card animate-scale-in">
            <h3 className="text-xl font-bold mb-4">Form Components</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Custom form input"
                className="form-input w-full"
              />
              <textarea 
                placeholder="Custom textarea"
                className="form-input w-full h-24 resize-none"
              />
            </div>
          </div>
        </div>
        
        {/* Navigation Example */}
        <div className="mt-12 card">
          <h3 className="text-xl font-bold mb-6">Navigation Components</h3>
          <nav className="flex space-x-2">
            <a href="#" className="nav-link active">Dashboard</a>
            <a href="#" className="nav-link">Analytics</a>
            <a href="#" className="nav-link">Settings</a>
            <a href="#" className="nav-link">Profile</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Lesson20;
```

---

### **Lesson 21: Multi-Theme System with State Management**

**Goal**: Implement complex theming with React Context and state management

**Theme Provider System**:

```jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Theme definitions
const themes = {
  light: {
    name: 'light',
    colors: {
      background: 'bg-white',
      surface: 'bg-neutral-50',
      text: 'text-neutral-900',
      textSecondary: 'text-neutral-600',
      border: 'border-neutral-200',
    }
  },
  dark: {
    name: 'dark',
    colors: {
      background: 'bg-neutral-900',
      surface: 'bg-neutral-800',
      text: 'text-neutral-100',
      textSecondary: 'text-neutral-300',
      border: 'border-neutral-700',
    }
  },
  blue: {
    name: 'blue',
    colors: {
      background: 'bg-blue-950',
      surface: 'bg-blue-900',
      text: 'text-blue-50',
      textSecondary: 'text-blue-200',
      border: 'border-blue-700',
    }
  },
  purple: {
    name: 'purple',
    colors: {
      background: 'bg-purple-950',
      surface: 'bg-purple-900',
      text: 'text-purple-50',
      textSecondary: 'text-purple-200',
      border: 'border-purple-700',
    }
  }
};

// Theme reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, currentTheme: action.payload };
    case 'TOGGLE_THEME':
      const themeNames = Object.keys(themes);
      const currentIndex = themeNames.indexOf(state.currentTheme);
      const nextIndex = (currentIndex + 1) % themeNames.length;
      return { ...state, currentTheme: themeNames[nextIndex] };
    case 'SET_CUSTOM_COLORS':
      return { 
        ...state, 
        customColors: { ...state.customColors, ...action.payload }
      };
    default:
      return state;
  }
};

// Theme Context
const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    currentTheme: 'light',
    customColors: {},
  });

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove all theme classes
    Object.keys(themes).forEach(themeName => {
      root.classList.remove(`theme-${themeName}`);
    });
    
    // Add current theme class
    root.classList.add(`theme-${state.currentTheme}`);
    
    // Apply CSS variables for custom colors
    Object.entries(state.customColors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [state.currentTheme, state.customColors]);

  const setTheme = (themeName) => {
    dispatch({ type: 'SET_THEME', payload: themeName });
  };

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const setCustomColors = (colors) => {
    dispatch({ type: 'SET_CUSTOM_COLORS', payload: colors });
  };

  const value = {
    ...state,
    themes,
    currentThemeData: themes[state.currentTheme],
    setTheme,
    toggleTheme,
    setCustomColors,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Theme Hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Themed Component HOC
export const withTheme = (Component) => {
  return (props) => {
    const theme = useTheme();
    return <Component {...props} theme={theme} />;
  };
};

// Theme-aware components
const ThemedCard = ({ children, className = '' }) => {
  const { currentThemeData } = useTheme();
  
  return (
    <div className={`
      ${currentThemeData.colors.surface}
      ${currentThemeData.colors.text}
      ${currentThemeData.colors.border}
      p-6 rounded-xl border shadow-lg transition-all duration-300
      ${className}
    `}>
      {children}
    </div>
  );
};

const ThemedButton = ({ children, variant = 'primary', ...props }) => {
  const { currentThemeData } = useTheme();
  
  const variants = {
    primary: 'bg-brand-primary-500 text-white hover:bg-brand-primary-600',
    secondary: `${currentThemeData.colors.surface} ${currentThemeData.colors.text} ${currentThemeData.colors.border} border hover:opacity-80`,
    ghost: `${currentThemeData.colors.text} hover:${currentThemeData.colors.surface}`,
  };
  
  return (
    <button 
      className={`
        px-6 py-3 rounded-lg font-medium transition-all duration-200
        ${variants[variant]}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

// Practice: Multi-Theme Dashboard
const Lesson21 = () => {
  const { currentTheme, themes, setTheme, toggleTheme, currentThemeData } = useTheme();
  
  return (
    <div className={`
      min-h-screen transition-all duration-500
      ${currentThemeData.colors.background}
      ${currentThemeData.colors.text}
    `}>
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Theme Controls */}
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-4xl font-bold">Multi-Theme System</h1>
            <div className="flex space-x-4">
              {Object.keys(themes).map((themeName) => (
                <button
                  key={themeName}
                  onClick={() => setTheme(themeName)}
                  className={`
                    px-4 py-2 rounded-lg font-medium capitalize transition-all
                    ${currentTheme === themeName 
                      ? 'bg-brand-primary-500 text-white' 
                      : `${currentThemeData.colors.surface} ${currentThemeData.colors.text} hover:opacity-80`
                    }
                  `}
                >
                  {themeName}
                </button>
              ))}
              <ThemedButton onClick={toggleTheme}>
                Toggle Theme
              </ThemedButton>
            </div>
          </div>
          
          {/* Content Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ThemedCard>
              <h3 className="text-xl font-bold mb-4">Current Theme</h3>
              <p className={currentThemeData.colors.textSecondary}>
                Active theme: <span className="font-semibold capitalize">{currentTheme}</span>
              </p>
              <div className="mt-4 space-y-2">
                <ThemedButton variant="primary">Primary Action</ThemedButton>
                <ThemedButton variant="secondary">Secondary Action</ThemedButton>
              </div>
            </ThemedCard>
            
            <ThemedCard>
              <h3 className="text-xl font-bold mb-4">Theme Features</h3>
              <ul className={`${currentThemeData.colors.textSecondary} space-y-2`}>
                <li>• Dynamic color switching</li>
                <li>• State management integration</li>
                <li>• CSS variable support</li>
                <li>• Component theming</li>
              </ul>
            </ThemedCard>
            
            <ThemedCard>
              <h3 className="text-xl font-bold mb-4">Performance</h3>
              <p className={currentThemeData.colors.textSecondary}>
                Themes switch instantly using CSS classes and variables, with no layout shifts.
              </p>
            </ThemedCard>
          </div>
          
          {/* Demo Content */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <ThemedCard>
              <h3 className="text-2xl font-bold mb-6">Form Elements</h3>
              <div className="space-y-4">
                <input 
                  type="text"
                  placeholder="Themed input"
                  className={`
                    w-full px-4 py-3 rounded-lg border transition-colors
                    ${currentThemeData.colors.surface}
                    ${currentThemeData.colors.text}
                    ${currentThemeData.colors.border}
                    focus:border-brand-primary-500 focus:ring-2 focus:ring-brand-primary-500 focus:ring-opacity-20
                  `}
                />
                <select className={`
                  w-full px-4 py-3 rounded-lg border transition-colors
                  ${currentThemeData.colors.surface}
                  ${currentThemeData.colors.text}
                  ${currentThemeData.colors.border}
                `}>
                  <option>Theme-aware select</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </ThemedCard>
            
            <ThemedCard>
              <h3 className="text-2xl font-bold mb-6">Data Visualization</h3>
              <div className="space-y-4">
                <div className={`h-4 ${currentThemeData.colors.surface} rounded-full overflow-hidden`}>
                  <div className="h-full w-3/4 bg-brand-primary-500 rounded-full"></div>
                </div>
                <div className={`h-4 ${currentThemeData.colors.surface} rounded-full overflow-hidden`}>
                  <div className="h-full w-1/2 bg-brand-secondary-500 rounded-full"></div>
                </div>
                <div className={`h-4 ${currentThemeData.colors.surface} rounded-full overflow-hidden`}>
                  <div className="h-full w-5/6 bg-semantic-success rounded-full"></div>
                </div>
              </div>
            </ThemedCard>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App with Theme Provider
const Lesson21App = () => {
  return (
    <ThemeProvider>
      <Lesson21 />
    </ThemeProvider>
  );
};

export default Lesson21App;
```

---

### **Lesson 22: Performance Optimization at Scale**

**Goal**: Optimize Tailwind for large enterprise applications

**Advanced Purging Configuration**:

```javascript
// tailwind.config.js - Production Optimization
const path = require('path');

module.exports = {
  content: {
    files: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html',
      // Include component library files
      './node_modules/@company/design-system/**/*.{js,jsx,ts,tsx}',
    ],
    extract: {
      // Custom extractor for dynamic classes
      js: (content) => {
        // Extract dynamic classes like bg-${color}-500
        const dynamicClasses = content.match(/(?:bg|text|border)-\w+-\d+/g) || [];
        const staticClasses = content.match(/[\w-]+/g) || [];
        return [...dynamicClasses, ...staticClasses];
      }
    }
  },
  
  // Safelist for dynamic classes that might be missed
  safelist: [
    // Brand colors
    {
      pattern: /bg-(brand-primary|brand-secondary)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    // Semantic colors
    {
      pattern: /bg-(semantic-success|semantic-warning|semantic-error|semantic-info)/,
    },
    // Grid columns for dynamic layouts
    {
      pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    // Animation classes
    'animate-spin',
    'animate-ping',
    'animate-pulse',
    'animate-bounce',
  ],
  
  // Blocklist to remove unused Tailwind features
  blocklist: [
    'container', // If using custom container system
  ],
  
  theme: {
    // Minimize unused values
    extend: {},
  },
  
  // Production plugins only
  plugins: process.env.NODE_ENV === 'production' ? [
    require('@tailwindcss/forms'),
    require('./src/plugins/enterprise-components'),
  ] : [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('./src/plugins/enterprise-components'),
    require('./src/plugins/development-helpers'),
  ],
}
```

**CSS Optimization Strategies**:

```jsx
// Performance Monitoring Component
import React, { useState, useEffect, memo, useMemo } from 'react';

// Memoized components for performance
const OptimizedCard = memo(({ title, content, variant = 'default' }) => {
  const cardStyles = useMemo(() => {
    const variants = {
      default: 'bg-white border-neutral-200',
      primary: 'bg-brand-primary-50 border-brand-primary-200',
      secondary: 'bg-brand-secondary-50 border-brand-secondary-200',
    };
    return `card ${variants[variant]}`;
  }, [variant]);
  
  return (
    <div className={cardStyles}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600">{content}</p>
    </div>
  );
});

// CSS-in-JS alternative for dynamic styles
const DynamicStyles = ({ theme }) => {
  const styles = useMemo(() => ({
    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
  }), [theme.primary, theme.secondary]);
  
  return (
    <div 
      style={styles}
      className="p-8 rounded-xl text-white"
    >
      Dynamic gradient background
    </div>
  );
};

// Performance monitoring hook
const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    cssSize: 0,
    loadTime: 0,
    renderTime: 0,
  });
  
  useEffect(() => {
    // Monitor CSS bundle size
    const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    let totalSize = 0;
    
    cssLinks.forEach(link => {
      fetch(link.href)
        .then(response => response.text())
        .then(css => {
          totalSize += new Blob([css]).size;
          setMetrics(prev => ({ ...prev, cssSize: totalSize }));
        });
    });
    
    // Monitor render performance
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.entryType === 'measure') {
          setMetrics(prev => ({ ...prev, renderTime: entry.duration }));
        }
      });
    });
    
    observer.observe({ entryTypes: ['measure'] });
    
    return () => observer.disconnect();
  }, []);
  
  return metrics;
};

// Critical CSS inline technique
const CriticalCSS = () => {
  return (
    <style jsx>{`
      .critical-fold {
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  );
};

// Lazy loading component
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

const Lesson22 = () => {
  const metrics = usePerformanceMonitor();
  const [showLazy, setShowLazy] = useState(false);
  
  // Performance optimization: Virtualization for large lists
  const VirtualizedList = ({ items }) => {
    const [visibleItems, setVisibleItems] = useState(items.slice(0, 10));
    
    useEffect(() => {
      const handleScroll = () => {
        // Simple virtualization logic
        const scrollTop = window.pageYOffset;
        const itemHeight = 100;
        const startIndex = Math.floor(scrollTop / itemHeight);
        const endIndex = Math.min(startIndex + 10, items.length);
        setVisibleItems(items.slice(startIndex, endIndex));
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [items]);
    
    return (
      <div className="space-y-4">
        {visibleItems.map((item, index) => (
          <OptimizedCard 
            key={item.id}
            title={item.title}
            content={item.content}
            variant={index % 2 === 0 ? 'primary' : 'secondary'}
          />
        ))}
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <CriticalCSS />
      
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Performance Optimization at Scale
        </h1>
        
        {/* Performance Metrics Dashboard */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">CSS Bundle Size</h3>
            <p className="text-2xl font-bold text-brand-primary-500">
              {(metrics.cssSize / 1024).toFixed(1)} KB
            </p>
            <p className="text-sm text-neutral-500">Optimized for production</p>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Render Time</h3>
            <p className="text-2xl font-bold text-semantic-success">
              {metrics.renderTime.toFixed(1)} ms
            </p>
            <p className="text-sm text-neutral-500">First contentful paint</p>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Components</h3>
            <p className="text-2xl font-bold text-brand-secondary-500">
              React.memo()
            </p>
            <p className="text-sm text-neutral-500">Memoized for performance</p>
          </div>
        </div>
        
        {/* Optimization Techniques */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">CSS Optimization</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Purged unused classes</span>
                <span className="text-semantic-success">✓</span>
              </div>
              <div className="flex justify-between">
                <span>Gzip compression</span>
                <span className="text-semantic-success">✓</span>
              </div>
              <div className="flex justify-between">
                <span>Critical CSS inlined</span>
                <span className="text-semantic-success">✓</span>
              </div>
              <div className="flex justify-between">
                <span>Dynamic imports</span>
                <span className="text-semantic-success">✓</span>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Runtime Performance</h3>
            <div className="space-y-3">
              <button 
                onClick={() => setShowLazy(!showLazy)}
                className="w-full bg-brand-primary-500 text-white py-2 px-4 rounded-lg hover:bg-brand-primary-600"
              >
                {showLazy ? 'Hide' : 'Load'} Heavy Component
              </button>
              
              {showLazy && (
                <React.Suspense fallback={
                  <div className="animate-pulse bg-neutral-200 h-32 rounded-lg"></div>
                }>
                  <div className="bg-brand-primary-50 p-4 rounded-lg">
                    <p>Lazy-loaded component loaded successfully!</p>
                  </div>
                </React.Suspense>
              )}
            </div>
          </div>
        </div>
        
        {/* Virtualized List Demo */}
        <div className="mt-12 card">
          <h3 className="text-xl font-bold mb-6">Virtualized List (Performance)</h3>
          <VirtualizedList 
            items={Array.from({ length: 1000 }, (_, i) => ({
              id: i,
              title: `Item ${i + 1}`,
              content: `This is content for item ${i + 1}. Only visible items are rendered.`
            }))}
          />
        </div>
      </div>
    </div>
  );
};

export default Lesson22;
```

---

### **Lesson 23: Testing Strategies for Tailwind Components**

**Goal**: Implement comprehensive testing for Tailwind-based components

**Testing Setup and Utilities**:

```javascript
// test-utils.js - Custom testing utilities
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../contexts/ThemeContext';

// Custom render with providers
export const renderWithProviders = (ui, options = {}) => {
  const {
    theme = 'light',
    ...renderOptions
  } = options;

  const Wrapper = ({ children }) => (
    <ThemeProvider initialTheme={theme}>
      {children}
    </ThemeProvider>
  );

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};

// Visual regression testing helper
export const getComputedStyleValue = (element, property) => {
  return window.getComputedStyle(element).getPropertyValue(property);
};

// Class existence checker
export const hasClass = (element, className) => {
  return element.classList.contains(className);
};

// Tailwind class parser for testing
export const parseTailwindClasses = (className) => {
  const classes = className.split(' ').filter(Boolean);
  
  return {
    layout: classes.filter(c => 
      c.includes('flex') || c.includes('grid') || c.includes('block')
    ),
    spacing: classes.filter(c => 
      c.startsWith('p-') || c.startsWith('m-') || c.startsWith('gap-')
    ),
    colors: classes.filter(c => 
      c.startsWith('bg-') || c.startsWith('text-') || c.startsWith('border-')
    ),
    responsive: classes.filter(c => 
      c.includes('sm:') || c.includes('md:') || c.includes('lg:')
    ),
    states: classes.filter(c => 
      c.includes('hover:') || c.includes('focus:') || c.includes('active:')
    ),
  };
};

// Accessibility testing helpers
export const testKeyboardNavigation = async (user, elements) => {
  for (const element of elements) {
    await user.tab();
    expect(element).toHaveFocus();
  }
};

export const testScreenReaderContent = (element) => {
  const ariaLabel = element.getAttribute('aria-label');
  const ariaLabelledBy = element.getAttribute('aria-labelledby');
  const ariaDescribedBy = element.getAttribute('aria-describedby');
  
  return {
    hasLabel: !!(ariaLabel || ariaLabelledBy),
    hasDescription: !!ariaDescribedBy,
    isAccessible: !!(ariaLabel || ariaLabelledBy),
  };
};
```

**Component Tests**:

```javascript
// Button.test.js
import { renderWithProviders, parseTailwindClasses } from '../test-utils';
import Button from '../components/Button';

describe('Button Component', () => {
  // Visual/Style Testing
  test('applies correct base styles', () => {
    const { container } = renderWithProviders(
      <Button>Test Button</Button>
    );
    
    const button = container.firstChild;
    const classes = parseTailwindClasses(button.className);
    
    expect(classes.layout).toContain('inline-flex');
    expect(classes.spacing).toContain('px-6');
    expect(classes.spacing).toContain('py-3');
    expect(button).toHaveClass('rounded-lg');
  });

  test('applies variant styles correctly', () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost'];
    
    variants.forEach(variant => {
      const { container } = renderWithProviders(
        <Button variant={variant}>Test</Button>
      );
      
      const button = container.firstChild;
      expect(button).toHaveAttribute('data-variant', variant);
      
      // Test specific variant classes
      if (variant === 'primary') {
        expect(button).toHaveClass('bg-brand-primary-500');
      }
    });
  });

  // Responsive Testing
  test('applies responsive classes', () => {
    const { container } = renderWithProviders(
      <Button size="sm" className="md:px-8 lg:text-lg">
        Responsive Button
      </Button>
    );
    
    const button = container.firstChild;
    const classes = parseTailwindClasses(button.className);
    
    expect(classes.responsive).toContain('md:px-8');
    expect(classes.responsive).toContain('lg:text-lg');
  });

  // Theme Testing
  test('adapts to different themes', () => {
    const { container: lightContainer } = renderWithProviders(
      <Button variant="secondary">Light Theme</Button>,
      { theme: 'light' }
    );
    
    const { container: darkContainer } = renderWithProviders(
      <Button variant="secondary">Dark Theme</Button>,
      { theme: 'dark' }
    );
    
    const lightButton = lightContainer.firstChild;
    const darkButton = darkContainer.firstChild;
    
    // Buttons should have different computed styles
    expect(lightButton.className).not.toBe(darkButton.className);
  });

  // Interaction Testing
  test('handles hover and focus states', async () => {
    const { user, container } = renderWithProviders(
      <Button>Interactive Button</Button>
    );
    
    const button = container.firstChild;
    
    // Test focus
    await user.tab();
    expect(button).toHaveFocus();
    expect(button).toHaveClass('focus:ring-2');
    
    // Test hover (simulated through class application)
    const classes = parseTailwindClasses(button.className);
    expect(classes.states.some(c => c.startsWith('hover:'))).toBe(true);
  });

  // Accessibility Testing
  test('meets accessibility requirements', async () => {
    const { user, container } = renderWithProviders(
      <Button aria-label="Submit form">Submit</Button>
    );
    
    const button = container.firstChild;
    
    // Keyboard navigation
    await user.tab();
    expect(button).toHaveFocus();
    
    // Enter/Space activation
    await user.keyboard('{Enter}');
    // Should trigger click (tested through mock functions)
    
    // Screen reader support
    expect(button).toHaveAttribute('aria-label');
    expect(button.tagName).toBe('BUTTON');
  });
});
```

**Visual Regression Testing**:

```javascript
// visual-regression.test.js
import { renderWithProviders } from '../test-utils';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });

describe('Visual Regression Tests', () => {
  // Theme consistency testing
  test('maintains visual consistency across themes', async () => {
    const themes = ['light', 'dark', 'blue', 'purple'];
    
    for (const theme of themes) {
      const { container } = renderWithProviders(
        <div className="p-8">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Card>
            <Typography variant="h3">Card Title</Typography>
            <Typography variant="body">Card content</Typography>
          </Card>
        </div>,
        { theme }
      );
      
      // Take screenshot for visual comparison
      expect(container).toMatchImageSnapshot({
        customSnapshotIdentifier: `theme-${theme}`,
        failureThreshold: 0.01,
        failureThresholdType: 'percent',
      });
    }
  });

  // Responsive design testing
  test('responsive layouts at different breakpoints', async () => {
    const breakpoints = [
      { width: 375, height: 667, name: 'mobile' },
      { width: 768, height: 1024, name: 'tablet' },
      { width: 1200, height: 800, name: 'desktop' },
    ];
    
    for (const bp of breakpoints) {
      // Set viewport size
      global.innerWidth = bp.width;
      global.innerHeight = bp.height;
      
      const { container } = renderWithProviders(
        <ResponsiveLayout />
      );
      
      expect(container).toMatchImageSnapshot({
        customSnapshotIdentifier: `responsive-${bp.name}`,
      });
    }
  });
});
```

**Performance Testing**:

```javascript
// performance.test.js
import { renderWithProviders } from '../test-utils';
import { act, waitFor } from '@testing-library/react';

describe('Performance Tests', () => {
  test('component renders within performance budget', async () => {
    const startTime = performance.now();
    
    await act(async () => {
      renderWithProviders(
        <LargeComponentList items={1000} />
      );
    });
    
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    // Assert render time is under budget (100ms)
    expect(renderTime).toBeLessThan(100);
  });

  test('CSS classes are properly purged in production build', () => {
    // Mock production environment
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';
    
    const { container } = renderWithProviders(
      <Button>Production Button</Button>
    );
    
    // Check that development-only classes are not present
    const button = container.firstChild;
    expect(button.className).not.toMatch(/debug-/);
    expect(button.className).not.toMatch(/dev-/);
    
    process.env.NODE_ENV = originalEnv;
  });

  test('theme switching performance', async () => {
    const { user } = renderWithProviders(<ThemeSwitcher />);
    
    const measurements = [];
    
    for (let i = 0; i < 10; i++) {
      const startTime = performance.now();
      
      await user.click(screen.getByText('Toggle Theme'));
      await waitFor(() => {
        // Wait for theme to be applied
        expect(document.documentElement).toHaveClass(/theme-/);
      });
      
      const endTime = performance.now();
      measurements.push(endTime - startTime);
    }
    
    const averageTime = measurements.reduce((a, b) => a + b) / measurements.length;
    
    // Theme switching should be fast (under 50ms average)
    expect(averageTime).toBeLessThan(50);
  });
});
```

**Integration Testing with Storybook**:

```javascript
// Button.stories.js
import Button from './Button';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Enterprise button component with Tailwind styling',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

// Stories for testing
export const AllVariants = {
  render: () => (
    <div className="space-x-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    
    // Test that all buttons are rendered
    expect(buttons).toHaveLength(4);
    
    // Test interaction
    await userEvent.hover(buttons[0]);
    await userEvent.click(buttons[1]);
  },
};

export const ResponsiveTest = {
  render: () => (
    <Button className="text-sm md:text-base lg:text-lg">
      Responsive Button
    </Button>
  ),
  parameters: {
    viewport: {
      viewports: {
        mobile: { width: 375, height: 667 },
        tablet: { width: 768, height: 1024 },
        desktop: { width: 1200, height: 800 },
      },
    },
  },
};

// Visual regression testing in Storybook
export const VisualRegression = {
  render: () => (
    <div className="grid gap-4 p-8">
      <Button variant="primary" size="sm">Small Primary</Button>
      <Button variant="secondary" size="md">Medium Secondary</Button>
      <Button variant="outline" size="lg">Large Outline</Button>
    </div>
  ),
  parameters: {
    chromatic: { delay: 300 }, // Wait for animations
  },
};
```

**Practice: Complete Testing Suite**:

```jsx
import React from 'react';
import { renderWithProviders, parseTailwindClasses } from '../test-utils';

// Example component for testing
const TestableCard = ({ variant = 'default', children, className = '' }) => {
  const variants = {
    default: 'bg-white border-neutral-200',
    primary: 'bg-brand-primary-50 border-brand-primary-200',
    success: 'bg-semantic-success border-green-200',
  };
  
  return (
    <div 
      className={`
        card border-2 rounded-xl p-6 transition-all duration-200
        hover:shadow-lg focus-within:ring-2 focus-within:ring-brand-primary-500
        ${variants[variant]} ${className}
      `}
      data-testid="testable-card"
      data-variant={variant}
    >
      {children}
    </div>
  );
};

const Lesson23 = () => {
  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Testing Strategies for Tailwind Components
        </h1>
        
        {/* Testing Examples */}
        <div className="grid gap-8 md:grid-cols-2">
          <TestableCard variant="default">
            <h3 className="text-lg font-semibold mb-2">Unit Testing</h3>
            <p className="text-neutral-600 mb-4">
              Test individual component styling and behavior
            </p>
            <ul className="text-sm text-neutral-500 space-y-1">
              <li>• Class application verification</li>
              <li>• Variant styling tests</li>
              <li>• Props-to-classes mapping</li>
              <li>• Responsive behavior</li>
            </ul>
          </TestableCard>
          
          <TestableCard variant="primary">
            <h3 className="text-lg font-semibold mb-2">Visual Testing</h3>
            <p className="text-neutral-600 mb-4">
              Ensure consistent visual appearance
            </p>
            <ul className="text-sm text-neutral-500 space-y-1">
              <li>• Screenshot comparisons</li>
              <li>• Cross-browser testing</li>
              <li>• Theme consistency</li>
              <li>• Responsive layouts</li>
            </ul>
          </TestableCard>
          
          <TestableCard variant="success">
            <h3 className="text-lg font-semibold mb-2">Performance Testing</h3>
            <p className="text-neutral-600 mb-4">
              Validate optimization effectiveness
            </p>
            <ul className="text-sm text-neutral-500 space-y-1">
              <li>• CSS bundle size monitoring</li>
              <li>• Render performance tracking</li>
              <li>• Purging verification</li>
              <li>• Runtime optimization</li>
            </ul>
          </TestableCard>
          
          <TestableCard variant="default">
            <h3 className="text-lg font-semibold mb-2">Accessibility Testing</h3>
            <p className="text-neutral-600 mb-4">
              Ensure inclusive design compliance
            </p>
            <ul className="text-sm text-neutral-500 space-y-1">
              <li>• Keyboard navigation</li>
              <li>• Screen reader compatibility</li>
              <li>• Color contrast validation</li>
              <li>• ARIA attributes testing</li>
            </ul>
          </TestableCard>
        </div>
        
        {/* Testing Tools */}
        <div className="mt-12 card bg-gradient-to-r from-brand-primary-50 to-brand-secondary-50">
          <h2 className="text-2xl font-bold mb-6">Testing Tools & Libraries</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="font-semibold mb-2">Unit Testing</h4>
              <ul className="text-sm space-y-1">
                <li>• Jest</li>
                <li>• React Testing Library</li>
                <li>• Custom test utilities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Visual Testing</h4>
              <ul className="text-sm space-y-1">
                <li>• Storybook</li>
                <li>• Chromatic</li>
                <li>• jest-image-snapshot</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">E2E Testing</h4>
              <ul className="text-sm space-y-1">
                <li>• Playwright</li>
                <li>• Cypress</li>
                <li>• WebDriver</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson23;
```

---

### **Lesson 24: Accessibility and Inclusive Design**

**Goal**: Implement comprehensive accessibility with Tailwind CSS

**Accessibility-First Component System**:

```jsx
import React, { useState, useRef, useEffect } from 'react';

// Accessible Form Components
const FormField = ({ 
  label, 
  error, 
  hint, 
  required = false, 
  children,
  id,
  ...props 
}) => {
  const fieldId = id || `field-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = `${fieldId}-error`;
  const hintId = `${fieldId}-hint`;
  
  return (
    <div className="space-y-2">
      <label 
        htmlFor={fieldId}
        className={`
          block text-sm font-medium transition-colors
          ${error ? 'text-semantic-error' : 'text-neutral-700 dark:text-neutral-300'}
          ${required ? 'after:content-["*"] after:text-semantic-error after:ml-1' : ''}
        `}
      >
        {label}
      </label>
      
      {hint && (
        <p 
          id={hintId}
          className="text-xs text-neutral-500 dark:text-neutral-400"
        >
          {hint}
        </p>
      )}
      
      <div className="relative">
        {React.cloneElement(children, {
          id: fieldId,
          'aria-describedby': [
            hint ? hintId : null,
            error ? errorId : null,
          ].filter(Boolean).join(' ') || undefined,
          'aria-invalid': error ? 'true' : undefined,
          'aria-required': required,
          className: `
            ${children.props.className || ''}
            ${error 
              ? 'border-semantic-error focus:border-semantic-error focus:ring-semantic-error' 
              : 'border-neutral-300 focus:border-brand-primary-500 focus:ring-brand-primary-500'
            }
          `,
        })}
        
        {error && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg 
              className="w-5 h-5 text-semantic-error" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      
      {error && (
        <p 
          id={errorId}
          className="text-xs text-semantic-error flex items-center space-x-1"
          role="alert"
          aria-live="polite"
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

// Accessible Input Component
const AccessibleInput = React.forwardRef(({ 
  type = 'text', 
  className = '', 
  ...props 
}, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={`
        w-full px-4 py-3 text-base rounded-lg border-2 transition-all duration-200
        bg-white dark:bg-neutral-800
        text-neutral-900 dark:text-neutral-100
        placeholder-neutral-400 dark:placeholder-neutral-500
        focus:outline-none focus:ring-2 focus:ring-opacity-50
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    />
  );
});

// Accessible Modal Component
const AccessibleModal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md' 
}) => {
  const modalRef = useRef(null);
  const previousFocus = useRef(null);
  
  useEffect(() => {
    if (isOpen) {
      previousFocus.current = document.activeElement;
      modalRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      previousFocus.current?.focus();
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };
  
  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          ref={modalRef}
          className={`
            relative bg-white dark:bg-neutral-800 rounded-xl shadow-2xl
            border border-neutral-200 dark:border-neutral-700
            ${sizes[size]} w-full max-h-[90vh] overflow-hidden
            transform transition-all duration-200
          `}
          tabIndex={-1}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700">
            <h2 
              id="modal-title"
              className="text-xl font-semibold text-neutral-900 dark:text-neutral-100"
            >
              {title}
            </h2>
            <button
              onClick={onClose}
              className="
                p-2 rounded-lg text-neutral-400 hover:text-neutral-600 
                dark:text-neutral-500 dark:hover:text-neutral-300
                hover:bg-neutral-100 dark:hover:bg-neutral-700
                focus:outline-none focus:ring-2 focus:ring-brand-primary-500
                transition-colors duration-200
              "
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// Skip Link Component
const SkipLink = ({ href = '#main-content', children = 'Skip to main content' }) => {
  return (
    <a
      href={href}
      className="
        sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
        bg-brand-primary-500 text-white px-4 py-2 rounded-lg
        font-medium z-50 transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-white
      "
    >
      {children}
    </a>
  );
};

// Screen Reader Only Component
const ScreenReaderOnly = ({ children, as: Component = 'span' }) => {
  return (
    <Component className="sr-only">
      {children}
    </Component>
  );
};

// Focus Trap Hook
const useFocusTrap = (isActive) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!isActive) return;
    
    const container = containerRef.current;
    if (!container) return;
    
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };
    
    container.addEventListener('keydown', handleTabKey);
    return () => container.removeEventListener('keydown', handleTabKey);
  }, [isActive]);
  
  return containerRef;
};

// Color Contrast Utilities
const getContrastRatio = (color1, color2) => {
  // Simplified contrast ratio calculation
  // In real implementation, use a proper color library
  const getLuminance = (r, g, b) => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };
  
  // This is a simplified version - use a proper color parsing library
  return 4.5; // Placeholder return
};

// Accessible Color System
const accessibleColors = {
  // Colors that meet WCAG AA standards
  primary: {
    text: 'text-blue-700', // Contrast ratio: 4.5:1
    background: 'bg-blue-50',
    border: 'border-blue-300',
  },
  secondary: {
    text: 'text-gray-700',
    background: 'bg-gray-50',
    border: 'border-gray-300',
  },
  success: {
    text: 'text-green-700',
    background: 'bg-green-50',
    border: 'border-green-300',
  },
  warning: {
    text: 'text-yellow-800',
    background: 'bg-yellow-50',
    border: 'border-yellow-300',
  },
  error: {
    text: 'text-red-700',
    background: 'bg-red-50',
    border: 'border-red-300',
  },
};

// Practice: Accessible Form Example
const Lesson24 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsModalOpen(true);
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };
  
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <SkipLink />
      
      <div className="max-w-4xl mx-auto p-8">
        <header className="mb-12 text-center">
          <h1 
            id="main-heading"
            className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"
          >
            Accessibility and Inclusive Design
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Building accessible interfaces with Tailwind CSS
          </p>
        </header>
        
        <main id="main-content">
          {/* Accessibility Features Demo */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
              Accessibility Features
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Keyboard Navigation */}
              <div className={`
                p-6 rounded-xl border-2 transition-all duration-200
                ${accessibleColors.primary.background}
                ${accessibleColors.primary.border}
                focus-within:ring-2 focus-within:ring-brand-primary-500
              `}>
                <h3 className={`text-lg font-semibold mb-3 ${accessibleColors.primary.text}`}>
                  Keyboard Navigation
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4 text-sm">
                  Full keyboard support with proper focus management
                </p>
                <button className="
                  px-4 py-2 bg-brand-primary-500 text-white rounded-lg
                  hover:bg-brand-primary-600 focus:outline-none focus:ring-2 
                  focus:ring-brand-primary-500 focus:ring-offset-2
                  transition-all duration-200
                ">
                  Try Tab Navigation
                </button>
              </div>
              
              {/* Screen Reader Support */}
              <div className={`
                p-6 rounded-xl border-2 transition-all duration-200
                ${accessibleColors.success.background}
                ${accessibleColors.success.border}
              `}>
                <h3 className={`text-lg font-semibold mb-3 ${accessibleColors.success.text}`}>
                  Screen Reader Support
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4 text-sm">
                  Proper ARIA labels and semantic HTML
                </p>
                <div className="space-y-2">
                  <ScreenReaderOnly>
                    This content is only available to screen readers
                  </ScreenReaderOnly>
                  <div aria-label="Progress: 75% complete" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Color Contrast */}
              <div className={`
                p-6 rounded-xl border-2 transition-all duration-200
                ${accessibleColors.warning.background}
                ${accessibleColors.warning.border}
              `}>
                <h3 className={`text-lg font-semibold mb-3 ${accessibleColors.warning.text}`}>
                  High Contrast
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4 text-sm">
                  WCAG AA compliant color combinations
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Primary:</span>
                    <span className="font-mono">4.5:1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Secondary:</span>
                    <span className="font-mono">7.2:1</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Accessible Form */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
              Accessible Contact Form
            </h2>
            
            <form 
              onSubmit={handleSubmit}
              className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700"
              noValidate
            >
              <fieldset className="space-y-6">
                <legend className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                  Contact Information
                </legend>
                
                <FormField
                  label="Full Name"
                  hint="Enter your first and last name"
                  error={errors.name}
                  required
                >
                  <AccessibleInput
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="John Smith"
                  />
                </FormField>
                
                <FormField
                  label="Email Address"
                  hint="We'll use this to respond to your message"
                  error={errors.email}
                  required
                >
                  <AccessibleInput
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="john@example.com"
                  />
                </FormField>
                
                <FormField
                  label="Message"
                  hint="Tell us how we can help you"
                  error={errors.message}
                  required
                >
                  <textarea
                    className="
                      w-full px-4 py-3 text-base rounded-lg border-2 transition-all duration-200
                      bg-white dark:bg-neutral-800
                      text-neutral-900 dark:text-neutral-100
                      placeholder-neutral-400 dark:placeholder-neutral-500
                      focus:outline-none focus:ring-2 focus:ring-opacity-50
                      resize-vertical min-h-[120px]
                    "
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Your message here..."
                    rows={4}
                  />
                </FormField>
                
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="
                      px-6 py-3 border-2 border-neutral-300 text-neutral-700 rounded-lg
                      hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-500
                      transition-all duration-200
                    "
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="
                      px-6 py-3 bg-brand-primary-500 text-white rounded-lg
                      hover:bg-brand-primary-600 focus:outline-none focus:ring-2 
                      focus:ring-brand-primary-500 focus:ring-offset-2
                      transition-all duration-200
                    "
                  >
                    Send Message
                  </button>
                </div>
              </fieldset>
            </form>
          </section>
          
          {/* Accessibility Checklist */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
              Accessibility Checklist
            </h2>
            
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { text: 'Semantic HTML structure', checked: true },
                  { text: 'Proper heading hierarchy', checked: true },
                  { text: 'Alt text for images', checked: true },
                  { text: 'Keyboard navigation support', checked: true },
                  { text: 'Focus indicators', checked: true },
                  { text: 'ARIA labels and roles', checked: true },
                  { text: 'Color contrast compliance', checked: true },
                  { text: 'Screen reader testing', checked: false },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`
                      w-5 h-5 rounded border-2 flex items-center justify-center
                      ${item.checked 
                        ? 'bg-semantic-success border-semantic-success' 
                        : 'border-neutral-300 dark:border-neutral-600'
                      }
                    `}>
                      {item.checked && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-sm ${item.checked ? 'text-neutral-900 dark:text-neutral-100' : 'text-neutral-500'}`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
      
      {/* Success Modal */}
      <AccessibleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Message Sent Successfully"
        size="md"
      >
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-2">
            Thank you for your message!
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsModalOpen(false)}
            className="
              px-6 py-3 bg-brand-primary-500 text-white rounded-lg
              hover:bg-brand-primary-600 focus:outline-none focus:ring-2 
              focus:ring-brand-primary-500 focus:ring-offset-2
              transition-all duration-200
            "
          >
            Close
          </button>
        </div>
      </AccessibleModal>
    </div>
  );
};

export default Lesson24;
```

---

### **Lesson 25: Enterprise Workflow Integration**

**Goal**: Integrate Tailwind CSS into enterprise development workflows

**CI/CD Pipeline Configuration**:

```yaml
# .github/workflows/tailwind-ci.yml
name: Tailwind CSS CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  # CSS Quality Assurance
  css-qa:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build CSS
        run: npm run build:css
      
      - name: Analyze CSS bundle size
        run: |
          echo "## CSS Bundle Analysis" >> $GITHUB_STEP_SUMMARY
          echo "| File | Size | Gzipped |" >> $GITHUB_STEP_SUMMARY
          echo "|------|------|---------|" >> $GITHUB_STEP_SUMMARY
          
          for file in dist/css/*.css; do
            if [ -f "$file" ]; then
              original_size=$(stat -c%s "$file")
              gzipped_size=$(gzip -c "$file" | wc -c)
              echo "| $(basename "$file") | ${original_size} bytes | ${gzipped_size} bytes |" >> $GITHUB_STEP_SUMMARY
            fi
          done
      
      - name: CSS Performance Budget Check
        run: |
          MAX_SIZE=50000  # 50KB limit
          for file in dist/css/*.css; do
            if [ -f "$file" ]; then
              size=$(stat -c%s "$file")
              if [ $size -gt $MAX_SIZE ]; then
                echo "❌ CSS file $(basename "$file") exceeds performance budget: ${size} bytes > ${MAX_SIZE} bytes"
                exit 1
              else
                echo "✅ CSS file $(basename "$file") within budget: ${size} bytes"
              fi
            fi
          done
      
      - name: Unused CSS Detection
        run: npm run css:analyze
      
      - name: Upload CSS artifacts
        uses: actions/upload-artifact@v3
        with:
          name: css-build
          path: dist/css/

  # Visual Regression Testing
  visual-testing:
    runs-on: ubuntu-latest
    needs: css-qa
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Download CSS artifacts
        uses: actions/download-artifact@v3
        with:
          name: css-build
          path: dist/css/
      
      - name: Run Storybook
        run: npm run storybook:build
      
      - name: Visual regression tests
        run: npm run test:visual
        env:
          CHROMATIC_PROJECT_TOKEN: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}

  # Accessibility Testing
  a11y-testing:
    runs-on: ubuntu-latest
    needs: css-qa
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build application
        run: npm run build
      
      - name: Start application
        run: npm start &
        
      - name: Wait for application
        run: npx wait-on http://localhost:3000
      
      - name: Run accessibility tests
        run: npm run test:a11y
      
      - name: Generate accessibility report
        run: npm run a11y:report
      
      - name: Upload accessibility report
        uses: actions/upload-artifact@v3
        with:
          name: a11y-report
          path: reports/accessibility/

  # Performance Testing
  performance-testing:
    runs-on: ubuntu-latest
    needs: css-qa
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build for production
        run: npm run build
        env:
          NODE_ENV: production
      
      - name: Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.12.x
          lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}

  # Deployment
  deploy:
    runs-on: ubuntu-latest
    needs: [css-qa, visual-testing, a11y-testing, performance-testing]
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to production
        run: echo "Deploying to production..."
        # Add your deployment steps here
```

**Package.json Scripts**:

```json
{
  "scripts": {
    "dev": "concurrently \"npm:watch:css\" \"npm:dev:app\"",
    "dev:app": "vite",
    "build": "npm run build:css && vite build",
    "build:css": "tailwindcss -i ./src/styles/input.css -o ./dist/css/styles.css --minify",
    "watch:css": "tailwindcss -i ./src/styles/input.css -o ./src/styles/output.css --watch",
    "css:analyze": "webpack-bundle-analyzer dist/css --report --mode static",
    "css:purge-report": "tailwindcss -i ./src/styles/input.css -o ./dist/css/styles.css --minify --verbose",
    "test": "jest",
    "test:visual": "chromatic --exit-zero-on-changes",
    "test:a11y": "pa11y-ci --sitemap http://localhost:3000/sitemap.xml",
    "a11y:report": "lighthouse-ci --config=.lighthouserc.js",
    "storybook": "storybook dev -p 6006",
    "storybook:build": "storybook build",
    "lint:css": "stylelint \"**/*.{css,scss}\"",
    "format:css": "prettier --write \"**/*.{css,scss}\"",
    "precommit": "lint-staged",
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{css,scss}": ["stylelint --fix", "prettier --write"],
    "*.{json,md}": ["prettier --write"]
  }
}
```

**Design System Documentation Generator**:

```javascript
// scripts/generate-design-tokens.js
const fs = require('fs');
const path = require('path');
const tailwindConfig = require('../tailwind.config.js');

const generateDesignTokens = () => {
  const tokens = {
    colors: {},
    spacing: {},
    typography: {},
    shadows: {},
    breakpoints: {},
  };

  // Extract colors
  if (tailwindConfig.theme?.extend?.colors) {
    tokens.colors = flattenColors(tailwindConfig.theme.extend.colors);
  }

  // Extract spacing
  if (tailwindConfig.theme?.extend?.spacing) {
    tokens.spacing = tailwindConfig.theme.extend.spacing;
  }

  // Extract typography
  if (tailwindConfig.theme?.extend?.fontSize) {
    tokens.typography = tailwindConfig.theme.extend.fontSize;
  }

  // Generate CSS custom properties
  const cssVariables = generateCSSVariables(tokens);
  
  // Generate JSON for design tools
  const designTokensJson = JSON.stringify(tokens, null, 2);
  
  // Generate TypeScript definitions
  const typeDefinitions = generateTypeDefinitions(tokens);

  // Write files
  fs.writeFileSync('./dist/design-tokens.json', designTokensJson);
  fs.writeFileSync('./dist/design-tokens.css', cssVariables);
  fs.writeFileSync('./src/types/design-tokens.d.ts', typeDefinitions);
  
  console.log('✅ Design tokens generated successfully');
};

const flattenColors = (colors, prefix = '') => {
  const flattened = {};
  
  Object.entries(colors).forEach(([key, value]) => {
    const fullKey = prefix ? `${prefix}-${key}` : key;
    
    if (typeof value === 'object' && value !== null) {
      Object.assign(flattened, flattenColors(value, fullKey));
    } else {
      flattened[fullKey] = value;
    }
  });
  
  return flattened;
};

const generateCSSVariables = (tokens) => {
  let css = ':root {\n';
  
  // Colors
  Object.entries(tokens.colors).forEach(([name, value]) => {
    css += `  --color-${name}: ${value};\n`;
  });
  
  // Spacing
  Object.entries(tokens.spacing).forEach(([name, value]) => {
    css += `  --spacing-${name}: ${value};\n`;
  });
  
  css += '}\n';
  return css;
};

const generateTypeDefinitions = (tokens) => {
  let types = '// Auto-generated design token types\n\n';
  
  types += 'export interface DesignTokens {\n';
  types += '  colors: {\n';
  Object.keys(tokens.colors).forEach(color => {
    types += `    '${color}': string;\n`;
  });
  types += '  };\n';
  
  types += '  spacing: {\n';
  Object.keys(tokens.spacing).forEach(space => {
    types += `    '${space}': string;\n`;
  });
  types += '  };\n';
  types += '}\n';
  
  return types;
};

// Team Collaboration Tools
const generateComponentInventory = () => {
  const components = [];
  const componentDir = './src/components';
  
  const scanDirectory = (dir) => {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.jsx') || file.endsWith('.tsx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Extract component info
        const componentInfo = extractComponentInfo(content, filePath);
        if (componentInfo) {
          components.push(componentInfo);
        }
      }
    });
  };
  
  scanDirectory(componentDir);
  
  // Generate component documentation
  const documentation = generateComponentDocs(components);
  fs.writeFileSync('./docs/component-inventory.md', documentation);
  
  console.log('✅ Component inventory generated');
};

const extractComponentInfo = (content, filePath) => {
  // Extract Tailwind classes used
  const tailwindClasses = extractTailwindClasses(content);
  
  // Extract props interface
  const propsInterface = extractPropsInterface(content);
  
  // Extract component name
  const componentName = extractComponentName(content, filePath);
  
  if (!componentName) return null;
  
  return {
    name: componentName,
    file: filePath,
    tailwindClasses: [...new Set(tailwindClasses)],
    props: propsInterface,
    lastModified: fs.statSync(filePath).mtime,
  };
};

const extractTailwindClasses = (content) => {
  const classRegex = /className\s*=\s*[`"']([^`"']*)[`"']/g;
  const classes = [];
  let match;
  
  while ((match = classRegex.exec(content)) !== null) {
    const classString = match[1];
    const individualClasses = classString.split(/\s+/).filter(Boolean);
    classes.push(...individualClasses);
  }
  
  return classes.filter(cls => 
    // Filter for actual Tailwind classes
    /^(bg-|text-|p-|m-|flex|grid|rounded|border|shadow|hover:|focus:|md:|lg:)/.test(cls)
  );
};

// Automated Documentation
const generateComponentDocs = (components) => {
  let docs = '# Component Inventory\n\n';
  docs += `Generated on: ${new Date().toISOString()}\n\n`;
  
  docs += '## Component Overview\n\n';
  docs += `Total Components: ${components.length}\n\n`;
  
  // Group by category
  const categories = groupComponentsByCategory(components);
  
  Object.entries(categories).forEach(([category, comps]) => {
    docs += `### ${category}\n\n`;
    
    comps.forEach(comp => {
      docs += `#### ${comp.name}\n`;
      docs += `- **File**: \`${comp.file}\`\n`;
      docs += `- **Tailwind Classes**: ${comp.tailwindClasses.length}\n`;
      docs += `- **Last Modified**: ${comp.lastModified.toLocaleDateString()}\n`;
      
      if (comp.tailwindClasses.length > 0) {
        docs += '\n**Common Classes Used**:\n';
        const classCounts = getClassUsageCounts(comp.tailwindClasses);
        Object.entries(classCounts)
          .sort(([,a], [,b]) => b - a)
          .slice(0, 10)
          .forEach(([cls, count]) => {
            docs += `- \`${cls}\` (${count}x)\n`;
          });
      }
      
      docs += '\n';
    });
  });
  
  return docs;
};

// Monitoring and Analytics
const setupTailwindAnalytics = () => {
  const analytics = {
    classUsage: {},
    componentMetrics: {},
    performanceMetrics: {},
  };
  
  // Track class usage
  const trackClassUsage = (className) => {
    analytics.classUsage[className] = (analytics.classUsage[className] || 0) + 1;
  };
  
  // Performance monitoring
  const trackPerformance = (metric, value) => {
    if (!analytics.performanceMetrics[metric]) {
      analytics.performanceMetrics[metric] = [];
    }
    analytics.performanceMetrics[metric].push({
      value,
      timestamp: Date.now(),
    });
  };
  
  // Generate analytics report
  const generateAnalyticsReport = () => {
    const report = {
      summary: {
        totalClassesUsed: Object.keys(analytics.classUsage).length,
        mostUsedClasses: Object.entries(analytics.classUsage)
          .sort(([,a], [,b]) => b - a)
          .slice(0, 20),
        avgCSSBundleSize: calculateAverageMetric('cssSize'),
        avgRenderTime: calculateAverageMetric('renderTime'),
      },
      trends: generateTrends(),
      recommendations: generateRecommendations(),
    };
    
    fs.writeFileSync('./reports/tailwind-analytics.json', JSON.stringify(report, null, 2));
    return report;
  };
  
  return {
    trackClassUsage,
    trackPerformance,
    generateAnalyticsReport,
  };
};

// Practice: Enterprise Integration Dashboard
const Lesson25 = () => {
  const [metrics, setMetrics] = useState({
    buildTime: 0,
    bundleSize: 0,
    performance: 0,
    accessibility: 0,
  });
  
  const [pipelineStatus, setPipelineStatus] = useState({
    css: 'success',
    visual: 'running',
    a11y: 'pending',
    performance: 'pending',
  });
  
  useEffect(() => {
    // Simulate real-time metrics
    const interval = setInterval(() => {
      setMetrics(prev => ({
        buildTime: 2.3 + (Math.random() - 0.5) * 0.5,
        bundleSize: 45 + (Math.random() - 0.5) * 10,
        performance: 85 + (Math.random() - 0.5) * 10,
        accessibility: 95 + (Math.random() - 0.5) * 5,
      }));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const StatusBadge = ({ status, children }) => {
    const statusStyles = {
      success: 'bg-green-100 text-green-800 border-green-200',
      running: 'bg-blue-100 text-blue-800 border-blue-200 animate-pulse',
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      failed: 'bg-red-100 text-red-800 border-red-200',
    };
    
    return (
      <span className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border
        ${statusStyles[status]}
      `}>
        {children}
      </span>
    );
  };
  
  const MetricCard = ({ title, value, unit, trend, target }) => {
    const isGood = value >= target;
    const trendColor = trend > 0 ? 'text-green-600' : 'text-red-600';
    
    return (
      <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
            {title}
          </h3>
          <div className={`text-xs ${trendColor}`}>
            {trend > 0 ? '↗' : '↘'} {Math.abs(trend).toFixed(1)}%
          </div>
        </div>
        
        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              {value.toFixed(1)}
              <span className="text-sm font-normal text-neutral-500 ml-1">
                {unit}
              </span>
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              Target: {target}{unit}
            </p>
          </div>
          
          <div className={`
            w-3 h-3 rounded-full
            ${isGood ? 'bg-green-500' : 'bg-red-500'}
          `} />
        </div>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Enterprise Workflow Integration
          </h1>
          <p className="text-neutral-600 dark:text-neutral-300">
            CI/CD Pipeline Dashboard for Tailwind CSS
          </p>
        </header>
        
        {/* Pipeline Status */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Pipeline Status
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'CSS Quality', key: 'css', icon: '🎨' },
              { name: 'Visual Tests', key: 'visual', icon: '👁️' },
              { name: 'Accessibility', key: 'a11y', icon: '♿' },
              { name: 'Performance', key: 'performance', icon: '⚡' },
            ].map(stage => (
              <div key={stage.key} className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{stage.icon}</span>
                  <StatusBadge status={pipelineStatus[stage.key]}>
                    {pipelineStatus[stage.key]}
                  </StatusBadge>
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                  {stage.name}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                  {pipelineStatus[stage.key] === 'success' && 'All checks passed'}
                  {pipelineStatus[stage.key] === 'running' && 'Tests in progress...'}
                  {pipelineStatus[stage.key] === 'pending' && 'Waiting in queue'}
                  {pipelineStatus[stage.key] === 'failed' && 'Issues detected'}
                </p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Performance Metrics */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Performance Metrics
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Build Time"
              value={metrics.buildTime}
              unit="s"
              trend={-5.2}
              target={3.0}
            />
            <MetricCard
              title="CSS Bundle Size"
              value={metrics.bundleSize}
              unit="KB"
              trend={-12.1}
              target={50}
            />
            <MetricCard
              title="Performance Score"
              value={metrics.performance}
              unit=""
              trend={2.3}
              target={90}
            />
            <MetricCard
              title="Accessibility Score"
              value={metrics.accessibility}
              unit=""
              trend={1.5}
              target={95}
            />
          </div>
        </section>
        
        {/* Design System Health */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Design System Health
          </h2>
          
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Component Usage */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                Component Usage
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Button', usage: 95, instances: 247 },
                  { name: 'Card', usage: 78, instances: 156 },
                  { name: 'Modal', usage: 45, instances: 23 },
                  { name: 'Form Field', usage: 89, instances: 134 },
                ].map(comp => (
                  <div key={comp.name} className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-neutral-900 dark:text-neutral-100">
                        {comp.name}
                      </span>
                      <span className="text-sm text-neutral-500 ml-2">
                        {comp.instances} instances
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                        <div 
                          className="bg-brand-primary-500 h-2 rounded-full"
                          style={{ width: `${comp.usage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100 w-8">
                        {comp.usage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Code Quality */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                Code Quality Metrics
              </h3>
              <div className="space-y-4">
                {[
                  { metric: 'CSS Consistency', score: 92, status: 'good' },
                  { metric: 'Design Token Usage', score: 88, status: 'good' },
                  { metric: 'Unused Classes', score: 15, status: 'warning' },
                  { metric: 'Component Coverage', score: 76, status: 'warning' },
                ].map(item => (
                  <div key={item.metric} className="flex items-center justify-between">
                    <span className="text-neutral-900 dark:text-neutral-100">
                      {item.metric}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        {item.score}%
                      </span>
                      <div className={`
                        w-3 h-3 rounded-full
                        ${item.status === 'good' ? 'bg-green-500' : 'bg-yellow-500'}
                      `} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Development Tools */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Development Tools Integration
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Storybook',
                description: 'Component development environment',
                status: 'active',
                link: '/storybook',
              },
              {
                name: 'Figma Sync',
                description: 'Design token synchronization',
                status: 'active',
                link: '/figma-tokens',
              },
              {
                name: 'Bundle Analyzer',
                description: 'CSS bundle size analysis',
                status: 'active',
                link: '/bundle-analyzer',
              },
            ].map(tool => (
              <div key={tool.name} className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {tool.name}
                  </h3>
                  <div className={`
                    w-3 h-3 rounded-full
                    ${tool.status === 'active' ? 'bg-green-500' : 'bg-neutral-400'}
                  `} />
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                  {tool.description}
                </p>
                <button className="
                  w-full bg-brand-primary-500 text-white py-2 px-4 rounded-lg text-sm
                  hover:bg-brand-primary-600 transition-colors duration-200
                ">
                  Open Tool
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// Run if called directly
if (require.main === module) {
  generateDesignTokens();
  generateComponentInventory();
  console.log('🚀 Enterprise workflow setup complete!');
}

export default Lesson25;
```

---

### **Lesson 26: Advanced Customization and Plugin Ecosystem**

**Goal**: Master advanced Tailwind customization and create sophisticated plugins

**Advanced Plugin Development**:

```javascript
// plugins/advanced-utilities.js
const plugin = require('tailwindcss/plugin');
const Color = require('color');

module.exports = plugin.withOptions(function (options = {}) {
  return function ({ addUtilities, addComponents, addBase, theme, variants, e, prefix, config }) {
    const { 
      includeColorMix = true,
      includeFluidTypography = true,
      includeAdvancedGrid = true,
      includeAnimations = true,
    } = options;

    // Advanced Color Mixing Utilities
    if (includeColorMix) {
      const colors = theme('colors');
      const colorMixUtilities = {};

      Object.entries(colors).forEach(([colorName, colorValue]) => {
        if (typeof colorValue === 'object') {
          Object.entries(colorValue).forEach(([shade, hex]) => {
            try {
              const color = Color(hex);
              
              // Generate color variations
              colorMixUtilities[`.bg-${colorName}-${shade}-alpha-10`] = {
                backgroundColor: color.alpha(0.1).string(),
              };
              colorMixUtilities[`.bg-${colorName}-${shade}-alpha-25`] = {
                backgroundColor: color.alpha(0.25).string(),
              };
              colorMixUtilities[`.bg-${colorName}-${shade}-alpha-50`] = {
                backgroundColor: color.alpha(0.5).string(),
              };
              
              // Generate complementary colors
              const complement = color.complement();
              colorMixUtilities[`.bg-${colorName}-${shade}-complement`] = {
                backgroundColor: complement.hex(),
              };
              
              // Generate triadic colors
              const triadic = color.triadic();
              triadic.forEach((triad, index) => {
                colorMixUtilities[`.bg-${colorName}-${shade}-triadic-${index + 1}`] = {
                  backgroundColor: triad.hex(),
                };
              });
              
            } catch (e) {
              // Skip invalid colors
            }
          });
        }
      });

      addUtilities(colorMixUtilities);
    }

    // Fluid Typography Utilities
    if (includeFluidTypography) {
      const fluidUtilities = {
        '.text-fluid-xs': {
          fontSize: 'clamp(0.75rem, 0.5rem + 1vw, 0.875rem)',
          lineHeight: '1.4',
        },
        '.text-fluid-sm': {
          fontSize: 'clamp(0.875rem, 0.75rem + 1vw, 1rem)',
          lineHeight: '1.5',
        },
        '.text-fluid-base': {
          fontSize: 'clamp(1rem, 0.875rem + 1vw, 1.125rem)',
          lineHeight: '1.6',
        },
        '.text-fluid-lg': {
          fontSize: 'clamp(1.125rem, 1rem + 1.5vw, 1.25rem)',
          lineHeight: '1.7',
        },
        '.text-fluid-xl': {
          fontSize: 'clamp(1.25rem, 1.125rem + 2vw, 1.5rem)',
          lineHeight: '1.8',
        },
        '.text-fluid-2xl': {
          fontSize: 'clamp(1.5rem, 1.25rem + 3vw, 2rem)',
          lineHeight: '1.3',
        },
        '.text-fluid-3xl': {
          fontSize: 'clamp(1.875rem, 1.5rem + 4vw, 2.5rem)',
          lineHeight: '1.2',
        },
        '.text-fluid-4xl': {
          fontSize: 'clamp(2.25rem, 1.875rem + 5vw, 3rem)',
          lineHeight: '1.1',
        },
      };

      addUtilities(fluidUtilities);
    }

    // Advanced Grid Utilities
    if (includeAdvancedGrid) {
      const gridUtilities = {
        // Auto-fit grids
        '.grid-auto-fit-xs': {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',
          gap: theme('spacing.4'),
        },
        '.grid-auto-fit-sm': {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
          gap: theme('spacing.4'),
        },
        '.grid-auto-fit-md': {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
          gap: theme('spacing.6'),
        },
        '.grid-auto-fit-lg': {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
          gap: theme('spacing.6'),
        },
        
        // Masonry-like grid
        '.grid-masonry': {
          columns: '3',
          columnGap: theme('spacing.6'),
          columnFill: 'balance',
        },
        '.grid-masonry-sm': {
          columns: '2',
          columnGap: theme('spacing.4'),
        },
        '.grid-masonry-lg': {
          columns: '4',
          columnGap: theme('spacing.8'),
        },
        
        // Grid item utilities
        '.grid-item-span-full': {
          gridColumn: '1 / -1',
        },
        '.grid-item-break-inside-avoid': {
          breakInside: 'avoid',
          pageBreakInside: 'avoid',
        },
      };

      addUtilities(gridUtilities);
    }

    // Advanced Animation Utilities
    if (includeAnimations) {
      const animationUtilities = {
        '.animate-fade-in-up': {
          animation: 'fadeInUp 0.6s ease-out forwards',
        },
        '.animate-fade-in-down': {
          animation: 'fadeInDown 0.6s ease-out forwards',
        },
        '.animate-fade-in-left': {
          animation: 'fadeInLeft 0.6s ease-out forwards',
        },
        '.animate-fade-in-right': {
          animation: 'fadeInRight 0.6s ease-out forwards',
        },
        '.animate-scale-in': {
          animation: 'scaleIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        },
        '.animate-slide-up': {
          animation: 'slideUp 0.5s ease-out forwards',
        },
        '.animate-slide-down': {
          animation: 'slideDown 0.5s ease-out forwards',
        },
        '.animate-rotate-in': {
          animation: 'rotateIn 0.6s ease-out forwards',
        },
        '.animate-flip-in-x': {
          animation: 'flipInX 0.8s ease-out forwards',
        },
        '.animate-flip-in-y': {
          animation: 'flipInY 0.8s ease-out forwards',
        },
        
        // Hover animations
        '.hover-lift': {
          transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
          },
        },
        '.hover-glow': {
          transition: 'box-shadow 0.3s ease-out',
          '&:hover': {
            boxShadow: `0 0 20px ${theme('colors.blue.500')}40`,
          },
        },
        '.hover-tilt': {
          transition: 'transform 0.3s ease-out',
          '&:hover': {
            transform: 'rotate(2deg) scale(1.05)',
          },
        },
      };

      // Add keyframes
      addBase({
        '@keyframes fadeInUp': {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        '@keyframes fadeInDown': {
          'from': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        '@keyframes fadeInLeft': {
          'from': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        '@keyframes fadeInRight': {
          'from': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        '@keyframes scaleIn': {
          'from': {
            opacity: '0',
            transform: 'scale(0.8)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        '@keyframes slideUp': {
          'from': {
            transform: 'translateY(100%)',
          },
          'to': {
            transform: 'translateY(0)',
          },
        },
        '@keyframes slideDown': {
          'from': {
            transform: 'translateY(-100%)',
          },
          'to': {
            transform: 'translateY(0)',
          },
        },
        '@keyframes rotateIn': {
          'from': {
            opacity: '0',
            transform: 'rotate(-180deg) scale(0.5)',
          },
          'to': {
            opacity: '1',
            transform: 'rotate(0deg) scale(1)',
          },
        },
        '@keyframes flipInX': {
          'from': {
            opacity: '0',
            transform: 'perspective(400px) rotateX(90deg)',
          },
          'to': {
            opacity: '1',
            transform: 'perspective(400px) rotateX(0deg)',
          },
        },
        '@keyframes flipInY': {
          'from': {
            opacity: '0',
            transform: 'perspective(400px) rotateY(90deg)',
          },
          'to': {
            opacity: '1',
            transform: 'perspective(400px) rotateY(0deg)',
          },
        },
      });

      addUtilities(animationUtilities);
    }

    // Typography Enhancement Components
    addComponents({
      '.prose-enhanced': {
        '& h1, & h2, & h3, & h4, & h5, & h6': {
          fontWeight: '700',
          letterSpacing: '-0.025em',
          lineHeight: '1.2',
        },
        '& h1': {
          fontSize: 'clamp(2.25rem, 4vw, 3.75rem)',
        },
        '& h2': {
          fontSize: 'clamp(1.875rem, 3vw, 2.25rem)',
        },
        '& h3': {
          fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)',
        },
        '& p': {
          fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
          lineHeight: '1.7',
          marginBottom: '1.5em',
        },
        '& a': {
          color: theme('colors.blue.600'),
          textDecoration: 'underline',
          textDecorationColor: theme('colors.blue.300'),
          textUnderlineOffset: '0.2em',
          transition: 'all 0.2s ease',
          '&:hover': {
            color: theme('colors.blue.700'),
            textDecorationColor: theme('colors.blue.500'),
          },
        },
        '& blockquote': {
          borderLeftWidth: '4px',
          borderLeftColor: theme('colors.blue.400'),
          paddingLeft: '1.5em',
          fontStyle: 'italic',
          backgroundColor: theme('colors.blue.50'),
          padding: '1.5em',
          borderRadius: '0.5rem',
        },
        '& code': {
          backgroundColor: theme('colors.gray.100'),
          color: theme('colors.gray.800'),
          padding: '0.25em 0.5em',
          borderRadius: '0.25rem',
          fontSize: '0.875em',
          fontFamily: theme('fontFamily.mono').join(', '),
        },
        '& pre': {
          backgroundColor: theme('colors.gray.900'),
          color: theme('colors.gray.100'),
          padding: '1.5em',
          borderRadius: '0.75rem',
          overflow: 'auto',
          fontSize: '0.875em',
          lineHeight: '1.5',
        },
      },
    });
  };
});
```

**Advanced Configuration System**:

```javascript
// tailwind.config.advanced.js
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const advancedUtilities = require('./plugins/advanced-utilities');

module.exports = {
  content: {
    files: [
      './src/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
      './pages/**/*.{js,jsx,ts,tsx}',
    ],
    transform: {
      js: (content) => {
        return content.replace(/`([^`]*)`/g, (match, p1) => {
          return p1.replace(/\$\{[^}]*\}/g, '');
        });
      },
    },
  },

  darkMode: ['class', '[data-theme="dark"]'],

  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        success: colors.emerald,
        warning: colors.amber,
        error: colors.red,
        info: colors.blue,
        neutral: colors.slate,
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    advancedUtilities({
      includeColorMix: true,
      includeFluidTypography: true,
      includeAdvancedGrid: true,
      includeAnimations: true,
    }),
  ],
};
```

---

### **Lesson 27: Real-World Case Studies**

**Goal**: Apply Tailwind CSS to complex real-world scenarios

**Case Study 1: E-commerce Platform**:

```jsx
import React, { useState } from 'react';

const ProductCard = ({ product, variant = 'default' }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <article className="
      relative group bg-white rounded-xl shadow-lg border border-neutral-200
      hover:shadow-xl hover:-translate-y-1 transition-all duration-300
    ">
      {/* Product Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className={`
            px-2 py-1 text-xs font-semibold rounded-full
            ${product.badge.type === 'sale' ? 'bg-red-500 text-white' : ''}
            ${product.badge.type === 'new' ? 'bg-green-500 text-white' : ''}
          `}>
            {product.badge.text}
          </span>
        </div>
      )}

      {/* Wishlist Button */}
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="
          absolute top-3 right-3 z-10 p-2 bg-white bg-opacity-80 backdrop-blur-sm
          rounded-full shadow-md hover:bg-opacity-100 transition-all duration-200
        "
      >
        <svg className={`w-5 h-5 ${isWishlisted ? 'text-red-500' : 'text-neutral-400'}`}>
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden rounded-t-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between text-xs text-neutral-500">
          <span className="font-medium uppercase tracking-wide">{product.brand}</span>
          <span>{product.category}</span>
        </div>

        <h3 className="font-semibold text-neutral-900 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-neutral-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-neutral-600">{product.rating} ({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-neutral-900">${product.price.current}</span>
            {product.price.original && (
              <span className="text-sm text-neutral-500 line-through">${product.price.original}</span>
            )}
          </div>
          {product.price.original && (
            <span className="text-sm font-semibold text-green-600">
              Save {Math.round(((product.price.original - product.price.current) / product.price.original) * 100)}%
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button className="
          w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold
          hover:bg-primary-600 transform transition-all duration-200 hover:scale-105
        ">
          Add to Cart
        </button>
      </div>
    </article>
  );
};
```

**Case Study 2: SaaS Dashboard**:

```jsx
const MetricCard = ({ title, value, change, trend, icon }) => {
  const trendColor = trend === 'up' ? 'text-green-600' : 'text-red-600';
  const trendIcon = trend === 'up' ? '↗' : '↘';

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-primary-100 rounded-lg">
          <span className="text-2xl">{icon}</span>
        </div>
        <div className={`flex items-center text-sm font-medium ${trendColor}`}>
          <span>{change}</span>
          <span className="ml-1">{trendIcon}</span>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-neutral-600 mb-1">{title}</h3>
        <p className="text-2xl font-bold text-neutral-900">{value}</p>
      </div>
    </div>
  );
};

const SaaSDashboard = () => {
  const metrics = [
    { title: 'Total Revenue', value: '$24,680', change: '+12.3%', trend: 'up', icon: '💰' },
    { title: 'Active Users', value: '1,234', change: '+8.1%', trend: 'up', icon: '👥' },
    { title: 'Conversion Rate', value: '3.2%', change: '-0.5%', trend: 'down', icon: '📈' },
    { title: 'Avg. Session', value: '4m 32s', change: '+2.1%', trend: 'up', icon: '⏱️' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
              <p className="text-neutral-600">Welcome back, here's what's happening</p>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600">
              New Report
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
            <h3 className="text-lg font-semibold text-neutral-900 mb-6">Revenue Overview</h3>
            <div className="h-64 bg-gradient-to-t from-primary-100 to-transparent rounded-lg"></div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200">
            <div className="p-6 border-b border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-900">Recent Activity</h3>
            </div>
            <div className="p-6 space-y-4">
              {['Payment processed', 'New user registered', 'Server update'].map((activity, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-neutral-600">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
```

---

### **Lesson 28: Admiral Certification Project**

**Goal**: Complete a comprehensive capstone project demonstrating admiral-level mastery

**Final Admiral Project - Complete Design System**:

```jsx
import React, { useState, useContext, createContext } from 'react';

// Design System Context
const DesignSystemContext = createContext();

const DesignSystemProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [colorScheme, setColorScheme] = useState('blue');

  return (
    <DesignSystemContext.Provider value={{ theme, setTheme, colorScheme, setColorScheme }}>
      {children}
    </DesignSystemContext.Provider>
  );
};

const useDesignSystem = () => useContext(DesignSystemContext);

// Admiral-Level Components
const Button = ({ variant = 'primary', size = 'md', children, ...props }) => {
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg',
    secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-300',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center font-medium rounded-lg
        transition-all duration-200 focus:outline-none focus:ring-2
        hover:scale-105 active:scale-95
        ${variants[variant]} ${sizes[size]}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, hover = false, ...props }) => (
  <div
    className={`
      bg-white border border-neutral-200 rounded-xl shadow-sm p-6
      ${hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : ''}
    `}
    {...props}
  >
    {children}
  </div>
);

// Admiral Certification Dashboard
const AdmiralDashboard = () => {
  const [completedLessons] = useState(28);
  const { theme, setTheme } = useDesignSystem();

  const certificationProgress = [
    { category: 'Fundamentals', lessons: 10, completed: 10, score: 98 },
    { category: 'Advanced Techniques', lessons: 8, completed: 8, score: 95 },
    { category: 'Enterprise Skills', lessons: 10, completed: 10, score: 97 },
  ];

  const skills = [
    { name: 'Component Architecture', level: 95 },
    { name: 'Performance Optimization', level: 92 },
    { name: 'Accessibility Implementation', level: 98 },
    { name: 'Design System Creation', level: 94 },
    { name: 'Advanced Customization', level: 96 },
    { name: 'Enterprise Integration', level: 90 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <header className="mb-12">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-neutral-900 mb-2">
                Admiral Certification
              </h1>
              <p className="text-lg text-neutral-600">
                Complete mastery of Tailwind CSS enterprise implementation
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Button
                variant="secondary"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                Toggle Theme
              </Button>
              <Button variant="primary">🏆 Claim Certificate</Button>
            </div>
          </div>
        </header>

        {/* Progress Overview */}
        <section className="mb-12">
          <div className="grid gap-6 md:grid-cols-3">
            <Card hover>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {completedLessons}/28
                </div>
                <h3 className="text-lg font-semibold mb-1">Lessons Completed</h3>
                <p className="text-neutral-600">100% Complete</p>
                <div className="w-full bg-neutral-200 rounded-full h-2 mt-4">
                  <div 
                    className="bg-primary-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${(completedLessons / 28) * 100}%` }}
                  ></div>
                </div>
              </div>
            </Card>

            <Card hover>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">96%</div>
                <h3 className="text-lg font-semibold mb-1">Average Score</h3>
                <p className="text-neutral-600">Excellent Performance</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </Card>

            <Card hover>
              <div className="text-center">
                <div className="text-4xl mb-2">🎖️</div>
                <h3 className="text-lg font-semibold mb-1">Admiral Status</h3>
                <p className="text-neutral-600">Ready for Certification</p>
                <Button variant="primary" size="sm" className="mt-4">
                  Download Certificate
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Learning Path Progress */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Learning Path Progress</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {certificationProgress.map((section, index) => (
              <Card key={section.category} hover>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{section.category}</h3>
                  <span className="text-2xl font-bold text-primary-500">
                    {section.score}%
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-neutral-600 mb-2">
                    <span>{section.completed}/{section.lessons} lessons</span>
                    <span>{Math.round((section.completed / section.lessons) * 100)}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div 
                      className="bg-primary-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(section.completed / section.lessons) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-green-600">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Complete
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Capstone Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { name: 'E-commerce Platform', status: 'completed', score: 96 },
              { name: 'SaaS Dashboard', status: 'completed', score: 94 },
              { name: 'Design System', status: 'in-progress', score: null },
              { name: 'Performance Optimization', status: 'completed', score: 92 },
            ].map((project, index) => (
              <Card key={project.name} hover>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-neutral-900">{project.name}</h3>
                    <p className="text-sm text-neutral-600 capitalize">{project.status.replace('-', ' ')}</p>
                  </div>
                  
                  <div className="text-right">
                    {project.score && (
                      <div className="text-lg font-bold text-primary-500">
                        {project.score}%
                      </div>
                    )}
                    <div className={`
                      text-xs px-2 py-1 rounded-full
                      ${project.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                      ${project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : ''}
                    `}>
                      {project.status === 'completed' && '✓ Complete'}
                      {project.status === 'in-progress' && '🔄 In Progress'}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Assessment */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Skills Assessment</h2>
          <Card>
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-neutral-900">{skill.name}</span>
                    <span className="text-sm font-semibold text-primary-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Final Achievement */}
        <section className="mt-16 text-center">
          <Card>
            <div className="py-12">
              <div className="text-6xl mb-6">🏆</div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Congratulations, Admiral!
              </h2>
              <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                You have successfully completed all 28 lessons and achieved Admiral-level mastery 
                of Tailwind CSS. You're now ready to lead enterprise implementations and build 
                world-class user interfaces.
              </p>
              
              <div className="flex justify-center space-x-4">
                <Button variant="primary" size="lg">
                  🎓 Download Certificate
                </Button>
                <Button variant="outline" size="lg">
                  📚 View Portfolio
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

// Main Component
const AdmiralCertification = () => {
  return (
    <DesignSystemProvider>
      <AdmiralDashboard />
    </DesignSystemProvider>
  );
};

export default AdmiralCertification;
```

---

## 🎓 **Admiral Graduation: Complete Mastery Achieved**

**Congratulations! You have successfully completed all 28 lessons and achieved Admiral-level mastery of Tailwind CSS.**

### **🏆 What You've Accomplished**

**📚 Complete Learning Journey:**
* **Lessons 1-10**: Zero to Hero (Fundamentals)
* **Lessons 11-18**: Hero to Captain (Advanced)  
* **Lessons 19-28**: Captain to Admiral (Enterprise)

**🏆 Admiral-Level Expertise:**
* Component architecture & design systems
* Advanced plugin development with color science
* Multi-theme systems with state management
* Performance optimization at enterprise scale
* Comprehensive testing strategies (unit, visual, e2e)
* Accessibility & inclusive design implementation
* Enterprise workflow integration (CI/CD, monitoring)
* Advanced customization & plugin ecosystem mastery
* Real-world case studies (E-commerce, SaaS, CMS)
* Complete certification project with design system

**💼 Real-World Ready:**
You can now confidently:
* Lead enterprise Tailwind implementations
* Build scalable, maintainable design systems
* Optimize for performance and accessibility
* Integrate with modern development workflows
* Create sophisticated, production-ready UIs
* Mentor other developers and teams
* Architect complex frontend systems

### 🚀 **Your Next Steps:**

1. **Practice**: Implement these patterns in real projects
2. **Share**: Contribute to open source or mentor others  
3. **Advance**: Consider speaking at conferences or writing technical content
4. **Lead**: Take on enterprise projects and team leadership roles

### 📜 **Certification Requirements Met:**

✅ **28 Lessons Completed** (100%)
✅ **Average Score**: 96% (Excellent)
✅ **Capstone Projects**: All completed with high scores
✅ **Skills Assessment**: Admiral-level proficiency demonstrated
✅ **Real-World Applications**: Production-ready implementations
✅ **Enterprise Knowledge**: CI/CD, testing, accessibility, performance

You've mastered one of the most comprehensive Tailwind CSS learning paths available! The skills you've gained will serve you well in any modern web development project.

**🎖️ Congratulations, Admiral! ⚓**

---

*This completes the ultimate 28-lesson Tailwind CSS mastery journey from Zero to Admiral. You now have enterprise-level expertise in one of the most powerful CSS frameworks available.*