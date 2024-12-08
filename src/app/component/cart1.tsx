import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cart1 = () => {
  return (
    <div><div className="w-[670px] h-[62px] bg-[#FFFFFF] mx-auto text-center pt-[32px] mb-[42px]">
     <h2 className=" text-[20px] text-center text-[#737373]">
     Featured Products
    </h2> 
    <h2 className="font-bold text-[#252B42] text-[24px]">BESTSELLER PRODUCTS</h2>
    <p className="font-medium text-[14px] text-center text-[#737373]">
    Problems trying to resolve the conflict between 
    </p>
  </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* First product */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="#" passHref>
                <div className="block relative rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/cart1.png"
                    width={239}
                    height={260}
                  />
                </div>
              </Link>
              <div className="mt-4">
              <h3 className="text-[#252B42]  text-center font-bold text-lg tracking-widest title-font mb-1">
                  Graphic Design
                </h3>
                <h2 className="text-[#737373]  text-center font-bold ">
                  English Department
                </h2>
                <p className="mt-1 text-[#BDBDBD] font-bold text-center">
                  $16.48 <span className="text-[#23856D]">$16.48</span>
                </p>
                <Image
                  src="/colors.png"
                  alt="description"
                  width={90}
                  height={50}
                  className="ml-[102px] mt-2 w-90 h-90"
                />
              </div>
            </div>

            {/* Second product */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="#" passHref>
                <div className="block relative rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/cart2.png"
                    width={239}
                    height={261}
                  />
                </div>
              </Link>
              <div className="mt-4">
              <h3 className="text-[#252B42]  text-center font-bold text-lg tracking-widest title-font mb-1">
                  Graphic Design
                </h3>
                <h2 className="text-[#737373]  text-center font-bold ">
                  English Department
                </h2>
                <p className="mt-1 text-[#BDBDBD] font-bold text-center">
                  $16.48 <span className="text-[#23856D]">$16.48</span>
                </p>
                <Image
                  src="/colors.png"
                  alt="description"
                  width={90}
                  height={50}
                  className="ml-[102px] mt-2 w-90 h-90"
                />
              </div>
            </div>

            {/* Third product */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="#" passHref>
                <div className="block relative rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/cart3.png"
                    width={239}
                    height={427}
                  />
                </div>
              </Link>
              <div className="mt-4">
              <h3 className="text-[#252B42]  text-center font-bold text-lg tracking-widest title-font mb-1">
                  Graphic Design
                </h3>
                <h2 className="text-[#737373]  text-center font-bold ">
                  English Department
                </h2>
                <p className="mt-1 text-[#BDBDBD] font-bold text-center">
                  $16.48 <span className="text-[#23856D]">$16.48</span>
                </p>
                <Image
                  src="/colors.png"
                  alt="description"
                  width={90}
                  height={50}
                  className="ml-[102px] mt-2 w-90 h-90"
                />
              </div>
            </div>

            {/* Fourth product */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="#" passHref>
                <div className="block relative rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/cart4.png"
                    width={239}
                    height={427}
                  />
                </div>
              </Link>
              <div className="mt-4">
              <h3 className="text-[#252B42]  text-center font-bold text-lg tracking-widest title-font mb-1">
                  Graphic Design
                </h3>
                <h2 className="text-[#737373]  text-center font-bold ">
                  English Department
                </h2>
                <p className="mt-1 text-[#BDBDBD] font-bold text-center">
                  $16.48 <span className="text-[#23856D]">$16.48</span>
                </p>
                <Image
                  src="/colors.png"
                  alt="description"
                  width={90}
                  height={50}
                  className="ml-[102px] mt-2 w-90 h-90"
                />
              </div>
            </div>

            {/* Fifth product */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="#" passHref>
                <div className="block relative rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/cart5.png"
                    width={239}
                    height={427}
                  />
                </div>
              </Link>
              <div className="mt-4">
              <h3 className="text-[#252B42]  text-center font-bold text-lg tracking-widest title-font mb-1">
                  Graphic Design
                </h3>
                <h2 className="text-[#737373]  text-center font-bold ">
                  English Department
                </h2>
                <p className="mt-1 text-[#BDBDBD] font-bold text-center">
                  $16.48 <span className="text-[#23856D]">$16.48</span>
                </p>
                <Image
                  src="/colors.png"
                  alt="description"
                  width={90}
                  height={50}
                  className="ml-[102px] mt-2 w-90 h-90"
                />
              </div>
            </div>

            {/* Sixth product */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="#" passHref>
                <div className="block relative rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/cart6.png"
                    width={239}
                    height={427}
                  />
                </div>
              </Link>
              <div className="mt-4">
              <h3 className="text-[#252B42]  text-center font-bold text-lg tracking-widest title-font mb-1">
                  Graphic Design
                </h3>
                <h2 className="text-[#737373]  text-center font-bold ">
                  English Department
                </h2>
                <p className="mt-1 text-[#BDBDBD] font-bold text-center">
                  $16.48 <span className="text-[#23856D]">$16.48</span>
                </p>
                <Image
                  src="/colors.png"
                  alt="description"
                  width={90}
                  height={50}
                  className="ml-[102px] mt-2 w-90 h-90"
                />
              </div>
            </div>

            {/* Seventh product */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="#" passHref>
                <div className="block relative rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/cart7.png"
                    width={239}
                    height={427}
                  />
                </div>
              </Link>
              <div className="mt-4">
              <h3 className="text-[#252B42]  text-center font-bold text-lg tracking-widest title-font mb-1">
                  Graphic Design
                </h3>
                <h2 className="text-[#737373]  text-center font-bold ">
                  English Department
                </h2>
                <p className="mt-1 text-[#BDBDBD] font-bold text-center">
                  $16.48 <span className="text-[#23856D]">$16.48</span>
                </p>
                <Image
                  src="/colors.png"
                  alt="description"
                  width={90}
                  height={50}
                  className="ml-[102px] mt-2 w-90 h-90"
                />
              </div>
            </div>

            {/* Eighth product */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="#" passHref>
                <div className="block relative  rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/cart8.png"
                    width={239}
                    height={427}
                  />
                </div>
              </Link>
              <div className="mt-4">
                <h3 className="text-[#252B42]  text-center font-bold text-lg tracking-widest title-font mb-1">
                  Graphic Design
                </h3>
                <h2 className="text-[#737373]  text-center font-bold ">
                  English Department
                </h2>
                <p className="mt-1 text-[#BDBDBD] font-bold text-center">
                  $16.48 <span className="text-[#23856D]">$16.48</span>
                </p>
                <Image
                  src="/colors.png"
                  alt="description"
                  width={90}
                  height={50}
                  className="ml-[102px] mt-2 w-90 h-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart1;
