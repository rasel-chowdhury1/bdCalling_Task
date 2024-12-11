import Image from "next/image";
import { FaChevronDown, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";

const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between w-5/6 mx-auto py-6">
      {/* Logo Section */}
      <div className="logo">
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={274}
          height={70}
        />
      </div>

      {/* Search Bar */}
      <div className="flex items-center ">
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
        <button className="bg-orange-500 text-white font-figtree text-sm text-[#F8FAFC] px-6 py-2 rounded-r-full hidden sm:block">
          Search
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="hidden sm:flex space-x-6">
        <a
          href="#"
          className="flex items-center font-figtree text-sm gap-2 text-primaryText text-lg font-medium hover:opacity-80 transition"
        >
          <p>All Category</p>
          <FaChevronDown className="text-[#1D242D]" />
        </a>
        <a
          href="#"
          className="text-primaryText font-figtree text-base font-medium hover:opacity-80 transition"
        >
          About Us
        </a>
        <a
          href="#"
          className="text-primaryText font-figtree text-base font-medium hover:opacity-80 transition"
        >
          Contact Us
        </a>
      </nav>

      {/* Icons Section */}
      <div className="flex space-x-4 text-primaryText sm:space-x-6">
        <FaRegHeart className="text-xl" />
        <FiShoppingCart className="text-xl" />
        <RiUserLine className="text-xl" />
      </div>

      {/* Mobile Menu Button */}
      <button className="sm:hidden text-primaryText">
        <FaChevronDown />
      </button>
    </header>
  );
};

export default Navbar;
