'use client'

import React from 'react';
import ProductCard from '../component/addtocart';
import ProductDescription from '../component/d-product';
import Header from '../component/Header'
import Link from 'next/link'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa'

import BESTSELLER from '../component/BESTSELLER-PRODUCTS';


const ProductPage = () => {
  return (
  <>
     {/* Top bar */}
     <div className='bg-[#23856D] '>
     <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:h-12 max-w-[1230px] mx-auto text-white  p-4 md:p-0">
        {/* Contact Information with Icons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-6 gap-y-2">
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2" />
            +923152983545
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            abdulmateen5251@gmail.com
          </div>
        </div>

        {/* Promotional Message (hidden below md breakpoint) */}
        <div className="hidden md:flex items-center space-x-4 text-sm">
          <span>Follow Us and get a chance to win 80% off</span>
          <span className="pl-3">Follow Us:</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
     </div>

      {/* Main Header */}
      <Header />

      {/* Secondary Header / Nav */}
      <div className="w-full bg-white">
        <div className="max-w-[1049px] mx-auto px-4">
          <div className="h-[44px] flex justify-between items-center">
            {/* Logo/Title */}
            <Link href="/"><div className="text-xl md:text-2xl text-[#252B42] font-bold">
              Shops
            </div>
            </Link>

            {/* Navigation */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <div>
                <Link
                  href="/"
                  className="text-[#252B42] hover:text-[#252B42]/80 transition-colors text-sm md:text-base"
                >
                  Home
                </Link>
              </div>
              <div>
                <Link
                  href="/Product-list"
                  className="text-[#252B42] hover:text-[#252B42]/80 transition-colors text-sm md:text-base"
                >
                  Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>



    <main className="min-h-screen bg-[#FAFAFA]">
      <div className="container mx-auto py-8">
        <ProductCard />
        <ProductDescription />
       
        <BESTSELLER/>
      </div>
    </main>
    </>
  );
};

export default ProductPage;