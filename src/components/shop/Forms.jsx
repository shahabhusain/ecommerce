import React from 'react'
import { RiBankCardLine } from "react-icons/ri";
const Forms = () => {
  return (
    <div className=' md:w-[60%] flex flex-col gap-6'>
        <div className=' bg-[#f8f8f8] py-6 grid md:grid-cols-2 grid-cols-1 gap-6 px-6'>
            <input type="text" placeholder='America' className=' bg-transparent bg-white py-2 px-3 rounded-sm' />
            <input type="text" placeholder='State/Province' className=' bg-transparent bg-white py-2 px-3 rounded-sm' />
            <input type="text" placeholder='City' className=' bg-transparent bg-white py-2 px-3 rounded-sm' />
            <input type="text" placeholder='Street' className=' bg-transparent bg-white py-2 px-3 rounded-sm' />
        </div>

        <div className=' bg-[#f8f8f8] py-6 px-6 flex flex-col gap-2'>
             <div className=' flex flex-col md:flex-row items-center gap-3 '>
             <div className=' flex flex-col gap-1 w-full'>
              <label className=' text-[#909198] text-[14px] font-[400]'>Name</label>
              <input type="text" placeholder='Enter your Name' className=' bg-transparent py-2 px-3 rounded-sm bg-white' />
              </div>
              <div className=' flex flex-col gap-1 w-full'>
              <label className=' text-[#909198] text-[14px] font-[400]'>Email</label>
              <input type="text" placeholder='Enter your Email' className=' bg-transparent py-2 px-3 rounded-sm bg-white' />
              </div>
             </div>
              <div className=' flex flex-col gap-2 mt-1'>
              <label className=' text-[#909198] text-[14px] font-[400]'>Mobile Number</label>
              <input type="text" placeholder='Enter Your Mobile Number' className=' bg-transparent py-2 px-3 rounded-sm bg-white' />
              </div>
        </div>
    
    <div className='bg-[#f8f8f8] py-6 px-6'>
      <h1 className=' font-[600]'>Payment Method</h1>
          <div className=' flex flex-col gap-2 mt-4'>
          <div className=' items-center flex justify-between'>
         <div className=' flex items-center gap-2'>
        <p className=' text-[#E4E4E4] text-[22px]'><RiBankCardLine /></p>
        <h1>Credit or debit card </h1>
      </div>
      <input type="radio" />
         </div>
           
           <div className=' h-[2px] w-full bg-[#ded6d685]'></div>


         <div className=' items-center flex justify-between'>
         <div className=' flex items-center gap-2'>
        <p className=' text-[#E4E4E4] text-[22px]'><RiBankCardLine /></p>
        <h1>Credit or debit card </h1>
      </div>
      <input type="radio" />
         </div>
         <div className=' h-[2px] w-full bg-[#ded6d685]'></div>
          </div>
        
    </div>

    </div>
  )
}

export default Forms