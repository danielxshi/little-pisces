"use client";
import ParallaxBG from "./ParallaxBG";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import localFont from "next/font/local";
import ContentfulImage from "@/lib/contentful-image";
import test from "../../public/Circle Logo - White Text w Transparent BG v3.webp";
import logo from "../../public/Circle Logo - Orange Fish v3.png";
import ProjectMessages from "../JSON/ProjectMessages";
import car1 from "../../public/car-1.webp";
import Link from "next/link";

export default function Landing() {
  return (
    <div>
      <div>
        <div className="text-white relative">
          <div className="absolute w-full h-screen landing-bg">
            <ContentfulImage
              fill={true}
              quality={80}
              src="/images/landing.jpg"
            ></ContentfulImage>
          </div>
          <section className="landing-content">
            <div className="header-wrapper container justify-center align-middle items-center">
              <div className="absolute w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] m-auto">
                <ContentfulImage src={test} width={300} height={300} />
              </div>
              <a className="absolute left-2/4 bottom-16">
                <div className="box">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
