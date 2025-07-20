"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const HeroSection = () => {
  return (
    <section className="h-fit">
      {/* this is the main image on the herosection */}
      <div className="w-full flex px-5  py-10  items-start justify-end md:px-10 lg:px-16 2xl:px-48 h-screen bg-fixed bg-[url(/heroimage.png)] bg-top-center flex-col text-white  bg-cover bg-no-repeat ">
        <div className="absolute  inset-0 bg-gradient-to-b from-white to-black opacity-50"></div>
        <div data-aos="fade-up" className="z-10 flex flex-col gap-y-10 ">
          <h1 className="text-9xl  bg-c text-white font-extrabold">
            Perez Musik
          </h1>
          <p>Spreading God's Love Through Music</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 cursor-pointer">
              Listen Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black cursor-pointer text-white font-bold py-4 px-8 rounded-full transition-all">
              Watch Latest Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
