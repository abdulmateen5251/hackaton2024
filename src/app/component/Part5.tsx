import React from 'react'; 
import Image from "next/image";

const Part5: React.FC = () => {
  return (
    <div className="carousel-item relative w-full h-[709px] bg-[#ffffff] bg-cover bg-center flex items-center">

      {/* Image on the left */}
      <div className="flex-1 flex justify-center items-center">
        <Image
          src="/part5.png"
          alt="description"
          width={725}
          height={774}
          className=" mt"
        />
      </div>

      {/* Text Content on the right */}
      <div className="flex-1  ml-24 text-left space-y-4 p-8">
        <h2 className="text-1xl  text-[#BDBDBD] font-bold">SUMMER 2020</h2>
        <h3 className="text-4xl font-bold   text-[#252B42]font-bold">Part of the Neural  <br /> 
        Universe</h3>
        <p className="text-lg text-[#BDBDBD]">
        We know how large objects will act,  <br /> 
        but things on a small scale.
        </p>
        <button className="mt-4 px-6 py-2 bg-[#2DC071] text-white font-semibold rounded-lg hover:bg-green-900 transition">
            ADD TO CART
          </button>

          <button className="mt-4 px-6 py-2 ml-[10px] bg-[#ffffff] text-[#2DC071] font-semibold rounded-lg hover:bg-green-900 transition">
          READ MORE
          </button>
        </div>
      </div>

    
  );
};

export default Part5;
