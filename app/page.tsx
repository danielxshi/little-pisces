// "use client";
import Link from "next/link";
import { draftMode } from "next/headers";

import Date from "./date";
import CoverImage from "./cover-image";
import Avatar from "./avatar";
import MoreStories from "./more-stories";

import { getAllPosts } from "@/lib/api";
import { CMS_NAME, CMS_URL } from "@/lib/constants";
import Landing from "./components/landing";
import StoreInfo from "./components/StoreInfo";
import Works from "./components/works";
import Carousel from "./components/Carousel";
import SocialMedia from "./components/SocialMedia";
import Head from "next/head";

export const metadata = {
  title: `Little Pisces`,
  // icons: {
  //   icon: `./favicon.ico`,
  // },
  // description: ``,
};

export default function Page() {
  return (
    <div className="">
      <Head>
        <link rel="apple-touch-icon" href="./favicon.ico?v=2" />
        <link
          rel="shortcut icon"
          href="./favicon.ico?v=2"
          type="image/x-icon"
        />
        {/* <link rel=" bookmark" href="./favicon.ico?v=2" type="image/x-icon" /> */}

        {/* <link rel="icon" href="./favicon.ico" type="image/x-icon" sizes="32x32"> */}
        <link
          rel="shortcut icon"
          href="./favicon.ico?v=2"
          type="image/x-icon"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png?ce70f3e9aca01868"
          type="image/png"
          sizes="180x180"
        ></link>
      </Head>
      <Landing />
      <StoreInfo />
      <Works />
      <Carousel />
      <SocialMedia />
    </div>
  );
}
