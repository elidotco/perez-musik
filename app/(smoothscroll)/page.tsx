import { Header } from "@/components";

import { Album, HeroSection, UpcomingEvents } from "@/sections";

import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import Link from "next/link";
import Slider from "@/components/Slider";

const EVENTS_QUERY = defineQuery(
  `*[
  _type=="events" && date > now()
  ] {coverImage}`
);
const RELEASES_QUERY = defineQuery(
  `*[
  _type=="releases" 
  ]|order(date desc)[0] {coverImage, comments, title,date, type}`
);

export default async function Home() {
  const [data, releases] = await Promise.all([
    sanityFetch({ query: EVENTS_QUERY }),
    sanityFetch({ query: RELEASES_QUERY }),
  ]);

  return (
    <main className=" bg-black text-white ring">
      <HeroSection />
      <Header />

      <div className="flex h-1/2 item-center flex-col lg:flex-row ">
        <div className=" w-full lg:w-1/2 px-5 md:px-10 py-20 lg:px-16 2xl:px-26 bg-gray-600 text-xl font-medium flex flex-col gap-y-6">
          <h2>
            " Fear thou not; for I am with thee: be not dismayed; for I am thy
            God: I will strengthen thee; yea, I will help thee; yea, I will
            uphold thee with the right hand of my righteousness."
          </h2>
          <p className="ml-auto"> - Isaiah 41:10</p>
        </div>
        <div className="lg:w-1/2 w-full px-5 md:px-10 py-20 lg:px-16 2xl:px-26  text-xl font-medium flex flex-col gap-y-6">
          <h2>
            Born and raised in Ghana, Perez Musik has emerged as one of West
            Africa's most compelling gospel artists, captivating audiences with
            his unique blend of contemporary worship and traditional Ghanaian
            rhythms. With a heart devoted to ministry and a voice anointed for
            worship, Perez has become a household name across Ghana and
            throughout the African diaspora.
          </h2>

          <Link
            href="/about"
            className="bg-green-300 hover:bg-green-500 text-black font-bold text-lg py-4 px-8 w-fit rounded-full transition-all transform hover:scale-105 cursor-pointer"
          >
            More About Perez
          </Link>
        </div>
      </div>
      <Album data={releases.data} />
      <UpcomingEvents data={data.data} />
      <div className="py-10">
        {/* Watch us */}
        <h3 className="text-center text-2xl">Watch us Worship</h3>
        <Slider />
      </div>
    </main>
  );
}
