import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
    <div className='fixed w-full flex items-center justify-end z-10 p-20'>
    <button className='bg-black px-10 py-2 rounded-full text-white border-[6px] hover:bg-gray-600'>Hire me</button>
    <i className="ri-more-2-line text-white text-3xl ml-4"></i>  
    </div>
  )
}

export default Header
