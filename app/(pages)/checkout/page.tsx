"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("bank");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section with Background Image */}
      <div
        className="relative bg-cover bg-center pb-12"
        style={{ backgroundImage: "url('/shopbg.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 lg:px-20 py-10 text-center text-white">
          {/* Logo */}
          <div className="mb-4">
            <Image
              src="/shoplogo.png"
              alt="Logo"
              width={150}
              height={50}
              className="mx-auto"
            />
          </div>

          {/* Title and Breadcrumb */}
          <h2 className="text-4xl font-bold mb-2">Checkout</h2>
          <p>
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            Checkout
          </p>
        </div>
      </div>

      {/* Checkout Form Section */}
      <div className="flex justify-center py-8 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Billing Details Form */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded mt-1"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded mt-1"
                    placeholder="Last Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Country / Region</label>
                  <select className="w-full p-3 border rounded mt-1">
                    <option>Pakistan</option>
                    <option>USA</option>
                    <option>UAE</option>
                    <option>Afghanistan</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Street Address</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded mt-1"
                    placeholder="Street Address"
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">City</label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded mt-1"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">ZIP Code</label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded mt-1"
                      placeholder="ZIP Code"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone</label>
                  <input
                    type="tel"
                    className="w-full p-3 border rounded mt-1"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email Address</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded mt-1"
                    placeholder="Email Address"
                  />
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Order</h2>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span>Asgaard Sofa x 1</span>
                  <span>Rs. 250,000.00</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>Rs. 250,000.00</span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">Payment Method</h3>
                <div className="space-y-2">
                  <div>
                    <input
                      type="radio"
                      id="bank"
                      name="paymentMethod"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={() => setPaymentMethod("bank")}
                      className="mr-2"
                    />
                    <label htmlFor="bank" className="text-gray-700">
                      Direct Bank Transfer
                    </label>
                    {paymentMethod === "bank" && (
                      <p className="text-gray-600 text-sm mt-1">
                        Make your payment directly into our bank account. Your order
                        will not be shipped until funds have cleared.
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="mr-2"
                    />
                    <label htmlFor="cod" className="text-gray-700">
                      Cash on Delivery
                    </label>
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                type="button"
                className="w-full bg-black text-white hover:bg-gray-700 duration-300 font-bold py-3 rounded"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Horizontal Headings Section */}
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

export default Checkout;
