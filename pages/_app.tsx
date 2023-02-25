import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as RWBProvider } from "react-wrap-balancer";
import cx from "classnames";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";
import Script from "next/script";

const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

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
