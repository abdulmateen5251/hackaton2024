/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import Team from "../component/team-user";
import Freetrial from "../component/freetrial";



const ImageGrid = () => {
  return (
    <>
{/* header start */}
<div className=" ">
        <div className="max-w-[1050px] h-[91px]  bg-[#FFFFFF]  mx-auto flex items-center">
          <div>
            <Link href="/"><h1 className="text-[24px] font-bold ">Bandage</h1></Link>
          </div>
          <div className="flex justify-between w-[100%] items-center ml-20">
            <div className="flex gap-[15px] text-[15px] font-bold text-[#737373] ">
              <Link href="/">Home</Link>
              <Link href="/Product-list">Product</Link>
              <Link href="pricing">Pricing</Link>
              <Link href="/Contact">Contact</Link>
            </div>
            <div>
              <Link
                href="#"
                className="text-[15px] font-bold pl-10 text-[#23A6F0] mr-10"
              >
                Login
              </Link>
              <button className="bg-[#23A6F0] text-white rounded-[5px] w-[214px] h-[52px] font-bold text-[15px]">
                Become a member
              </button>
            </div>
          </div>
        </div>
        {/* header end */}
        {/* Innovation tailored for you*/}
        <div className="max-w-[1050px]  h-[280px] mx-auto bg-[#FFFFFF] items-center text-center">
          <p className="text-[16px] font-bold p-10 text-[#737373] ">WHAT WE DO</p>
          <h1 className="text-[58px] tracking-[0.2px] font-bold text-[#252B42]">
          Innovation tailored for you
          </h1>
          <div className="flex justify-center items-center gap-8 p-10 font-bold">
            <Link href="/"><p className="text-[#252B42] text-[15px]">Home</p></Link>
            <IoIosArrowForward className="text-[20px] text-[#BDBDBD]   " />
            <Link href="/team"><p className="text-[#737373] text-[15px]">Team</p> </Link>
          </div>
        </div>
      </div>


{/*Innovation tailored for you end */}
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 max-w-6xl mx-auto">
        {/* Large Image */}
        <div className="w-full h-full">
          <img
            src="/team1.png"
            alt="Team photo 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Grid of Smaller Images */}
        <div className="grid grid-cols-2 gap-2">
          <div className="w-full">
            <img
              src="/team2.png"
              alt="Team photo 2"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="w-full">
            <img
              src="/team3.png"
              alt="Team photo 3"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="w-full">
            <img
              src="/team4.png"
              alt="Team photo 4"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="w-full">
            <img
              src="/team5.png"
              alt="Team photo 5"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </div>

<div>
  <Team/>
</div>
<Freetrial/>
     
    </>
  );
};

export default ImageGrid;