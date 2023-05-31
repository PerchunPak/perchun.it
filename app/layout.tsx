import "./globals.css";
import { Provider as RWBProvider } from "react-wrap-balancer";
import { Metadata } from "next";
import config from "@/lib/config";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Analytics from "@/components/layout/analytics";
import { Suspense } from "react";

const DOMAIN = "http://localhost:3000";

export const metadata: Metadata = {
  title: config.title,
  description: config.shortDescription,
  authors: [{ name: "Perchun Pak", url: "https://perchun.it" }],
  icons: { icon: "/logo.png" },
  openGraph: {
    title: config.title,
    description: config.shortDescription,
    images: [{ url: `${DOMAIN}/opengraph-image` }],
  },
  // I don't use Twitter, so I don't need this.
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@vercel",
  //   creator: "@steventey",
  //   title: config.title,
  //   description: config.shortDescription,
  //   images: `${DOMAIN}/opengraph-image`,
  // }
  metadataBase: new URL("https://perchun.it"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <RWBProvider>
          <Suspense fallback="...">
            <Navbar />
          </Suspense>
          <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
            {children}
          </main>
          <Footer />
        </RWBProvider>
        <Analytics />
      </body>
    </html>
  );
}
