"use client";

import React from "react";

import Herosection from "./Herosection/page";

import Vita from "./component/vita";

import Header from "./component/Header";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Loudest from "./component/Loudest";
import Neural from "./component/Neural-Universe";
import EDITOR from "./component/EDITOR";
import GraphicDesign from "./component/Graphic-Design";

function page() {
  return (
    <div>
      <div className="flex items-center justify-between h-12 w-full bg-black px-5">
        {/* Contact Information with Icons */}
        <div className="flex items-center space-x-6">
          <Link href="tel:+12255550118" passHref>
            <div className="flex items-center text-white text-sm hover:text-gray-400">
              <FaPhoneAlt className="mr-2" />
              +923152983545
            </div>
          </Link>
          <Link href="mailto:abdulmateen5251@gmail.com" passHref>
            <div className="flex items-center text-white text-sm hover:text-gray-400">
              <FaEnvelope className="mr-2" />
              abdulmateen5251@gmail.com
            </div>
          </Link>
        </div>

        {/* Promotional Message */}
        <div className="hidden md:flex items-center space-x-4 text-white text-sm">
          <span>Follow Us and get a chance to win 80% off</span>
          <span>Follow Us :</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <Link href="#" passHref>
            <div
              aria-label="Facebook"
              className="text-white hover:text-gray-400"
            >
              <FaFacebookF />
            </div>
          </Link>
          <Link href="#" passHref>
            <div
              aria-label="Twitter"
              className="text-white hover:text-gray-400"
            >
              <FaTwitter />
            </div>
          </Link>
          <Link href="#" passHref>
            <div
              aria-label="Instagram"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram />
            </div>
          </Link>
        </div>
      </div>
      <Header />
      <Herosection />

      <EDITOR />
      <GraphicDesign />
      <Vita />
      <Neural />
      <Loudest />
    </div>
  );
}

export default page;
