"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {/* Address Section */}
          <div className="col-span-1">
            <p className="text-gray-500 leading-6">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="col-span-1">
            <h3 className="text-gray-400 font-semibold mb-3">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline text-black font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:underline text-black font-medium">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline text-black font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline text-black font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="col-span-1">
            <h3 className="text-gray-400 font-semibold mb-3">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline text-black font-medium">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-black font-medium">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-black font-medium">
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-1">
            <h3 className="text-gray-400 font-semibold mb-3">Newsletter</h3>
            <div className="flex border-b-2 border-black max-w-sm">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-transparent outline-none py-2 px-4 text-sm w-full"
              />
              <button className="text-black font-semibold hover:text-gray-600">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 text-center border-t border-gray-300 pt-4 text-sm text-gray-600">
          <p>2024 Meubel House. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
}
