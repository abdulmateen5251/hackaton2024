'use client'

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import ContactCards from '../component/contactcard';

function Contact() {
  return (
    <>
      <div className="max-w-[1050px] h-[91px]  bg-[#FFFFFF]  mx-auto flex items-center">
          <div>
            <Link href="/"><h1 className="text-[24px] font-bold ">Bandage</h1></Link>
          </div>
          <div className="flex justify-between w-[100%] items-center ml-20">
            <div className="flex gap-[15px] text-[15px] font-bold text-[#737373] ">
              <Link href="/">Home</Link>
              <Link href="/Product-list">Product</Link>
              <Link href="pricing">Pricing</Link>
              <Link href="#">Contact</Link>
            </div>
            <div>
              <Link
                href="#"
                className="text-[15px] font-bold pl-10 text-[#23A6F0] mr-10"
              >
                Login
              </Link>
              <button className="bg-[#23A6F0] text-white rounded-[5px] w-[214px] h-[52px] font-bold text-[15px]">
                Become a member
              </button>
            </div>
          </div>
        </div>
      {/* About Section */}
      <section className="py-24 w-full max-w-7xl mx-auto ">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-10 pl-28">
            <div className="w-full flex flex-col justify-start items-start gap-4">
              <p className="text-[#252B42] text-base font-bold leading-relaxed">
              CONTACT US
              </p>
              <h2 className="text-[#252B42] text-5xl font-bold font-manrope leading-normal">
              Get in touch<br/> 
              today!
              </h2>
              <p className="text-[#737373] text-base font-normal leading-relaxed">
              We know how large objects will act,<br/> 
              but things on a small scale
              </p>
            </div>
            <h3 className='font-bold text-[24px] tracking-[0.1px] leading-[32px] text-[#252B42]   '>Phone ; +451 215 215 </h3>
            <h3 className='font-bold text-[24px] tracking-[0.1px] leading-[32px] text-[#252B42]   '>Fax : +451 215 215</h3>
           
            <div className="w-[242px] h-[50px] justify-between text-[#252B42]  flex   mt-[20px]     ">
                    <FaTwitter className="w-[30px] h-[30px] " />
                    <FaFacebookSquare className="w-[30px] h-[30px] "/>
                    <FaInstagram className="w-[30px] h-[30px] "/>
                    <FaLinkedin className="w-[30px] h-[29.88px] "/>
          
                    </div>
          </div>
          

          {/* Image Component */}
          <div className="w-[800px] h-auto lg:w-1/2 relative aspect-[4/3]">
            <Image
              src="/contact1.png"
              alt="About Us"
              width={800}
              height={800}
              className="object-cover "
            />
          </div>
        </div>
      </section>
     <div className='p-20 '>
     <div className='max-w-[625px] h-[140px] mx-auto text-center '>
        <h6 className='font-bold text-[#252B42] text-[14px] tracking-[0.2px] mb-3 leading-[24px]  '>VISIT OUR OFFICE</h6>
        <h2 className='font-bold text-[#252B42] text-[40px] tracking-[0.2px] leading-[50px]   '>We help small businesses 
        with big ideas</h2>
      </div>
     </div>
{/* contact card start */}
    <ContactCards/>
      {/* contact card end */}

{/* lets talk start */}
<div className="w-full max-w-[1050px] mx-auto  flex flex-col items-center gap-4 p-[70px]">
      {/* Arrow Image */}
      <div className="relative w-[100px] h-[50px] mb-2">
        <Image
          src="/arrow2.png"  // Make sure to add this image to your public folder
          alt="Down Arrow"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Text content */}
      <div className="text-center">
        <p className="text-[#252B42] text-[15px] font-bold leading-[24px] tracking-[0.1px] mb-2">WE CAN&apos;T WAIT TO MEET YOU</p>
        <h2 className="text-[#252B42] text-[58px] font-bold leading-[80px] tracking-[0.2px] mb-4 relative">
          Let&apos;s Talk
          
        </h2>
      </div>

      {/* Button */}
      <button className="w-[186px] h-[52px] bg-[#23A6F0] leading-[22px] tracking-[0.2px] text-[14px] font-bold text-white px-6 py-2 rounded-[5px] hover:bg-[#252B42] transition-colors duration-300">
        Try it free now
      </button>
    </div>
{/* lets talk end */}
    </>
  );
}

export default Contact;