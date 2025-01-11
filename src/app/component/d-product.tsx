import React from "react";
import Image from "next/image";
import { HiOutlineChevronRight } from "react-icons/hi";

const CardLayout: React.FC = () => {
  // Array for top tabs
  const tabs = ["Description", "Additional Information", "Reviews (0)"];

  // Middle column paragraphs
  const middleParagraphs = [
    "Met minim Mollie non deserunt Alamo est sit  cliquey dolor do est nost. RELIT official consequent door ENIM RELIT Mollie. Excitation varial consequent sant nostrum met.",
    "Met minim Mollie non deserunt Alamo est sit cliquey dolor do est nost. RELIT official consequent door ENIM RELIT Mollie. Excitation varial consequent sant nostrum met.",
    "Met minim Mollie non deserunt Alamo est sit cliquey dolor do est nost. RELIT official consequent door ENIM RELIT Mollie. Excitation varial consequent sant nostrum met.",
  ];

  // Right column data (each item has a heading + list of bullet points)
  const rightColumnData = [
    {
      title: "the quick fox jumps over",
      items: [
        "the quick fox jumps over the lazy dog",
        "the quick fox jumps over the lazy dog",
        "the quick fox jumps over the lazy dog",
        "the quick fox jumps over the lazy dog",
      ],
    },
    {
      title: "the quick fox jumps over",
      items: [
        "the quick fox jumps over the lazy dog",
        "the quick fox jumps over the lazy dog",
        "the quick fox jumps over the lazy dog",
        "the quick fox jumps over the lazy dog",
      ],
    },
  ];

  return (
    <div>
      {/* Top Tabs */}
      <div className="max-w-[1051px] mx-auto p-4 mt-16 mb-8 h-[72] flex justify-evenly items-center text-center font-semibold text-[#737373] text-[14px]">
        {tabs.map((tab, index) => (
          <h2 key={index}>{tab}</h2>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">

        {/* Left Section */}
        <div className="flex flex-col space-y-6">
          <div className="relative w-[332px] h-[392px] rounded-lg overflow-hidden">
            <Image
              src="/despic.png"
              alt="Product1"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col space-y-8 bg-[#ffffff]">
          <h2 className="text-[24px] font-bold w-[332px] text-[#252B42] tracking-[0.1px] leading-[32px]">
            the quick fox jumps over
          </h2>
          {middleParagraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-[#737373] text-[14px] font-normal tracking-[0.2px] leading-[20px] overflow-hidden"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-8 bg-[#ffffff]">
          {rightColumnData.map((block, index) => (
            <div key={index}>
              <h2 className="text-[24px] font-bold mb-4 text-[#252B42] tracking-[0.1px] leading-[32px]">
                {block.title}
              </h2>
              <ul className="grid grid-cols-1 gap-2">
                {block.items.map((item, i) => (
                  <li className="flex items-center" key={i}>
                    <span className=" text-[#737373]"><HiOutlineChevronRight /></span>
                    <span className=" ml-2 text-[14px] tracking-[0.2px] leading-[24px] text-[#737373]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
