import React from 'react'
import { FaDribbble, FaFacebook, FaInstagram, FaSeedling, FaTwitter } from 'react-icons/fa'
import logo from '../assets/w-logo.png'
import { IoIosSend } from "react-icons/io";
const Footer = () => {
  return (
   <div className=' bg-black py-12 mt-20'>
     <div className=' flex flex-col gap-y-6 md:fle-row justify-between md:w-[90%] w-[80%] mx-auto'>

<div className=' flex flex-col gap-6'>
<img className=' w-[90px] h-[24px]' src={logo} alt="" />
 <p className=' text-[#D9DBE1] text-[14px] font-[400] max-w-[222px]'>Copyright © 2020 MEERS
 All rights reserved</p>
 <div className=' flex items-center gap-3'>
   <span className=' bg-[#f8f8f8] text-black cursor-pointer py-3 px-3 rounded-full'><FaFacebook /></span>
   <span className=' bg-[#f8f8f8] text-black cursor-pointer py-3 px-3 rounded-full'><FaTwitter /></span>
   <span className=' bg-[#f8f8f8] text-black cursor-pointer py-3 px-3 rounded-full'><FaInstagram /></span>
   <span className=' bg-[#f8f8f8] text-black cursor-pointer py-3 px-3 rounded-full'><FaDribbble /></span>
 </div>
</div>


<div className=' flex flex-col gap-3'>
<h1 className=' text-[20px] font-[700] text-white'>Company</h1>
<p className=' text-[#D9DBE1] text-[16px] font-[500]'>About us</p>
<p className=' text-[#D9DBE1] text-[16px] font-[500]'>Blog</p>
<p className=' text-[#D9DBE1] text-[16px] font-[500]'>Pricing</p>
<p className=' text-[#D9DBE1] text-[16px] font-[500]'>Contact</p>
</div>


<div className=' flex flex-col gap-3'>
<h1 className=' text-[20px] font-[700] text-white'>Support</h1>
<p className=' text-[#D9DBE1] text-[16px] font-[500]'>Help Center</p>
<p className=' text-[#D9DBE1] text-[16px] font-[500]'>Term & Privacy </p>
<p className=' text-[#D9DBE1] text-[16px] font-[500]'>Legal</p>
<p className=' text-[#D9DBE1] text-[16px] font-[500]'>Status</p>
</div>

<div className=' flex flex-col gap-3'>
<h1 className=' text-[20px] font-[700] text-white'>Stay Upto Date</h1>
<div className=' flex gap-3 items-center bg-white py-2 px-3 rounded-md'>
 <input className=' bg-transparent focus:border-none focus:outline-none' type="text" placeholder='Your Email Address' />
 <span className=' text-[22px] cursor-pointer'><IoIosSend /></span>
</div>
</div>



</div>
   </div>
  )
}

export default Footer