import React from "react";
import video from "../assets/vedio.mp4";
const Page6 = () => {
  return (
    <div className="h-full p-10 ">
      <div className="h-screen w-[100%] rounded-[50px] bg-neutral-100">
        <video src={video} autoPlay muted loop className=" relative rounded-[45px] h-full w-full object-cover "></video>
        <h1 className="uppercase absolute ">soban</h1>
      </div>
    </div>
  );
};

export default Page6;