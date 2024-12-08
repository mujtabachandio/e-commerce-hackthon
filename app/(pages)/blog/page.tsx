"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Layers, Palette, Monitor, Leaf, Briefcase } from 'lucide-react'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', icon: Layers, items: 24 },
    { name: 'Design', icon: Palette, items: 12 },
    { name: 'Tech', icon: Monitor, items: 8 },
    { name: 'Lifestyle', icon: Leaf, items: 6 },
    { name: 'Business', icon: Briefcase, items: 4 },
  ];

  const recentPosts = [
    { title: "Going all-in with millennial design", date: "14 Oct 2022", image: "/blog11.png" },
    { title: "Top 10 UI/UX Trends", date: "05 Sept 2022", image: "/blog22.jpg" },
    { title: "Future of Web Development", date: "22 Aug 2022", image: "/blog33.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Section */}
      <header
        className="relative w-full bg-cover bg-center py-12 px-4 md:px-0"
        style={{ backgroundImage: "url('/shopbg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <div className="relative z-10 text-center text-black container mx-auto">
          <Image src="/shoplogo.png" alt="Logo" width={150} height={50} className="mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Blog</h1>
          <nav className="text-sm md:text-base">
            <Link href="/" className="hover:underline text-black">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-black">Blog</span>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <section className="w-full lg:w-2/3 space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <article key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64 sm:h-72 md:h-80">
                <Image
                  className="object-cover"
                  src={`/blog${i + 1}1.png`}
                  alt="Featured"
                  layout="fill"
                  priority
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Going all-in with millennial design</h2>
                <p className="text-gray-600 mb-4 text-sm md:text-base">14 Oct 2022 • Design</p>
                <p className="text-gray-800 mb-4 text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor.
                </p>
                <Link href="#" className="inline-block px-4 py-2 border-2 border-gray-400 text-black hover:bg-black duration-300 hover:text-white">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pr-10 border-2 border-gray-400 rounded-full"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 text-black p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map(({ name, icon: Icon, items }) => (
                <button
                  key={name}
                  onClick={() => setSelectedCategory(name)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition ${
                    selectedCategory === name ? 'text-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${selectedCategory === name ? 'text-gray-600' : 'text-gray-500'}`} />
                    <span>{name}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${selectedCategory === name ? 'bg-white/30' : 'bg-gray-200'}`}>
                    {items}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            {recentPosts.map(({ title, date, image }, i) => (
              <div key={i} className="flex items-center mb-4 pb-4 border-b last:border-b-0">
                <div className="relative w-16 h-16">
                  <Image
                    src={image}
                    alt={title}
                    width={64}
                    height={64}
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-sm mb-1">
                    <Link href="#" className="hover:text-blue-600">{title}</Link>
                  </h4>
                  <p className="text-xs text-gray-500">{date}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>

      {/* Pagination */}
      <div className="flex justify-center gap-2 md:gap-4 mb-12">
        {['1', '2', '3', 'Next'].map((page) => (
          <Link key={page} href={`/shop?page=${page}`}>
            <button className="px-4 py-2 border bg-[#FBEBB5] rounded-md text-gray-700 hover:bg-yellow-400 duration-300">
              {page}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
