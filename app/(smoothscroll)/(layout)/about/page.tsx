import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery, PortableText, PortableTextComponents } from "next-sanity";
import Image from "next/image";
import React, { ReactNode } from "react";
interface BlockProps {
  children: ReactNode;
}

interface MarkProps {
  children: ReactNode;
}

interface LinkMarkProps {
  children: ReactNode;
  value: {
    href: string;
    _type: "link";
  };
}

interface ListProps {
  children: ReactNode;
}

interface ListItemProps {
  children: ReactNode;
}
const portableTextComponents: PortableTextComponents = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium mb-2">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 text-gray-200 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: MarkProps) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    link: ({ children, value }) => (
      <a
        href={value.href}
        className="text-blue-600 hover:text-blue-800 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
};
const ABOUT_QUERY = defineQuery(
  `*[
  _type=="about" 
  ]`
);

const Home = async () => {
  const { data } = await sanityFetch({ query: ABOUT_QUERY });
  return (
    <section className="min-h-screen bg-black text-white  py-36  w-full">
      {/* About Section */}
      <div className="flex w-full justify-center md:flex-row flex-col-reverse  h-auto">
        <div className="md:w-1/3 w-full">
          <Image
            src="/about.jpg"
            alt="image"
            className="w-full"
            width={650}
            height={450}
          />
        </div>

        <div className="w-full  md:w-1/2 flex flex-col py-10 pl-10 gap-y-10 ">
          <PortableText
            value={data[0].description}
            components={portableTextComponents}
          />
        </div>
      </div>
      {/* About Section */}
    </section>
  );
};

export default Home;
