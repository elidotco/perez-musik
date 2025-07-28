import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity/lib/image";
import Link from "next/link";
export interface UpEProps {
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
  }[];
}
const UpcomingEvents: React.FC<UpEProps> = ({ data }) => {
  return (
    <div>
      {" "}
      <section className="py-20 bg-fixed ">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 2xl:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl ">Join us for worship and fellowship</p>
          </div>
          <div className="flex relative shadow rounded-sm">
            <Image
              src={data ? urlFor(data[0].coverImage).url() : ""}
              alt="events coming up"
              height={600}
              width={450}
              className="w-full h-auto rounded-sm"
            />
          </div>
          <div className="mx-auto py-10 w-full items-center justify-center  flex">
            <Link
              href="/events"
              className="border-2 border-white hover:bg-white hover:text-black w-1/2 md:w-1/4 text-center cursor-pointer text-white font-bold py-4 px-2 rounded-full transition-all"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;
