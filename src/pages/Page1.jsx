import React from "react";
import logo from "../assets/Logo.webp";
import PIC from "../assets/pic.webp";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
const Page1 = () => {
  return (
    <>
      <div className="h-screen bg-white p-8">
        <div
          className="h-full w-full p-10 bg-cover shadow-lg shadow-gray-700 text-white rounded-[45px]"
          style={{
            backgroundImage: `url(${PIC})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="px-20">
            <img src={logo} alt="LOGO" />
            <TiltText />
            <Page1Bottom />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
