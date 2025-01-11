import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Freetrial() {
  return (
    <>
       {/* free trial start */}
       <div className="max-w-[1050] h-[600] mx-auto justify-items-center items-center ">
        <div className="max-w-[610] h-[283] mx-auto text-center p-28" >
          <h2 className="text-[#252B42] text-[40px] font-bold tracking-[0.2px]   ">Start your 14 days free trial</h2>
          <p className="text-[#737373] text-[15px] font-normal tracking-[0.2px] mt-[20px]">Met minim Mollie non desert Alamo est sit cliquey dolor <br/>
          do met sent. RELIT official consequent.</p>
          <button className="text-white bg-[#23A6F0] w-[186px] h-[52px] text-[14px] mt-[20px] font-bold tracking-[0.2px] gap-[10px] border rounded-[5px]  ">Try it free now</button>
          <div className="w-[242px] h-[50px] justify-between   flex  mx-auto mt-[20px] ">
          <FaTwitter className="w-[30px] h-[30px] text-[#55ACEE]" />
          <FaFacebookSquare className="w-[30px] h-[30px] text-[#395185]"/>
          <FaInstagram className="w-[30px] h-[30px] text-[#000000]"/>
          <FaLinkedin className="w-[30px] h-[29.88px] text-[#0A66C2]"/>

          </div>
        </div>
        
      </div>
      {/* free trial end */}
    </>
  )
}

export default Freetrial;
