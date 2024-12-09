// 'use client';
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between h-12 w-full bg-black px-5">
      {/* Contact Information with Icons */}
      <div className="flex items-center space-x-6">
        <a
          href="tel:+12255550118"
          className="flex items-center text-white text-sm hover:text-gray-400"
        >
          <FaPhoneAlt className="mr-2" />
          (225) 555-0118
        </a>
        <a
          href="mailto:michelle.rivera@example.com"
          className="flex items-center text-white text-sm hover:text-gray-400"
        >
          <FaEnvelope className="mr-2" />
          michelle.rivera@example.com
        </a>
      </div>

      {/* Promotional Message */}
      <div className="hidden md:flex items-center space-x-4 text-white text-sm">
        <span>Follow Us and get a chance to win 80% off</span>
        <span >Follow Us :</span>
        
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center space-x-4">
        <a
          href="#"
          aria-label="Facebook"
          className="text-white hover:text-gray-400"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="text-white hover:text-gray-400"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="text-white hover:text-gray-400"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
