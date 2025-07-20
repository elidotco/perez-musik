import { Header } from "@/components";

import { HeroSection, UpcomingEvents } from "@/sections";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Header />
      <div className="h-screen w-full"></div>
      <UpcomingEvents />
      <div className="h-screen w-full"></div>
    </main>
  );
}
