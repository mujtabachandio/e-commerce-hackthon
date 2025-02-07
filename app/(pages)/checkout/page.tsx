"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // State to store cart items
  const [showPopup, setShowPopup] = useState(false); // State for showing pop-up
  const [isFormValid, setIsFormValid] = useState(false); // State to track form validity

  interface CartItem {
    _id: number;
    name: string;
    price: string;
    quantity: number;
  }

  useEffect(() => {
    // Fetching cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  // Calculate the total price dynamically
  const totalPrice = cartItems.reduce(
    (total, item) => total + parseInt(item.price) * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    const form = document.querySelector('form');
    const formData = new FormData(form as HTMLFormElement);

    const orderData = {
      _type: 'order',
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      address: formData.get('address'),
      city: formData.get('city'),
      zipCode: formData.get('zipCode'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      cartItems: cartItems.map(item => ({
        _type: "reference",
        _ref: item._id,
      })),
      total: totalPrice,
      status: "pending",
    };

    try {
      await client.create(orderData);
      console.log("Order created successfully:", orderData);

      // Clear the cart and show the pop-up
      localStorage.removeItem("cart");
      setCartItems([]);
      setShowPopup(true);

      // Optionally, you can hide the pop-up after a few seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 5000); // 5 seconds
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handleInputChange = () => {
    // Check if all required inputs are filled and update the form validity state
    const form = document.querySelector("form");
    if (form && form.checkValidity()) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

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
              <form onChange={handleInputChange}>
                <div className="mb-4">
                  <label className="block text-gray-700">First Name</label>
                  <input
                    required
                    type="text"
                    name="firstName"
                    className="w-full p-3 border rounded mt-1"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    required
                    type="text"
                    name="lastName"
                    className="w-full p-3 border rounded mt-1"
                    placeholder="Last Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Country / Region</label>
                  <select required className="w-full p-3 border rounded mt-1">
                    <option value="">Select a Country</option>
                    <option>Pakistan</option>
                    <option>USA</option>
                    <option>UAE</option>
                    <option>Afghanistan</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Street Address</label>
                  <input
                    required
                    type="text"
                    name="address"
                    className="w-full p-3 border rounded mt-1"
                    placeholder="Street Address"
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">City</label>
                    <input
                      required
                      type="text"
                      name="city"
                      className="w-full p-3 border rounded mt-1"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">ZIP Code</label>
                    <input
                      required
                      type="text"
                      name="zipCode"
                      className="w-full p-3 border rounded mt-1"
                      placeholder="ZIP Code"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    className="w-full p-3 border rounded mt-1"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
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
                {cartItems.map((item) => (
                  <div key={item.name} className="flex justify-between mb-2">
                    <span>{item.name} x {item.quantity}</span>
                    <span>Rs. {parseInt(item.price) * item.quantity}</span>
                  </div>
                ))}
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>Rs. {totalPrice}</span>
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
                      id="cash"
                      name="paymentMethod"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={() => setPaymentMethod("cash")}
                      className="mr-2"
                    />
                    <label htmlFor="cash" className="text-gray-700">
                      Cash On Delivery
                    </label>
                    {paymentMethod === "cash" && (
                      <p className="text-gray-600 text-sm mt-1">
                        Pay with cash on delivery. Your order will be shipped once the payment is made.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                type="button"
                disabled={!isFormValid}
                className={`w-full bg-black text-white hover:bg-gray-700 duration-300 font-bold py-3 rounded ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={handlePlaceOrder}
                title={!isFormValid ? "Please fill all required fields" : "Good to go!"} 
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up for Order Confirmation */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-2xl font-semibold mb-4">Thank You for Shopping!</h2>
            <div className="flex justify-center items-center">
              <div className="felx justify-center">
                <Image src="/tick.gif" alt="Checkmark" width={150} height={150} />
              </div>
            </div>
            <p className="text-gray-700">Your order has been placed successfully.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Horizontal Headings Section */}
      <div className="container mx-auto px-4 lg:px-20 py-20 bg-[#9F9F9F]">
        <div className="flex justify-between items-center">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">Free Delivery</h3>
            <p className="text-gray-600">For all orders over $50, consectetur adipim scing elit.</p>
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