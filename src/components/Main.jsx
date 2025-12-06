import React, { useState, useEffect } from 'react';
import first from '../main_assets/four.png';
import second from '../main_assets/one.jpg';
import third from '../main_assets/two.png';
import fourth from '../main_assets/three.png';

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Product banner images
  const productSlides = [
    {
      id: 1,
      image: first,
    },
    {
      id: 2,
      image: second,
    },
    {
      id: 3,
      image: third,
    },
    {
      id: 4,
      image: fourth,
    }
  ];

  // Auto-slide effect for product banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [productSlides.length]);

  // SEO structured data for detergent products
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Premium Detergent Products",
    "description": "High-quality detergent products for all your cleaning needs. Eco-friendly, effective, and affordable solutions.",
    "image": productSlides.map(slide => slide.image),
    "brand": {
      "@type": "Brand",
      "name": "DetergentPro"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "4",
      "lowPrice": "299",
      "highPrice": "999",
      "priceCurrency": "INR"
    }
  };

  return (
    <main className=" bg-gradient-to-b from-white to-blue-50">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Auto-Sliding Product Banner Section */}
      <section className="py-2 md:py-16 lg:py-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Premium Products</span>
          </h2>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Main Slider */}
            <div className="relative h-[220px] md:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              {productSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    index === currentSlide
                      ? 'translate-x-0 opacity-100'
                      : index < currentSlide
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                  }`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={slide.image}
                      alt={`Product slide ${slide.id}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={() => setCurrentSlide(prev => (prev - 1 + productSlides.length) % productSlides.length)}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-x-1 transition-all duration-300"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              
              {/* Slide Indicators */}
              <div className="flex items-center space-x-2">
                {productSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-10 bg-gradient-to-r from-blue-600 to-orange-500' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setCurrentSlide(prev => (prev + 1) % productSlides.length)}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:translate-x-1 transition-all duration-300"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;