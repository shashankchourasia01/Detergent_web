import React from 'react';

const Shop = () => {
  // WhatsApp number for ordering
  const whatsappNumber = "919876543210"; // Replace with your actual WhatsApp number
  
  // Only 3 detergent powder products
  const products = [
    {
      id: 1,
      title: "SUPER WOOSH SUPERWASH",
      description: "Super Woosh Detergent Powder - Deep Clean Formula",
      price: "₹99",
      originalPrice: "₹149",
      discount: "33% OFF",
      image: "https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      variants: ["500gm", "1kg", "2kg", "5kg"],
      bestSeller: true
    },
    {
      id: 2,
      title: "WOOSH ULTRA",
      description: "Woosh Ultra Detergent Powder - Advanced Stain Removal",
      price: "₹40 – ₹369",
      originalPrice: "",
      discount: "",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      variants: ["500gm", "1kg", "2kg"],
      ecoFriendly: true
    },
    {
      id: 3,
      title: "WOOSH ACTION+",
      description: "Woosh Action+ Active Powder - Extra Whitening Power",
      price: "₹110 – ₹380",
      originalPrice: "",
      discount: "",
      image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      variants: ["1kg", "2kg", "5kg"],
      newArrival: true
    }
  ];

  // Handle WhatsApp order
  const handleWhatsAppOrder = (product) => {
    const message = `Hello! I want to order:\n\nProduct: ${product.title}\nDescription: ${product.description}\nPrice: ${product.price}\n\nPlease contact me for order details.`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-6 md:py-8 lg:py-12">
      {/* Shop Header */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          {/* Decorative Top Border */}
          <div className="h-1 w-24 md:w-32 lg:w-40 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mb-4"></div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            Shop <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Now</span>
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Premium Detergent Powders - High-quality, effective cleaning solutions for all your laundry needs.
          </p>

          {/* Category Indicator */}
          <div className="mt-6">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-orange-50 px-6 py-3 rounded-full border border-blue-100">
              <span className="text-blue-600 font-semibold">Detergent Powder</span>
              <span className="ml-2 text-gray-500">•</span>
              <span className="ml-2 text-gray-600">{products.length} Products</span>
            </div>
          </div>
        </div>

        {/* Products Grid - 3 products in 1-2-3 column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map(product => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Product Image Container */}
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-1">
                  {product.bestSeller && (
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      BEST SELLER
                    </span>
                  )}
                  {product.newArrival && (
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      NEW ARRIVAL
                    </span>
                  )}
                  {product.ecoFriendly && (
                    <span className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      ECO-FRIENDLY
                    </span>
                  )}
                </div>
                
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                    {product.discount}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 md:p-6">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                  {product.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Variants */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant, index) => (
                      <span 
                        key={index}
                        className="text-xs md:text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100"
                      >
                        {variant}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center mb-4">
                  <span className="text-xl md:text-2xl font-bold text-gray-800">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="ml-2 text-sm md:text-base text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* WhatsApp Order Button */}
                <button
                  onClick={() => handleWhatsAppOrder(product)}
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.826 9.826 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                  </svg>
                  Order on WhatsApp
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Floating Button for Mobile */}
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          <a
            href={`https://wa.me/${whatsappNumber}`}
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

        {/* Shop Info Banner - Simplified */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-100 rounded-2xl p-6 md:p-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Why Choose Our Detergent Powders?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl mb-3">
                ⭐
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Premium Quality</h4>
              <p className="text-gray-600 text-sm">Advanced formulas for superior cleaning</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-xl mb-3">
                🌿
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Eco-Friendly</h4>
              <p className="text-gray-600 text-sm">Biodegradable & environment safe</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-xl mb-3">
                🚚
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Fast Delivery</h4>
              <p className="text-gray-600 text-sm">Quick delivery across the city</p>
            </div>
          </div>
          
          <div className="mt-8">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-orange-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.826 9.826 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
              </svg>
              Chat with us for Bulk Orders
            </a>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </div>
  );
};

export default Shop;