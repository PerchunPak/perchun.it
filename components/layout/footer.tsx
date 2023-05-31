"use client";

import Tooltip from "@/components/shared/tooltip";

export default function Footer() {
  return (
    <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center text-gray-500">
      Created by{" "}
      <Tooltip content="Hey, it's me!">
        <div className="footer-link">Perchun</div>
      </Tooltip>{" "}
      on base of{" "}
      <Tooltip content="Precedent is an opinionated collection of components, hooks, and utilities for your Next.js project.">
        <a
          className="footer-link"
          href="https://precedent.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Precedent
        </a>
      </Tooltip>
    </div>
  );
}
