// pages/contact.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start">
      {/* Header Section with Background Image */}
      <div
        className="relative w-full bg-cover bg-center py-12 px-4 md:px-0"
        style={{
          backgroundImage: "url('/shopbg.jpg')", // Replace with your image path
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-black container mx-auto">
          <div>
            <Image
              src="/shoplogo.png" // Replace with your logo image path
              alt="Logo"
              width={150}
              height={50}
              className="mx-auto mb-4"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-2">Contact</h2>
          <p className="text-sm md:text-base">
            <Link href="/" className="hover:underline text-black">
              Home
            </Link>{" "}
            <span className="mx-2"> &gt; </span>
            <span className="text-black">Contact</span>
          </p>
        </div>
      </div>

      {/* Heading Section */}
      <div className="text-center mt-10 mb-8 px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Get In Touch With Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          For more information about our products and services, please feel free to drop us an email. 
          Our staff will always be there to help you out. Do not hesitate!
        </p>
      </div>

      {/* Contact Info and Form Section */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-6xl mx-4 md:mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Side: Contact Info */}
        <div className="md:w-1/2">
          <div className="space-y-8">
            {/* Address */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-2">
                <FaMapMarkerAlt className="mr-2" size={30} />
                <h1 className="text-lg font-semibold">Address</h1>
              </div>
              <p className="text-gray-700 max-w-xs">
                236 5th SE Avenue, New York, NY 10000, United States
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-2">
                <FaPhoneAlt className="mr-2" size={30} />
                <h1 className="text-lg font-semibold">Phone</h1>
              </div>
              <p className="text-gray-700 max-w-xs">
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </p>
            </div>

            {/* Working Hours */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-2">
                <FaClock className="mr-2" size={30} />
                <h1 className="text-lg font-semibold">Working Hours</h1>
              </div>
              <p className="text-gray-700 max-w-xs">
                Monday–Friday: 9:00 AM - 10:00 PM <br />
                Saturday–Sunday: 9:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="md:w-1/2">
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-2 border-gray-400 p-3 rounded"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-2 border-gray-400 p-3 rounded"
                placeholder="example@domain.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full border-2 border-gray-400 p-3 rounded"
                placeholder="Optional"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border-2 border-gray-400 p-3 rounded"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full hover:bg-black hover:text-white font-semibold border-2 border-gray-400 p-2 rounded transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
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

      {/* Footer spacing */}
      <div className="h-16"></div>
    </div>
  );
};

export default Contact;
