import React, { useRef, useState } from "react";
import logo from "../assets/Logo.webp";
import PIC from "../assets/landing page.png";
// import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Page1 = () => {
  const titlRef = useRef(null);

  const [xVal, setXval] = useState(0);
  const [yVal, setYval] = useState(0);
  const mouseMove = (e) => {
    setXval(
      (e.clientX -
        titlRef.current.getBoundingClientRect().x -
        titlRef.current.getBoundingClientRect().width / 2) /
        60
    );
    setYval(
      (-(e.clientY -
        titlRef.current.getBoundingClientRect().y -
        titlRef.current.getBoundingClientRect().width/2) /30
    ));
  };

  useGSAP(function () {
    gsap.to(titlRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 1,
    ease: "power1.out"
    });
  },[xVal,yVal] );

  return (
    <>
      <div
        id="page1"
        onMouseMove={(e) => {
          mouseMove(e);
        }}
        className="h-screen relative bg-white p-8  "
      >
        <div
          id="page1-in"
          className="h-full w-full p-10 bg-cover shadow-lg relative shadow-gray-700 text-white rounded-[45px]"
          style={{
            backgroundImage: `url(${PIC})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <img src={logo} alt="LOGO" />
          <div ref={titlRef} id="tiltDiv" className="mt-40 ">
            <h1 className="text-[4.2vw] uppercase font-[anzo1] leading-[4vw]">
              I AM
              <span className="text-[#F34235] mx-4">
                Mern Stack <span className="text-white ">™</span>
              </span>
            </h1>
            <h1 className="text-[6vw] leading-[7vw] font-[anzo1] uppercase">
              Developer
            </h1>
            <h1 className="text-[4.2vw]  leading-[4vw] font-[anzo1]">
              TO HIRE
            </h1>
          </div>
          <Page1Bottom />
        </div>
      </div>
    </>
  );
};

export default Page1;
