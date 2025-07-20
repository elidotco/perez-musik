import React from "react";

const UpcomingEvents = () => {
  return (
    <div>
      {" "}
      <section className="py-20 bg-black-alt text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 2xl:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-300">
              Join us for worship and fellowship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors cursor-pointer">
              <div className="text-yellow-400 font-bold mb-2">AUG 15</div>
              <h3 className="text-xl font-bold mb-2">Revival Night</h3>
              <p className="text-gray-300 mb-3">Grace Chapel - 7:00 PM</p>
              <p className="text-sm text-gray-400">
                A night of worship and powerful ministry
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors cursor-pointer">
              <div className="text-yellow-400 font-bold mb-2">AUG 22</div>
              <h3 className="text-xl font-bold mb-2">Gospel Concert</h3>
              <p className="text-gray-300 mb-3">City Arena - 6:00 PM</p>
              <p className="text-sm text-gray-400">
                Special guest appearances and worship
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors cursor-pointer">
              <div className="text-yellow-400 font-bold mb-2">SEP 05</div>
              <h3 className="text-xl font-bold mb-2">Youth Conference</h3>
              <p className="text-gray-300 mb-3">Faith Center - 10:00 AM</p>
              <p className="text-sm text-gray-400">
                Empowering the next generation
              </p>
            </div>
          </div>
          <div className="mx-auto flex">
            <a href="#" className="text-center">
              View past Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;
