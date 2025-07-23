import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen   w-full">
      {/* About Section */}
      <div className="flex w-full justify-center  h-auto">
        <div className="w-1/3">
          <Image
            src="/about.jpg"
            alt="image"
            className="w-full"
            width={650}
            height={450}
          />
        </div>

        <div className="w-1/2 flex flex-col py-10 pl-10 gap-y-10 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
          reprehenderit iste illo repellendus at nesciunt voluptate
          necessitatibus nam perspiciatis. Nam nulla quas iste! Quaerat
          laudantium maiores ipsum aliquid ut nemo?
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            voluptates tempora omnis ipsam? Maiores repudiandae id pariatur
            facilis ab ipsum natus sed aperiam aliquid quo! Repellendus quis
            maiores voluptas corrupti.
          </p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quod
          ipsum laudantium eius doloremque tempora eos quae vitae voluptatibus
          consequuntur culpa sint ut accusantium laboriosam esse adipisci
          dolores, itaque illo!
        </div>
      </div>
      {/* About Section */}
    </section>
  );
};

export default Home;
