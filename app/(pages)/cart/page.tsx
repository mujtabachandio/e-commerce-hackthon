"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingCart, Trash } from "lucide-react";
import { motion } from "framer-motion";

interface CartItem {
  name: string;
  price: string;
  image: string;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (name: string) => {
    const updatedCart = cartItems.filter((item) => item.name !== name);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (name: string, increment: boolean) => {
    const updatedCart = cartItems.map((item) =>
      item.name === name
        ? {
            ...item,
            quantity: increment
              ? item.quantity + 1
              : item.quantity > 1
              ? item.quantity - 1
              : 1,
          }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseInt(item.price) * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-black">
          Your Shopping Cart
        </h1>
        <div className="text-[#9F9F9F] mt-2 flex justify-center items-center">
          <ShoppingCart className="w-6 h-6 mr-2" />
          <span className="text-lg font-semibold">
            {cartItems.length} items in cart
          </span>
        </div>
      </div>

      {cartItems.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.name}
                      className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-all"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={150}
                        height={150}
                        className="rounded-lg mb-4"
                      />
                      <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                      <p className="text-gray-500 mt-1">RS. {item.price}</p>
      
                      <div className="flex items-center gap-4 mt-4">
                        <button
                          onClick={() => handleQuantityChange(item.name, false)}
                          className="bg-gray-200 text-gray-700 font-bold px-4 py-2 rounded-lg hover:bg-gray-300 focus:ring focus:ring-gray-400 transition"
                        >
                          -
                        </button>
                        <span className="text-lg font-bold">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.name, true)}
                          className="bg-gray-200 text-gray-700 font-bold px-4 py-2 rounded-lg hover:bg-gray-300 focus:ring focus:ring-gray-400 transition"
                        >
                          +
                        </button>
                      </div>
      
                      <button
                        onClick={() => handleRemoveItem(item.name)}
                        className="flex bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:ring focus:ring-red-300 transition mt-4"
                      >
                        <Trash />
                        Remove
                      </button>
                    </motion.div>
                  ))}
                </div>
      
                <div className=" text-black p-6 rounded-lg shadow-lg mt-8">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-extrabold">Total Price:</span>
                    <span className="text-3xl font-bold text-[#9F9FA8]">RS. {totalPrice}</span>
                  </div>
      
                  <motion.button
                    onClick={() => window.location.href = "/checkout"}
                    className="w-full bg-black text-white py-4 rounded-lg font-bold text-lg border-2 border-[#9F9FA8] hover:border-[#9f9fa8] hover:bg-transparent focus:ring hover:text-black duration-300"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    Proceed to Checkout
                  </motion.button>
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-white">Your cart is empty.</p>
                <p className="text-lg text-gray-400 mt-2">
                  Add some items to see them here.
                </p>
                <button
                  className="mt-6 bg-teal-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-teal-700 focus:ring focus:ring-teal-300 transition"
                  onClick={() => window.location.href = "/shop"}
                >
                  Back to Shop
                </button>
              </div>
            )}
    </div>
  );
}
