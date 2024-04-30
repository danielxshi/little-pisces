"use client";
import ParallaxBG from "./ParallaxBG";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import localFont from "next/font/local";
import ContentfulImage from "@/lib/contentful-image";
import test from "../../public/Circle Logo - White Text w Orange BG v3.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../../public/Circle Logo - Orange Fish v3.png";

export default function Landing() {
  // const container = useRef<HTMLDivElement>(null); // create a ref for the root level element
  // useGSAP(() => {
  //   console.log("working");
  //   let ctx = gsap.context(
  //     () => {
  //       gsap.from(".letter", {
  //         duration: 0.8,
  //         y: -20,
  //         opacity: 0,
  //         ease: "power3.inOut",
  //         stagger: 0.1,
  //       });
  // gsap.to(".top-left, .top-right", {
  //   duration: 2,
  //   top: "0",
  //   ease: "power3.inOut",
  // });
  //   gsap.to(".bottom-right,", {
  //     duration: 2,
  //     bottom: "0",
  //     ease: "power3.inOut",
  //   });
  // },
  //     { scope: container }
  //   );
  // });
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      // gsap code here...
      console.log("working");
      gsap.from(".letter", {
        duration: 0.8,
        y: -20,
        opacity: 0,
        ease: "power3.inOut",
        stagger: 0.1,
      });

      gsap.to(".top-left, .top-right", {
        duration: 2,
        top: "17.5px",
        ease: "power3.inOut",
        delay: 2,
      });
      gsap.to(".bottom-right", {
        duration: 2,
        bottom: "0",
        ease: "power3.inOut",
        delay: 2,
      });
      gsap.to(".top-left", {
        duration: 2,
        left: "0",
        ease: "power3.inOut",
        delay: 4,
      });
      gsap.to(".top-right", {
        duration: 2,
        right: "0",
        ease: "power3.inOut",
        delay: 4,
      });
      gsap.to(".bottom-right", {
        duration: 2,
        left: "0",
        ease: "power3.inOut",
        delay: 4,
      });
      gsap.to(".block-left", {
        duration: 2,
        left: "-50%",
        ease: "power3.inOut",
        delay: 4,
      });
      gsap.to(".block-right", {
        duration: 2,
        right: "-50%",
        ease: "power3.inOut",
        delay: 4,
      });
      gsap.to(".top-left", {
        duration: 1.5,
        ease: "power3.inOut",
        delay: 5,
        opacity: 0,
      });
      gsap.to(".top-right", {
        duration: 1.5,
        ease: "power3.inOut",
        delay: 5,
        opacity: 0,
      });
      gsap.to(".bottom-right", {
        duration: 1.5,
        ease: "power3.inOut",
        delay: 5,
        opacity: 0,
      });
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)
  return (
    <div>
      <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
      >
        {/* <Reveal></Reveal> */}
        <div ref={container} className="reveal-container absolute">
          <div className="blocks">
            <div className="block block-left"></div>
            <div className="block block-right"></div>
          </div>
          <div className="letters container relative">
            <div className="row">
              <div className="letter top-left lg:text-[8rem] text-[2rem] ">
                {/* <ContentfulImage
                  width={45}
                  height={45}
                  quality={100}
                  src={logo}
                />{" "} */}
              </div>
              <div className="letter top-right lg:text-[8rem] text-[2rem] ">
                L
              </div>
            </div>
            <div className="row">
              <div className="letter bottom-right lg:text-[8rem] text-[2rem] ">
                P
              </div>
            </div>
          </div>
        </div>
        <ParallaxBG
          url="https://images.unsplash.com/photo-1713988665693-b92222aa2818?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style="text-white landing-parallax bg-black"
        >
          <section className="landing-content">
            <motion.div
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1, y: 0 }}
              // exit={{ opacity: 0 }}
              // transition={{ delay: 3, duration: 1.5, ease: "easeInOut" }}
              className="header-wrapper container justify-center align-middle items-center"
            >
              <div className="  container flex flex-col mt-auto h-full">
                <div className="flex flex-col mb-[5vh] mt-auto">
                  <span>Address</span>
                  <span>Produced By</span>
                </div>
              </div>
              <div className="absolute w-[15rem] h-[15rem] m-auto">
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
        </ParallaxBG>
      </motion.div>
    </div>
  );
}
