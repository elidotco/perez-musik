import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export interface AlbumData {
  coverImage: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
    // Additional optional properties that Sanity images might have
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
    crop?: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
  };
  type: string;
  title: string;
  date: string;
  comments: string;
  spotify: string; // Spotify embed URL
}
export interface AlbumShowcaseProps {
  data: AlbumData;
}

const AlbumShowcase: React.FC<AlbumShowcaseProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="min-h-screen bg-gradient-to-br  p-4 md:px-10">
      <div className=" w-full md:max-w-7xl md:mx-auto">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-10">
          {/* Album Cover Section */}
          <div className="md:w-3/4">
            <Image
              src={urlFor(data.coverImage).url()}
              alt="album covers"
              width={1980}
              height={1080}
            />
          </div>

          {/* Album Info and Player Section */}
          <div className="space-y-8   bg-gray-100 py-10 md:px-16 ">
            {/* Album Title */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {data.type}: {data.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">{data.date}</p>
              <p className="text-gray-700 leading-relaxed">{data.comments}</p>
            </div>

            {/* Spotify Player Interface */}
            <div className="w-full">
              <iframe
                data-testid="embed-iframe"
                style={{}}
                src={data.spotify}
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumShowcase;
