import ContentfulImage from "@/lib/contentful-image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import "@splidejs/react-splide/css";
import { LOOP } from "@splidejs/splide";

const content = [
  {
    name: "text",
    page: 0,
    image:
      "https://images.unsplash.com/photo-1593343534320-75e59f3f4232?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    textOne: "text",
    textTwo: "text",
  },
  {
    name: "text",

    page: 1,
    image:
      "https://images.unsplash.com/photo-1574236079409-f76313628df9?q=80&w=3134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    textOne: "text",
    textTwo: "text",
  },
  {
    name: "text",
    page: 2,
    image:
      "https://images.unsplash.com/photo-1593344661881-2396a4fd20aa?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            <SplideSlide key={index} className="min-h-screen w-screen">
              <ContentfulImage
                className="d-block w-100 h-100"
                src="https://images.unsplash.com/photo-1593344661881-2396a4fd20aa?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
