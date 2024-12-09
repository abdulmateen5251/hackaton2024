import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-[#737373] body-font bg-[#ffffff]">
      <div className='w-[1440px] h-[142px] flex text-3xl  text-[#252B42] bg-[#ffffff] '><h1 className='ml-[95px] mt-[71px]'>Bandage </h1>
      <div className='flex ml-[900px] mt-[71px] gap-7 text-[#23A6F0]'>  <FaFacebook/><FaInstagram /><FaTwitter /></div>
      </div>
      <hr/>





      <div className='w-[1440px] h-[272px]'>
        

        
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          {/* Company Info */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font text-[#252B42] font-bold tracking-widest text-sm mb-3">
              Company Info
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="text-[#737373] hover:text-[#252B42]">About Us</a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#252B42]">Careers</a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#252B42]">We Are Hiring</a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#252B42]">Blog</a>
              </li>
            </nav>
          </div>

          {/* Legal */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font text-[#252B42] font-bold tracking-widest text-sm mb-3">
              Legal
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="text-[#737373] hover:text-[#252B42]">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#252B42]">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#252B42]">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#252B42]">Disclaimer</a>
              </li>
            </nav>
          </div>

          {/* Features */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font text-[#252B42] font-bold tracking-widest text-sm mb-3">
              Features
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="text-[#737373] hover:text-[#252B42]">Business Marketing</a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#252B42]">User Analytics</a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#252B42]">Live Chat</a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#252B42]">Unlimited Support</a>
              </li>
            </nav>
          </div>

          {/* Resources */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font text-[#252B42] font-bold tracking-widest text-sm mb-3">
              Resources
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="text-[#737373] hover:text-[#252B42]">iOS & Android</a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#252B42]">Watch a Demo</a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#252B42]">Customers</a>
              </li>
              <li>
                <a href="#" className="text-[#737373] hover:text-[#252B42]">API</a>
              </li>
            </nav>
          </div>

         
          

        

          {/* Subscribe */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
          <h2 className="title-font text-[#252B42] font-bold tracking-widest text-sm mb-3">
          Get In Touch
            </h2>
            <p className="text-[#737373] mb-4">Lore imp sum dolor Amit</p>
            <div className="flex w-[321px] h-[58px]">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-6 py-2 border border-[#737373] rounded-l-md focus:outline-none"
              />
              <button className="px-4 py-2 bg-[#252B42] text-[#ffffff] rounded-r-md hover:bg-[#3e3e3e]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="border-gray-300" />
      <div className="bg-[#ffffff] ">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center">
          <p className="text-[#363738] text-sm sm:text-left">
            &copy; {new Date().getFullYear()} Made With Love By Finland. All Rights Reserved.
          </p>
          {/* Optional: Social Media Icons */}
         
        </div>
      </div>
      </div>
    </footer>
    
  );
}

export default Footer;
