'use client'

import React from 'react';
import Image from 'next/image';

import Link from 'next/link'; 
import BlogSection from '../component/Pic-galary';
import Logos from '../component/Logos';
import Work from '../component/Work-with';



const About: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo */}
          <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-[#252B42] text-2xl">Bandage</span>
          </Link>

          {/* Navigation */}
          <nav className="md:ml-auto mr-10 md:mr-auto flex flex-wrap items-center text-base justify-center gap-9">
            <Link href="/" className="mr-5 font-bold hover:text-gray-900">
              Home
            </Link>
            <Link href="/Product-list" className="font-semibold hover:text-gray-900">
              Product
            </Link>
            <Link href="/pricing" className="mr-5 font-bold hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/Contact" className="mr-5 font-bold hover:text-gray-900">
              Contact
            </Link>
          </nav>

          {/* User Actions */}
          <div className="mr-7">
            <Link href="#" className="text-[#23A6F0] hover:text-indigo-700">
              Login
            </Link>
          </div>
          <Link href="#">
            <button className="bg-[#23A6F0] w-[214px] h-[52px] text-[#ffffff] rounded-md hover:bg-indigo-700 transition-colors duration-300">
              Become a Member
            </button>
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section className="py-24 w-full max-w-7xl mx-auto">
        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-8">
          {/* Text Content */}
          <div className="w-full flex flex-col lg:flex-1 ml-10 justify-start items-start gap-10">
            <div className="w-full flex flex-col justify-start items-start gap-4">
              <p className="text-[#252B42] text-base font-bold leading-relaxed">
                ABOUT COMPANY
              </p>
              <h2 className="text-[#252B42] text-5xl font-bold font-manrope leading-normal">
                ABOUT US
              </h2>
              <p className="text-[#737373] text-base font-normal leading-relaxed">
                We know how large objects will act,<br />
                but things on a small scale
              </p>
            </div>
            <Link href="/get-started">
              <button className="sm:w-fit w-full px-3.5 py-2 bg-[#23A6F0] hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-lg flex justify-center items-center">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Get Started
                </span>
              </button>
            </Link>
          </div>

          {/* Image Component */}
          <div className="flex justify-center items-center">
            <Image
              src="/none.png"
              alt="About Us"
              width={600}
              height={500}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="w-full bg-white flex justify-center items-center py-12">
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-start border border-transparent">
          {/* Text Content */}
          <div className="flex-1">
            <h1 className='text-left text-2xl font-bold mt-6 text-[#252B42]'>
              <span className='mb-4 text-[#E74040] font-medium block'>Problems trying</span>
              Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do <br /> met sent.
            </h1>
            <p className='text-[#737373] mt-4'>
              Problems trying to resolve the conflict between the two major realms of <br /> Classical physics: Newtonian mechanics 
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto flex justify-center">
          <div className="flex flex-wrap justify-center gap-8">
            {/* Category Card 1 */}
            <div className="w-56 h-40 bg-white border border-transparent rounded-lg shadow-lg">
              <div className="h-full px-8 pt-16 pb-24 flex flex-col justify-center items-center">
                <h1 className="font-bold text-5xl text-[#252B42] mb-3">15K</h1>
                <p className="leading-relaxed text-[#737373]">Happy Customers</p>
              </div>
            </div>

            {/* Category Card 2 */}
            <div className="w-56 h-40 bg-white border border-transparent rounded-lg shadow-lg">
              <div className="h-full px-8 pt-16 pb-24 flex flex-col justify-center items-center">
                <h1 className="font-bold text-5xl text-[#252B42] mb-3">150K</h1>
                <p className="leading-relaxed text-[#737373]">Monthly Visitors</p>
              </div>
            </div>

            {/* Category Card 3 */}
            <div className="w-56 h-40 bg-white border border-transparent rounded-lg shadow-lg">
              <div className="h-full px-8 pt-16 pb-24 flex flex-col justify-center items-center">
                <h1 className="font-bold text-5xl text-[#252B42] mb-3">15</h1>
                <p className="leading-relaxed text-[#737373]">Countries Worldwide</p>
              </div>
            </div>

            {/* Category Card 4 */}
            <div className="w-56 h-40 bg-white border border-transparent rounded-lg shadow-lg">
              <div className="h-full px-8 pt-16 pb-24 flex flex-col justify-center items-center">
                <h1 className="font-bold text-5xl text-[#252B42] mb-3">100+</h1>
                <p className="leading-relaxed text-[#737373]">Top Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto flex justify-center">
          <div className="w-full max-w-4xl">
            <Image
              src="/video.png"
              alt="description"
              width={989}
              height={540}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full bg-white py-24">
        <BlogSection />
      </section>

      {/* Meet Our Team Section */}
      <section className="w-full py-16 bg-white">
        <div className="w-full max-w-3xl mx-auto text-center">
          <h2 className="font-bold text-[#252B42] text-4xl mb-4">Meet Our Team</h2>
          <p className="text-[14px] font-semibold text-[#737373]">
            Problems trying to resolve the conflict between <br/>
            the two major realms of Classical physics: Newtonian mechanics 
          </p>
        </div>
        <Logos />
      </section>

      {/* Work With Us Section */}
      <section className="w-full py-24 bg-white">
        <Work />
      </section>
    </div>
  );
};

export default About;
