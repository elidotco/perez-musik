import { AlbumShowcase } from "@/components";
import { AlbumData, AlbumShowcaseProps } from "@/components/AlbumShowcase";
import { sanityFetch } from "@/sanity/lib/live";
import { AlbumProps } from "@/sections/Album";
import { defineQuery } from "next-sanity";
import React from "react";

const RELEASES_QUERY = defineQuery(
  `*[
  _type=="releases" 
  ]|order(date desc) {coverImage, comments, title,date, type, spotify}`
);
const Home = async () => {
  const { data } = await sanityFetch({ query: RELEASES_QUERY });
  console.log(data);
  return (
    <section className="min-h-screen">
      <div className="flex mb-20 w-full relative bg-[url(/forground.jpg)] bg-fixed bg-no-repeat bg-cover bg-center h-96">
        <div className="absolute  inset-0 bg-gradient-to-b from-yellow-400 to-black opacity-50"></div>
      </div>
      {data.map((item: unknown, index: React.Key | null | undefined) => (
        <AlbumShowcase key={index} data={item as AlbumData} />
      ))}
      <div className="flex">{/* Image */}</div>
    </section>
  );
};

export default Home;
