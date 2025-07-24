import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity/lib/image";

const UpcomingEvents = ({ data }) => {
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
            <button className="border-2 border-black hover:bg-black hover:text-white cursor-pointer text-black font-bold py-4 px-8 rounded-full capitalize transition-all">
              View All Events
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;
