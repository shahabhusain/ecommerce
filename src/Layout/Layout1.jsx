import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout1 = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default Layout1