"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; // Import client
import imageUrlBuilder from '@sanity/image-url'; // Import imageUrlBuilder

const builder = imageUrlBuilder(client);

function urlFor(source: { asset: { _ref: string; _type: string } }): ReturnType<typeof builder.image> {
  return builder.image(source);
}

// Define types for Product
interface Product {
  _id: string;
  name: string;
  price: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  }; // Make sure to use the correct type for the image reference
}

// Fetch products from Sanity
const fetchProducts = async (): Promise<Product[]> => {
  const query = "*[_type == 'product']";
  const products = await client.fetch(query);
  return products;
};

export default function Shop() {
  // Define state with the Product type
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch data on mount
  useEffect(() => {
    const getData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getData();
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center pb-12"
        style={{
          backgroundImage: "url('/shopbg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 lg:px-20 py-10 text-center text-black">
          <h2 className="text-5xl font-bold mb-2">Shop</h2>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 lg:px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product._id} href={`/shop/${product._id}`}>
              <div className="text-center cursor-pointer hover:shadow-lg p-4">
                <div className="w-full h-48 mb-4 flex justify-center items-center bg-gray-100">
                  <Image
                    src={urlFor(product.image).width(300).height(200).url()} // Fetch image URL correctly
                    alt={product.name}
                    width={300}
                    height={200}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <h3 className="text-gray-700 font-medium mb-2">{product.name}</h3>
                <p className="text-black font-semibold">{product.price}</p>
              </div>
            </Link>
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

      {/* Extra Section */}
      <div className="container mx-auto px-4 py-12 mt-16 bg-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Free Delivery</h3>
            <p className="text-gray-600">For all orders over $50, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">90 Days Return</h3>
            <p className="text-gray-600">If goods have problems, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Secure Payment</h3>
            <p className="text-gray-600">100% secure payment, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-16"></div>
    </div>
  );
}
