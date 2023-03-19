import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as RWBProvider } from "react-wrap-balancer";
import cx from "classnames";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Script from "next/script";
import Honeybadger from "@honeybadger-io/js";
import assert from "assert";

const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sharedHoneybadgerConfig = {
  apiKey: process.env.HONEYBADGER_TOKEN,
  environment: process.env.NODE_ENV,
};

if (typeof window === "undefined") {
  // Server config
  const projectRoot = process.cwd();
  Honeybadger.configure({
    ...sharedHoneybadgerConfig,
    projectRoot: "webpack:///./",
  }).beforeNotify((notice) => {
    assert(notice !== undefined); // I do not really know how is it safe

    notice.backtrace.forEach((line) => {
      if (line.file) {
        line.file = line.file.replace(
          `${projectRoot}/.next/server`,
          "https://perchun.it",
        );
      }
      return line;
    });
  });
} else {
  // Browser config
  Honeybadger.configure({
    ...sharedHoneybadgerConfig,
    projectRoot: "webpack://_N_E/./",
  });
}

export default function MyApp({
  Component,
  pageProps: { ...pageProps },
}: AppProps<{}>) {
  return (
    <>
      <RWBProvider>
        <div className={cx(sfPro.variable, inter.variable)}>
          <Component {...pageProps} />
        </div>
      </RWBProvider>
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
