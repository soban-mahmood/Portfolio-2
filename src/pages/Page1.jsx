import React, { useRef } from "react";
import logo from "../assets/Logo.webp";
import PIC from "../assets/pic.webp";
// import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
const Page1 = () => {
  const titlRef = useRef(null);

  const mouseMove = (e) => {
    console.log(titlRef.current.getBoundingClientRect());
  };

  return (
    <>
      <div
        onMouseMove={(e) => {
          mouseMove(e.clientX, e.clientY);
        }}
        className="h-screen bg-white p-8 "
      >
        <div
          className="h-full w-full p-10 bg-cover shadow-lg  shadow-gray-700 text-white relative rounded-[45px]"
          style={{
            backgroundImage: `url(${PIC})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="px-20" id="page-in">
            <img src={logo} alt="LOGO" className="h-32" />
            <div ref={titlRef} id="tiltDiv" className="mt-40">
              <h1 className="text-[4.2vw] uppercase font-[anzo1] leading-[4vw]">
                I AM
                <span className="text-black mx-4">
                  Mern Stack <span className="text-white ">™</span>
                </span>
              </h1>
              <h1 className="text-[8vw] leading-[7vw] font-[anzo1] uppercase">
                Developer
              </h1>
              <h1 className="text-[4.2vw]  leading-[4vw] font-[anzo1]">
                TO HIRE
              </h1>
            </div>
            <Page1Bottom />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
