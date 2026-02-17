export default function Hero() {
  return (
    <div className="relative h-[500px] md:h-[600px] text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg leading-tight">
            Fresh Groceries
            <span className="block text-green-400">Delivered to You</span>
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl mx-auto drop-shadow">
            Get fresh vegetables and fruits at your doorstep
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg text-lg">
              🛍️ Start Shopping
            </button>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg text-lg">
              📦 View Deals
            </button>
          </div>

          {/* Stats/Badges */}
          <div className="flex flex-wrap gap-8 justify-center mt-12">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚚</span>
              <span className="text-white font-medium">Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <span className="text-white font-medium">100% Fresh</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="text-white font-medium">30 Min Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}