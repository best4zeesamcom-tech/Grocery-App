"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Link from "next/link";

import Footer from "@/components/Footer";
// All products data
const allProducts = [
  // Fruits
  {
    id: 1,
    name: "Fresh Red Apples",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.5,
    reviews: 128,
    isOrganic: true
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.8,
    reviews: 256,
    isOrganic: true
  },
  {
    id: 5,
    name: "Sweet Strawberries",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.9,
    reviews: 312,
    isOrganic: false
  },
  {
    id: 7,
    name: "Fresh Oranges",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.6,
    reviews: 189,
    isOrganic: true
  },
  {
    id: 13,
    name: "Fresh Mangoes",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.7,
    reviews: 145,
    isOrganic: false
  },
  {
    id: 14,
    name: "Green Grapes",
    price: 4.29,
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.4,
    reviews: 98,
    isOrganic: true
  },

  // Vegetables
  {
    id: 3,
    name: "Fresh Tomatoes",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.3,
    reviews: 156,
    isOrganic: true
  },
  {
    id: 4,
    name: "Green Broccoli",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.7,
    reviews: 203,
    isOrganic: true
  },
  {
    id: 6,
    name: "Fresh Carrots",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.5,
    reviews: 167,
    isOrganic: true
  },
  {
    id: 8,
    name: "Bell Peppers",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.4,
    reviews: 112,
    isOrganic: false
  },
  {
    id: 9,
    name: "Fresh Lettuce",
    price: 1.49,
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.2,
    reviews: 89,
    isOrganic: true
  },
  {
    id: 10,
    name: "Red Onions",
    price: 2.29,
    image: "https://images.unsplash.com/photo-1618512496248-a07c83eebe29?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.3,
    reviews: 76,
    isOrganic: false
  },
  {
    id: 11,
    name: "Fresh Potatoes",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.1,
    reviews: 234,
    isOrganic: false
  },
  {
    id: 12,
    name: "Fresh Garlic",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1615477553349-4c2c4f0b4b4b?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.6,
    reviews: 145,
    isOrganic: true
  },
  {
    id: 15,
    name: "Cucumber",
    price: 1.79,
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.2,
    reviews: 67,
    isOrganic: true
  },
  {
    id: 16,
    name: "Fresh Spinach",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1576045057999-568f588f82fb?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.5,
    reviews: 98,
    isOrganic: true
  }
];

// Categories with counts
const categories = [
  { name: "All Products", count: allProducts.length },
  { name: "Fruits", count: allProducts.filter(p => p.category === "Fruits").length },
  { name: "Vegetables", count: allProducts.filter(p => p.category === "Vegetables").length },
  { name: "Organic", count: allProducts.filter(p => p.isOrganic).length },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter products based on category
  const filteredProducts = allProducts.filter(product => {
    if (selectedCategory === "All Products") return true;
    if (selectedCategory === "Organic") return product.isOrganic;
    return product.category === selectedCategory;
  }).filter(product => product.price <= priceRange[1]);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Banner */}
      <div 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop')"
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Shop Fresh Groceries</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover our wide selection of fresh fruits and vegetables
          </p>
          
          {/* Breadcrumb */}
          <div className="flex justify-center gap-2 mt-6 text-sm">
            <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">Shop</span>
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
          {/* Sidebar Filters */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              
              {/* Category List */}
              <div className="space-y-2 mb-6">
                {categories.map((category) => (
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

              {/* Price Range Filter */}
              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-4">Price Range</h3>
                <div className="space-y-4">
                  <input 
                    type="range" 
                    min="0" 
                    max="10" 
                    step="0.5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseFloat(e.target.value)])}
                    className="w-full accent-green-600"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>Up to ${priceRange[1].toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Organic Filter */}
              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-4">Other Filters</h3>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                    checked={selectedCategory === "Organic"}
                    onChange={(e) => setSelectedCategory(e.target.checked ? "Organic" : "All Products")}
                  />
                  <span>Organic Only</span>
                </label>
              </div>

              {/* Reset Button */}
              <button 
                onClick={() => {
                  setSelectedCategory("All Products");
                  setSortBy("featured");
                  setPriceRange([0, 10]);
                }}
                className="mt-6 w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort Bar */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{sortedProducts.length}</span> products
              </p>
              
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            {/* Products */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="relative">
                    {product.isOrganic && (
                      <span className="absolute top-2 left-2 z-10 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        🌱 Organic
                      </span>
                    )}
                    <ProductCard {...product} />
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                      <span className="text-yellow-400">★</span>
                      <span>{product.rating}</span>
                      <span>({product.reviews} reviews)</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <div className="text-6xl mb-4">😕</div>
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters</p>
                <button 
                  onClick={() => {
                    setSelectedCategory("All Products");
                    setSortBy("featured");
                    setPriceRange([0, 10]);
                  }}
                  className="text-green-600 font-semibold hover:text-green-700"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {sortedProducts.length > 0 && (
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
      </div>
      <Footer />
    </div>
  );
}