"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const HeroSection = () => {
  return (
    <section className="h-fit">
      {/* this is the main image on the herosection */}
      <div className="w-full flex text-white  px-5 justify  justify-between py-10  items-end md:px-10 lg:px-16 2xl:px-20 h-screen bg-fixed bg-[url(/herotem.jpg)] bg-top-center bg-cover bg-no-repeat "></div>
    </section>
  );
};

export default HeroSection;
