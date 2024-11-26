import React from 'react'
import hero from '../assets/hero.png'
import Image from '../components/home/Image'
import FridaySale from '../components/home/FridaySale'
import Trending from '../components/home/Trending'
const Home = () => {
  return (
    <div>
        <img src={hero} alt="" />
        <Image />
        <FridaySale />
        <div className='md:w-[90%] w-[80%] mx-auto mt-20'>
        <h2 className="text-3xl font-bold mb-8">Trending Now</h2>
        <Trending />
        </div>
    </div>
  )
}

export default Home