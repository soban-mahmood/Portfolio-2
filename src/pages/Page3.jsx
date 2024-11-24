import React from 'react'
import file from "../assets/file.mp4"
import img from "../assets/try.avif"
const Page3 = () => {
  return (
    <div className='h-screen relative bg-[#F9F9F9] flex justify-center items-center  overflow-hidden' >
      <img src={img} alt=""  className='absolute z-20 '/>
      <video autoPlay muted loop className=' h-[30vw] z-10 object-cover relative w-[50vw] bg-[#F9F9F9] ' src={file} />   
      <div className="bg-[#6A6A6A] h-[2px] w-2/3 z-0 top-[30%] absolute"></div>    
      <div className="bg-[#6A6A6A] h-[2px] w-5/6 z-0 top-[50%] absolute"></div>    
      <div className="bg-[#6A6A6A] h-[2px] w-[100%] z-0 top-[70%] absolute"></div>    
    </div>
  )
}

export default Page3