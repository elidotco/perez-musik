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
    <div className="h-96 w-full py-10 px-20 ">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-full px-4"
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
            className="border h-full p-1 rounded-xl overflow-hidden"
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
  );
};

export default MySwiper;
