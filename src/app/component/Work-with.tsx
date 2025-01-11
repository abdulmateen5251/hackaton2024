// components/ProductDetailUI.js

import React from 'react';
import Image from 'next/image';

const Work = () => {
  return (
    <section className="w-auto h-[636] bg-[#2A7CC7] ">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Product Information */}
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            
            {/* Product Title */}
            <h2 className="text-[#FAFAFA] text-base font-semibold leading-relaxed lg:text-start text-center">
            WORK WITH US
            </h2>
            <h1 className="text-[#ffffff] text-5xl font-bold font-manrope leading-normal lg:text-start text-center">
            Now Let’s grow Yours
            </h1>
           
            
            {/* Product Description */}
            <p className="text-[#FAFAFA] text-base font-normal leading-relaxed lg:text-start text-center">
            The gradual accumulation of information about atomic and <br/> small-scale behavior during the first quarter of the 20th 
            </p>
            <button className=" mt-6 w-[132px] h-[52px] rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#FAFAFA] hover:text-white  hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
             
              Button
              
            </button>
           
            
           
          </div>
          {/* Product Image */}
          <div className=" w-[590px] h-[636px]  lg:w-1/2  lg:h-auto  object-cover object-center rounded">
            <Image
              alt=""
              src="/work1.png" // Replace with your image path
              width={590} // Adjust width as needed
              height={636} // Adjust height as needed
              className="object-cover object-center rounded"
              priority // Optional: for images that are above the fold
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
