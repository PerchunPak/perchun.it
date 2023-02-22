import Head from "next/head";
import config from "@/lib/config";

const DOMAIN = "http://localhost:3000";

export default function Meta() {
  let image: string = `${DOMAIN}/api/og`;

  return (
    <Head>
      <title>{config.title}</title>
      <meta name="description" content={config.shortDescription} />
      <link rel="icon" href="/logo.png" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content={`${DOMAIN}/logo.png`}></meta>
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.shortDescription} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vercel" />
      <meta name="twitter:creator" content="@steventey" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.shortDescription} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
