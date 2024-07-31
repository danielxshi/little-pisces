"use client";

import "./globals.scss";
import { Inter } from "next/font/google";
import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BurgerModal from "./components/burger-modal";
import Header from "./components/HeaderContainer";
import ScrollObserver from "./util/scroll-observer";
import ProjectMessages from "./JSON/ProjectMessages";
import Link from "next/link";
import localFont from "next/font/local";
import MobileBurgerModal from "./components/mobile-burger-modal";
import Head from "next/head";

// import test from "../public/apple-icon.png"

const Manrope = localFont({
  src: [
    {
      path: "./fonts/Manrope/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

function Footer() {
  return (
    <footer className=" bg-orange md:pt-16 pt-16 pb-4 text-white ">
      <div className="grid grid-cols-12 container">
        <div className="col-start-1 col-end-13 flex justify-between md:flex-row flex-col">
          <div className="w-full md:w-2/4 ">
            <ul className="">
              {ProjectMessages.StoreInfo.map((item, index) => (
                <li className="mb-2 md:mb-0">{item.content}</li>
              ))}
            </ul>
            {/* <div className="w-2/4 ">
              <ul className="">
                {ProjectMessages.ContactInfo.map((item, index) => (
                  <Link
                    href="mailto:jacky@littlepisces.com"
                    className="mb-2 md:mb-0"
                  >
                    {item.content}
                  </Link>
                ))}
              </ul>
            </div> */}
          </div>

          <div className="footer-icon-wrapper w-full md:w-2/4 right-0 mr-0 ml-auto mt-8 md:mt-0">
            <div className="flex flex-col justify-end text-right ">
              <ul className="flex flex-row right-0 ml-auto mr-0 w-full text-right md:justify-end justify-start">
                {ProjectMessages.SocialMedia.map((item, index) => (
                  <li className="text-left md:text-right mb-2 md:mb-0 md:ml-4 mr-4 ">
                    <Link className="w-[1.5rem] h-[1.5rem]" href={item.url}>
                      {item.icon}
                    </Link>
                  </li>
                ))}
                <p className="md:ml-4">@eatlittlepisces</p>
              </ul>
              <div className="flex md:flex-row-reverse">
                <a href="" className=" font-bold md:w-fit text-left w-full ">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-start-1 col-end-13 flex justify-between md:mt-32 mt-16">
          <div
            className="w-full flex justify-between
          bottom-0 flex-col sm:flex-row opacity-70"
          >
            <p>Little Pisces Copyright 2024 &copy;</p>
            <Link href="https://www.005f.agency">Website by 005F</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HeaderModal() {
  const modalRef = React.useRef<HTMLInputElement>(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
    const openModal = () => {};
  };

  const closeModal2 = (e: { target: HTMLInputElement | null }) => {
    // console.log("close modal");
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <AnimatePresence>
      <BurgerModal
        state={setShowModal}
        showModal={showModal}
        setShowModal={setShowModal}
        ListClick={closeModal2}
      />
      <MobileBurgerModal
        state={setShowModal}
        showModal={showModal}
        setShowModal={setShowModal}
        ListClick={closeModal2}
      />
      {
        <Header
          // onLogoClick={closeModal2}
          onClick={openModal}
        />
      }
    </AnimatePresence>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollObserver>
      <html lang="en" className={` ${Manrope.className}`}>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico?v=2" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="../public/images/apple-touch-icon.png?ce70f3e9aca01868"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="../public/images/favicon.png?v=2"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="../public/images/favicon.png?v=2"
          />
        </Head>
        <body>
          <section className="min-h-screen">
            <HeaderModal />

            <main>{children}</main>
            <Footer />
          </section>
        </body>
      </html>
    </ScrollObserver>
  );
}
