"use client";

import Image from "next/image";
import TopPicks from "./sections/TopPicks";
import Link from "next/link";
import BlogPage from "./sections/Blog";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen bg-[#FCEBB6] flex flex-col lg:flex-row justify-between px-6 py-16">
        {/* Main Section */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="text-center lg:text-left space-y-6 max-w-md lg:max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-snug">
              Rocket single <br /> seater
            </h1>
            <Link
              href="#"
              className="inline-block text-xl md:text-2xl font-semibold text-gray-700 hover:text-gray-900 underline underline-offset-4"
            >
              Shop Now
            </Link>
          </div>

          {/* Right Section: Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <Image
              src="/main1.png"
              alt="Rocket Single Seater"
              width={600}
              height={600}
              className="w-full max-w-sm md:max-w-md lg:max-w-xl object-cover"
            />
          </div>
        </div>
      </main>

      <TopPicks />

      <section className="relative bg-white flex flex-col lg:flex-row justify-between px-6 py-16">
        {/* Main Section */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section: Image */}
          <div className="flex justify-center w-full lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/main2.png"
              alt="Rocket Single Seater"
              width={500}
              height={500}
              className="w-full max-w-sm md:max-w-md lg:max-w-xl object-cover"
            />
          </div>

          {/* Right Section: Text */}
          <div className="text-center lg:text-left space-y-6 w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
  <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-snug">
    New Arrival
  </h1>
  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-snug">
    Asgard sofa
  </h1>
  
  {/* Link */}
  <Link
    href="#"
    className="text-2xl md:text-3xl text-gray-800 duration-300 hover:bg-black hover:text-white leading-snug px-6 py-4 border border-gray-500 mt-6"
  >
    Order Now
  </Link>
</div>

        </div>
      </section>

      <BlogPage />

      <section className="grid justify-center text-center py-16 bg-white text-black">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Our Instagram</h1>

        {/* Subtitle */}
        <h2 className="text-lg md:text-xl py-2 font-semibold">
          Follow our store on Instagram
        </h2>

        {/* Follow Button */}
        <div className="py-4">
          <Link
            href="#"
            className="inline-block bg-gray-300 py-3 px-10 md:py-4 md:px-16 lg:py-5 lg:px-20 rounded-full shadow-lg shadow-gray-400 hover:bg-gray-400 transition duration-300"
          >
            Follow Us
          </Link>
        </div>
      </section>
    </>
  );
}
