import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <div className="overflow-x-hidden font-[lato:300] bg-amber-100">
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Main