import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { IoMenu } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SideCart from '../components/shop/SideCart';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
  const [open, setOpen] = useState(false)
  const product = useSelector((state) => state.cart.product);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className=' bg-white sticky top-0 w-full z-[1000]'>
      <div className="flex items-center justify-between w-[90%] mx-auto py-8">
        <Link to="/">
          <img className="w-[100px]" src={logo} alt="Logo" />
        </Link>
        <div className="md:flex hidden items-center gap-8 list-none">
          <Link to="/" className="cursor-pointer text-[15px] font-[400] text-[#434343]">Home</Link>
          <Link to="/" className="cursor-pointer text-[15px] font-[400] text-[#434343]">Category</Link>
          <Link to="/shop" className="cursor-pointer text-[15px] font-[400] text-[#434343]">Carts</Link>
        </div>
        
        <div className="relative z-[1000] flex items-center gap-3">
        <div className='md:hidden block'>
          <span onClick={()=>setOpen(!open)} className=' text-[22px] cursor-pointer'>{open ? <IoMdClose /> :  <IoMenu /> }</span>
        </div>
          <button 
            className="text-[25px] cursor-pointer relative" 
            onClick={toggleCart}
          >
            <FaShoppingCart />
            <span className=' text-[11px] absolute top-[-18px] left-5 bg-[#cc2626] text-white py-0.5 px-2 rounded-full'>
              {product.length > 0 ? <span>{product.length}</span> : 0}
            </span>
          </button>
        </div>
      </div>

      {/* SideCart component toggle */}
      <div className='absolute top-0 right-0'>
        {isCartOpen && product.length > 0 && <SideCart />}
      </div>

      {/* Mobile REsponsive */}
      {open ? <>
        <div className=' bg-white absolute top-0 flex flex-col gap-3 p-12 h-screen w-[50%]'>
        <Link to="/">
          <img className="w-[100px]" src={logo} alt="Logo" />
        </Link>
           <div className='flex flex-col gap-3 mt-6'>
           <Link to="/" className="cursor-pointer text-[15px] font-[400] text-[#434343]">Home</Link>
          <Link to="/" className="cursor-pointer text-[15px] font-[400] text-[#434343]">Category</Link>
          <Link to="/shop" className="cursor-pointer text-[15px] font-[400] text-[#434343]">Carts</Link>
           </div>
        </div>
      </> : <></>}
    </div>
  );
};

export default Header;
