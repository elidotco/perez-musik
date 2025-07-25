"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const HeroSection = () => {
  return (
    // <section className=" w-full h-fit">
    //   {/* this is the main image on the herosection */}
    //   <div className="w-full flex px-5  py-10  items-start justify-end md:px-10 lg:px-16 2xl:px-48 h-screen bg-fixed bg-[url(/heroimage.png)] bg-top-center flex-col text-white  bg-cover bg-no-repeat ">
    //     <div className="absolute  inset-0 bg-gradient-to-b from-white to-black opacity-50"></div>
    //     <div data-aos="fade-up" className="z-10 flex flex-col gap-y-10 ">
    //       <h1 className="text-9xl  text-white font-extrabold">Perez Musik</h1>
    //       <p>Spreading God's Love Through Music</p>

    //       <div className="flex flex-col sm:flex-row gap-4">
    //         <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 cursor-pointer">
    //           Listen Now
    //         </button>
    //         <button className="border-2 border-white hover:bg-white hover:text-black cursor-pointer text-white font-bold py-4 px-8 rounded-full transition-all">
    //           Watch Latest Video
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="w-full h-fit">
      {/* this is the main image on the herosection */}
      <div className="w-full min-h-screen flex px-4 py-10 items-start justify-end sm:px-5 md:px-10 lg:px-16 2xl:px-48 bg-fixed bg-[url(/heroimage.png)] bg-center md:bg-top flex-col text-white bg-cover bg-no-repeat relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-50"></div>
        <div
          data-aos="fade-up"
          className="z-10 flex flex-col gap-y-6 md:gap-y-10 w-full max-w-full"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-extrabold leading-tight break-words">
            Perez Musik
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            Spreading God's Love Through Music
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Link
              href={
                "https://open.spotify.com/artist/0aoCkJnz41cyF84JmMISzI?si=0zzy_JBhRYu63oPOKMCJgg"
              }
              tabIndex={1}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all transform hover:scale-105 cursor-pointer text-sm sm:text-base w-full sm:w-auto"
            >
              Listen Now
            </Link>
            <Link
              href="https://youtu.be/Zr8yfNWLuZ4?si=-UntuMFed375t5vq"
              className="border-2 border-white hover:bg-white hover:text-black cursor-pointer text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all text-sm sm:text-base w-full sm:w-auto"
            >
              Watch Latest Video
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
