import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterLinkSection = ({ title, links }: { title: string; links: string[] }) => (
  <div className="flex flex-col gap-3">
    <h2 className="font-bold text-sm text-[#252B42]">{title}</h2>
    <nav className="flex flex-col gap-2">
      {links.map((item) => (
        <Link 
          key={item} 
          href="#" 
          className="text-[#737373] hover:text-[#252B42] transition-colors text-sm md:text-base"
        >
          {item}
        </Link>
      ))}
    </nav>
  </div>
);

const Footer: React.FC = () => {
  const footerSections = {
    "Company Info": ['About Us', 'Careers', 'We Are Hiring', 'Blog'],
    "Legal": ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'],
    "Features": ['Business Marketing', 'User Analytics', 'Live Chat', 'Unlimited Support'],
    "Resources": ['iOS & Android', 'Watch a Demo', 'Customers', 'API']
  };

  return (
    <footer className="w-full bg-white">
      <div className="max-w-[1050px] mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 md:py-8 gap-4">
          <h1 className="text-xl md:text-2xl text-[#252B42] font-bold">
            <Link href="/">Bandage</Link>
          </h1>
          <div className="flex gap-4 md:gap-7 text-[#23A6F0]">
            <FaFacebook className="text-xl md:text-2xl hover:text-blue-700 cursor-pointer transition-colors" />
            <FaInstagram className="text-xl md:text-2xl hover:text-pink-600 cursor-pointer transition-colors" />
            <FaTwitter className="text-xl md:text-2xl hover:text-blue-400 cursor-pointer transition-colors" />
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Main Footer Content */}
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {/* Footer Link Sections */}
            {Object.entries(footerSections).map(([title, links]) => (
              <FooterLinkSection key={title} title={title} links={links} />
            ))}

            {/* Get In Touch Section */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <h2 className="font-bold text-sm text-[#252B42] mb-3">Get In Touch</h2>
              <p className="text-[#737373] mb-4 text-sm md:text-base">Lore imp sum dolor Amit</p>
              <form className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-2 py-3  border border-[#737373] rounded-md sm:rounded-r-none focus:outline-none focus:border-[#252B42] text-sm md:text-base"
                />
                <button 
                  type="submit"
                  className="px-2 py-3 bg-[#252B42] text-white rounded-md sm:rounded-l-none hover:bg-[#3e3e3e] transition-colors text-sm md:text-base"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-4 md:py-6 border-t border-gray-200">
          <p className="text-[#737373] text-xs md:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Made With Love By Finland. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;