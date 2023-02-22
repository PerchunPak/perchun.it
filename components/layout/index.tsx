import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import Tooltip from "@/components/shared/tooltip";

export default function Layout({ children }: { children: ReactNode }) {
  const scrolled = useScroll(50);

  return (
    <>
      <Meta />
      <div className="fixed -z-50 h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="My avatar"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Perchun</p>
          </Link>
        </div>
      </div>
      <main className="flex w-full flex-col items-center justify-center py-32">
        {children}
      </main>
      <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center text-gray-500">
        Created by{" "}
        <Tooltip content="Hey, it's me!">
          <div className="footer-link">Perchun</div>
        </Tooltip>{" "}
        on base of{" "}
        <Tooltip content="Precedent is an opinionated collection of components, hooks, and utilities for your Next.js project.">
          <Link
            className="footer-link"
            href="https://precedent.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Precedent
          </Link>
        </Tooltip>
      </div>
    </>
  );
}
