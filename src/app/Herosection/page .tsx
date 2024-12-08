// Import the Image component from Next.js


import Image from "next/image";




const HeroSection = () => {
  return (
    <div className="w-[1440px] h-[650px] bg-[#ff1294]">
    <div className="relative pt-8  text-gray-600 body-font w-[1439px] h-[716px] mx-10">
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
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex mt-[100px] flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className={`font-medium  w-[122px]  h-[24px] text-white`}>
          SUMMER 2020
          </p>
          <h1 className=" w-[565px] h-[80px] title-font sm:text-6xl text-3xl mb-4 mt-5 font-medium text-white">
          NEW COLLECTION
          </h1>
          <p className="mb-8 leading-relaxed mt[35px] text-2xl  text-white">
          We know how large objects will act, 
          but things on a small scale.
          </p>
          <div className="flex w-full mt[35px] md:justify-start justify-center items-end">
            
            </div>
            <button className="w-[288px] h-[62px] inline-flex text-4xl justify-center text-white bg-[#2DC071] border-0 py-2 px-6 focus:outline-none hover:bg-[#ff1294] rounded ">
            SHOP NOW
            </button>
          </div>
        </div>
      </div>
      </div>
  
  );
};

export default HeroSection;
