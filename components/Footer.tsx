import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">🥬 nectar</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop shop for fresh groceries delivered to your doorstep.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-400 transition text-2xl">📱</a>
              <a href="#" className="hover:text-green-400 transition text-2xl">📘</a>
              <a href="#" className="hover:text-green-400 transition text-2xl">📸</a>
              <a href="#" className="hover:text-green-400 transition text-2xl">🐦</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-green-400 transition">Home</Link></li>
              <li><Link href="/shop" className="hover:text-green-400 transition">Shop</Link></li>
              <li><Link href="/categories" className="hover:text-green-400 transition">Categories</Link></li>
              <li><Link href="/deals" className="hover:text-green-400 transition">Today's Deals</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-green-400 transition">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-green-400 transition">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-green-400 transition">Shipping Policy</Link></li>
              <li><Link href="/returns" className="hover:text-green-400 transition">Returns & Refunds</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>123 Green Street, Karachi, Pakistan</span>
              </li>
              <li className="flex items-start gap-3">
                <span>📞</span>
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-start gap-3">
                <span>✉️</span>
                <span>support@nectargrocery.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-10 border-b border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-white text-xl font-semibold mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-4">Get updates on new products and special offers</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
              />
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 Nectar Grocery. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-green-400 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-green-400 transition">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-green-400 transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}