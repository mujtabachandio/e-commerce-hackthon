"use client";

import Image from "next/image";
import Link from "next/link";
import { CiClock1 } from "react-icons/ci";
import { HiCalendarDateRange } from "react-icons/hi2";

export default function BlogPage() {
  return (
    <main className="bg-white py-14 px-6 lg:px-12">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-2">Our Blogs</h2>
        <p className="text-gray-600">
          Find a bright idea to suit your taste with our great selection
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {/* Blog 1 */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-full h-64 sm:h-72 md:h-80 lg:h-[28rem] relative overflow-hidden rounded-md">
            <Image
              src="/blog1.png"
              alt="Millennial Design Blog"
              layout="fill"
              objectFit="cover"
              className="transition-transform transform hover:scale-105 duration-300"
            />
          </div>
          <h3 className="text-black font-medium text-lg">
            Going all-in with millennial design
          </h3>
          <Link href="/blog">
            <span className="underline-offset-8 underline text-black font-semibold hover:text-gray-600 cursor-pointer">
              Read More
            </span>
          </Link>
          <div className="flex items-center space-x-4 text-black text-sm">
            <div className="flex items-center">
              <CiClock1 className="text-lg mr-1" />
              <span>5 min</span>
            </div>
            <div className="flex items-center">
              <HiCalendarDateRange className="text-lg mr-1" />
              <span>12th Oct 2022</span>
            </div>
          </div>
        </div>

        {/* Blog 2 */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-full h-64 sm:h-72 md:h-80 lg:h-[28rem] relative overflow-hidden rounded-md">
            <Image
              src="/blog2.png"
              alt="Millennial Design Blog"
              layout="fill"
              objectFit="cover"
              className="transition-transform transform hover:scale-105 duration-300"
            />
          </div>
          <h3 className="text-black font-medium text-lg">
            Exploring the new era of architecture
          </h3>
          <Link href="/blog">
            <span className="underline-offset-8 underline text-black font-semibold hover:text-gray-600 cursor-pointer">
              Read More
            </span>
          </Link>
          <div className="flex items-center space-x-4 text-black text-sm">
            <div className="flex items-center">
              <CiClock1 className="text-lg mr-1" />
              <span>7 min</span>
            </div>
            <div className="flex items-center">
              <HiCalendarDateRange className="text-lg mr-1" />
              <span>15th Oct 2022</span>
            </div>
          </div>
        </div>

        {/* Blog 3 */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-full h-64 sm:h-72 md:h-80 lg:h-[28rem] relative overflow-hidden rounded-md">
            <Image
              src="/blog3.png"
              alt="Modern Technology Insights"
              layout="fill"
              objectFit="cover"
              className="transition-transform transform hover:scale-105 duration-300"
            />
          </div>
          <h3 className="text-black font-medium text-lg">
            The future of modern technology insights
          </h3>
          <Link href="/blog">
            <span className="underline-offset-8 underline text-black font-semibold hover:text-gray-600 cursor-pointer">
              Read More
            </span>
          </Link>
          <div className="flex items-center space-x-4 text-black text-sm">
            <div className="flex items-center">
              <CiClock1 className="text-lg mr-1" />
              <span>6 min</span>
            </div>
            <div className="flex items-center">
              <HiCalendarDateRange className="text-lg mr-1" />
              <span>18th Oct 2022</span>
            </div>
          </div>
        </div>
      </div>

      {/* View All Posts */}
      <div className="text-center mt-10">
        <Link href="/blog">
          <span className="text-black font-medium hover:text-gray-600 underline cursor-pointer underline-offset-8 text-2xl">
            View All Posts
          </span>
        </Link>
      </div>
    </main>
  );
}
