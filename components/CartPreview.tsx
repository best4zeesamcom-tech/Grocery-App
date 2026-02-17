"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useState } from "react";

export default function CartPreview() {
  const { cart, getCartTotal, getCartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  if (cart.length === 0) return null;

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
      >
        🛒
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {getCartCount()}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border p-4">
          <h3 className="font-bold mb-3">Cart ({getCartCount()} items)</h3>
          
          {cart.slice(0, 3).map((item) => (
            <div key={item.id} className="flex items-center gap-2 py-2 border-b">
              <img src={item.image} alt={item.name} className="w-10 h-10 object-contain" />
              <div className="flex-1">
                <p className="text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}

          {cart.length > 3 && (
            <p className="text-xs text-gray-500 mt-2">+{cart.length - 3} more items</p>
          )}

          <div className="flex justify-between font-bold mt-3">
            <span>Total:</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>

          <Link 
            href="/cart"
            className="block text-center bg-green-600 text-white py-2 rounded-lg mt-3 hover:bg-green-700"
            onClick={() => setIsOpen(false)}
          >
            View Cart
          </Link>
        </div>
      )}
    </div>
  );
}