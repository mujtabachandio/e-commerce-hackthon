"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

// Static Product Data
const product = {
  id: 1,
  name: "Trenton Modular Sofa_3",
  price: "Rs. 25,000.00",
  images: ["/s1.jpg", "/s2.webp", "/s3.jfif", "/s4.jfif"], // Product preview images
  description:
    "Experience unmatched quality and design with this product. Perfect for modern homes, offering both comfort and elegance.",
};

const relatedProducts = [
  { id: 2, name: "Granite Dining Table with Dining Chair", price: "Rs. 25,000.00", image: "/s3.jfif" },
  { id: 3, name: "Outdoor Bar Table and Stool", price: "Rs. 25,000.00", image: "/s4.jfif" },
  { id: 4, name: "Plain Console with Teak Mirror", price: "Rs. 25,000.00", image: "/s2.webp" },
];

export default function StaticProductPage() {
  const [activeTab, setActiveTab] = useState<string>("description");
  const [selectedSize, setSelectedSize] = useState<string>("Medium");
  const [selectedColor, setSelectedColor] = useState<string>("White");
  const [rating, setRating] = useState<number>(3);
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]); // Main product image state

  const sizes = ["S", "M", "XL"];
  const colors = ["White", "Gray", "Beige"];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/products" className="text-gray-500 hover:text-gray-700">
            Products
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-700 font-semibold">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image with Thumbnails */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image
              src={selectedImage}
              alt={product.name}
              width={600}
              height={400}
              className="w-full rounded-lg mb-4"
            />

            {/* Small Product Preview Images */}
            <div className="flex gap-4 justify-center">
              {product.images.map((img) => (
                <Image
                  key={img}
                  src={img}
                  alt="Product Preview"
                  width={80}
                  height={80}
                  className={`w-20 h-20 rounded-lg border-2 cursor-pointer transition ${
                    selectedImage === img ? "border-black" : "border-gray-300"
                  } hover:opacity-75`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl text-gray-800 font-semibold mb-6">{product.price}</p>
            <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

            {/* Size Selector */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Select Size:</h3>
              <div className="flex gap-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedSize === size ? "bg-black text-white" : "bg-white text-gray-700"
                    } transition duration-300`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Select Color:</h3>
              <div className="flex gap-4">
                {colors.map((color) => (
                  <div
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color ? "border-black" : "border-gray-800"
                    } cursor-pointer`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Star Rating */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Rate This Product:</h3>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    onClick={() => setRating(star)}
                    className={`cursor-pointer ${
                      star <= rating ? "text-yellow-500" : "text-gray-300"
                    } transition duration-300`}
                    size={24}
                  />
                ))}
              </div>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12 text-center">
          <div className="flex justify-center border-b">
            {["description", "additional", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-6 capitalize text-sm font-semibold transition duration-300 ${
                  activeTab === tab ? "text-black border-b-2 border-black" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab === "additional" ? "Additional Information" : tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6 mx-auto max-w-3xl text-gray-700 leading-relaxed">
            {activeTab === "description" && (
              <div>
                <p>Embodying the raw, wayward spirit of rock  roll...</p>
                <p className="mt-4">The Kilburn is a lightweight piece of vintage engineering...</p>
              </div>
            )}
            {activeTab === "additional" && (
              <ul className="list-disc pl-6">
                <li>Material: Premium wood and fabric</li>
                <li>Weight: 15 kg</li>
                <li>Dimensions: 80 x 40 x 60 cm</li>
              </ul>
            )}
            {activeTab === "reviews" && (
              <div>
                <p>⭐⭐⭐⭐⭐ - Amazing product! Very comfortable and stylish.</p>
                <p>⭐⭐⭐⭐ - Good value for money. Highly recommended!</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <Link key={item.id} href={`/shop${item.id}`} className="block">
                <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-full rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-800 font-semibold mt-2">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
