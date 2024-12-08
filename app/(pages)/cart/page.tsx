"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 250000;
  const subtotal = price * quantity;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center pb-12"
        style={{ backgroundImage: "url('/shopbg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 lg:px-20 py-10 text-center text-black">
          <div className="mb-4">
            <Image
              src="/shoplogo.png"
              alt="Logo"
              width={150}
              height={50}
              className="mx-auto"
            />
          </div>
          <h2 className="text-5xl font-bold mb-2">Cart</h2>
          <p>
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            Cart
          </p>
        </div>
      </div>

      {/* Cart Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
            Shopping Cart
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 text-left">Product</th>
                  <th className="py-2 px-4 text-left">Price</th>
                  <th className="py-2 px-4 text-left">Quantity</th>
                  <th className="py-2 px-4 text-left">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4 flex items-center">
                    <Image
                      src="/main2.png"
                      alt="Asgaard sofa"
                      width={64}
                      height={64}
                      className="rounded mr-4"
                    />
                    <span className="text-gray-700 font-medium">
                      Asgaard Sofa
                    </span>
                  </td>
                  <td className="py-4 px-4">Rs. {price.toLocaleString()}</td>
                  <td className="py-4 px-4">
                    <input
                      type="number"
                      value={quantity}
                      min="1"
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-16 text-center border rounded py-1"
                    />
                  </td>
                  <td className="py-4 px-4 font-semibold">
                    Rs. {subtotal.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8">
            <Link
              href="/shop"
              className="text-black underline mb-4 md:mb-0 hover:text-gray-700"
            >
              &larr; Continue Shopping
            </Link>
            <div className="bg-gray-100 p-4 rounded-lg w-full md:w-1/3">
              <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-4 font-semibold text-lg">
                <span>Total</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <a href="/checkout" className="px-10 text-black py-2 rounded hover:bg-black hover:text-white duration-300 border-2 border-gray-400 transition">
                Check Out
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-20 py-20 bg-[#9F9F9F]">
        <div className="flex justify-between items-center">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">Free Delivery</h3>
            <p className="text-gray-600">For all oders over $50, consectetur adipim scing elit.</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">90 Days Return</h3>
            <p className="text-gray-600">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">Secure Payment</h3>
            <p className="text-gray-600">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
