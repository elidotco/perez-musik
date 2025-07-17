import React from "react";
import { Geist } from "next/font/google";

const Header = () => {
  return (
    <header className="w-full h-20 bg-white sticky top-0 shadow shadow-amber-300 px-5 md:px-10 lg:px-16 flex items-center 2xl:px-20">
      {/* the Logo fo the header */}
      <div className="w-10 h-10 rounded-full bg-amber-200"></div>

      {/* the Logo fo the header */}
      {/* Menu */}
      <ul className="flex gap-6 flex-1 pl-12">
        <li>Home</li>
        <li>About</li>
        <li>Upcoming Events</li>
        <li>Contact</li>
      </ul>
      {/* Play button */}
    </header>
  );
};

export default Header;
