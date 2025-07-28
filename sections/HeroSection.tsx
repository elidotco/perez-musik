"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Slider from "@/components/Slider";

const HeroSection = () => {
  return (
    <section className="w-full h-fit">
      {/* this is the main image on the herosection */}
      <div className="w-full min-h-screen flex  items-start justify-end  md:bg-fixed bg-[url(/heroimg1.jpg)] bg-center  flex-col text-white bg-cover bg-no-repeat relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-300 to-black opacity-50"></div>
        <div
          data-aos="fade-up"
          className="z-10 flex flex-col gap-y-2 pb-10 w-full max-w-full sm:px-5 md:px-10 lg:px-16 2xl:px-48"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-extrabold  break-words">
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
              rel="noopener noreferrer"
              target="_blank"
              className="bg-green-300 hover:bg-green-500 text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all transform hover:scale-105 cursor-pointer text-sm sm:text-base w-full sm:w-auto"
            >
              Listen Now
            </Link>
            <Link
              href="https://youtu.be/Zr8yfNWLuZ4?si=-UntuMFed375t5vq"
              rel="noopener noreferrer"
              target="_blank"
              className="border-2 border-white hover:bg-white hover:text-black cursor-pointer text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all text-sm sm:text-base w-full sm:w-auto"
            >
              Watch Latest Video
            </Link>
          </div>
          <div className="z-50 w-full r"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
