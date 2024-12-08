'use client'
import React from 'react'
import { IoCartOutline, IoHeartOutline, IoSearch } from 'react-icons/io5'

const Upperheader = () => {
  return (
<div className='flex item-center justify-center h-[48px] w-full bg-[#000000] pt-3 pb-3 gap-32'>
         <div className=''><span className='text-white'>
           (225) 555-0118 
             </span></div>
        <span className='text-white'>michelle.rivera@example.com
             <a className='mx-7 ' href="/home">Follow Us  and get a chance to win 80% off</a></span>

             <select className='bg-[#000000] text-white mx-10'>
                <option value="english">Follow Us  :</option>
             </select>

    </div>
  )
}

export default Upperheader


export const Header = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-[#252B42] text-2xl">Bandage</span>
    </a>
    <nav className="md:ml-auto mr-100 md:mr-auto flex flex-wrap items-center text-base justify-center gap-9">
      <a className="mr-5 font-bold hover:text-gray-900">Home</a>
      <a className="mr-5 font-bold hover:text-gray-900">Shop</a>
      
      <a className="mr-5 font-bold hover:text-gray-900">About</a>
      <a className="mr-5 font-bold hover:text-gray-900">Blog</a>
      <a className="mr-5 font-bold hover:text-gray-900">Contact</a>
      <a className="mr-5 font-bold hover:text-gray-900">Pages</a>
    </nav>

    <div className='mr-7'>Login / Register</div>
    
    <IoSearch className='text-black size-5' />
    <IoHeartOutline className='text-black size-6 mx-3'/>
    <IoCartOutline className='text-black size-6 mx-1' />
    
  </div>
</header>

    </div>
  )
}