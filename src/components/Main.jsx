import React, { useState, useEffect, useRef } from 'react';
import first from '../main_assets/new.png';
import second from '../main_assets/Hailuo_Image_Create a homepage banner simil_453616031812984832.png';
import video from '../main_assets/Hailuo_Video_Create a clean and attractive _453611877531029512 (1).mp4';

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentFeatureSlide, setCurrentFeatureSlide] = useState(0);
  const videoRef = useRef(null);

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
      image: first,
    },
    {
      id: 4,
      image: second,
    }
  ];

  // Video features for mobile sliding
  const videoFeatures = [
    { icon: '🌿', title: 'Eco-Friendly', desc: 'Biodegradable ingredients' },
    { icon: '⚡', title: 'Powerful', desc: 'Removes tough stains' },
    { icon: '👕', title: 'Fabric Safe', desc: 'Protects your clothes' }
  ];

  // Auto-slide effect for product banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [productSlides.length]);

  // Auto-slide effect for mobile features
  useEffect(() => {
    const mobileInterval = setInterval(() => {
      setCurrentFeatureSlide((prev) => (prev + 1) % videoFeatures.length);
    }, 3000);
    return () => clearInterval(mobileInterval);
  }, [videoFeatures.length]);

  // Video control functions
  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
  };

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
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
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

      {/* Video Section */}
      <section className="py-8 md:py-12 lg:py-6 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                See Our <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">Products in Action</span>
              </h2>
            </div>

            {/* Video Player */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* Video Container */}
              <div className="relative pt-[56.25%]">
                <video
                  ref={videoRef}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  poster={first}
                  preload="metadata"
                  onEnded={handleVideoEnded}
                  playsInline
                >
                  <source src={video} type="video/mp4" />
                  <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Video Overlay & Controls */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isVideoPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                }`}>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
                  
                  {/* Play/Pause Button */}
                  <button
                    onClick={handleVideoPlay}
                    className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl"
                    aria-label={isVideoPlaying ? "Pause video" : "Play video"}
                  >
                    {isVideoPlaying ? (
                      <div className="flex space-x-1">
                        <div className="w-2 h-8 bg-white rounded-full animate-pulse"></div>
                        <div className="w-2 h-8 bg-white rounded-full animate-pulse animation-delay-200"></div>
                      </div>
                    ) : (
                      <svg className="w-10 h-10 ml-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    )}
                  </button>

                  {/* Video Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      DetergentPro in Action
                    </h3>
                    <p className="text-white/80">
                      See how our products transform your laundry experience
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-300"></div>
                </div>
              </div>
            </div>

            {/* Video Features - Desktop Grid / Mobile Slider */}
            <div className="mt-6">
              {/* Desktop Grid View */}
              <div className="hidden md:grid grid-cols-3 gap-6">
                {videoFeatures.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* Mobile Slider View */}
              <div className="md:hidden relative">
                <div className="overflow-hidden rounded-2xl">
                  <div className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentFeatureSlide * 100}%)` }}>
                    {videoFeatures.map((feature, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="bg-white p-6 rounded-2xl shadow-lg mx-2">
                          <div className="text-3xl mb-4 text-center">{feature.icon}</div>
                          <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">{feature.title}</h4>
                          <p className="text-gray-600 text-center">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Slider Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {videoFeatures.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFeatureSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentFeatureSlide 
                          ? 'w-8 bg-gradient-to-r from-blue-600 to-orange-500' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to feature ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Mobile Navigation Arrows */}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => setCurrentFeatureSlide(prev => (prev - 1 + videoFeatures.length) % videoFeatures.length)}
                    className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl"
                    aria-label="Previous feature"
                  >
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentFeatureSlide(prev => (prev + 1) % videoFeatures.length)}
                    className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl"
                    aria-label="Next feature"
                  >
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </main>
  );
};

export default Main;