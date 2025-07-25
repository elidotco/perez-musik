"use client";
import React, { useState } from "react";
import { Geist } from "next/font/google";
import Image from "next/image";
import { Bars3Icon, PlayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import StreamingPlatformsDropdown from "./StreamingPlatformDropDown";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Events",
      path: "/events",
    },
    {
      name: "Music",
      path: "/music",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      <header
        className={`w-full z-50 h-20  bg-black ${isMobileMenuOpen ? "fixed" : "sticky"} top-0 shadow px-0 md:px-10 lg:px-16 flex items-center lg:gap-x-56 justify-between lg:justify-center 2xl:px-20`}
      >
        {/* the Logo fo the header */}
        <div className="w-28 h-28 ">
          <a href="/">
            {" "}
            <Image src="/logo.png" alt="Logo" height={100} width={100} />
          </a>
        </div>

        {/* the Logo fo the header */}
        {/* Menu */}
        <ul className="md:flex hidden gap-6">
          {menu.map((item) => {
            return (
              <li key={item.name} className="cursor-pointer relative group ">
                <a href={item.path} className="relative">
                  {" "}
                  {item.name}
                </a>
                <span className="absolute transition-all duration-200 bottom-0 left-0 w-0 bg-black group-hover:w-full h-[2px] "></span>
              </li>
            );
          })}
        </ul>
        <StreamingPlatformsDropdown />
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md cursor-pointer transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </header>
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={closeMobileMenu}
        >
          <div
            className="fixed top-20 left-0 right-0 bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Items */}
            <ul className="flex flex-col">
              {menu.map((item) => (
                <li
                  key={item.name}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <a
                    href={item.path}
                    className="block px-6 py-4 text-lg hover:bg-gray-50 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Streaming Platforms Dropdown */}
            <div className="p-6 border-t border-gray-100">
              <StreamingPlatformsDropdown />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
