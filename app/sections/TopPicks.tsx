"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  price: string;
  imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageSrc }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <Image
        src={imageSrc}
        alt={title}
        width={192}
        height={192}
        className="w-48 h-48 object-cover mb-4"
      />
      <h3 className="text-gray-800 text-lg font-medium">{title}</h3>
      <p className="text-gray-700 font-semibold">{price}</p>
    </div>
  );
};

const TopPicks: React.FC = () => {
  const products = [
    {
      title: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      imageSrc: "/mainp1.png",
    },
    {
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      imageSrc: "/mainp2.png",
    },
    {
      title: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      imageSrc: "/mainp3.png",
    },
    {
      title: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      imageSrc: "/mainp4.png",
    },
  ];

  return (
    <div className="bg-gray-50 py-24 px-6">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-16 mb-12">
        {/* Left Card */}
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/table1.png"
            alt="Side Table"
            width={192}
            height={192}
            className="w-48 h-48 object-cover"
          />
          <h3 className="text-gray-800 text-lg font-semibold">Side table</h3>
          <Link href="/shop">
            <span className="text-gray-700 hover:text-gray-900 underline">
              View More
            </span>
          </Link>
        </div>

        {/* Right Card */}
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/table2.png"
            alt="Side Table"
            width={200}
            height={200}
            className="w-72 h-48 object-cover"
          />
          <h3 className="text-gray-800 text-lg font-semibold">Side table</h3>
          <Link href="/shop">
            <span className="text-gray-700 hover:text-gray-900 underline">
              View More
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Top Picks For You
        </h2>
        <p className="text-gray-600">
          Find a bright idea to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>

      {/* View More */}
      <div className="flex justify-center mt-8">
        <Link href="/shop">
          <span className="text-gray-800 hover:text-gray-600 underline font-medium">
            View More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default TopPicks;
