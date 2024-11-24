import React from "react";

const TiltText = ({titlRef}) => {
  return (
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
  );
};

export default TiltText;
