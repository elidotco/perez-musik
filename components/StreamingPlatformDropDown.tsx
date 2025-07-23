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
      url: "https://open.spotify.com",
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
      url: "https://music.apple.com",
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
      url: "https://www.deezer.com",
    },
    {
      name: "YouTube Music",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.568 17.568c-1.08 1.08-2.496 1.68-4.016 1.68s-2.936-.6-4.016-1.68c-1.08-1.08-1.68-2.496-1.68-4.016s.6-2.936 1.68-4.016c1.08-1.08 2.496-1.68 4.016-1.68s2.936.6 4.016 1.68c1.08 1.08 1.68 2.496 1.68 4.016s-.6 2.936-1.68 4.016zM9.6 8.4v7.2l6-3.6-6-3.6z" />
        </svg>
      ),
      color: "text-red-500",
      bgColor: "hover:bg-red-50",
      url: "https://music.youtube.com",
    },
    {
      name: "SoundCloud",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.175 13.37c-.055 0-.096-.041-.096-.096v-2.55c0-.055.041-.096.096-.096s.096.041.096.096v2.55c0 .055-.041.096-.096.096zm.894 0c-.055 0-.096-.041-.096-.096V9.67c0-.055.041-.096.096-.096s.096.041.096.096v3.604c0 .055-.041.096-.096.096zm.894 0c-.055 0-.096-.041-.096-.096V8.726c0-.055.041-.096.096-.096s.096.041.096.096v4.548c0 .055-.041.096-.096.096zm.894 0c-.055 0-.096-.041-.096-.096V7.782c0-.055.041-.096.096-.096s.096.041.096.096v5.492c0 .055-.041.096-.096.096zm.894 0c-.055 0-.096-.041-.096-.096V6.838c0-.055.041-.096.096-.096s.096.041.096.096v6.436c0 .055-.041.096-.096.096zm.894 0c-.055 0-.096-.041-.096-.096V5.894c0-.055.041-.096.096-.096s.096.041.096.096v7.38c0 .055-.041.096-.096.096zm.894 0c-.055 0-.096-.041-.096-.096V4.95c0-.055.041-.096.096-.096s.096.041.096.096v8.324c0 .055-.041.096-.096.096zm.894.326c-.069 0-.124-.055-.124-.124V4.624c0-.069.055-.124.124-.124s.124.055.124.124v8.948c0 .069-.055.124-.124.124zm.976.124c-.083 0-.152-.069-.152-.152V4.472c0-.083.069-.152.152-.152s.152.069.152.152v9.196c0 .083-.069.152-.152.152zm1.01.138c-.097 0-.18-.083-.18-.18V4.334c0-.097.083-.18.18-.18s.18.083.18.18v9.444c0 .097-.083.18-.18.18zm1.044.152c-.11 0-.208-.097-.208-.208V4.196c0-.11.097-.208.208-.208s.208.097.208.208v9.582c0 .11-.097.208-.208.208zm17.982-3.188c0 2.188-1.81 3.998-3.998 3.998H9.85c-.11 0-.208-.097-.208-.208V4.058c0-.152.138-.263.277-.208 3.205 1.387 5.492 4.624 5.492 8.324 0 .805-.11 1.582-.346 2.29.208-.055.415-.069.623-.069 1.665 0 3.026 1.36 3.026 3.026z" />
        </svg>
      ),
      color: "text-orange-600",
      bgColor: "hover:bg-orange-50",
      url: "https://soundcloud.com",
    },
    {
      name: "Amazon Music",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.951 17.937c-.259.42-.811.553-1.230.294-3.371-2.057-7.611-2.523-12.607-1.383-.486.111-.973-.192-1.084-.678-.111-.486.192-.973.678-1.084 5.489-1.253 10.263-.727 14.331 1.596.42.259.553.811.294 1.230v.025zm1.758-3.91c-.324.522-1.013.684-1.534.36-3.857-2.37-9.736-3.058-14.299-1.673-.581.177-1.195-.15-1.372-.731-.177-.581.15-1.195.731-1.372 5.227-1.587 11.827-.841 16.114 1.901.522.324.684 1.013.36 1.534v-.019zm.15-4.076c-4.631-2.751-12.277-3.004-16.697-1.662-.698.212-1.435-.183-1.647-.881-.212-.698.183-1.435.881-1.647 5.065-1.538 13.58-1.241 18.905 1.925.631.375.841 1.187.466 1.818-.375.631-1.187.841-1.818.466l.091-.019z" />
        </svg>
      ),
      color: "text-blue-500",
      bgColor: "hover:bg-blue-50",
      url: "https://music.amazon.com",
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
    // window.open(platform.url, '_blank');
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
