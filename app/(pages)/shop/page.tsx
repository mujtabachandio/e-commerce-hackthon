"use client";
import Link from "next/link";
import Image from "next/image";
import { BsFillFilterSquareFill } from "react-icons/bs";

const products = [
  {
    id: 1,
    name: "Trenton modular sofa_3",
    price: "Rs. 25,000.00",
    image: "/s1.jpg", // Replace with actual image path
  },
  {
    id: 2,
    name: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
    image: "/s3.jfif",
  },
  {
    id: 3,
    name: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
    image: "/s4.jfif",
  },
  {
    id: 4,
    name: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
    image: "/s2.webp",
  },
];

export default function Shop() {
  return (
    <div>
      {/* Header Section with Background Image */}
      <div
        className="relative bg-cover bg-center pb-12"
        style={{
          backgroundImage: "url('/shopbg.jpg')", // Replace with your image path
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 lg:px-20 py-10 text-center text-black">
          {/* Logo above the heading */}
          <div>
            <Image
              src="/shoplogo.png" // Replace with your logo image path
              alt="Logo"
              width={150} // Adjust size as needed
              height={50}
              className="mx-auto" // Center the logo
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Shop</h2>
          <p className="text-black text-sm sm:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            <span className="mx-2"> &gt; </span>
            Shop
          </p>
        </div>
      </div>

      {/* Filter and Sorting Section */}
      <div className="border-t border-b bg-gray-300 border-gray-200 py-10 mt-10 mb-10">
        <div className="container mx-auto px-4 lg:px-20 flex flex-wrap justify-between items-center">
          {/* Filter */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-between sm:justify-start mb-4 sm:mb-0">
            <button
              className="text-gray-600 flex items-center gap-2"
              aria-label="Open Filter"
            >
              <BsFillFilterSquareFill size={18} /> Filter
            </button>
            <div className="h-6 border-l bg-[#FBEBB5]"></div>
            <p className="text-gray-500 text-sm sm:text-base">Showing 1–16 of 32 results</p>
          </div>

          {/* Show and Sort */}
          <div className="flex flex-wrap items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
            {/* Show Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm sm:text-base">Show</span>
              <select
                className="w-16 border bg-[#FBEBB5] text-center text-gray-700 py-1 rounded-md focus:outline-none"
                defaultValue="16"
                aria-label="Number of products to show"
              >
                <option value="16">16</option>
                <option value="32">32</option>
                <option value="48">48</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm sm:text-base">Sort by</span>
              <select
                className="border bg-[#FBEBB5] py-1 px-2 rounded-md focus:outline-none"
                defaultValue="Default"
                aria-label="Sort products"
              >
                <option value="Default">Default</option>
                <option value="PriceLowToHigh">Price: Low to High</option>
                <option value="PriceHighToLow">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 lg:px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <div className="w-full h-48 mb-4 flex justify-center items-center bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300} // Adjust size as needed
                  height={200}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <h3 className="text-gray-700 font-medium mb-2 text-sm sm:text-base">{product.name}</h3>
              <p className="text-black font-semibold text-sm sm:text-base">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center gap-4 py-12 flex-wrap">
        <Link href="/shop?page=1">
          <button
            className="px-4 py-2 border bg-[#FBEBB5] rounded-md duration-300 text-gray-700 hover:bg-yellow-400"
            aria-label="Page 1"
          >
            1
          </button>
        </Link>
        <Link href="/shop?page=2">
          <button
            className="px-4 py-2 border bg-[#FBEBB5] rounded-md duration-300 text-gray-700 hover:bg-yellow-400"
            aria-label="Page 2"
          >
            2
          </button>
        </Link>
        <Link href="/shop?page=3">
          <button
            className="px-4 py-2 border bg-[#FBEBB5] rounded-md duration-300 text-gray-700 hover:bg-yellow-400"
            aria-label="Page 3"
          >
            3
          </button>
        </Link>
        <Link href="/shop?page=next">
          <button
            className="px-4 py-2 border bg-[#FBEBB5] rounded-md duration-300 text-gray-700 hover:bg-yellow-400"
            aria-label="Next page"
          >
            Next
          </button>
        </Link>
      </div>

      {/* Info Section */}
      <div className="container mx-auto px-4 lg:px-20 py-20 bg-[#9F9F9F]">
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-center mb-4 sm:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Free Delivery</h3>
            <p className="text-gray-600 text-sm sm:text-base">For all orders over $50, consectetur adipim scing elit.</p>
          </div>
          <div className="text-center mb-4 sm:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">90 Days Return</h3>
            <p className="text-gray-600 text-sm sm:text-base">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Secure Payment</h3>
            <p className="text-gray-600 text-sm sm:text-base">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
