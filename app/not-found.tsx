"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // For animation

export default function NotFound() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000); // Delay animation for a smooth effect
  }, []);

  return (
    <div className="bg-yellow-500 min-h-screen flex items-center justify-center text-black px-4 sm:px-8">
      <div className="container mx-auto text-center">
        {/* Animated Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-bold mb-4"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl sm:text-2xl mb-6"
        >
          Oops! The page you&apos;re looking for isn&apos;t here.
        </motion.p>

        {/* Animated button to return to homepage */}
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="/"
              className="inline-block py-2 px-6 bg-[#000] text-white font-semibold rounded-lg text-lg transition-all duration-300 hover:bg-orange-400"
            >
              Go Back Home
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
}
