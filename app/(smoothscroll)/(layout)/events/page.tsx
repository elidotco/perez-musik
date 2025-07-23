import React from "react";
import { MapPin, Clock } from "lucide-react";

type Event = {
  id: number;
  date: { day: string; month: string };
  title: string;
  location: string;
  venue: string;
  time: string;
  image: string;
};

const EventsSection = () => {
  const upcomingEvents: Event[] = [
    // Add upcoming events here when available
  ];

  const pastEvents: Event[] = [
    {
      id: 1,
      date: { day: "15", month: "MAY" },
      title: "Kadosh Takoradi Tour",
      location: "Takoradi, Ghana",
      venue: "Breakthrough Family Min. Intl",
      time: "5:00 pm",
      image: "/api/placeholder/80/100",
    },
    {
      id: 2,
      date: { day: "29", month: "MAY" },
      title: "Kadosh Koforidua Tour",
      location: "Koforidua, Ghana",
      venue: "ICGC Jesus Temple",
      time: "5:00 pm",
      image: "/api/placeholder/80/100",
    },
  ];

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
        <div className="text-3xl font-bold text-gray-800">{event.date.day}</div>
        <div className="text-sm text-gray-600 font-medium">
          {event.date.month}
        </div>
      </div>

      {/* Event Image */}
      <div className="flex-shrink-0">
        <div className="w-20 h-24 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg overflow-hidden">
          {/* Placeholder event poster */}
          <div className="w-full h-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 flex items-center justify-center relative">
            <div className="text-white text-xs font-bold text-center p-1">
              <div className="mb-1">KADOSH</div>
              <div className="text-xs">TOUR</div>
            </div>
            <div className="absolute bottom-1 left-1 right-1 bg-black bg-opacity-50 text-white text-xs text-center py-1 rounded">
              2024
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {event.title}
        </h3>
        <div className="text-gray-600 text-sm mb-1">{event.location}</div>
      </div>

      {/* Venue and Time */}
      <div className="flex flex-col space-y-2 text-gray-600 text-sm">
        <div className="flex items-center space-x-2">
          <MapPin size={16} className="text-gray-400" />
          <span>{event.venue}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock size={16} className="text-gray-400" />
          <span>{event.time}</span>
        </div>
      </div>

      {/* Status Button */}
      <div className="flex-shrink-0">
        {isPast ? (
          <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-yellow-400 transition-colors">
            PAST EVENT
          </button>
        ) : (
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            GET TICKETS
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full mx-auto p-8 bg-gray-50 min-h-screen">
      {/* Upcoming Events Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Upcoming Events
        </h2>

        {upcomingEvents.length > 0 ? (
          <div className="space-y-4">
            {upcomingEvents?.map((event) => (
              <EventCard key={event.id} event={event} isPast={false} />
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

        <div className="space-y-4 flex max-w-6xl mx-auto flex-col">
          {pastEvents.map((event) => (
            <EventCard key={event.id} event={event} isPast={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
