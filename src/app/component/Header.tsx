import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoCartOutline, IoHeartOutline, IoSearch } from 'react-icons/io5';
import Link from 'next/link';

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo */}
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-[#252B42] text-2xl">Bandage</span>
        </Link>

        {/* Navigation */}
        <nav className="md:ml-auto mr-100 md:mr-auto flex flex-wrap items-center text-base justify-center gap-9">
          <Link href="/" className="mr-5 font-bold hover:text-gray-900">
            Home
          </Link>
          <div className="relative group">
            <Link href="/Product-list" className="font-semibold hover:text-gray-900 flex items-center">
              Shop <IoIosArrowDown className="ml-1 text-[#000000]" />
            </Link>
            {/* Dropdown Menu (Optional) */}
            {/* 
            <div className="absolute hidden group-hover:block bg-white shadow-lg">
              <Link href="/shop/category1" className="block px-4 py-2">Category 1</Link>
              <Link href="/shop/category2" className="block px-4 py-2">Category 2</Link>
            </div>
            */}
          </div>
          <Link href="/About" className="mr-5 font-bold hover:text-gray-900">
            About
          </Link>
          <Link href="#" className="mr-5 font-bold hover:text-gray-900">
            Blog
          </Link>
          <Link href="#" className="mr-5 font-bold hover:text-gray-900">
            Contact
          </Link>
          <Link href="/Product-list" className="mr-5 font-bold hover:text-gray-900">
            Pages
          </Link>
        </nav>

        {/* User Actions */}
        <div className="mr-7">
          <Link href="/login" className="hover:text-gray-900">
            Login
          </Link>{' '}
          /{' '}
          <Link href="#" className="hover:text-gray-900">
            Register
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <IoSearch className="text-black text-lg cursor-pointer" />
          <IoHeartOutline className="text-black text-lg cursor-pointer" />
          <IoCartOutline className="text-black text-lg cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
