 'use client'
 
 import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline, IoHeartOutline, IoSearch } from "react-icons/io5";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <header className="text-gray-600 body-font ">
      <div className="max-w-[1042px] mb-[15px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-[#252B42] text-2xl">Bandage</span>
        </Link>

        {/* Navigation */}
        <nav className="md:ml-auto mr-100 md:mr-auto flex flex-wrap items-center text-base justify-center gap-[10px]">
          <Link href="/" className="mr-5 font-bold hover:text-gray-900">
            Home
          </Link>
          <div className="relative group">
            <Link
              href="/Product-list"
              className="font-semibold hover:text-gray-900 flex items-center"
            >
              Shop <IoIosArrowDown className="ml-1 text-[#000000]" />
            </Link>
            {/* Dropdown Menu (Optional) */}

            <div
              className="absolute hidden group-hover:block bg-white shadow-lg gap-0 p-0 z-50"
              style={{ top: "-100%" }} // Adjust top value as needed
            >
              <Link href="/Product-list" className="block px-4 py-2">
                Products
              </Link>
              <Link href="/pricing" className="block px-4 py-2">
                Pricing
              </Link>
            </div>
          </div>
          <Link href="/About" className="mr-5 font-bold hover:text-gray-900">
            About
          </Link>
          <Link href="/blog" className="mr-5 font-bold hover:text-gray-900">
            Blog
          </Link>
          <Link href="/Contact" className="mr-5 font-bold hover:text-gray-900">
            Contact
          </Link>
          <div className="relative group">
            <Link
              href="/Product-list"
              className="font-semibold hover:text-gray-900 flex items-center"
            >
              Pages <IoIosArrowDown className="ml-1 text-[#000000]" />
            </Link>
            {/* Dropdown Menu (Optional) */}

            <div
              className="absolute hidden group-hover:block bg-white shadow-lg gap-0 p-0 z-50"
              style={{ top: "-100%" }} // Adjust top value as needed
            >
              <Link href="/team" className="block px-4 py-2">
                Team
              </Link>
              <Link href="/Add-to-card" className="block px-4 py-2">
              AddtoCart
              </Link>
            </div>
          </div>
          
        </nav>

        {/* User Actions */}
        <div className="mr-7 flex justify-center items-center gap-1 font-bold text-[14px] tracking-[0.2px] leading-6 text-[#23A6F0] ">
          <FaUser className="text-[12px]" />
          <Link href="/login" className="hover:text-[#23856D]">
            Login
          </Link>{" "}
          /{" "}
          <Link href="#" className="hover:text-[#23856D]">
            Register
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-[#23A6F0] hover:text-black ">
          <IoSearch className=" text-lg cursor-pointer" />
          <IoHeartOutline className=" text-lg cursor-pointer" />
          <IoCartOutline className=" text-lg cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
