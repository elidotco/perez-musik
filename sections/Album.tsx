import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export interface AlbumProps {
  data: {
    coverImage: {
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
      };
      hotspot?: {
        x: number;
        y: number;
        height: number;
        width: number;
      };
      crop?: {
        top: number;
        bottom: number;
        left: number;
        right: number;
      };
    };
    type: string;
    title: string;
    comments: string;
  };
}

const Album: React.FC<AlbumProps> = ({ data }) => {
  return (
    <div className=" gap-y-5 md:pl-10 lg:pl-16 2xl:pl-20  flex flex-col md:flex-row py-20 ">
      {/* Latest Album */}
      <div className="flex px-5 md:px-0  w-full md:w-2/5  h-auto">
        <Image
          src={urlFor(data.coverImage).url()}
          alt=""
          width={450}
          height={650}
          className="object-cover w-full md:w-4/5 "
        />
      </div>
      <div className="flex h-auto flex-col items-center lg:items-start px-5 md:px-20 lg:px-16 2xl:px-26  py-5 md:py-20 gap-y-5 w-full md:w-3/5 justify-center  bg-[#121212]   ring shadow-xl ring-gray-900/5">
        <h2 className="text-4xl font-bold">
          Latest {data.type}: <span>{data.title}</span>
        </h2>
        <p className="text-lg">{data.comments}</p>
        <Link
          href="/music"
          className="border-2 border-white hover:bg-white hover:text-black w-1/2 md:w-1/4 text-center cursor-pointer text-white font-bold py-4 px-2 rounded-full transition-all"
        >
          All Releases
        </Link>
      </div>
    </div>
  );
};

export default Album;
