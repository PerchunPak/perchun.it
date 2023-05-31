"use client";

import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <Script src="https://simpleanal.perchun.it/latest.js" />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://simpleanal.perchun.it/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  );
}
