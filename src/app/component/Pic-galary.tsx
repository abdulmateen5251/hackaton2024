// components/BlogSection.tsx

import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const BlogSection: React.FC = () => {
  return (
    <section className=" w-[1440px] h-[826px]  ">
        <div className="w-[670px] h-[100px] bg-[#FFFFFF] mx-auto  text-center ">
        <h2 className="font-bold text-[#252B42] text-[40px]">Meet Our Team</h2>
        <p className=" text-[14px] font-semibold text-center text-[#737373]">
        Problems trying to resolve the conflict between <br/>
        the two major realms of Classical physics: Newtonian mechanics 
        </p>
      </div>
      <div className="container px-5 py-24 mx-auto w-[1080px] h-[819px]">
        <div className="flex flex-wrap -m-4 ">
          
          {/* Blog Post 1 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full ">
              <div className="relative w-[316px] h-[231px]">
                <Image
                  src="/pic1.jpg" // Ensure leading slash
                  alt="The 400 Blows"
                  fill // Updated prop
                  style={{ objectFit: 'cover' }} // Updated prop
                  
                  priority
                />
              </div>
              <div className="p-6 text-center">
                
                <h1 className="text-[20px]  font-bold text-[#252B42] mb-3">
                Username
                </h1>
                <p className="leading-relaxed text-[#737373] mb-3">
                Profession
                </p>
                <h2 className=" flex text-[#23A6F0] text-2xl gap-6 ml-20 mb-1">
                <FaFacebook /><FaInstagram /><FaTwitter />
                </h2>
                
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full ">
              <div className="relative w-[316px] h-[231px]">
                <Image
                  src="/pic2.jpg" // Ensure leading slash
                  alt="The 400 Blows"
                  fill // Updated prop
                  style={{ objectFit: 'cover' }} // Updated prop
                  
                  priority
                />
              </div>
              <div className="p-6 text-center">
                
                <h1 className="text-[20px]  font-bold text-[#252B42] mb-3">
                Username
                </h1>
                <p className="leading-relaxed text-[#737373] mb-3">
                Profession
                </p>
                <h2 className=" flex text-[#23A6F0] text-2xl gap-6 ml-20 mb-1">
                <FaFacebook /><FaInstagram /><FaTwitter />
                </h2>
                
              </div>
            </div>
          </div>


          {/* Blog Post 3 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full ">
              <div className="relative w-[316px] h-[231px]">
                <Image
                  src="/pic3.jpg" // Ensure leading slash
                  alt="The 400 Blows"
                  fill // Updated prop
                  style={{ objectFit: 'cover' }} // Updated prop
                  
                  priority
                />
              </div>
              <div className="p-6 text-center">
                
                <h1 className="text-[20px]  font-bold text-[#252B42] mb-3">
                Username
                </h1>
                <p className="leading-relaxed text-[#737373] mb-3">
                Profession
                </p>
                <h2 className=" flex text-[#23A6F0] text-2xl gap-6 ml-20 mb-1">
                <FaFacebook /><FaInstagram /><FaTwitter />
                </h2>
                
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default BlogSection;
