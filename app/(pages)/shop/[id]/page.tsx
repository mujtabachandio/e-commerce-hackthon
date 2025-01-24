"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const builder = imageUrlBuilder(client);


function urlFor(source: { asset: { _ref: string } }): string {
  return source?.asset?._ref ? builder.image(source).url() : "/default-image.jpg";
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
  description: string;
  images: { _id: string; asset: { _ref: string } }[];
  sizes?: string[];
  colors?: string[];
  sku: string;
  category: string;
  tags: string[];
  additionalInfo?: string;
}

const fetchProduct = async (id: string): Promise<Product | null> => {
  const query = `*[_type == 'product' && _id == '${id}'][0]`;
  return await client.fetch(query);
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProduct(params.id);
      if (data) {
        setProduct(data);
        setSelectedImage(
          data.images?.[0] ? urlFor(data.images[0]) : urlFor(data.image)
        );
      } else {
        notFound();
      }
    };
    getData();
  }, [params.id]);

  const handleAddToCart = () => {
    if (!product) return;

    // Fetch existing cart data
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if the product already exists in the cart
    const existingItem = cart.find((item: { name: string }) => item.name === product.name);

    if (existingItem) {
      // If the product exists, increase its quantity
      const updatedCart = cart.map((item: { name: string; quantity: number }) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // Add new product to the cart
      const cartItem = {
        name: product.name,
        price: product.price,
        image: urlFor(product.image),
        quantity: 1,
      };
      const updatedCart = [...cart, cartItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    alert(`${product.name} added to cart.`);
  };

const [activeTab, setActiveTab] = useState("description");
if (!product) return null;

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <nav className="text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/shop" className="text-gray-500 hover:text-gray-700">Products</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-700 font-semibold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#fbebb5] p-4">
            <Image
              src={selectedImage}
              alt={product.name}
              width={600}
              height={400}
              className="w-full rounded-lg mb-4"
            />
            <div className="flex gap-4 justify-center">
              {product.images?.map((img) => (
                <Image
                  key={img._id}
                  src={urlFor(img)}
                  alt="Product Thumbnail"
                  width={80}
                  height={80}
                  className={`w-20 h-20 rounded-lg border-2 cursor-pointer ${
                    selectedImage === urlFor(img)
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(urlFor(img))}
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl text-gray-400 font-semibold mb-2">
              RS. {product.price}
            </p>
            <p className="text-2xl mb-2 flex items-center gap-2">
  {/* Star Rating */}
  <span className="flex text-yellow-400">
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
  </span>
  
  {/* Separator */}
  <span className="text-gray-400 text-lg">|</span>
  
  {/* Reviews Text */}
  <span className="text-gray-400 text-lg font-medium">Reviews</span>
</p>

            <p className="text-gray-600 leading-relaxed ">
              {product.description},Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aspernatur inventore unde perspiciatis atque ab laborum aliquam incidunt ratione distinctio, veniam enim praesentium dolorum ullam dolore qui corporis, non blanditiis.
            </p>
            <div className="space-y-6">
  
              
  {/* Sizes Section */}
  <div>
    <h4 className="text-xl font-bold text-gray-800 mb-3">Choose a Size</h4>
    <div className="flex gap-3">
      {/* XS */}
      <button
        className="w-12 h-12 flex items-center justify-center border border-gray-300 text-sm font-medium text-gray-700 rounded-md shadow hover:bg-[#fbebb5] transition-all"
        aria-label="Select size XS"
      >
        L
      </button>

      {/* L */}
      <button
        className="w-12 h-12 flex items-center justify-center border border-gray-300 text-sm font-medium text-gray-700 rounded-md shadow hover:bg-[#fbebb5] transition-all"
        aria-label="Select size L"
      >
        XL
      </button>
      {/* XL */}
      <button
        className="w-12 h-12 flex items-center justify-center border border-gray-300 text-sm font-medium text-gray-700 rounded-md shadow hover:bg-[#fbebb5] transition-all"
        aria-label="Select size XL"
      >
        XS
      </button>
    </div>
  </div>
  {/* Colors Section */}
  <div>
    <h4 className="text-xl font-bold text-gray-800 mb-3">Choose a Color</h4>
    <div className="flex gap-4">
      {/* Black Color */}
      <button
        className="w-10 h-10 rounded-full bg-black shadow-md hover:ring-2 hover:ring-gray-300 transition-all"
        aria-label="Select black color"
      ></button>
      {/* White Color */}
      <button
        className="w-10 h-10 rounded-full bg-white border border-gray-300 shadow-md hover:ring-2 hover:ring-gray-300 transition-all"
        aria-label="Select white color"
      ></button>
      {/* Gray Color */}
      <button
        className="w-10 h-10 rounded-full bg-gray-500 shadow-md hover:ring-2 hover:ring-gray-300 transition-all"
        aria-label="Select gray color"
      ></button>
    </div>
  </div>

</div>

            <button
              onClick={handleAddToCart}
              className="bg-black text-white py-2 px-6 rounded-lg mt-4"
            >
              Add To Cart
            </button>
            
          </div>
        </div>
      </div>
      <section className="flex justify-center items-center mb-14">
      <div className=" p-6 rounded-lg  max-w-6xl">
        <div className="flex justify-center mb-6 space-x-4">
          {/* Tab Buttons */}
          <button
            onClick={() => setActiveTab("description")}
            className={`px-4 py-2 text-lg font-semibold rounded-tl-lg ${
              activeTab === "description"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("additionalInfo")}
            className={`px-4 py-2 text-lg font-semibold ${
              activeTab === "additionalInfo"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Additional Information
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-4 py-2 text-lg font-semibold rounded-tr-lg ${
              activeTab === "reviews"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Reviews
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "description" && (
            <div className="text-gray-600 text-center">
              <h4 className="text-2xl font-bold mb-2">Description</h4>
              <p className="">
                {product.description}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus nemo libero aperiam quis recusandae! Molestias, molestiae ipsa impedit corrupti quae, doloremque sapiente illum inventore provident officiis exercitationem odit, pariatur ipsam?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                perferendis, distinctio facilis corporis tempore nesciunt, quae
                ipsum animi vel ratione architecto. Neque, quia facilis aspernatur
                vitae qui odit voluptatibus nesciunt.
              </p>
            </div>
          )}

          {activeTab === "additionalInfo" && (
            <div className="text-gray-600 text-center">
              <h4 className="text-2xl font-bold mb-2">Additional Information</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta eveniet non, deserunt nam exercitationem alias corrupti. Explicabo deserunt hic inventore saepe quod voluptates recusandae dicta id! Tempora possimus modi culpa!
                This section includes additional information about the product,
                including dimensions, materials, and other relevant details.
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="text-gray-600 text-center">
              <h4 className="text-2xl font-bold mb-2">Reviews</h4>
              <p>⭐⭐⭐⭐⭐</p>
              <p>Customer feedback will appear here...</p>
            </div>
          )}
        </div>
      </div>
    </section>

    </div>
  );
}
