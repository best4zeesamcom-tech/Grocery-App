"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useState } from "react";
import SignInModal from "./SignInModal";
import { useAuth } from "@/context/AuthContext";
export default function Navbar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
const { user, logout } = useAuth();
  return (
    <>
      <div className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-50">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-bold text-green-600 cursor-pointer">🥬 nectar</h1>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-green-600 transition font-medium"
          >
            Home
          </Link>
          <Link 
            href="/shop" 
            className="text-gray-600 hover:text-green-600 transition font-medium"
          >
            Shop
          </Link>
          <Link 
            href="/categories" 
            className="text-gray-600 hover:text-green-600 transition font-medium"
          >
            Categories
          </Link>
          <Link 
            href="/deals" 
            className="text-gray-600 hover:text-green-600 transition font-medium"
          >
            Deals
          </Link>
        </div>

        {/* Right Side - Cart and Sign In */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <span className="text-2xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          
          {user ? (
  <div className="hidden md:flex items-center gap-3">
    <span className="text-sm text-gray-700">
      👋 Hello, {user.name.split(' ')[0]}
    </span>
    <button 
      onClick={logout}
      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition font-medium text-sm"
    >
      Logout
    </button>
  </div>
) : (
  <button 
    onClick={() => setIsSignInModalOpen(true)}
    className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-medium"
  >
    Sign In
  </button>
)}

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white shadow-lg p-6 md:hidden border-t">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-green-600 transition font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/shop" 
                className="text-gray-600 hover:text-green-600 transition font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                href="/categories" 
                className="text-gray-600 hover:text-green-600 transition font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                href="/deals" 
                className="text-gray-600 hover:text-green-600 transition font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Deals
              </Link>
              <button 
                onClick={() => {
                  setIsSignInModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-medium w-full"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Sign In Modal */}
      <SignInModal 
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
      />
    </>
  );
}