import Image from "next/image";

const AlbumShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br  p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Album Cover Section */}
          <div className="w-3/4">
            <Image
              src="/breakthrough.jpg"
              alt="album covers"
              width={1980}
              height={1080}
            />
          </div>

          {/* Album Info and Player Section */}
          <div className="space-y-8 bg-gray-100 py-10 px-16">
            {/* Album Title */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Latest Album: BreakThrough
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
            <div className="w-full">
              <iframe
                data-testid="embed-iframe"
                style={{}}
                src="https://open.spotify.com/embed/album/5oY5TTJsroVfIVlM42dUM8?utm_source=generator"
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
