import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const BlogSection = () => {
  const teamMembers = [
    { id: 1, image: '/pic1.jpg', alt: 'Team Member 1' },
    { id: 2, image: '/pic2.jpg', alt: 'Team Member 2' },
    { id: 3, image: '/pic3.jpg', alt: 'Team Member 3' },
  ];

  return (
    <section className="max-w-[1034px] mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-[#252B42] mb-4">Meet Our Team</h2>
        <p className="text-sm font-semibold text-[#737373]">
          Problems trying to resolve the conflict between<br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] mb-6">
              <Image
                src={member.image}
                alt={member.alt}
                fill
                priority
                className="object-cover rounded-lg"
              />
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#252B42] mb-2">
                Username
              </h3>
              <p className="text-[#737373] mb-4">
                Profession
              </p>
              <div className="flex justify-center space-x-6 text-[#23A6F0]">
                <FaFacebook className="w-6 h-6 hover:text-blue-700 cursor-pointer" />
                <FaInstagram className="w-6 h-6 hover:text-pink-600 cursor-pointer" />
                <FaTwitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;