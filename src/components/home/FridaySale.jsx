import React from 'react'
import main from '../../assets/main.png'
import logo from '../../assets/co.png'
const FridaySale = () => {
  return (
    <div className=' bg-black md:py-7 py-3 md:px-6 px-2 md:w-[90%] w-[95%] mx-auto flex flex-col md:flex-row justify-between mt-20'>
      
        <div className=' flex flex-col gap-6 md:w-[30%] md:ml-20'>
            <h1 className=' text-white md:text-[17px]  font-[700] md:max-w-[224px]  flex items-center gap-2'> <img src={logo} alt="" /> ORGANIKA LIFESTYLE CENTER</h1>
            <h2 className=' md:text-[85px] text-[44px] md:max-w-[455px] min-w-[300px] text-white font-[600] underline md:leading-[6.5rem]'>BLACK FRIDAY SALES !</h2>
            <h1 className=' text-white text-[17px] font-[700] md:mt-12'>Don't miss out! 50% off everything</h1>
        </div>
        <img className=' md:w-[60%] md:mt-0 mt-5' src={main} alt="" />
    </div>
  )
}

export default FridaySale