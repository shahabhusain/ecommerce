import {createBrowserRouter, createRoutesFromElements, Route,} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Pages/Home'
import ProductDetail from '../Pages/ProductDetail'
import ShoppingCart from '../Pages/ShoppingCart'
import Layout1 from '../Layout/Layout1'

export const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/detail/:id' element={<ProductDetail />} />
    </Route>
    <Route path='/shop' element={<Layout1 />} >
    <Route index element={<ShoppingCart />} />
    </Route>
    </>
))