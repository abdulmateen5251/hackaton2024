'use client'



import React from 'react';
import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { CiHeart } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import { IoEyeSharp } from 'react-icons/io5';


/* 
  ProductCard Component
  Displays a product with images, details, and action buttons.
*/
const ProductCard = () => {
  return (
   <div className='bg-[#FAFAFA]'>
     <div className="max-w-4xl mx-auto p-4 flex gap-8 ">
      
      {/* Left Section: Product Images */}
      <div className="w-2/3">
        
        {/* Main Product Image Container */}
        <div className="relative  mb-4 h-[450px]">
          
          {/* Main Product Image */}
          <Image 
            src="/single-product1.jpg" 
            alt="Product1"
            fill
            className="object-cover"
          />
          
          {/* Left Navigation Button */}
          <button className="text-[60px] absolute left-4 top-1/2 -translate-y-1/2 p-2 ">
          <HiChevronLeft />
          
          </button>
          
          {/* Right Navigation Button */}
          <button className="text-[60px] absolute right-4 top-1/2 -translate-y-1/2 p-2 ">
          <HiChevronRight />
          </button>
        </div>
        
        {/* Thumbnail Images */}
        <div className="flex gap-4">
          
          {/* Thumbnail 1 */}
          <div className="relative w-[100px] h-[75px]">
            <Image 
              src="/single-product2.jpg" 
              alt="Thumbnail 1"
              fill
              className="cursor-pointer object-cover"
            />
          </div>
          
          {/* Thumbnail 2 */}
          <div className="relative w-[100px] h-[75px]">
            <Image 
              src="/single-product3.jpg" 
              alt="Thumbnail 2"
              fill
              className="cursor-pointer object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="w-1/3">
        
        {/* Product Title */}
        <h1 className="text-[24px] tracking-[0.2px] leading-[30px] text-[#252B42] font-normal mb-2">Floating Phone</h1>
        
        {/* Product Rating and Reviews */}
        <div className="flex items-center gap-2 mb-4">
          
          {/* Star Ratings */}
          <div className="flex text-[#F3CD03]">
            {'★'.repeat(5)}
          </div>
          
          {/* Review Count */}
          <span className="text-[#737373]">10 Reviews</span>
        </div>
        
        {/* Product Price */}
        <div className="text-[24px] tracking-[0.1px] leading-[32px] text-[#252B42] font-bold  mb-4">$1,139.33</div>
        
        {/* Stock Status */}
  
            <div className='flex gap-4'>
              <div className="text-[#737373] mb-4">Availability  :</div>
              <div className="text-[#23A6F0] mb-4">In Stock</div>
              </div>
        
        {/* Product Description */}
        <p className="text-[#858585] text-[14px] font-bold tracking-[0.1px] leading-[32px] mb-6">
          Non mrern lettel rev therem loce vele decectus ustor derk rent sunt. SED UT officita consequent derer ENIM RELIT Mollir. Excitation venial consequent spint nostrum ease.
        </p>
        <hr className='text-[#BDBDBD] border-[1px]'/>
         <div className='pt-6'>
          <Image
                            src="/colors.png"
                            alt="description"
                            width={90}
                            height={50}
                            className=" w-[150px] h-[30px]"
                          />
         </div>
        
        {/* Color Selection Buttons */}
        <div className="flex gap-4 mb-6">
          {['cyan', 'orange', 'red', 'navy'].map((color, index) => (
            <button
              key={index}
              className={`w-6 h-6 rounded-full bg-${color}-500`}
              aria-label={`Select ${color} color`}
            />
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="w-[298] h-[44px] flex gap-6">
          
          {/* Select Options Button */}
          <button className="bg-blue-500 p-2 text-white w-[144px] h-[44px]  rounded-lg flex items-center gap-2">
            Select Options
          </button>
          
          {/* Favorite Button */}
          <button className=" text-2xl "><CiHeart /></button>
          
          {/* Add to Cart Button */}
          <button className="text-2xl"><FiShoppingCart /></button>
          
          {/* Share Button */}
          <button className="text-2xl"><IoEyeSharp /></button>
        </div>
      </div>
    </div>
    
   </div>
  );
};


export default ProductCard;




