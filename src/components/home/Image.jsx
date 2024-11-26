import React from 'react'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

const Image = () => {
  const productData = [
    {
      id: 1,
      img: img1,
      title: "Armaf Passion",
      percentage: "22.33"
    },
    {
      id: 2,
      img: img2,
      title: "Armaf Passion",
      percentage: "44.33"
    },
    {
      id: 3,
      img: img3,
      title: "Armaf Passion",
      percentage: "66.34"
    },
  ];

  return (
    <div className=' grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 w-[90%] mx-auto pt-20'>
      {
        productData.map((item) => (
          <div key={item.id} className='relative group transition-all duration-300 ease-in-out hover:scale-105'>
            <img src={item.img} alt={item.title} className="w-full" />
            <div className='absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col items-center'>
              <h1 className='text-white text-[22px] font-bold'>{item.title}</h1>
              <p className='text-white'>$ {item.percentage}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Image;
