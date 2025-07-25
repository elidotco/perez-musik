import React from "react";
import { MapPin, Clock } from "lucide-react";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import Image from "next/image";
import { urlFor } from "../../../../sanity/lib/image";

function formatTime(datetime: string | number | Date) {
  return new Date(datetime).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

type Event = {
  Venue: string;
  name: string;
  Location: string;
  coverImage: any;
  id: number;
  date: string | number | Date;
  title: string;
  location: string;
  venue: string;
  time: string;
};
const EVENTS_QUERY = defineQuery(
  `*[
  _type=="events"
  ] {coverImage,date,Location,name ,Venue}`
);

const EventsSection = async () => {
  const { data } = await sanityFetch({ query: EVENTS_QUERY });

  const now = new Date();
  const upcomingEvents: Event[] = data.filter(
    (event: { date: string | number | Date }) =>
      new Date(event.date) > new Date()
  );

  const pastEvents: Event[] = data.filter(
    (event: { date: string | number | Date }) =>
      new Date(event.date) < new Date()
  );

  const formatEventDate = (datetime: string | number | Date) => {
    const date = new Date(datetime);
    if (isNaN(date.getTime())) {
      return { day: "--", month: "N/A" };
    }

    return {
      day: date.getDate(),
      month: date.toLocaleDateString("en-US", { month: "short" }),
    };
  };
  const EventCard = ({
    event,
    isPast = false,
  }: {
    event: Event;
    isPast?: boolean;
  }) => (
    <div className="flex items-center flex-col md:flex-row gap-5 space-x-6 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
      {/* Date */}
      <div className="text-center flex-shrink-0">
        <div className="text-3xl font-bold text-gray-800">
          {" "}
          {formatEventDate(event.date).day}
        </div>
        <div className="text-sm text-gray-600 font-medium">
          {formatEventDate(event.date).month}
        </div>
      </div>

      {/* Event Image */}
      <div className="flex-shrink-0 h-56">
        {event.coverImage ? (
          <Image
            src={urlFor(event.coverImage).url()}
            alt="Event cover"
            width={350}
            height={450}
            className="h-full boject-fit"
          />
        ) : (
          ""
        )}
      </div>

      {/* Event Details */}
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {event.name}
        </h3>
        <div className="text-gray-600 text-sm mb-1">{event.Location}</div>
      </div>

      {/* Venue and Time */}
      <div className="flex flex-col space-y-2 text-gray-600 text-sm">
        <div className="flex items-center space-x-2">
          <MapPin size={16} className="text-gray-400" />
          <span>{event.Venue}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock size={16} className="text-gray-400" />
          <span>{formatTime(event.date)}</span>
        </div>
      </div>

      {/* Status Button */}
      <div className="flex-shrink-0">
        {isPast ? (
          <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-yellow-400 transition-colors">
            Experience
          </button>
        ) : (
          <button
            disabled
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Experience
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
      {" "}
      <div className="flex w-full relative bg-[url(/tt.jpg)] bg-fixed bg-no-repeat bg-cover bg-center h-96">
        <div className="absolute  inset-0 bg-gradient-to-b from-yellow-400 to-black opacity-50"></div>
        {/* <Image
            src="/tt.jpg"
            alt="bottom pattern"
            width={1920}
            height={400}
            className="w-full h-full object-cover"
            quality={100}
            priority
          /> */}
      </div>
      <div className="w-full mx-auto p-8 bg-gray-50 min-h-screen">
        {/* Upcoming Events Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Upcoming Events
          </h2>

          {upcomingEvents.length > 0 ? (
            <div className="space-y-4">
              {upcomingEvents?.map((event) => (
                <EventCard key={event.name} event={event} isPast={false} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">
                No upcoming events scheduled
              </div>
              <div className="text-gray-400">
                Check back soon for new announcements!
              </div>
            </div>
          )}
        </div>

        {/* Past Events Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Past Events
          </h2>

          {pastEvents.length > 0 ? (
            <div className="space-y-4 flex max-w-6xl mx-auto flex-col">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast={true} />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default EventsSection;
function now() {
  throw new Error("Function not implemented.");
}
