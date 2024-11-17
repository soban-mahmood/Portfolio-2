import React from "react";
import logo1 from "./../assets/sidelogo1.webp";
import logo2 from "./../assets/sidelogo2.webp";
const Page1Bottom = () => {
  return (
    <div className="absolute bg-[red] bottom-0 flex">
      <div>
        <h2>BRAND DESIGN | WEBSITE DESIGN</h2>
        <h2> BESPOKE FREELANCE</h2>
      </div>
      <div>
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
      </div>
    </div>
  );
};

export default Page1Bottom;
