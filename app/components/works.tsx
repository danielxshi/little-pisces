"use client";
import Image from "next/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "./work";
// import ImageLoader from "./imageLoader";
import test from "../../public/assets/works/pinkpanda.webp";
import ContentfulImage from "@/lib/contentful-image";

const content = [
  {
    name: "text",
    page: 0,
    image: "image1",
    textOne: "text",
    textTwo: "text",
  },
  {
    name: "text",

    page: 1,
    image: "image2",
    textOne: "text",
    textTwo: "text",
  },
  {
    name: "text",
    page: 2,
    image: "image3",
    textOne: "text",
    textTwo: "text",
  },
];

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl md:text-6xl font-black  tracking-tight uppercase text-center md:text-right text-black">
                MISSION
              </div>
              <div className="text-4xl md:text-6xl font-black  tracking-tight uppercase text-center md:text-right">
                STORY
              </div>
              <div className="text-4xl md:text-6xl font-black  tracking-tight uppercase text-center md:text-right">
                OUR TAIYAKI
              </div>
            </WorkLeft>
            {/* <WorkRight progress={progress}>
              <ContentfulImage
                height={1620}
                quality={75}
                src="https://images.pexels.com/photos/17963791/pexels-photo-17963791/free-photo-of-close-up-of-dark-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={840}
                // height={1620}
                // alt='Pink Panda'
              />
            </WorkRight> */}
            <WorkLeft progress={progress}>
              <p className="w-4/5 m-auto">
                At Little Pisces, we love everything taiyaki, and wanted to
                create something that was both aesthetically pleasing and
                delicious to eat.
              </p>
            </WorkLeft>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            {/* <div className="triangle-5 absolute"></div> */}
            <WorkLeft progress={progress}>
              <div className="text-4xl md:text-6xl font-black  tracking-tight uppercase text-center md:text-right">
                MISSION
              </div>
              <div className="text-4xl md:text-6xl font-black  tracking-tight uppercase text-center md:text-right  text-black">
                STORY
              </div>
              <div className="text-4xl md:text-6xl font-black  tracking-tight uppercase text-center md:text-right">
                OUR TAIYAKI
              </div>
            </WorkLeft>
            <WorkLeft progress={progress}>
              <p className="w-4/5 m-auto">
                We want to serve you the best taiyaki you've ever eaten, so we
                traveled the world in search of the best ingredients in order to
                share that experience with you. Just ask us where all of our
                ingredients are sourced from!
              </p>
            </WorkLeft>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl md:text-6xl font-black  tracking-tight uppercase text-center md:text-right">
                MISSION
              </div>
              <div className="text-4xl md:text-6xl font-black  tracking-tight uppercase text-center md:text-right">
                STORY
              </div>
              <div className="text-4xl md:text-6xl font-black  tracking-tight uppercase text-center md:text-right  text-black">
                OUR TAIYAKI
              </div>
            </WorkLeft>
            <WorkLeft progress={progress}>
              <p className="w-4/5 m-auto">
                Through extensive experimentation, we perfected a mochi batter
                that is crunchy on the outside, yet soft and chewy on the
                inside. When paired with any of our delicious fillings, don't
                overthink what the result will be.
              </p>
            </WorkLeft>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
