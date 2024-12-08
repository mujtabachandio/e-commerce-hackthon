"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Page = () => {
  const [mainImage, setMainImage] = useState("/main2.png");

  const changeImage = (src: string) => {
    setMainImage(src);
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        {/* Breadcrumbs */}
        <div className="flex items-center mb-6">
          <Link href="/" className="text-black hover:underline">
            Home
          </Link>
          <FaArrowRight className="mx-4" />
          <Link href="/shop" className="text-black hover:underline">
            Shop
          </Link>
          <FaArrowRight className="mx-4" />
          <h2 className="mx-2 text-gray-500 text-2xl">|</h2>
          <h2 className="text-gray-800 font-semibold">Asgaard Sofa</h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <Image
              src={mainImage}
              alt="Product"
              width={1080}
              height={720}
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {["/pc4.jpg", "/main2.png", "/pc3.jfif"].map((image, index) => (
                <button key={index} onClick={() => changeImage(image)}>
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    width={100}
                    height={100}
                    className="object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">Asgaard Sofa</h2>
            <p className="text-gray-600 mb-4">SKU: ASG1000</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">$599.99</span>
              <span className="text-gray-500 line-through">$799.99</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6">
              The Asgaard Sofa offers unmatched comfort and elegance with its plush
              cushions and sleek modern design. Perfect for any living room, it
              combines luxury with functionality.
            </p>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  defaultValue="1"
                  className="w-16 text-center rounded-md border-2 border-black"
                />
              </div>
              <button className="flex gap-2 items-center text-black px-6 py-2 rounded-lg duration-300 border-2 border-black hover:bg-black hover:text-white">
                Add to Cart
              </button>
            </div>

            {/* Share Section */}
            <section className="flex items-center">
              <h3 className="text-lg font-medium mr-4">Share:</h3>
              <div className="flex space-x-2">
                <FaFacebook className="text-black cursor-pointer" />
                <FaLinkedin className="text-black cursor-pointer" />
                <FaTwitter className="text-black cursor-pointer" />
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Related Products</h2>
        <div className="flex flex-wrap -mx-4 justify-center">
          {[
            { id: 1, title: "Nordic Chair", price: "$399.99", image: "/pc1.webp" },
            { id: 2, title: "Ergonomic Chair", price: "$299.99", image: "/pc2.jpg" },
            { id: 3, title: "Classic Sofa", price: "$699.99", image: "/pc3.jfif" },
          ].map((product) => (
            <div
              key={product.id}
              className="w-full md:w-1/3 px-4 mb-6 flex justify-center"
            >
              <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-2">{product.price}</p>
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
