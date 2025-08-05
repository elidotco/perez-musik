"use client";

import { useState } from "react";

const HomepageArrow = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Scroll to next section or by viewport height
    const nextSection = document.querySelector(".next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="relative flex justify-start items-start cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Glow effect */}

      {/* Hover text */}

      {/* Arrow container */}
      <div
        className={`relative transition-all duration-500 ${isHovered ? "translate-y-2" : "animate-bounce"}`}
      >
        {/* Arrow shaft */}
        <div className="w-[2px] h-16 bg-white rounded-full shadow-lg mx-auto" />

        {/* Arrow head */}
        <div className="relative -mt-1">
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white filter drop-shadow-lg" />
          </div>
        </div>
      </div>

      {/* Additional animated elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-6">
        <div className="w-1 h-4 bg-white/60 rounded-full animate-pulse" />
      </div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-translate-y-8">
        <div className="w-0.5 h-3 bg-white/40 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default HomepageArrow;
