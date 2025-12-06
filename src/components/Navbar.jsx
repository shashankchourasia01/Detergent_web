import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Top banner messages that will auto-slide
  const bannerMessages = [
    "🌟 Free Shipping on Orders Above ₹999!",
    "✨ Special Discount on Bulk Orders",
    "🌿 Eco-Friendly Detergents !",
    "🔥 Buy 2 Get 1 Free on All Products!"
  ];

  // Auto-slide effect for top banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bannerMessages.length]);

  // Navigation items
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Shop', href: '#' },
    { label: 'Bulk Buy', href: '#' },
    { label: 'Gallery', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'About Us', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg">
      {/* Top Auto-Sliding Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-orange-500 py-2 px-4 overflow-hidden">
        <div className="relative h-6">
          {bannerMessages.map((message, index) => (
            <div
              key={index}
              className={`absolute w-full text-center text-white font-semibold text-sm md:text-base transition-all duration-500 transform ${
                index === currentSlide
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-8 opacity-0'
              }`}
            >
              {message}
            </div>
          ))}
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center space-x-2 mt-1">
          {bannerMessages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white px-4 py-3 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-orange-400 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  JARA SA
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Clean & Fresh</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-blue-600 transition-colors duration-300 group"
              >
                {item.label}
                {/* Animated underline effect */}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-400 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10"></span>
                
                {/* Hover glow effect */}
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </a>
            ))}
          </div>

          {/* Contact Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Desktop Contact Button */}
            <button className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl group">
              Contact Us
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-gray-800 rounded-full transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 rounded-full transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-500 ${isMenuOpen ? 'opacity-70' : 'opacity-0'}`}
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Menu Panel */}
          <div className={`absolute top-0 left-0 w-80 h-full bg-gradient-to-b from-gray-900 to-black transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* Mobile Menu Header */}
            <div className="p-6 border-b border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-400 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">J</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">JARA SA</h2>
                  <p className="text-gray-400 text-sm">Clean & Fresh</p>
                </div>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="p-6">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="flex items-center p-4 text-white rounded-lg hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-orange-900/30 transform hover:translate-x-2 transition-all duration-300 group"
                      onClick={() => setIsMenuOpen(false)}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-lg font-medium">{item.label}</span>
                      <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Contact Button */}
              <button className="w-full mt-8 py-3.5 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-orange-600 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center group">
                Contact Us
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>

              {/* Additional Mobile Info */}
              <div className="mt-8 p-4 bg-gray-900/50 rounded-xl">
                <p className="text-gray-400 text-sm mb-2">📞 Call us: +91 12345 67890</p>
                <p className="text-gray-400 text-sm">✉️ Email: info@detergentpro.com</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;