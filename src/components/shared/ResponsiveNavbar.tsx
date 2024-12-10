"use client"
import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const ResponsiveNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-5/6 mx-auto py-6 flex items-center justify-between">
      {/* Logo Section */}
      <Link href="/" className="logo">
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={274}
          height={70}
        />
      </Link>

      {/* Search Bar */}
      <div className="hidden md:flex items-center">
        <div className="flex border items-center border-gray-300 rounded-l-full px-4 py-2">
          <Image
            src="/assets/Search.png"
            alt="search-icon"
            width={15}
            height={15}
          />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 border-none outline-none text-gray-500 text-sm"
          />
        </div>
        <button className="bg-orange-500 text-white font-figtree text-sm text-[#F8FAFC] px-6 py-2 rounded-r-full">
          Search
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <a
          href="#"
          className="flex items-center font-figtree text-sm gap-2 text-primaryText text-lg font-medium hover:opacity-80 transition"
        >
          <p>All Category</p>
          <FaChevronDown className="text-[#1D242D]" />
        </a>
        <Link
          href="/about"
          className="text-primaryText font-figtree text-base font-medium hover:opacity-80 transition"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="text-primaryText font-figtree text-base font-medium hover:opacity-80 transition"
        >
          Contact Us
        </Link>
      </nav>

      {/* Icons Section */}
      <div className="hidden md:flex space-x-4 text-primaryText">
        <FaRegHeart className="text-xl" />
        
        <Link href="/shoppingCart"><FiShoppingCart className="text-xl text-primaryText hover:cursor-pointer" /></Link>
        <Link href="/login"><RiUserLine className="text-xl text-primaryText hover:cursor-pointer" /></Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-primaryText text-2xl"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-lg mt-4 py-4 z-50">
          <nav className="flex flex-col items-center space-y-4">
            <a
              href="#"
              className="flex items-center font-figtree text-sm gap-2 text-primaryText text-lg font-medium hover:opacity-80 transition"
            >
              <p>All Category</p>
              <FaChevronDown className="text-[#1D242D]" />
            </a>
            <Link
              href="/about"
              className="text-primaryText font-figtree text-base font-medium hover:opacity-80 transition"
            >
              About Us
            </Link>
            <a
              href="#"
              className="text-primaryText font-figtree text-base font-medium hover:opacity-80 transition"
            >
              Contact Us
            </a>
          </nav>
          <div className="flex justify-center mt-6 space-x-6">
            <FaRegHeart className="text-xl text-primaryText" />
            
            <Link href="/shoppingCart"><FiShoppingCart className="text-xl text-primaryText hover:cursor-pointer" /></Link>
            <Link href='/login'><RiUserLine className="text-xl text-primaryText hover:cursor-pointer" /></Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default ResponsiveNavbar;
