import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-[1050px] h-[770px] mx-auto mt-14 bg-[#FFFFFF]">
      <div className="w-[670px] h-[62px] bg-[#FFFFFF] mx-auto text-center pt-[32px]">
        <h2 className="font-semibold text-[24px]">EDITOR’S PICK</h2>
        <p className="font-medium text-[14px] text-center text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="w-[1050px] h-[500px] mx-auto bg-[#FFFFFF] mt-[48px]">
        <div className=" gap-5 p-1 flex">
          <Image
            src="/media-bg-cover.png"
            alt="Filter image"
            width={510}
            height={500}
          />
          <Image
            src="/filter.png"
            alt="Background image 1"
            width={240}
            height={500}
          />
          <div>
          <Image
            src="/media-bg-cover1.png"
            alt="Background image 2"
            width={240}
            height={242}
          />
          <br/>
          <Image
            src="/filter1.png"
            alt="Background image 3"
            width={240}
            height={242}
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
