"use client";

import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

// Dynamically import Swiper for client-side rendering only
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});

const MySwiper = () => {
  return (
    <>
      <div className="h-80 flex md:hidden w-full py-10  ">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-full md:flex px-4"
          autoplay
        >
          {[
            "https://www.youtube.com/embed/dQw4w9WgXcQ",
            "https://www.youtube.com/embed/3JZ_D3ELwOQ",
            "https://www.youtube.com/embed/aqz-KE-bpKQ",
            "https://www.youtube.com/embed/kXYiU_JCYtU",
            "https://www.youtube.com/embed/kXYiU_JCYtU",
            "https://www.youtube.com/embed/dQw4w9WgXcQ",
          ].map((url, index) => (
            <SwiperSlide
              key={index}
              className=" h-full  rounded-xl overflow-hidden"
            >
              <iframe
                className="w-full  rounded-xl h-full"
                src={url}
                title={`YouTube video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="h-80 hidden md:flex w-full py-10  ">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-full md:flex px-4"
          autoplay
        >
          {[
            "https://www.youtube.com/embed/dQw4w9WgXcQ",
            "https://www.youtube.com/embed/3JZ_D3ELwOQ",
            "https://www.youtube.com/embed/aqz-KE-bpKQ",
            "https://www.youtube.com/embed/kXYiU_JCYtU",
            "https://www.youtube.com/embed/kXYiU_JCYtU",
            "https://www.youtube.com/embed/dQw4w9WgXcQ",
          ].map((url, index) => (
            <SwiperSlide
              key={index}
              className=" h-full  rounded-xl overflow-hidden"
            >
              <iframe
                className="w-full  rounded-xl h-full"
                src={url}
                title={`YouTube video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MySwiper;
