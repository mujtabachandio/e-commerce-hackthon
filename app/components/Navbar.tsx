"use client"
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUser, FaSearch, FaHeart, FaShoppingCart, FaBars ,} from "react-icons/fa";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";  // Import Image component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Cart Sidebar state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const pathname = usePathname();

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Function to add active class to current path
  const linkClass = (path: string) =>
    pathname === path
      ? "text-gray-800 font-bold duration-300 border-b-2 border-gray-800 pb-1"
      : "text-gray-800 duration-300 hover:text-gray-600 font-medium";

  const NavLinks = () => (
    <>
      <Link href="/" className={linkClass("/")} onClick={closeMobileMenu}>Home</Link>
      <Link href="/shop" className={linkClass("/shop")} onClick={closeMobileMenu}>Shop</Link>
      <Link href="/about" className={linkClass("/about")} onClick={closeMobileMenu}>About</Link>
      <Link href="/contact" className={linkClass("/contact")} onClick={closeMobileMenu}>Contact</Link>
    </>
  );

  const NavIcons = () => (
    <div className="flex items-center space-x-6 text-gray-800">
      <Link href="/account">
        <FaRegUser className="w-6 h-6 cursor-pointer duration-300 hover:text-gray-600" />
      </Link>
      <Link href="/search">
        <FaSearch className="w-6 h-6 cursor-pointer duration-300 hover:text-gray-600" />
      </Link>
      <Link href="/product">
        <FaHeart className="w-6 h-6 cursor-pointer duration-300 hover:text-gray-600" />
      </Link>
      <button onClick={openCart} className="p-2 bg-black text-white rounded-md">
        <FaShoppingCart className="w-6 h-6" />
      </button>
    </div>
  );

  return (
    <nav className="relative">
      {/* Desktop Navbar */}
      <div className="max-md:hidden flex justify-between items-center px-10 py-5 shadow-md">
        <div className="flex-1"></div>
        <div className="flex items-center space-x-16 text-1xl">
          <NavLinks />
        </div>
        <div className="flex items-center space-x-6 text-gray-800 flex-1 justify-end">
          <NavIcons />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-5 py-4 shadow-md">
        <button onClick={toggleMobileMenu} className="z-50">
          {isMobileMenuOpen ? <AiOutlineClose className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col pt-16 items-center space-y-6 text-2xl">
            <NavLinks />
            <div className="mt-8">
              <NavIcons />
            </div>
          </div>
        )}

        <div className="flex items-center space-x-4">
          <Link href="/product">
            <AiOutlineHeart className="w-6 h-6" />
          </Link>
          <button onClick={openCart} className="p-2 bg-black text-white rounded-md">
            <FaShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 md:w-96 bg-white shadow-md transition-transform transform z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4">
          {/* Close Button */}
          <button onClick={closeCart} className="text-2xl">
            <AiOutlineClose />
          </button>

          {/* Cart Content */}
          <div className="mt-4">
            <div className="flex items-center mb-4">
              <Image
                src="/main2.png"
                alt="Asgaard sofa"
                width={64}
                height={64}
                className="object-cover"
              />
              <div className="ml-4 flex-grow">
                <p>Asgaard sofa</p>
                <p>
                  1 x <span className="text-yellow-500">Rs. 250,000.00</span>
                </p>
              </div>
              <button
                onClick={() => {
                  // Logic to remove item
                }}
                className="text-red-500"
              >
                x
              </button>
            </div>

            {/* Subtotal */}
            <p>
              Subtotal: <span className="text-yellow-500">Rs. 250,000.00</span>
            </p>

            {/* View Cart & Checkout Buttons */}
            <div className="mt-4 flex space-x-2">
              <Link href="/cart" className="flex-1 p-2 bg-black text-white text-center">View Cart</Link>
              <Link href="/checkout" className="flex-1 p-2 bg-black text-white text-center">Checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
