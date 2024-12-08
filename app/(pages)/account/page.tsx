"use client";
import Link from "next/link";
import Image from "next/image";

export default function Account() {
  return (
    <div>
      {/* Header Section with Background Image */}
      <div
        className="relative bg-cover bg-center pb-12"
        style={{
          backgroundImage: "url('/shopbg.jpg')", // Replace with your image path
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 lg:px-20 py-10 text-center text-black">
          {/* Logo */}
          <div>
            <Image
              src="/shoplogo.png" // Replace with your logo path
              alt="Logo"
              width={150} // Adjust size
              height={50}
              className="mx-auto" // Center the logo
            />
          </div>

          {/* Title and Breadcrumb */}
          <h2 className="text-5xl font-bold mb-2">My Account</h2>
          <p className="text-black">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            My Account
          </p>
        </div>
      </div>

      {/* Login and Register Section */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row">
          {/* Login Section */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Log In</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="username"
                >
                  Username or email address
                </label>
                <input
                  id="username"
                  type="text"
                  className="border-2 border-gray-600 rounded w-full py-4 px-3"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="border-2 border-gray-600 rounded w-full py-4 px-3"
                />
              </div>

              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox w-5 h-5" />
                  <span className="ml-2 text-gray-700">Remember me</span>
                </label>
              </div>

              <div className="flex items-center ">
                <button
                  type="button"
                  className=" hover:bg-black hover:text-white duration-300 font-bold py-2 px-16 rounded-md border-2 border-gray-600"
                >
                  Log In
                </button>
                <a
                  href="#"
                  className="ml-8 inline-block align-baseline text-sm text-black hover:text-black"
                >
                  Lost Your Password?
                </a>
              </div>
            </form>
          </div>

          {/* Register Section */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="border-2 border-gray-600 rounded w-full py-4 px-3"
                />
              </div>

              <p className="text-gray-700 text-sm mb-4">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <br />
                <a href="#" className="text-black font-bold">
                  privacy policy
                </a>
                .
              </p>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="hover:bg-black hover:text-white duration-300 font-bold py-2 px-16 rounded-md border-2 border-gray-600"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
      {/* Horizontal Headings Section */}
      <div className="container mx-auto px-4 lg:px-20 py-16 mb-14 bg-[#9F9F9F]">
        <div className="flex justify-between items-center">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">Free Delivery</h3>
            <p className="text-gray-600">For all oders over $50, consectetur adipim scing elit.</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">90 Days Return</h3>
            <p className="text-gray-600">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">Secure Payment</h3>
            <p className="text-gray-600">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
