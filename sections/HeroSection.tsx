"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Slider from "@/components/Slider";
import { ArrowLongDownIcon } from "@heroicons/react/16/solid";
import HomepageArrow from "@/components/HomepageArrow";

const HeroSection = () => {
  return (
    <section className="w-full h-fit">
      {/* this is the main image on the herosection */}
      <div className="w-full  flex md:min-h-screen  pt-20 items-start justify-end pb-20 md:bg-fixed bg-[url(/heroimg1.jpg)] bg-center  flex-col text-white bg-cover bg-no-repeat relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-300 to-black opacity-50"></div>
        <div
          data-aos="fade-up"
          className="z-10 flex flex-col px-5 gap-y-10 pb-10 w-full max-w-full sm:px-5 md:px-10 lg:px-16 2xl:px-48"
        >
          <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-6xl text-white font-bold  break-words">
            Spreading God's Love <br /> Through Music
          </h1>
          <p className="text-sm sm:text-base md:w-2/5 md:text-lg">
            Perez Musik is a music minister called to spread the gospel through
            worship as God moves across the earth in these times.
          </p>

          {/* Icons */}
          <HomepageArrow />
          {/* Icons */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
