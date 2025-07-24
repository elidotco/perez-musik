import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Album = ({ data }) => {
  return (
    <div className=" gap-y-5 md:pl-10 lg:pl-16 2xl:pl-20 items-center flex flex-col md:flex-row py-20 ">
      {/* Latest Album */}
      <div className="flex px-5  w-full md:w-2/5 h-auto">
        <Image
          src={urlFor(data.coverImage).url()}
          alt=""
          width={450}
          height={450}
          className="object-cover "
        />
      </div>
      <div className="flex flex-col items-center lg:items-start px-5 md:px-10 lg:px-16 2xl:px-26  py-5 md:py-10 gap-y-5 w-full md:w-3/5 h-[450px] bg-gray-50 bg-opacity-50">
        <h2 className="text-4xl font-bold">
          Latest {data.type}: <span>{data.title}</span>
        </h2>
        <p className="text-lg">{data.comments}</p>
        <Link
          href="/music"
          className="border-2 border-black hover:bg-white hover:text-black w-1/2 md:w-1/4 text-center cursor-pointer text-black font-bold py-4 px-2 rounded-full transition-all"
        >
          All Releases
        </Link>
      </div>
    </div>
  );
};

export default Album;
