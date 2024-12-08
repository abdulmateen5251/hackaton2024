import React from 'react';
import Image from "next/image";

const Vita: React.FC = () => {
  return (
    <div
      className="carousel-item relative w-[1440px] h-[709px] bg-[#23856D] bg-cover bg-center">
        
      <div className="absolute  inset-0 flex p-6">
      
        <div className="text-white  text-left space-y-4 ml-24  w-[509px] h-[432px] mt-56">
        
          <h2 className="text-1xl font-bold">SUMMER 2020</h2>
          <h3 className="text-4xl font-bold">Vita Classic <br/> Product</h3>
          <p className="text-lg">
            We know how large objects will act, We know <br/> how are objects will act, We know
          </p>
          
          <div className="text-2xl font-bold text-[#FFFFFF]-500">$16.48

          <button className="mt-4 ml-6 px-6 py-2 bg-[#2DC071] text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
            ADD TO CART
          </button>
            </div > 
            {/* <div className='bg-red-700  flex'>
            <Image
                  src="/greenman.png"
                  alt="description"
                  width={443}
                  height={685}
                  className="ml-[650px] mb-80 w-90 h-90"
                />
            </div> */}
        </div>
      </div>
      <div className="  flex" >
            <Image
                  src="/greenman.png"
                  alt="description"
                  width={443}
                  height={685}
                  className="ml-[650px] mb-80 w-90 mt-[115px] h-90"
                />
            </div>
    </div>
  );
};

export default Vita;
