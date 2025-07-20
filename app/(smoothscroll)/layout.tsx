"use client";

import ReactLenis, { useLenis } from "lenis/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });
  return (
    <>
      <ReactLenis root />

      {children}
    </>
  );
}
