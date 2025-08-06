"use client";

import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { Key } from "react";

// Dynamically import Swiper for client-side rendering only
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});
type SlideData = {
  link: string;

  // Add other fields your slide uses
};
type MySwiperProps = {
  data: SlideData[];
};

const MySwiper = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <>
      <div className="h-80 flex md:hidden w-full py-10  ">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-full md:flex px-4"
          autoplay
        >
          {data.map(
            (
              url: { link: string | undefined },
              index: Key | null | undefined
            ) => (
              <SwiperSlide
                key={index}
                className=" h-full  rounded-xl overflow-hidden"
              >
                <iframe
                  className="w-full  rounded-xl h-full"
                  src={url.link}
                  title={`YouTube video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </SwiperSlide>
            )
          )}
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
          {data.map(
            (
              url: { link: string | undefined },
              index: Key | null | undefined
            ) => (
              <SwiperSlide
                key={index}
                className=" h-full  rounded-xl overflow-hidden"
              >
                <iframe
                  className="w-full  rounded-xl h-full"
                  src={url.link}
                  title={`YouTube video `}
                  frameBorder="0"
                  allow="accelerometer; autoplay clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </>
  );
};

export default MySwiper;
