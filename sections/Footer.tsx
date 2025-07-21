import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black relative bottom-0 text-white py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 2xl:px-20">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
              <span className="text-black font-bold">♪</span>
            </div>
            <span className="text-xl font-bold">Perez Musik</span>
          </div>
          <p className="text-gray-400 mb-6">
            Spreading God's Love Through Music
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              YouTube
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Spotify
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Perez Musik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
