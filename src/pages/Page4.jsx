import React from "react";
import PIC from "../assets/bgc.avif";
const page4 = () => {
  return (
    <div className="h-screen p-10 ">
      <div
        className="h-full rounded-[45px]"
        style={{
          backgroundImage: `url(${PIC})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default page4;
