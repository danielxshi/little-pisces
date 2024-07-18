"use client";
import ParallaxBG from "./ParallaxBG";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import localFont from "next/font/local";
import ContentfulImage from "@/lib/contentful-image";
import test from "../../public/Circle Logo - White Text w Transparent BG v3.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../../public/Circle Logo - Orange Fish v3.png";
import ProjectMessages from "../JSON/ProjectMessages";
import car1 from "../../public/car-1.webp";
import Link from "next/link";

export default function Landing() {
  return (
    <div>
      <motion.div>
        <div className="text-white landing-parallax">
          <ContentfulImage
            fill={true}
            src="/images/landing.jpg"
          ></ContentfulImage>
          <section className="landing-content">
            <motion.div
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1, y: 0 }}
              // exit={{ opacity: 0 }}
              // transition={{ delay: 3, duration: 1.5, ease: "easeInOut" }}
              className="header-wrapper container justify-center align-middle items-center"
            >
              {/* <div className="  container flex flex-col mt-auto h-full">
                <div className="flex flex-col md:mb-[5vh] mb-[8vh] mt-auto">
                  <Link className="h-fit w-fit " href="">
                    <ul className="h-fit w-fit">
                      {ProjectMessages.StoreInfo.map((item, index) => (
                        <li className="text-base">
                          <span className="h-fit w-fit">{item.content}</span>
                        </li>
                      ))}
                    </ul>
                  </Link>
                </div>
              </div> */}
              <div className="absolute w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] m-auto">
                <ContentfulImage
                  src={test}
                  // fallbackSrc={item.fallback}
                  //   alt={item.alt}
                  width={300}
                  height={300}
                />
              </div>
              <a className="absolute left-2/4 bottom-16">
                <div className="box">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </motion.div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
