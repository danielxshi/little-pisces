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
import test from "../public/favicon.ico"


export const metadata = {
  title: `Little Pisces`,
  // description: ``,
};

export default function Page() {
  return (
    <div className="">
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="16x16"
          href="../public/favicon.ico"
        />
      </Head>
      <Landing />
      <StoreInfo />
      <Works />
      <Carousel />
      <SocialMedia />
    </div>
  );
}
