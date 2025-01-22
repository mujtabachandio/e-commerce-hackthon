"use client";
import dynamic from 'next/dynamic';

// Dynamically import the motion component from framer-motion
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

export default function About() {
  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* Animated Title */}
        <MotionDiv
          className="text-5xl font-extrabold text-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </MotionDiv>

        {/* About Us Description */}
        <MotionDiv
          className="text-lg text-gray-600 mx-auto max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We believe that furniture is more than just an accessory for your home — its a reflection of your personality, your style, and your values. Our mission is to craft elegant, durable, and functional pieces that elevate every living space.
        </MotionDiv>

        {/* Who We Are Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <MotionDiv
            className="space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-3xl font-semibold text-black">Who We Are</h3>
            <p className="text-gray-600 leading-relaxed">
              Our company is founded on the idea that great design should be accessible to everyone. We’re passionate about creating beautiful furniture that combines form and function, bringing elegance and comfort into any home.
            </p>
          </MotionDiv>

          {/* Our Expertise Section */}
          <MotionDiv
            className="space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-3xl font-semibold text-black">Our Expertise</h3>
            <p className="text-gray-600 leading-relaxed">
              We specialize in a range of furniture for every space in your home. Our expertise spans from living room essentials like sofas and coffee tables to functional office furniture and elegant bedroom pieces. Every product is built with quality materials and craftsmanship to stand the test of time.
            </p>
          </MotionDiv>
        </div>

        {/* Our Values Section */}
        <MotionDiv
          className="mt-12 text-left mx-auto max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-black mb-6">Our Values</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <span className="text-yellow-500">🛋️</span>
              <span className="text-gray-600">Comfort & Quality</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-yellow-500">♻️</span>
              <span className="text-gray-600">Sustainability</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-yellow-500">💎</span>
              <span className="text-gray-600">Timeless Design</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-yellow-500">🌿</span>
              <span className="text-gray-600">Eco-friendly Materials</span>
            </li>
          </ul>
        </MotionDiv>
      </div>
    </section>
  );
}
