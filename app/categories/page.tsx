"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

import Footer from "@/components/Footer";
// All categories data with consistent styling
const categoriesData = [
  {
    id: 1,
    name: "Fresh Fruits",
    image: "https://images.unsplash.com/photo-1619566621402-2b2c1b3b4b1b?w=600&h=400&fit=crop",
    itemCount: 45,
    description: "Sweet, juicy & naturally delicious",
    icon: "🍎"
  },
  {
    id: 2,
    name: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1597362921503-9c9f3b3b9b1b?w=600&h=400&fit=crop",
    itemCount: 62,
    description: "Farm-fresh greens & veggies",
    icon: "🥬"
  },
  {
    id: 3,
    name: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&h=400&fit=crop",
    itemCount: 28,
    description: "Fresh dairy from local farms",
    icon: "🥛"
  },
  {
    id: 4,
    name: "Meat & Poultry",
    image: "https://images.unsplash.com/photo-1602470520401-d6a2f6e6b5b1?w=600&h=400&fit=crop",
    itemCount: 34,
    description: "Premium quality fresh meat",
    icon: "🍗"
  },
  {
    id: 5,
    name: "Bakery",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    itemCount: 23,
    description: "Freshly baked daily",
    icon: "🥖"
  },
  {
    id: 6,
    name: "Beverages",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=400&fit=crop",
    itemCount: 51,
    description: "Juices, drinks & more",
    icon: "🧃"
  },
  {
    id: 7,
    name: "Snacks",
    image: "https://images.unsplash.com/photo-1621939514649-280e2c25f60b?w=600&h=400&fit=crop",
    itemCount: 67,
    description: "Delicious snacks for every mood",
    icon: "🍪"
  },
  {
    id: 8,
    name: "Organic",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=600&h=400&fit=crop",
    itemCount: 39,
    description: "100% certified organic",
    icon: "🌱"
  },
  {
    id: 9,
    name: "Seafood",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&h=400&fit=crop",
    itemCount: 26,
    description: "Fresh catch from the sea",
    icon: "🐟"
  },
  {
    id: 10,
    name: "Frozen Foods",
    image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=600&h=400&fit=crop",
    itemCount: 43,
    description: "Convenient frozen meals",
    icon: "❄️"
  },
  {
    id: 11,
    name: "Pantry Staples",
    image: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=600&h=400&fit=crop",
    itemCount: 58,
    description: "Rice, oils, spices & more",
    icon: "🍚"
  },
  {
    id: 12,
    name: "Personal Care",
    image: "https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?w=600&h=400&fit=crop",
    itemCount: 32,
    description: "Natural care products",
    icon: "🧴"
  }
];

// Sample products for each category
const categoryProducts: { [key: string]: any[] } = {
  "Fresh Fruits": [
    {
      id: 101,
      name: "Fresh Red Apples",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 128
    },
    {
      id: 102,
      name: "Organic Bananas",
      price: 3.49,
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 256
    },
    {
      id: 103,
      name: "Sweet Strawberries",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 312
    },
    {
      id: 104,
      name: "Fresh Oranges",
      price: 4.49,
      image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 189
    }
  ],
  "Fresh Vegetables": [
    {
      id: 201,
      name: "Fresh Tomatoes",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop",
      rating: 4.3,
      reviews: 156
    },
    {
      id: 202,
      name: "Green Broccoli",
      price: 1.99,
      image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 203
    },
    {
      id: 203,
      name: "Fresh Carrots",
      price: 2.49,
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 167
    },
    {
      id: 204,
      name: "Fresh Spinach",
      price: 2.49,
      image: "https://images.unsplash.com/photo-1576045057999-568f588f82fb?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 98
    }
  ]
};

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Filter categories based on search
  const filteredCategories = categoriesData.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get products for selected category
  const selectedCategoryData = categoriesData.find(c => c.name === selectedCategory);
  const products = selectedCategory ? categoryProducts[selectedCategory] || [] : [];

  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
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

      {/* Header Banner - Matching Shop Page */}
      <div 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop')"
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Shop by Category</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Browse through our wide selection of fresh products
          </p>
          
          {/* Breadcrumb */}
          <div className="flex justify-center gap-2 mt-6 text-sm">
            <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">Categories</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {!selectedCategory ? (
          /* Categories Grid View */
          <>
            {/* Search and Filter Bar - Matching Shop Page Style */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-8 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <span className="absolute left-4 top-3 text-gray-400">🔍</span>
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <select className="px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>All Categories</option>
                <option>Most Popular</option>
                <option>New Arrivals</option>
              </select>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    {/* Overlay with icon */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-2xl">
                      {category.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{category.name}</h3>
                      <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full">
                        {category.itemCount} items
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">{category.description}</p>
                    
                    {/* View Button */}
                    <button className="w-full bg-gray-50 text-gray-600 py-2 rounded-lg font-medium group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                      Browse Category →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredCategories.length === 0 && (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No categories found</h3>
                <p className="text-gray-500 mb-4">Try searching with different keywords</p>
                <button 
                  onClick={() => setSearchTerm("")}
                  className="text-green-600 font-semibold hover:text-green-700"
                >
                  Clear search
                </button>
              </div>
            )}
          </>
        ) : (
          /* Category Detail View */
          <div>
            {/* Back Button */}
            <button
              onClick={() => setSelectedCategory(null)}
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition mb-6 group"
            >
              <span className="group-hover:-translate-x-1 transition">←</span> 
              Back to Categories
            </button>

            {/* Category Header - Matching Shop Page Style */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center text-4xl">
                  {selectedCategoryData?.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedCategory}</h2>
                      <p className="text-gray-600">{selectedCategoryData?.description}</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="bg-green-100 text-green-600 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap">
                        {selectedCategoryData?.itemCount} Products
                      </span>
                      <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap">
                        Free Delivery
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sort Bar - Matching Shop Page */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{sortedProducts.length}</span> products
              </p>
              
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sortedProducts.map((product) => (
                    <div key={product.id}>
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

                {/* View All Button */}
                <div className="text-center mt-12">
                  <Link
                    href={`/shop?category=${selectedCategory}`}
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition font-semibold shadow-lg hover:shadow-xl"
                  >
                    View All {selectedCategory}
                    <span>→</span>
                  </Link>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-xl font-semibold mb-2">No products yet</h3>
                <p className="text-gray-500 mb-4">Products in this category coming soon</p>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-green-600 font-semibold hover:text-green-700"
                >
                  Browse other categories
                </button>
              </div>
            )}
          </div>
        )}

        {/* Featured Banner - Matching Home Page Style */}
        {!selectedCategory && (
          <div className="mt-16 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-12 text-white shadow-xl">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h3>
              <p className="text-green-50 mb-6 text-lg">
                We have over 500+ products across all categories. Try searching or contact our support.
              </p>
              <Link 
                href="/shop"
                className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Browse All Products →
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}