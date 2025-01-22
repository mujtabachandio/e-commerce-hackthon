"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartItem = { name: product.name, quantity: 1 };
    const updatedCart = [...cart, cartItem];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart.`);
  };

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
          <div className="bg-white p-4 rounded-lg shadow-lg">
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
            <p className="text-2xl text-gray-400 font-semibold mb-4">
              RS. {product.price}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>
            <button
              onClick={handleAddToCart}
              className="bg-black text-white py-2 px-6 rounded-lg"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
