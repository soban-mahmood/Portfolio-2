import React from 'react'
import file from "../assets/file.mp4"
const Page3 = () => {
  return (
    <div className='h-screen bg-' >
      <video autoPlay muted loop className='h-screen' src={file} />     
    </div>
  )
}

export default Page3