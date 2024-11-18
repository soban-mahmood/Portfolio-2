import React from "react";
import logo1 from "./../assets/sidelogo1.webp";
import logo2 from "./../assets/sidelogo2.webp";
const Page1Bottom = () => {
  return (
    <div className="absolute w-full left-0 px-[7vw] py-[5vh] flex justify-between items-end">
      <div>
        <h2 className="text-[25px] font-[anzo3]">BRAND DESIGN | WEBSITE DESIGN</h2>
        <h2 className="text-[25px] font-[anzo2] text-[#8C8C8C]"> BESPOKE FREELANCE</h2>
      </div>
      <div className="">
        <img src={logo1} alt=""  />
        <br />
        <img src={logo2} alt="" />
      </div>
    </div>
  );
};

export default Page1Bottom;
