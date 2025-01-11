"use client";

import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Logos from "../component/Logos";
import Freetrial from "../component/freetrial";

const Header22 = () => {
  return (
    <>
      <div className="bg-[#fafafa] p-[100px]">
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
        {/* simple pricing*/}
        <div className="max-w-[1050px]  h-[280px] mx-auto bg-[#FFFFFF] items-center text-center">
          <p className="text-[16px] font-bold p-10 text-[#737373] ">PRICING</p>
          <h1 className="text-[58px] tracking-[0.2px] font-bold text-[#252B42]">
            Simple Pricing
          </h1>
          <div className="flex justify-center items-center gap-8 p-10 font-bold">
            <p className="text-[#252B42] text-[15px]">Home</p>
            <IoIosArrowForward className="text-[20px] text-[#BDBDBD]   " />
            <p className="text-[#737373] text-[15px]">Pricing</p>
          </div>
        </div>
      </div>
      <div className=" max-w-[633px] h-[100px] mx-auto bg-[#FAFAFA] flex flex-col items-center justify-center  text-center">
        <h1 className="font-bold text-[40px] p-3">Pricing</h1>
        <p className="font-normal text-[#737373] text-[15px]">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>

      <div className="p-16 ">
        <div className="max-w-[311px] mx-auto h-[44px]  text-center flex items-center justify-between ">
          <h1 className="text-[#252B42] font-bold">Monthly</h1>
          {/* toggle */}
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultValue="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
            <span className="ms-3  font-bold text-[#252B42] ">Yearly</span>
          </label>
          {/* toggle end */}

          <button className="w-[109px] h-[44px] bg-[#B2E3FF] text-[#23A6F0] border rounded-[37px] ">
            Save 25%
          </button>
        </div>
      </div>
      {/* pricing card */}
      <section>
        <div className=" p-4">
          <div className="max-w-[330]  max-lg:max-w-2xl mx-auto"></div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 max-sm:max-w-sm max-sm:mx-auto">
            <div className="border rounded-[10px] p-6">
              <h3 className="text-[#252B42] text-[24px] font-bold mb-2">
                FREE
              </h3>
              <p className="text-sm text-[#737373] font-bold text-[16px]">
                Organize across all <br />
                apps by hand
              </p>
              <div className="mt-6">
                <h3 className="text-[#23A6F0] text-2xl font-semibold">
                  $0 <sub className=" text-sm font-medium">per month</sub>
                </h3>
              </div>
              <div className="mt-6">
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center text-center text-[15px]  text-[#252B42]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      className="mr-3 bg-[#2DC071] border rounded-full   fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    50 Page Unlock
                  </li>
                  <li className="flex items-center text-center text-[15px]  text-[#252B42]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      className="mr-3 bg-[#2DC071] border rounded-full   fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    10 GB Storage
                  </li>
                  <li className="flex items-center text-center text-[15px]  text-[#252B42]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      className="mr-3 bg-[#2DC071] border rounded-full   fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    6 Team Members
                  </li>
                  <li className="flex items-center text-center text-[15px]  text-[#252B42]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      className="mr-3 bg-[#BDBDBD] border rounded-full   fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited Book Mark
                  </li>
                  <li className="flex items-center text-center text-[15px]  text-[#252B42]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      className="mr-3 bg-[#BDBDBD] border rounded-full   fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited basic feature
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full mt-6 px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                >
                  Try for free
                </button>
              </div>
            </div>
            <div className="border rounded-[10px] bg-[#252B42] p-6">
              <h3 className="text-[#FFFFFF] text-[24px] font-bold mb-2">
                STANDARD
              </h3>
              <p className="text-sm text-[#FFFFFF] font-bold text-[16px]">
                Organize across all <br />
                apps by hand
              </p>
              <div className="mt-6">
                <h3 className="text-[#23A6F0] text-2xl font-semibold">
                  $9.99 <sub className="text-sm font-medium">per month</sub>
                </h3>
              </div>
              <div className="mt-6">
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center text-center text-[15px]  text-[#FFFFFF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      className="mr-3 bg-[#2DC071] border rounded-full   fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    50 Page Unlock
                  </li>
                  <li className="flex items-center text-center text-[15px]  text-[#FFFFFF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      className="mr-3 bg-[#2DC071] border rounded-full   fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    10 GB Storage
                  </li>
                  <li className="flex items-center text-center text-[15px]  text-[#FFFFFF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      className="mr-3 bg-[#2DC071] border rounded-full   fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    6 Team Members
                  </li>
                  <li className="flex items-center text-center text-[15px]  text-[#FFFFFF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      className="mr-3 bg-[#BDBDBD] border rounded-full   fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited Book Mark
                  </li>
                  <li className="flex items-center text-center text-[15px]  text-[#FFFFFF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      className="mr-3 bg-[#BDBDBD] border rounded-full   fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited basic feature
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full mt-6 px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                >
                  Try for free
                </button>
              </div>
            </div>
            <div className="border rounded-[10px] p-6">
              <h3 className="text-[#252B42] text-[24px] font-bold mb-2">
                PREMIUM
              </h3>
              <p className="text-sm text-[#737373] font-bold text-[16px]">
                Organize across all <br />
                apps by hand
              </p>
              <div className="mt-6">
                <h3 className="text-[#23A6F0] text-2xl font-semibold">
                  $19.99 <sub className="text-sm font-medium">per month</sub>
                </h3>
              </div>
              <div className="mt-6">
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center text-center text-[15px]  text-[#252B42]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      className="mr-3 bg-[#2DC071] border rounded-full   fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    50 Page Unlock
                  </li>
                  <li className="flex items-center text-center text-[15px]  text-[#252B42]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      className="mr-3 bg-[#2DC071] border rounded-full   fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    10 GB Storage
                  </li>
                  <li className="flex items-center text-center text-[15px]  text-[#252B42]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      className="mr-3 bg-[#2DC071] border rounded-full   fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    6 Team Members
                  </li>
                  <li className="flex items-center text-center text-[15px]  text-[#252B42]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      className="mr-3 bg-[#BDBDBD] border rounded-full   fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited Book Mark
                  </li>
                  <li className="flex items-center text-center text-[15px]  text-[#252B42]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      className="mr-3 bg-[#BDBDBD] border rounded-full   fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited basic feature
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full mt-6 px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                >
                  Try for free
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* logos */}
      <div className="max-w-[1050] h-[365px] mx-auto text-center ">
        <h2 className=" text-[#252B42] font-normal text-[20px] tracking-[0.2px] p-16  ">
          Trusted By Over 4000 Big Companies
        </h2>
        <Logos />
      </div>
      {/* logos end */}
      {/* paragraph  section start */}

      <section className=" max-w-[1056] mx-auto h-[1040]   ">
        <div>
          <div className="p-36">
            <div className="w-[607px] h-[120px] mx-auto  text-center  ">
              <h2 className="text-[#252B42] font-bold tracking-[0.2px] text-[40px]   ">
                Pricing FAQs
              </h2>
              <p className="text-[#737373] font-normal tracking-[0.2px] text-[20px] mt-2">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics
              </p>
            </div>
          </div>
          <div className="max-w-[1056] h-[540] mx-auto  text-left justify-items-center  grid gap-[100px] grid-cols-2 grid-rows-3">
            <div>
              <h5 className="font-bold text-[17px] tracking-[0.1px] text-[#252B42] mb-2   ">
                the quick fox jumps over the lazy dog
              </h5>
              <p className="font-normal text-[#737373] tracking-[0.2px] text-[15px] ">
                Met minim Mollie non desert Alamo est sit cliquey
                <br />
                dolor do met sent. RELIT official consequent door ENIM <br />
                RELIT Mollie. Excitation venial consequent sent <br />
                nostrum met.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-[17px] tracking-[0.1px] text-[#252B42] mb-2   ">
                the quick fox jumps over the lazy dog
              </h5>
              <p className="font-normal text-[#737373] tracking-[0.2px] text-[15px] ">
                Met minim Mollie non desert Alamo est sit cliquey
                <br />
                dolor do met sent. RELIT official consequent door ENIM <br />
                RELIT Mollie. Excitation venial consequent sent <br />
                nostrum met.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-[17px] tracking-[0.1px] text-[#252B42] mb-2   ">
                the quick fox jumps over the lazy dog
              </h5>
              <p className="font-normal text-[#737373] tracking-[0.2px] text-[15px] ">
                Met minim Mollie non desert Alamo est sit cliquey
                <br />
                dolor do met sent. RELIT official consequent door ENIM <br />
                RELIT Mollie. Excitation venial consequent sent <br />
                nostrum met.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-[17px] tracking-[0.1px] text-[#252B42] mb-2   ">
                the quick fox jumps over the lazy dog
              </h5>
              <p className="font-normal text-[#737373] tracking-[0.2px] text-[15px] ">
                Met minim Mollie non desert Alamo est sit cliquey
                <br />
                dolor do met sent. RELIT official consequent door ENIM <br />
                RELIT Mollie. Excitation venial consequent sent <br />
                nostrum met.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-[17px] tracking-[0.1px] text-[#252B42] mb-2   ">
                the quick fox jumps over the lazy dog
              </h5>
              <p className="font-normal text-[#737373] tracking-[0.2px] text-[15px] ">
                Met minim Mollie non desert Alamo est sit cliquey
                <br />
                dolor do met sent. RELIT official consequent door ENIM <br />
                RELIT Mollie. Excitation venial consequent sent <br />
                nostrum met.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-[17px] tracking-[0.1px] text-[#252B42] mb-2   ">
                the quick fox jumps over the lazy dog
              </h5>
              <p className="font-normal text-[#737373] tracking-[0.2px] text-[15px] ">
                Met minim Mollie non desert Alamo est sit cliquey
                <br />
                dolor do met sent. RELIT official consequent door ENIM <br />
                RELIT Mollie. Excitation venial consequent sent <br />
                nostrum met.
              </p>
            </div>
          </div>
          <div className="font-normal text-[20px] text-[#737373] p-32 text-center mx-auto tracking-[0.2px]   ">
            <p>Haven’t got your answer? Contact our support</p>
          </div>
        </div>
      </section>
      {/* paragraph  section end */}


      {/* free trial start */}
     <Freetrial/>
      {/* free trial end */}

      
    </>
  );
};

export default Header22;
