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

// export const metadata = {
//   title: `Next.js and ${CMS_NAME} Example`,
//   description: `This is a blog built with Next.js and ${CMS_NAME}.`,
// };

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

function Footer() {
  return (
    <footer className=" bg-orange md:pt-16 pb-4 text-white ">
      <div className="grid grid-cols-12 container">
        <div className="col-start-1 col-end-13 flex justify-between">
          <div className="w-2/4 ">
            <ul className="">
              {ProjectMessages.StoreInfo.map((item, index) => (
                <li className="">{item.content}</li>
              ))}
            </ul>
            <div className="w-2/4 ">
              <ul className="">
                {ProjectMessages.ContactInfo.map((item, index) => (
                  <li className="">{item.content}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-2/4 right-0 mr-0 ml-auto">
            <ul className="flex flex-col right-0 ml-auto w-full text-right">
              {ProjectMessages.SocialMedia.map((item, index) => (
                <li className="">
                  <Link href={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-start-1 col-end-13 flex justify-between md:mt-32">
          <div
            className="w-full flex justify-between
          bottom-0"
          >
            <p>Little Pisces Copyright 2024 &copy;</p>
            <Link href="005f.agency">Website by 005F</Link>
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

  const closeModal2 = (e: { target: HTMLInputElement | null; }) => {
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
      {<Header 
      // onLogoClick={closeModal2} 
      onClick={openModal} />}
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
      <html
        lang="en"
        // className={inter.variable}
      >
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
