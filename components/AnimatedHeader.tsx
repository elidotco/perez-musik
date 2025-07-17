"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SpotifyHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header background + size change on scroll
    gsap.to(headerRef.current, {
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      duration: 0.5,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Animate hero text on load
    gsap.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 w-full z-50 text-black px-6 py-6 transition-all"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Spotify</h1>
          <nav className="space-x-4 text-sm font-medium">
            <a href="#" className="hover:text-green-500">
              Premium
            </a>
            <a href="#" className="hover:text-green-500">
              Support
            </a>
            <a href="#" className="hover:text-green-500">
              Download
            </a>
          </nav>
        </div>
      </header>

      <section
        ref={heroRef}
        className="h-screen bg-gradient-to-br from-green-400 via-purple-500 to-black text-white flex flex-col justify-center items-center text-center px-4"
      >
        <h2 className="text-5xl font-bold mb-4 hero-text">
          Welcome to Spotify
        </h2>
        <p className="text-lg hero-text">
          Millions of songs. No credit card needed.
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 hero-text">
          Get Spotify Free
        </button>
      </section>
    </>
  );
}
