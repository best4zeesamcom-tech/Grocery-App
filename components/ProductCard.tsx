"use client";

import { useCart } from "@/context/CartContext";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
}: ProductProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition border border-gray-100">
      <div className="h-48 flex items-center justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
      <p className="text-green-600 font-bold text-xl mt-1">${price.toFixed(2)}</p>

      <button 
        onClick={handleAddToCart}
        className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium"
      >
        🛒 Add To Cart
      </button>
    </div>
  );
}