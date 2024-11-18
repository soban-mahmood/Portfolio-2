import React, { useRef ,useState} from "react";
import logo from "../assets/Logo.webp";
import PIC from "../assets/pic.webp";
// import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
const Page1 = () => {
  const titlRef = useRef(null);
  
  const [xVal, setXval] = useState(0)
  const [yVal, setYval] = useState(0)
  const mouseMove = (e) => {
    // console.log(titlRef.current.getBoundingClientRect());
    setXval(e.clientX/100);
    setYval(e.clientY/100);
    titlRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  };

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
    </>
  );
};

export default Page1;
