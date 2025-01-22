"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { FiFilter, FiGrid, FiList } from "react-icons/fi"; // Import icons

const builder = imageUrlBuilder(client);

function urlFor(source: { asset: { _ref: string } }): string {
  return builder.image(source).url() || "/default-image.jpg";
}

interface Product {
  _id: string;
  name: string;
  price: string;
  image: {
    asset: {
      _ref: string;
    };
  };
}

const fetchProducts = async (): Promise<Product[]> => {
  const query = "*[_type == 'product']";
  return await client.fetch(query);
};

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid"); // State for view mode
  const [sortOption, setSortOption] = useState<string>("Default"); // State for sorting
  const [displayCount, setDisplayCount] = useState<number>(16); // State for product count

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getData();
  }, []);

  // Handle Sorting Logic
  useEffect(() => {
    if (sortOption === "Price: Low to High") {
      setProducts((prevProducts) =>
        [...prevProducts].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      );
    } else if (sortOption === "Price: High to Low") {
      setProducts((prevProducts) =>
        [...prevProducts].sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      );
    } else {
      // Reset to default fetch if Default is selected
      const fetchDefault = async () => {
        const data = await fetchProducts();
        setProducts(data);
      };
      fetchDefault();
    }
  }, [sortOption]);

  // Handle Display Count Change
  const handleDisplayCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) setDisplayCount(value);
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center pb-12"
        style={{ backgroundImage: "url('/shopbg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 lg:px-20 py-10 text-center text-black">
          <h2 className="text-5xl font-bold mb-2">Shop</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-20 py-6">
        {/* Filter Bar */}
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-md">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-black">
              <FiFilter size={20} />
              <span>Filter</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md ${
                viewMode === "grid" ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              <FiGrid size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md ${
                viewMode === "list" ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              <FiList size={20} />
            </button>
          </div>

          <p className="text-gray-700">
            Showing 1–{Math.min(displayCount, products.length)} of {products.length} results
          </p>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Show</span>
              <input
                type="number"
                value={displayCount}
                onChange={handleDisplayCountChange}
                className="w-16 border rounded-md text-center"
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Sort by</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border rounded-md p-1"
              >
                <option value="Default">Default</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div
          className={`grid ${
            viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"
          } gap-8 mt-8`}
        >
          {products.slice(0, displayCount).map((product) => (
            <Link key={product._id} href={`/shop/${product._id}`}>
              <div className="text-center cursor-pointer hover:shadow-lg p-4">
                <div className="w-full h-48 mb-4 flex justify-center items-center bg-gray-100">
                  <Image
                    src={urlFor(product.image)}
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
      </div>
      
    </div>
  );
}
