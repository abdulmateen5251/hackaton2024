import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoryButtonProps {
  text: string;
}

interface ImageContainerProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  buttonText: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ text }) => (
  <Link href="/team"><button className=" text-[#252B42] font-bold  absolute bottom-4 md:bottom-8 left-4 md:left-8 bg-white px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm hover:bg-[#00b7e0] transition-colors">
    {text}
  </button></Link>
);

const ImageContainer: React.FC<ImageContainerProps> = ({ src, alt, width, height, buttonText }) => (
  <div className="relative w-full">
    <Image 
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="object-cover w-full h-full"
    />
    <CategoryButton text={buttonText} />
  </div>
);

const EDITOR: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-14 max-w-[1050px]">
      {/* Header */}
      <div className="max-w-[670px] mx-auto text-center mb-8 md:mb-12">
        <h2 className="font-semibold text-xl md:text-2xl mb-2">EDITOR&apos;S PICK</h2>
        <p className="font-medium text-sm md:text-base text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
        {/* Men's Section - Spans 6 columns on large screens */}
        <div className="lg:col-span-6 h-[400px] md:h-[500px]">
          <ImageContainer 
            src="/media-bg-cover.png"
            alt="Men's Fashion"
            width={510}
            height={500}
            buttonText="MEN"
          />
        </div>

        {/* Women's Section - Spans 3 columns on large screens */}
        <div className="lg:col-span-3 h-[400px] md:h-[500px]">
          <ImageContainer 
            src="/filter.png"
            alt="Women's Fashion"
            width={240}
            height={500}
            buttonText="WOMEN"
          />
        </div>

        {/* Accessories and Kids Section - Spans 3 columns on large screens */}
        <div className="lg:col-span-3 grid grid-rows-2 gap-4">
          <div className="h-[200px] md:h-[242px]">
            <ImageContainer 
              src="/media-bg-cover1.png"
              alt="Accessories"
              width={240}
              height={242}
              buttonText="ACCESSORIES"
            />
          </div>
          <div className="h-[200px] md:h-[242px]">
            <ImageContainer 
              src="/filter1.png"
              alt="Kids Fashion"
              width={240}
              height={242}
              buttonText="KIDS"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EDITOR;