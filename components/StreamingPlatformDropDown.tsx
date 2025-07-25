"use client";
import React, { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";

const StreamingPlatformsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const streamingPlatforms = [
    {
      name: "Spotify",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.32 11.28-1.08 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      ),
      color: "text-green-500",
      bgColor: "hover:bg-green-50",
      url: "https://open.spotify.com/artist/0aoCkJnz41cyF84JmMISzI?si=C3PBPtBDSZOBTMXCyx5ydg",
    },
    {
      name: "Apple Music",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.124-.04-.001-.08-.005-.12-.005H6.044c-.04 0-.08.004-.12.005-.526-.011-1.047.031-1.564.124-.673.121-1.303.353-1.877.727C1.365 1.623.62 2.623.303 3.933.128 4.653.063 5.386.063 6.124v11.993c0 .738.065 1.47.24 2.19.317 1.31 1.062 2.31 2.18 3.043.574.374 1.204.606 1.877.727.517.093 1.038.135 1.564.124.04.001.08.005.12.005h11.972c.04 0 .08-.004.12-.005.526.011 1.047-.031 1.564-.124.673-.121 1.303-.353 1.877-.727 1.118-.734 1.863-1.734 2.18-3.043.175-.72.24-1.452.24-2.19V6.124zm-11.455 6.778c-.31.263-.743.395-1.3.395-.557 0-.99-.132-1.3-.395-.31-.263-.465-.632-.465-1.106 0-.474.155-.843.465-1.106.31-.263.743-.395 1.3-.395.557 0 .99.132 1.3.395.31.263.465.632.465 1.106 0 .474-.155.843-.465 1.106zm5.207 3.634c-.27.27-.627.405-1.07.405-.444 0-.801-.135-1.071-.405L12.542 13.97l-3.066 2.566c-.27.27-.627.405-1.071.405-.443 0-.8-.135-1.07-.405-.27-.27-.405-.627-.405-1.071 0-.443.135-.8.405-1.07l3.066-2.566-3.066-2.566c-.27-.27-.405-.627-.405-1.07 0-.444.135-.801.405-1.071.27-.27.627-.405 1.07-.405.444 0 .801.135 1.071.405l3.066 2.566 3.066-2.566c.27-.27.627-.405 1.071-.405.443 0 .8.135 1.07.405.27.27.405.627.405 1.071 0 .443-.135.8-.405 1.07L13.613 11.834l3.066 2.566c.27.27.405.627.405 1.07 0 .444-.135.801-.405 1.071z" />
        </svg>
      ),
      color: "text-black",
      bgColor: "hover:bg-gray-50",
      url: "https://music.apple.com/us/artist/perez-musik/928051261",
    },
    {
      name: "Deezer",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.81 12.74h3.02v1.52h-3.02zm0-2.15h3.02v1.52h-3.02zm0-2.15h3.02v1.52h-3.02zm-4.03 6.45h3.02v1.52h-3.02zm0-2.15h3.02v1.52h-3.02zm0-2.15h3.02v1.52h-3.02zm0-2.15h3.02v1.52h-3.02zm0-2.15h3.02v1.52h-3.02zm-4.03 8.6h3.02v1.52h-3.02zm0-2.15h3.02v1.52h-3.02zm0-2.15h3.02v1.52h-3.02zm0-2.15h3.02v1.52h-3.02zm0-2.15h3.02v1.52h-3.02zm0-2.15h3.02v1.52h-3.02zm-4.03 10.75h3.02v1.52H6.72zm0-2.15h3.02v1.52H6.72zm0-2.15h3.02v1.52H6.72zm0-2.15h3.02v1.52H6.72zm0-2.15h3.02v1.52H6.72zm0-2.15h3.02v1.52H6.72zm0-2.15h3.02v1.52H6.72zm-4.03 12.9h3.02v1.52H2.69zm0-2.15h3.02v1.52H2.69zm0-2.15h3.02v1.52H2.69zm0-2.15h3.02v1.52H2.69zm0-2.15h3.02v1.52H2.69z" />
        </svg>
      ),
      color: "text-orange-500",
      bgColor: "hover:bg-orange-50",
      url: "https://link.deezer.com/s/30zw5Y7vQT8haaktTL6Jg",
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Auto-close dropdown when mouse leaves both button and dropdown
  useEffect(() => {
    if (!isHovered && isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isHovered, isOpen]);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePlatformClick = (platform: {
    name: any;
    icon?: React.JSX.Element;
    color?: string;
    bgColor?: string;
    url: any;
  }) => {
    // In a real app, you would navigate to the streaming platform
    console.log(`Opening ${platform.name}: ${platform.url}`);
    window.open(platform.url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className=" ">
        <div className="relative ">
          {/* Your exact play button */}
          <div
            ref={buttonRef}
            className="p-2 shadow hidden cursor-pointer shadow-black bg-black rounded-full md:flex justify-center transition-all transform hover:scale-105 items-center"
            onClick={handleButtonClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Play fontSize={20} color="white" className="w-7" />
          </div>

          {/* Streaming platforms dropdown */}
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-60 bg-white rounded-xl shadow-xl border border-gray-200 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100 mb-2">
                Stream Now
              </div>

              <div className="max-h-64 overflow-y-auto">
                {streamingPlatforms.map((platform) => (
                  <button
                    key={platform.name}
                    onClick={() => handlePlatformClick(platform)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${platform.bgColor} hover:text-gray-900 group`}
                  >
                    <div
                      className={`${platform.color} group-hover:scale-110 transition-transform`}
                    >
                      {platform.icon}
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-gray-900">
                      {platform.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StreamingPlatformsDropdown;
