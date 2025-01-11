import React from 'react';
import Image from "next/image";

const Neural = () => {
  return (
    <div className="w-full min-h-[709px] bg-white flex flex-col lg:flex-row items-center p-4 lg:p-8">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
        <div className="relative w-full max-w-[725px] aspect-[725/774]">
          <Image
            src="/part5.png"
            alt="Neural Universe Product"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col space-y-6 p-4 lg:p-8">
        <span className="text-base lg:text-lg text-gray-400 font-bold">
          SUMMER 2020
        </span>
        
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold">
          Part of the Neural <br className="hidden lg:block" />
          Universe
        </h2>
        
        <p className="text-base lg:text-lg text-gray-400">
          We know how large objects will act, <br className="hidden lg:block" />
          but things on a small scale.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="px-6 py-3 bg-[#2DC071] text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200">
            ADD TO CART
          </button>
          
          <button className="px-6 py-3 border border-[#2DC071] text-[#2DC071] font-semibold rounded-lg hover:bg-green-50 transition-colors duration-200">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Neural;