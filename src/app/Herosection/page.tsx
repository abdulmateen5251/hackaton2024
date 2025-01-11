'use client'

// Import the Image component from Next.js


import Image from "next/image";




const HeroSection = () => {
  return (  
    
    <div className="relative   text-gray-600 body-font w-auto h-[716px]  ">
      {/* Background Image */}
      <Image 
        src="/herobgimage.jpg" // Ensure this path is correct in your public directory
        alt="Hero Background"
        layout="fill" // Fills the parent container
        objectFit="cover" // Ensures the image covers the container
        quality={100} // Adjust quality as needed
        className="z-0"
       />

      {/* Overlay to add a semi-transparent layer over the background image */}
      <div className="absolute inset-0 bg-black opacity-0 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Text and Buttons */}
       <div className="flex flex-col justify-items-center items-center p-32 ">
       <div className=" flex  flex-col  text-start gap-10 ">
          <p className="font-bold text-[16px] tracking-[0.1px] leading-[24px]   text-white">
          SUMMER 2020
          </p>
          <h1 className=" font-bold text-[58px] tracking-[0.2px] leading-[80px] text-white">
          NEW COLLECTION
          </h1>
          <p className=" leading-[30px] text-[20px] font-normal tracking-[0.2px] text-white">
          We know how large objects will act,<br/> 
          but things on a small scale.
          </p>
          
            <button className="w-[221px] h-[62px]  text-white bg-[#2DC071] border-none hover:bg-[#ff1294] rounded-[6px]">
            SHOP NOW
            </button>
          </div>
       </div>
        </div>
      </div>
     
  
  );
};

export default HeroSection;
