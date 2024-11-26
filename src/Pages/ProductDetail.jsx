import React, { useEffect, useState } from 'react';
import { ScrollRestoration, useParams } from 'react-router-dom';
import { trendingData } from '../assets/Data';
import Trending from '../components/home/Trending';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = trendingData.find((item) => item.id === parseInt(id));

  const [mainImage, setMainImage] = useState(product?.img || '');

  if (!product) {
    return <div>Product not found</div>;
  }

  // Update main image when the product changes
  useEffect(() => {
    setMainImage(product.img);
  }, [product]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
    toast.success("Product added successfully!");
  };

  const handleThumbnailClick = (img) => {
    setMainImage(img);
  };

  return (
    <div>
      <div className="md:w-[80%] w-[96%] mx-auto flex flex-col md:flex-row justify-between gap-6">
        <ScrollRestoration />
        <div className="flex gap-4 md:w-[50%]">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {product.img1.map((item, index) => (
              <img
                key={index}
                className="md:w-[120px] w-[80px] h-[120px] md:h-[148px] cursor-pointer border border-transparent hover:border-blue-500 transition-all"
                src={item.img}
                alt=""
                onClick={() => handleThumbnailClick(item.img)}
              />
            ))}
          </div>
          {/* Main Image */}
          <img
            className="md:w-[430px] w-[233px] h-[513px] md:h-[630px] object-cover"
            src={mainImage}
            alt={product.title}
          />
        </div>
        <div className="md:w-[50%] flex flex-col gap-4">
          <h1 className="text-[#002350] text-[11px] font-[400] bg-[#001D580D] py-2 px-4 rounded-full w-fit">
            In Stock
          </h1>
          <h2 className="text-[28px] text-[#1A1A1A] font-[600]">
            {product.title}
          </h2>
          <p className="text-[16px] text-[#808080] font-[500]">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos
          </p>
          <h3 className="text-[28px] text-[#1A1A1A] font-[600]">
            ${product.price}
          </h3>
          <div className="h-[2px] w-full bg-[#a0a0a082]"></div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[#808080]">Size</h1>
            <div className="flex items-center gap-3">
              {['Small', 'Medium', 'Large', 'Extra Large'].map((size, idx) => (
                <p
                  key={idx}
                  className="border-[1px] py-2 px-2 rounded-lg border-[#013764] text-[14px] font-[400] text-[#013764]"
                >
                  {size}
                </p>
              ))}
            </div>
            <div className="h-[1px] w-full bg-[#a0a0a082] mt-2"></div>
          </div>
          <p className="text-[16px] text-[#808080] font-[500]">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
            ultrices et ipsum. Nulla varius magna a consequat pulvinar.
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-[#013764] py-2 px-2 text-center text-white w-full"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-8">You May Like!</h2>
        <Trending />
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetail;
