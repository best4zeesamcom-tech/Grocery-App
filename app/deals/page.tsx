"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
// Deals data with discounts
const dealsData = [
  // Fruits Deals
  {
    id: 1,
    name: "Fresh Red Apples",
    price: 4.99,
    originalPrice: 7.99,
    discount: 38,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.5,
    reviews: 128,
    endsIn: "2 days",
    isFlashSale: true
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: 3.49,
    originalPrice: 5.99,
    discount: 42,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.8,
    reviews: 256,
    endsIn: "1 day",
    isFlashSale: true
  },
  {
    id: 3,
    name: "Sweet Strawberries",
    price: 5.99,
    originalPrice: 8.99,
    discount: 33,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.9,
    reviews: 312,
    endsIn: "3 days",
    isFlashSale: false
  },
  {
    id: 4,
    name: "Fresh Oranges",
    price: 4.49,
    originalPrice: 6.99,
    discount: 36,
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.6,
    reviews: 189,
    endsIn: "2 days",
    isFlashSale: false
  },
  {
    id: 5,
    name: "Fresh Mangoes",
    price: 6.99,
    originalPrice: 10.99,
    discount: 36,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.7,
    reviews: 145,
    endsIn: "4 days",
    isFlashSale: false
  },
  {
    id: 6,
    name: "Green Grapes",
    price: 4.29,
    originalPrice: 6.49,
    discount: 34,
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.4,
    reviews: 98,
    endsIn: "2 days",
    isFlashSale: true
  },

  // Vegetable Deals
  {
    id: 7,
    name: "Fresh Tomatoes",
    price: 2.99,
    originalPrice: 4.99,
    discount: 40,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.3,
    reviews: 156,
    endsIn: "1 day",
    isFlashSale: true
  },
  {
    id: 8,
    name: "Green Broccoli",
    price: 1.99,
    originalPrice: 3.49,
    discount: 43,
    image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.7,
    reviews: 203,
    endsIn: "3 days",
    isFlashSale: false
  },
  {
    id: 9,
    name: "Fresh Carrots",
    price: 2.49,
    originalPrice: 3.99,
    discount: 38,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.5,
    reviews: 167,
    endsIn: "2 days",
    isFlashSale: true
  },
  {
    id: 10,
    name: "Bell Peppers",
    price: 3.99,
    originalPrice: 5.99,
    discount: 33,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.4,
    reviews: 112,
    endsIn: "4 days",
    isFlashSale: false
  },
  {
    id: 11,
    name: "Fresh Lettuce",
    price: 1.49,
    originalPrice: 2.49,
    discount: 40,
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.2,
    reviews: 89,
    endsIn: "1 day",
    isFlashSale: true
  },
  {
    id: 12,
    name: "Red Onions",
    price: 2.29,
    originalPrice: 3.49,
    discount: 34,
    image: "https://images.unsplash.com/photo-1618512496248-a07c83eebe29?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.3,
    reviews: 76,
    endsIn: "3 days",
    isFlashSale: false
  },

  // Dairy & Eggs Deals
  {
    id: 13,
    name: "Fresh Milk 1L",
    price: 2.99,
    originalPrice: 4.49,
    discount: 33,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",
    category: "Dairy",
    rating: 4.6,
    reviews: 234,
    endsIn: "2 days",
    isFlashSale: true
  },
  {
    id: 14,
    name: "Farm Eggs (12pcs)",
    price: 3.99,
    originalPrice: 5.99,
    discount: 33,
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop",
    category: "Dairy",
    rating: 4.7,
    reviews: 189,
    endsIn: "1 day",
    isFlashSale: true
  },
  {
    id: 15,
    name: "Greek Yogurt",
    price: 4.49,
    originalPrice: 6.49,
    discount: 31,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop",
    category: "Dairy",
    rating: 4.5,
    reviews: 145,
    endsIn: "3 days",
    isFlashSale: false
  },

  // Meat Deals
  {
    id: 16,
    name: "Chicken Breast",
    price: 8.99,
    originalPrice: 12.99,
    discount: 31,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop",
    category: "Meat",
    rating: 4.8,
    reviews: 267,
    endsIn: "2 days",
    isFlashSale: true
  },
  {
    id: 17,
    name: "Beef Mince",
    price: 9.99,
    originalPrice: 14.99,
    discount: 33,
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=400&fit=crop",
    category: "Meat",
    rating: 4.6,
    reviews: 198,
    endsIn: "4 days",
    isFlashSale: false
  },

  // Bakery Deals
  {
    id: 18,
    name: "Fresh Bread",
    price: 2.49,
    originalPrice: 3.99,
    discount: 38,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
    category: "Bakery",
    rating: 4.5,
    reviews: 312,
    endsIn: "1 day",
    isFlashSale: true
  },
  {
    id: 19,
    name: "Croissants (4pcs)",
    price: 3.99,
    originalPrice: 5.99,
    discount: 33,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop",
    category: "Bakery",
    rating: 4.7,
    reviews: 156,
    endsIn: "2 days",
    isFlashSale: false
  }
];

// Deal categories
const dealCategories = [
  { name: "All Deals", count: dealsData.length },
  { name: "Flash Sale", count: dealsData.filter(d => d.isFlashSale).length },
  { name: "Fruits", count: dealsData.filter(d => d.category === "Fruits").length },
  { name: "Vegetables", count: dealsData.filter(d => d.category === "Vegetables").length },
  { name: "Dairy", count: dealsData.filter(d => d.category === "Dairy").length },
  { name: "Meat", count: dealsData.filter(d => d.category === "Meat").length },
  { name: "Bakery", count: dealsData.filter(d => d.category === "Bakery").length },
];

export default function DealsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Deals");
  const [sortBy, setSortBy] = useState("discount");
  const [showFilters, setShowFilters] = useState(false);

  // Filter deals
  const filteredDeals = dealsData.filter(deal => {
    if (selectedCategory === "All Deals") return true;
    if (selectedCategory === "Flash Sale") return deal.isFlashSale;
    return deal.category === selectedCategory;
  });

  // Sort deals
  const sortedDeals = [...filteredDeals].sort((a, b) => {
    switch (sortBy) {
      case "discount":
        return b.discount - a.discount;
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Banner - Matching Home/Shop Page */}
      <div 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=2070&auto=format&fit=crop')"
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            🔥 Limited Time Offers
          </div>
          <h1 className="text-5xl font-bold mb-4">Hot Deals & Discounts</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Save big on fresh groceries with our exclusive deals
          </p>
          
          {/* Breadcrumb */}
          <div className="flex justify-center gap-2 mt-6 text-sm">
            <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">Deals</span>
          </div>
        </div>
      </div>

      {/* Flash Sale Banner - Green Theme */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-xl shadow-lg p-6 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-4xl">⚡</span>
              <div>
                <h3 className="text-2xl font-bold">Flash Sale Ends in:</h3>
                <p className="text-green-100">Grab them before they're gone!</p>
              </div>
            </div>
            <div className="flex gap-4 text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-3xl font-bold">12</span>
                <span className="block text-sm">Hours</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-3xl font-bold">45</span>
                <span className="block text-sm">Mins</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-3xl font-bold">30</span>
                <span className="block text-sm">Secs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Mobile Filter Button */}
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden w-full mb-6 bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
        >
          <span className="font-semibold">Filters & Sorting</span>
          <span>{showFilters ? "▲" : "▼"}</span>
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Green Theme */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4">Deal Categories</h3>
              
              {/* Category List */}
              <div className="space-y-2 mb-6">
                {dealCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex justify-between items-center p-3 rounded-lg transition ${
                      selectedCategory === category.name
                        ? "bg-green-600 text-white"
                        : "hover:bg-green-50 text-gray-700"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={`text-sm ${
                      selectedCategory === category.name
                        ? "text-white"
                        : "text-gray-500"
                    }`}>
                      ({category.count})
                    </span>
                  </button>
                ))}
              </div>

              {/* Discount Range */}
              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-4">Discount Range</h3>
                <div className="space-y-3">
                  {["30%+", "40%+", "50%+"].map((discount) => (
                    <label key={discount} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-green-600 rounded focus:ring-green-500" />
                      <span>{discount} off</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              <button 
                onClick={() => {
                  setSelectedCategory("All Deals");
                  setSortBy("discount");
                }}
                className="mt-6 w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Deals Grid */}
          <div className="lg:w-3/4">
            {/* Sort Bar - Matching Shop Page */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{sortedDeals.length}</span> deals
              </p>
              
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="discount">Biggest Discount</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Deals Grid */}
            {sortedDeals.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedDeals.map((deal) => (
                  <div key={deal.id} className="relative group">
                    {/* Discount Badge - Green Theme */}
                    <div className="absolute top-2 left-2 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      -{deal.discount}%
                    </div>
                    
                    {/* Flash Sale Badge - Orange/Yellow for flash */}
                    {deal.isFlashSale && (
                      <div className="absolute top-2 right-2 z-10 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                        <span>⚡</span> Flash
                      </div>
                    )}

                    {/* Time Left Badge */}
                    <div className="absolute bottom-24 left-2 z-10 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      Ends in {deal.endsIn}
                    </div>

                    <ProductCard {...deal} />
                    
                    {/* Original Price and Rating */}
                    <div className="mt-2">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 line-through text-sm">
                          ${deal.originalPrice.toFixed(2)}
                        </span>
                        <span className="text-green-600 font-bold">
                          ${deal.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <span className="text-yellow-400">★</span>
                        <span>{deal.rating}</span>
                        <span>({deal.reviews} reviews)</span>
                      </div>
                    </div>

                    {/* Progress Bar - Limited Stock */}
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Limited stock</span>
                        <span>{Math.floor(Math.random() * 30) + 10} items left</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${Math.random() * 60 + 20}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <div className="text-6xl mb-4">🏷️</div>
                <h3 className="text-xl font-semibold mb-2">No deals found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters</p>
                <button 
                  onClick={() => {
                    setSelectedCategory("All Deals");
                    setSortBy("discount");
                  }}
                  className="text-green-600 font-semibold hover:text-green-700"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination - Green Theme */}
            {sortedDeals.length > 0 && (
              <div className="flex justify-center gap-2 mt-12">
                <button className="w-10 h-10 rounded-full bg-green-600 text-white font-semibold">
                  1
                </button>
                <button className="w-10 h-10 rounded-full bg-white shadow-sm hover:bg-green-50 transition">
                  2
                </button>
                <button className="w-10 h-10 rounded-full bg-white shadow-sm hover:bg-green-50 transition">
                  3
                </button>
                <button className="w-10 h-10 rounded-full bg-white shadow-sm hover:bg-green-50 transition">
                  →
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bundle Deals Banner - Green Theme */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-12 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">Bundle & Save More</h3>
              <p className="text-green-100 text-lg max-w-xl">
                Buy together and get up to 20% extra discount on selected items
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
                View Bundles
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Green Theme */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm p-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-green-600 text-4xl mb-4 block">🏷️</span>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Get Exclusive Deals</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter and get 20% off your first order
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}