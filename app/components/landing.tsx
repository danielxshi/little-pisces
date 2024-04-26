"use client";
import ParallaxBG from "./ParallaxBG";
import { motion } from "framer-motion";
import React from "react";
import localFont from "next/font/local";

export default function Landing() {
  return (
    <>
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
      >
        <ParallaxBG url="" style="text-white landing-parallax bg-black">
          <section className="landing-content">
            <motion.div
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1, y: 0 }}
              // exit={{ opacity: 0 }}
              // transition={{ delay: 3, duration: 1.5, ease: "easeInOut" }}
              className="header-wrapper container justify-center"
            >
              <h1
              // className={`${montserratt.className}`}
              >
                Little Pisces
              </h1>
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
    </>
  );
}
