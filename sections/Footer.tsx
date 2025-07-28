import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black relative mt-auto bottom-0 text-white py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 2xl:px-20">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center mr-3">
              <span className="text-black font-bold">♪</span>
            </div>
            <span className="text-xl font-bold">Perez Musik</span>
          </div>
          <p className="text-gray-400 mb-6">
            Spreading God's Love Through Music
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.instagram.com/perezmusik233/?hl=en"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/perezmusik233/"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com/channel/UCOT2mB7DXLh65eT3L96iJvQ"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://open.spotify.com/artist/0aoCkJnz41cyF84JmMISzI?si=0zzy_JBhRYu63oPOKMCJgg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
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
