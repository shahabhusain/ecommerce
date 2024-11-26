import React from 'react'
import Cart from '../components/shop/Cart'
import Forms from '../components/shop/Forms'
import {ScrollRestoration} from 'react-router-dom'
const ShoppingCart = () => {
  return (
     <div className=' w-[100%]'>
        <div className=' relative'>
          <ScrollRestoration />
      <div className=' absolute top-0 right-20'>
      <Cart />
      </div>
      
    </div>
    <div className=' pl-20'>
        <Forms />
        </div>
     </div>
  )
}

export default ShoppingCart