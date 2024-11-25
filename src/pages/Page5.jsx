import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const Page5 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from("#rotatetext", {
      transform: "rotateX(-50deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: "#rotate-text",
        start: "top 60%",
        end: "top -100%",
      },
    });
  });
  return (
    <div className=" text-center text-black  ">
      <div id="rotatetext" className="mt-30">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          HELPING
        </h1>
      </div>
      <div className="" id="rotatetext">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          MY
        </h1>
      </div>
      <div className="" id="rotatetext">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          CLIENTS
        </h1>
      </div>
      <div className="" id="rotatetext">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          TO ACHIVE
        </h1>
      </div>
      <div className="" id="rotatetext">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          THEIR
        </h1>
      </div>
      <div className="" id="rotatetext">
        <h1 className="text-[40vw] font-[anzo4] leading-[35vw] uppercase">
          DREAMS!
        </h1>
      </div>
    </div>
  );
};

export default Page5;
