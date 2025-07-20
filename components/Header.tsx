import React from "react";
import { Geist } from "next/font/google";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const menu = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "About",
      path: "#",
    },
    {
      name: "Events",
      path: "#",
    },
    {
      name: "Contact",
      path: "#",
    },
  ];
  return (
    <header className="w-full h-20 bg-white sticky top-0 shadow px-5 md:px-10 lg:px-16 flex items-center lg:gap-x-56 justify-between lg:justify-center 2xl:px-20">
      {/* the Logo fo the header */}
      <div className="w-28 h-28 ">
        <a href="/">
          {" "}
          <Image src="/logo.png" alt="Logo" height={100} width={100} />
        </a>
      </div>

      {/* the Logo fo the header */}
      {/* Menu */}
      <ul className="flex gap-6">
        {menu.map((item) => {
          return (
            <li key={item.name} className="cursor-pointer relative group ">
              <a href="#" className="relative">
                {" "}
                {item.name}
              </a>
              <span className="absolute transition-all duration-200 bottom-0 left-0 w-0 bg-black group-hover:w-full h-[2px] "></span>
            </li>
          );
        })}
      </ul>
      {/* Play button */}
      <div className="p-1.5 shadow cursor-pointer shadow-black bg-black rounded-full flex justify-center transition-all transform hover:scale-105 items-center">
        <PlayIcon fontSize={20} color="white" className="w-7" />
      </div>
    </header>
  );
};

export default Header;
