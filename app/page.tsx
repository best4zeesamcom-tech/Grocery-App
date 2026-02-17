import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    name: "Fresh Red Apples",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Fresh Tomatoes",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Green Broccoli",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Fresh Carrots",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Sweet Strawberries",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    name: "Fresh Oranges",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    name: "Bell Peppers",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop",
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <Features />

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {["All", "Fruits", "Vegetables", "Organic", "Fresh", "Exotic", "Local", "Seasonal"].map((cat) => (
            <button key={cat} className="px-6 py-2 bg-green-50 text-green-700 rounded-full hover:bg-green-100 transition font-medium whitespace-nowrap">
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Fresh Products
            </h2>
            <p className="text-gray-500 mt-2">Hand-picked fresh items for you</p>
          </div>
          <button className="text-green-600 font-medium hover:text-green-700 transition flex items-center gap-2">
            View All 
            <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>

      {/* Special Offer Banner */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-2">Get 20% Off Your First Order</h3>
          <p className="text-green-50 mb-6">Use code: WELCOME20 at checkout</p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
}