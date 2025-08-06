"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import StreamingPlatformsDropdown from "./StreamingPlatformDropDown";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Music", path: "/music" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full z-50 h-20 fixed top-0 transition-all duration-500 px-4 md:px-10 lg:px-16 2xl:px-20 text-black flex items-center justify-between lg:justify-center  gap-56  ${
          isScrolled
            ? "bg-black/80 text-white backdrop-blur shadow shadow-gray-800"
            : "bg-transparent text-black"
        }`}
      >
        {/* Logo */}
        <div className={`w-28 ${isScrolled ? "mt-16" : ""} h-28`}>
          {isScrolled ? (
            <a href="/">
              <Image
                src="/logo1.png"
                alt="Logo"
                height={100}
                width={50}
                className=""
              />
            </a>
          ) : (
            <a href="/">
              <Image src="/logo.png" alt="Logo" height={100} width={100} />
            </a>
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="md:flex hidden gap-6">
          {menu.map((item) => (
            <li key={item.name} className="cursor-pointer relative group">
              <a href={item.path} className="relative">
                {item.name}
              </a>
              <span
                className={`absolute transition-all duration-200 bottom-0 left-0 w-0 ${isScrolled ? " bg-white" : " bg-black"} group-hover:w-full h-[2px]`}
              ></span>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <StreamingPlatformsDropdown isScrolled={isScrolled} />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md text-white"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-70"
          onClick={closeMobileMenu}
        >
          <div
            className="fixed top-20 left-0 right-0 bg-black text-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col">
              {menu.map((item) => (
                <li
                  key={item.name}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <a
                    href={item.path}
                    className="block px-6 py-4 text-lg text-white hover:bg-gray-50"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="p-6 border-t border-gray-100">
              <StreamingPlatformsDropdown isScrolled={isScrolled} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
