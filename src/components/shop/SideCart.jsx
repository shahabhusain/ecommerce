import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/cartSlice';

const SideCart = () => {
  const dispatch = useDispatch();
  const { product, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="w-[433px] h-screen overflow-y-auto cart bg-[#f8f8f8]">
        <div className=" px-12 py-6 ">
          <div>
            <h1 className="text-[#393A44] font-[700] text-[26px]">Your Orders</h1>
            <p className="text-[#393A44] font-[400] text-[14px]">{product.length} Items</p>
          </div>
          <div className="flex flex-col gap-6 mt-5">
            {product.map((item) => (
              <div key={item.id} className="flex items-center gap-8">
                <img
                  className="w-[100px] h-[160px]"
                  src={item.img}
                  alt={item.title}
                />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h1 className="text-[#000000] text-[18px] font-[600]">{item.title}</h1>
                    <button
                      className="text-[22px]"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <IoIosCloseCircleOutline />
                    </button>
                  </div>
                  <p className="text-[#808080] font-[400] text-[13px] max-w-[233px]">
                    Keep the soil evenly moist for the healthiest growth.
                  </p>
                  <p className="text-[#1A1A1A] text-[16px] font-[500]">
                    ${item.totalPrice.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-3 border-[black] border-[1px] rounded-full py-1 px-2 w-fit">
                    <button
                      className="text-[16px] font-[500] bg-[#F2F2F2] w-[30px] h-[30px] rounded-full"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className="text-[16px] font-[500] bg-[#F2F2F2] w-[30px] h-[30px] rounded-full"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between mt-5">
              <h1 className="text-[16px] text-[#1A1A1A] font-[500]">Sub Total</h1>
              <p className="text-[#1A1A1A] font-[600] text-[20px]">${totalPrice.toFixed(2)}</p>
            </div>
            <button className="bg-[#FF9225] text-white py-2 px-2 text-center mt-3">
              Check Out
            </button>
          </div>
        </div>
     
    </div>
  );
};

export default SideCart;
