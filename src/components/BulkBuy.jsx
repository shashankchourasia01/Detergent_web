import React from 'react';

const BulkBuy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Bulk <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Buy</span>
          </h1>
          
          {/* Decorative Border */}
          <div className="relative">
            <div className="h-1 w-32 md:w-48 lg:w-64 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full -mt-1.5"></div>
          </div>
          
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Premium quality detergent powders for businesses, institutions, and bulk purchasers
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              
              {/* Left Column - About Company */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 md:p-8 h-full">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="w-8 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mr-3"></span>
                    About Company
                  </h2>
                  
                  <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-lg">W</span>
                      </div>
                      Woosh
                    </h3>
                    
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Our business house – <span className="font-semibold text-blue-600">The Mehak Group</span> is one of the leading business houses in India. India being one of the largest consumer economies around the world, there are numerous business opportunities available here.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed">
                        Today, <span className="font-semibold text-orange-500">Woosh</span> has been rapidly holding its place in the market and is known to be a brand that offers best in class service. Woosh is being manufactured and marketed by <span className="font-semibold text-blue-600">Harsh Clean Dhan (P) Ltd.</span> and boasts qualities of premium products offering washing solutions.
                      </p>
                      
                      <div className="bg-white rounded-xl p-5 mt-6 border border-blue-100">
                        <h4 className="font-bold text-gray-800 mb-3 text-lg">Why Choose Woosh for Bulk Orders?</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            "Competitive Pricing",
                            "Custom Packaging",
                            "Timely Delivery",
                            "Quality Assurance",
                            "Flexible Quantities",
                            "Dedicated Support"
                          ].map((item, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mr-3"></div>
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Benefits & Hindi Tagline */}
              <div className="space-y-8">
                
                {/* Hindi Tagline */}
                <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-6 text-center relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-200 to-blue-200 rounded-full -translate-x-8 -translate-y-8"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-200 to-orange-200 rounded-full translate-x-8 translate-y-8"></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-orange-600 via-blue-600 to-orange-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                        जरा सा का जादू
                      </span>
                    </div>
                    <p className="text-gray-600 italic">
                      A little magic in every wash
                    </p>
                    
                    {/* Animated Magic Dust */}
                    <div className="flex justify-center mt-4 space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div 
                          key={star}
                          className="text-2xl animate-bounce"
                          style={{ animationDelay: `${star * 0.2}s` }}
                        >
                          ✨
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="w-8 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mr-3"></span>
                    Benefits of a Clean Home
                  </h2>
                  
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Reduces Stress", 
                        desc: "A clean environment promotes relaxation and mental clarity",
                        icon: "🧘"
                      },
                      { 
                        title: "Improves Your Mood", 
                        desc: "Clean spaces create positive energy and happiness",
                        icon: "😊"
                      },
                      { 
                        title: "Keeps Away Pests", 
                        desc: "Maintains hygiene and prevents pest infestations",
                        icon: "🚫"
                      },
                      { 
                        title: "Improves Your Health", 
                        desc: "Reduces allergens and promotes better respiratory health",
                        icon: "💪"
                      },
                      { 
                        title: "Looks and Feels Great", 
                        desc: "Creates a welcoming and comfortable living space",
                        icon: "🌟"
                      }
                    ].map((benefit, index) => (
                      <div 
                        key={index} 
                        className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex items-start">
                          <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-blue-100 to-orange-100 rounded-lg flex items-center justify-center text-lg mr-3">
                            {benefit.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                            <p className="text-gray-600 text-sm">{benefit.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                    Get Bulk Order Quote
                  </button>
                  <p className="text-gray-500 text-sm mt-3">
                    Contact us for customized bulk pricing
                  </p>
                </div>
              </div>

            </div>

            {/* Stats Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "500+", label: "Business Clients", color: "text-blue-600" },
                  { value: "10K+", label: "Kg Monthly Supply", color: "text-orange-500" },
                  { value: "50+", label: "Cities Covered", color: "text-blue-600" },
                  { value: "24/7", label: "Support", color: "text-orange-500" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            aria-label="Chat on WhatsApp"
          >
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.826 9.826 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
            </svg>
          </a>
        </div>

      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .bg-size-200 {
          background-size: 200% 200%;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default BulkBuy;