"use client";
import ContentfulImage from "@/lib/contentful-image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import "@splidejs/react-splide/css";
import { LOOP } from "@splidejs/splide";
import car1 from "../../public/car-1.webp";
import car2 from "../../public/car-2.webp";
import car3 from "../../public/car-3.webp";
import car4 from "../../public/car-4.webp";
import car5 from "../../public/car-5.webp";

const content = [
  {
    name: "text",
    page: 0,
    image: car1,
    textOne: "text",
    textTwo: "text",
  },
  {
    name: "text",

    page: 1,
    image: car2,
    textOne: "text",
    textTwo: "text",
  },
  {
    name: "text",
    page: 2,
    image: car3,
    textOne: "text",
    textTwo: "text",
  },
  {
    name: "text",
    page: 3,
    image: car4,
    textOne: "text",
    textTwo: "text",
  },
  {
    name: "text",
    page: 4,
    image: car5,
    textOne: "text",
    textTwo: "text",
  },
];

export default function Carousel() {
  return (
    <div className="carousel-container">
      <Splide
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        options={{
          type: LOOP,
          autoplay: true,
          rewind: true,
          easing: "linear",
          autoScroll: {
            speed: 6000,
            pauseOnHover: true,
            pauseOnFocus: false,
          },
        }}
      >
        {content.map((item, index) => {
          return (
            <SplideSlide key={index} className="lg:h-[700px] md:h-[500px] h-[400px]">
              <ContentfulImage
                className="d-block w-[80vw] h-100"
                src={item.image}
                // fallbackSrc={item.fallback}
                //   alt={item.alt}
                layout="fill"
                objectFit="cover"
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
