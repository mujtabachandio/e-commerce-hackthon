"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const builder = imageUrlBuilder(client);

function urlFor(source: { asset: { _ref: string } }): string {
  if (!source || !source.asset?._ref) return "/default-image.jpg";
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
  description: string;
  images: { _id: string; asset: { _ref: string } }[];
  sizes?: string[];
  colors?: string[];
  sku: string;
  category: string;
  tags: string[];
  additionalInfo?: string;
}

type Tab = 'description' | 'additional' | 'reviews';

const fetchProduct = async (id: string): Promise<Product | null> => {
  const query = `*[_type == 'product' && _id == '${id}'][0]`;
  return await client.fetch(query);
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<Tab>('description');

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProduct(params.id);
      if (data) {
        setProduct(data);
        setSelectedImage(data.images?.[0] ? urlFor(data.images[0]) : urlFor(data.image));
        if (data.sizes?.length) setSelectedSize(data.sizes[0]);
        if (data.colors?.length) setSelectedColor(data.colors[0]);
      } else {
        notFound();
      }
    };
    getData();
  }, [params.id]);

  useEffect(() => {
    console.log(product);
  }, [product]);

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product?.name}(s) to the cart`);
  };

  if (!product) return null;

  const tabs: { id: Tab; label: string }[] = [
    { id: 'description', label: 'Description' },
    { id: 'additional', label: 'Additional Information' },
    { id: 'reviews', label: 'Reviews [5]' },
  ];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-12">
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
                  className={`w-20 h-20 rounded-lg border-2 cursor-pointer ${selectedImage === urlFor(img) ? "border-black" : "border-gray-300"}`}
                  onClick={() => setSelectedImage(urlFor(img))}
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl text-gray-400 font-semibold mb-4"> RS. {product.price}</p>
            <div className="flex items-center mb-6">
              <span className="text-yellow-500 text-xl">★★★★☆</span>
              <span className="text-gray-400 ml-2 text-3xl"> |</span>
              <p className="text-gray-600 ml-2"> 5 Customer Reviews</p>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Size</h3>
              <div className="flex gap-2">
                {["S", "M", "L"].map((size) => (
                  <button
                    key={size}
                    className={`py-1 px-3 border rounded-lg ${
                      selectedSize === size ? "bg-black text-white" : "bg-gray-100 text-gray-700"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Color</h3>
              <div className="flex gap-2">
                {["#fffff", "#808080", "#000"].map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? "border-black" : "border-gray-500"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))} className="px-4 py-2">-</button>
                <span className="px-4">{quantity}</span>
                <button onClick={() => setQuantity((prev) => prev + 1)} className="px-4 py-2">+</button>
              </div>
              <button onClick={handleAddToCart} className="bg-black text-white py-2 px-6 rounded-lg">Add To Cart</button>
            </div>

            <div className="text-sm">
              <p>SKU: {product.sku || "XYZ"}</p>
              <p>Category: {product.category || "N/A"}</p>
              <p>Tags: {product.tags?.length ? product.tags.join(", ") : "No tags available"}</p>
            </div>
          </div>
        </div>

        {/* Centered Tabbed Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex justify-center space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 text-lg font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-b-2 border-black text-black'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-16">
            {activeTab === 'description' && (
              <div className="prose max-w-3xl mx-auto">
                <p className="text-gray-600 leading-relaxed text-center">
                  {product.description},
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut odit amet quia culpa iusto molestiae magni, quidem consectetur. Quia eveniet nihil, labore voluptates corporis quidem voluptas laborum odit impedit ipsa?
                </p>
              </div>
            )}
            {activeTab === 'additional' && (
              <div className="prose max-w-3xl mx-auto">
                <p className="text-gray-600 leading-relaxed text-center">
                  {product.additionalInfo || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum enim ut accusantium omnis voluptate perferendis unde id ad nihil officia culpa commodi perspiciatis voluptates, ducimus repellendus sit? Quod expedita, doloremque facere nisi laboriosam fugit minima cumque, nam asperiores error quibusdam maxime corrupti distinctio. Odio cumque nulla, quasi similique dolore vel.'}
                </p>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="prose max-w-3xl mx-auto">
                <p className="text-gray-600 text-center">5 Customer Reviews</p>
                {/* Add review content here */}
              </div>
            )}
          </div>

          {/* Wide Single Image Section */}
<div className=" bg-[#FDF9F3] py-8 rounded-lg shadow-sm overflow-hidden">
  <Image
    src={selectedImage}
    alt={product.name}
    width={1920} // Set to a wider width for full-screen effect
    height={800} // Adjust the height proportionally
    className="w-full h-[23rem] object-fill"
    priority
  />
</div>

        </div>

      </div>
    </div>

      
  );
}