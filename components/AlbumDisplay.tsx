import React, { useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  MoreHorizontal,
  Plus,
} from "lucide-react";

const AlbumShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const tracks = [
    {
      title: "Ogo",
      artist: "Dunsin Oyekan, Theophilus Sunday",
      duration: "10:48",
    },
    {
      title: "The Worshipper's Song",
      artist: "Dunsin Oyekan",
      duration: "14:10",
    },
    {
      title: "Undignified (Excuse Me)",
      artist: "Dunsin Oyekan",
      duration: "08:53",
    },
    {
      title: "The Future",
      artist:
        "Dunsin Oyekan, Naomi Raine, Matt Maranve, Sheldon Bangera, Joseph Espino...",
      duration: "11:59",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Album Cover Section */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-yellow-400 via-orange-500 to-blue-600 rounded-lg shadow-2xl overflow-hidden">
                {/* Album artwork placeholder with harvest theme */}
                <div className="w-full h-full relative bg-gradient-to-b from-sky-400 via-yellow-300 to-orange-400">
                  {/* Stylized sickle and wheat design */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Wheat stalks */}
                      <div className="absolute -right-8 top-4">
                        <div className="w-2 h-32 bg-yellow-600 rounded-full transform rotate-12"></div>
                        <div className="w-2 h-28 bg-yellow-600 rounded-full transform rotate-45 absolute -left-1 top-2"></div>
                        <div className="w-2 h-30 bg-yellow-600 rounded-full transform -rotate-12 absolute left-2 top-1"></div>
                      </div>

                      {/* Decorative sickle shape */}
                      <div className="w-24 h-24 border-8 border-yellow-800 rounded-full border-r-transparent border-t-transparent transform rotate-45"></div>
                      <div className="w-4 h-16 bg-yellow-800 rounded-full absolute -bottom-8 left-10 transform rotate-12"></div>
                    </div>
                  </div>

                  {/* Artist signature */}
                  <div className="absolute bottom-6 left-6 text-white font-serif text-lg opacity-80">
                    Dunsin
                  </div>

                  {/* Title on spine */}
                  <div className="absolute right-0 top-0 h-full w-8 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="text-white text-sm font-bold transform rotate-90 whitespace-nowrap">
                      THE GREAT COMMISSION
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Album Info and Player Section */}
          <div className="space-y-8">
            {/* Album Title */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Latest Album: The Great Commission
              </h1>
              <p className="text-xl text-gray-600 mb-4">2024</p>
              <p className="text-gray-700 leading-relaxed">
                This 14-track album announces God's focus on the harvest of
                souls while encouraging believers to heed the Great Commission.
                As you listen, go forth in boldness and in the assurance of a
                harvest.
              </p>
            </div>

            {/* Spotify Player Interface */}
            <div className="bg-gray-900 rounded-2xl p-6 text-white shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold">The Great Commission</h3>
                    <p className="text-gray-400">Preview • Dunsin Oyekan</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors">
                    <Plus size={16} />
                    <span>Save on Spotify</span>
                  </button>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="text-black text-xs font-bold">S</div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center space-x-6 mb-6">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <SkipBack size={24} />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                >
                  {isPlaying ? (
                    <Pause className="text-black" size={24} />
                  ) : (
                    <Play className="text-black ml-1" size={24} />
                  )}
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <SkipForward size={24} />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <MoreHorizontal size={24} />
                </button>
              </div>

              {/* Track List */}
              <div className="space-y-3">
                {tracks.map((track, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer ${
                      currentTrack === index ? "bg-gray-800" : ""
                    }`}
                    onClick={() => setCurrentTrack(index)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-6 text-center text-gray-400 text-sm">
                        {currentTrack === index && isPlaying ? (
                          <div className="flex space-x-1">
                            <div className="w-1 h-4 bg-green-500 animate-pulse"></div>
                            <div
                              className="w-1 h-4 bg-green-500 animate-pulse"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                          </div>
                        ) : (
                          <span>{index + 11}</span>
                        )}
                      </div>
                      <div>
                        <div
                          className={`font-medium ${
                            currentTrack === index
                              ? "text-green-500"
                              : "text-white"
                          }`}
                        >
                          {track.title}
                        </div>
                        <div className="text-sm text-gray-400">
                          {track.artist}
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {track.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumShowcase;
