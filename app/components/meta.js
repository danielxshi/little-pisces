import Head from "next/head";
// import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="../../public/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../../public/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="../../public/favicon-16x16.png"
      />
      {/* <link rel="manifest" href="/favicon/site.webmanifest" /> */}
      <link rel="shortcut icon" href="/favicon/favicon-32x32.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/favicon-32x32.png" />
      <meta name="theme-color" content="#000" />
      {/* <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}
      {/* <meta
        name="description"
        content={`Daniel Shi Portfolio`}
      /> */}
      {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
    </Head>
  );
}
