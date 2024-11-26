import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';
import { trendingData } from '../../assets/Data';
import { addToCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Trending = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    dispatch(addToCart(product));
    toast.success("Product added successfully!");
  }    
     const handleNavigate = useNavigate()
  return (
    <div className="text-black">
      <Swiper
       slidesPerView={4}
       spaceBetween={30}
       navigation={true}
       modules={[Navigation]}
       className="mySwiper"
       breakpoints={{
         340: { slidesPerView: 1 },
         768: { slidesPerView: 2 },
         1024: { slidesPerView: 4 },
       }}
      >
        {trendingData.map((item) => (
          <SwiperSlide key={item.id} className="flex flex-col">
            <button onClick={() => handleNavigate(`/detail/${item.id}`)}>
              <div className="overflow-hidden">
                <img
                  className="hover:scale-105 transition-all duration-300 ease-in-out w-[555px]"
                  src={item.img}
                  alt="image"
                />
              </div>
            </button>
            <div className="">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
              <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
              <button
                onClick={(e) => handleAddToCart(e, item)}
                className="mt-4 px-3 text-[14px] py-1 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
              >
                Add to Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ToastContainer />
    </div>
  );
};

export default Trending;
