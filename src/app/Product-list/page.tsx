'use client'

import React from 'react'

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPhoneAlt,
    FaEnvelope,
  } from 'react-icons/fa';
import Header from '../component/Header';
import Link from 'next/link';
import ImageGallery from '../component/Product-page-list';
import Logos from '../component/Logos';
import Cart2 from '../component/Cart2';


  
  const Page: React.FC = () => {
    return (
        <div>
      <div className="flex items-center justify-between h-12 w-full text-[#FFFFFF] bg-[#23856D] px-5">
        {/* Contact Information with Icons */}
        <div className="flex items-center space-x-6">
          
            <FaPhoneAlt className="mr-2" />
            (225) 555-0118
          
         
            <FaEnvelope className="mr-2" />
            
        </div>
  
        {/* Promotional Message */}
        <div className="hidden md:flex items-center space-x-4 text-white text-sm">
          <span>Follow Us and get a chance to win 80% off</span>
          <span >Follow Us :</span>
          
        </div>
  
        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
         
          
            <FaFacebookF />
          
          
            <FaTwitter />
          
            <FaInstagram />
          
        </div>
      </div>


      <Header/>

      <header className="w-full bg-white  ">
      <div className="max-w-[1440px] h-[92px] mx-auto flex items-center justify-center px-4">
        {/* Left Section */}
        <div className="flex items-center space-x-[1050px]">
          <h2 className="text-2xl text-[#252B42] font-bold">Shop</h2>
          <nav>
            <ul className="flex text-[#252B42] space-x-6">
              <li>
                <Link href="/">
                  Home 
                </Link>
                
              </li>
              <li>
                <Link href="#">
                  Shop
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Right Section (Optional) */}
        {/* You can add more elements here, such as a search bar or user profile */}
      </div>
    </header>
    <ImageGallery/>
    <Logos/>
    <Cart2/>
    
   
    </div>








      
    );
  };

export default Page
