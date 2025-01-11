import React from 'react';
import Image from "next/image";

const Vita: React.FC = () => {
  return (
    <div className="carousel-item relative w-full h-[709px] bg-[#23856D] bg-cover bg-center">
      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col md:flex-row p-6 items-center md:items-start">
        {/* Text Section */}
        <div className="text-white text-left space-y-4 mx-auto md:ml-24 w-full md:w-[509px] h-auto md:h-[432px] mt-10 md:mt-56">
          <h2 className="text-lg md:text-xl font-bold">SUMMER 2020</h2>
          <h3 className="text-2xl md:text-4xl font-bold leading-tight">
            Vita Classic <br /> Product
          </h3>
          <p className="text-sm md:text-lg">
            We know how large objects will act, We know <br /> how objects will act, We know
          </p>
          <div className="text-lg md:text-2xl font-bold">
            <span className="text-[#FFFFFF]-500">$16.48</span>
            <button className="mt-4 ml-4 px-4 md:px-6 py-2 bg-[#2DC071] text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end items-center w-full md:w-auto mt-6 md:mt-[115px]">
          <Image
            src="/greenman.png"
            alt="description"
            width={443}
            height={685}
            className="w-[300px] md:w-[443px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Vita;
