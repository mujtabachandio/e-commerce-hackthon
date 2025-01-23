"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUser, FaSearch, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartSidebarVisible, setCartSidebarVisible] = useState(false);
  const [cart, setCart] = useState<{ name: string; quantity: number }[]>([]); // Empty array initially
  const pathname = usePathname();

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart)); // Parse the cart from localStorage
    }
  }, []);

  // Update localStorage whenever the cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
    }
  }, [cart]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleCartSidebar = () => setCartSidebarVisible(!isCartSidebarVisible);


  const linkClass = (path: string) =>
    pathname === path
      ? "text-gray-800 font-bold duration-300 border-b-2 border-gray-800 pb-1"
      : "text-gray-800 duration-300 hover:text-gray-600 font-medium";

  const NavLinks = () => (
    <>
      <Link href="/" className={linkClass("/")} onClick={closeMobileMenu}>
        Home
      </Link>
      <Link href="/shop" className={linkClass("/shop")} onClick={closeMobileMenu}>
        Shop
      </Link>
      <Link href="/about" className={linkClass("/about")} onClick={closeMobileMenu}>
        About
      </Link>
      <Link href="/contact" className={linkClass("/contact")} onClick={closeMobileMenu}>
        Contact
      </Link>
    </>
  );

  const NavIcons = () => (
    <div className="flex items-center space-x-6 text-gray-800">
      <Link href="/account">
        <FaRegUser className="w-6 h-6 cursor-pointer duration-300 hover:text-gray-600" />
      </Link>
      <Link href="#">
        <FaSearch className="w-6 h-6 cursor-pointer duration-300 hover:text-gray-600" />
      </Link>
      <Link href="#">
        <FaHeart className="w-6 h-6 cursor-pointer duration-300 hover:text-gray-600" />
      </Link>
      <Link href="/cart">
        <FaShoppingCart className="w-6 h-6 cursor-pointer"/>
      </Link>
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
          <button
            onClick={toggleCartSidebar}
            className="p-2 bg-black text-white rounded-md"
          >
            <FaShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>

     
    </nav>
  );
};

export default Navbar;
