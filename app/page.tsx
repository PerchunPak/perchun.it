"use client";

import Balancer from "react-wrap-balancer";
import config from "@/lib/config";
import InsertMyProjects from "@/components/home/project";
import InsertMySocials from "@/components/home/my-socials";
import useWindowSize from "@/lib/hooks/use-window-size";

export default function Home() {
  const { isDesktop } = useWindowSize();

  return (
    <>
      <div className="stop-wrapping z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[0.03em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>{config.title}</Balancer>
        </h1>
        <p
          className="md:stop-wrapping mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          {isDesktop ? config.aboutMe : <Balancer>{config.aboutMe}</Balancer>}
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-3 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <InsertMySocials />
        </div>
      </div>
      <InsertMyProjects />
    </>
  );
}
