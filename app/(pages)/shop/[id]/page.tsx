"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; // Import Sanity client
import imageUrlBuilder from "@sanity/image-url"; // Import imageUrlBuilder to generate image URLs
import { notFound } from "next/navigation";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// Initialize image builder
const builder = imageUrlBuilder(client);

// Function to generate image URLs from Sanity
function urlFor(source: { _id: string; asset: { _ref: string; _type: string } }) {
  return builder.image(source).auto("format").fit("max"); // Ensure you're setting options
}

// Define types for Product
interface Product {
  _id: string;
  name: string;
  price: string;
  image: { _id: string; asset: { _ref: string; _type: string } }; // Sanity image object type
  description: string;
  images: { _id: string; asset: { _ref: string; _type: string } }[]; // Array of image objects
}

// Fetch product data from Sanity
const fetchProduct = async (id: string): Promise<Product | null> => {
  const query = `*[_type == 'product' && _id == '${id}'][0]`;
  const product = await client.fetch(query);
  return product;
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    const getProductData = async () => {
      const data = await fetchProduct(params.id);
      console.log("Fetched Product Data: ", data); // Debug: Check if data is correctly fetched
      if (data) {
        setProduct(data);
        // Set the selected image if available
        setSelectedImage(
          data.images && data.images.length > 0 ? urlFor(data.images[0]).url() : ""
        );
      } else {
        notFound(); // If no product is found, show 404
      }
    };
    getProductData();
  }, [params.id]);

  // If the product is not fetched, display a loading or empty state
  if (!product) return null;

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/shop" className="text-gray-500 hover:text-gray-700">
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
              src={selectedImage || "/default-image.jpg"} // Fallback image if no image is selected
              alt={product.name}
              width={600}
              height={400}
              className="w-full rounded-lg mb-4"
            />
            {/* Thumbnails */}
            <div className="flex gap-4 justify-center">
              {Array.isArray(product.images) && product.images.length > 0 ? (
                product.images.map((img) => (
                  <Image
                    key={img._id} // Use _id from the image object
                    src={urlFor(img).url()} // Use urlFor to generate the URL
                    alt="Product Preview"
                    width={80}
                    height={80}
                    className={`w-20 h-20 rounded-lg border-2 cursor-pointer ${
                      selectedImage === urlFor(img).url() ? "border-black" : "border-gray-300"
                    } hover:opacity-75`}
                    onClick={() => setSelectedImage(urlFor(img).url())}
                  />
                ))
              ) : (
                <p>No additional images available</p> // Fallback message if no images are available
              )}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl text-gray-800 font-semibold mb-6">{product.price}</p>
            <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

            {/* Star Rating */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Rate This Product:</h3>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer ${
                      star <= 3 ? "text-yellow-500" : "text-gray-300"
                    }`}
                    size={24}
                  />
                ))}
              </div>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
