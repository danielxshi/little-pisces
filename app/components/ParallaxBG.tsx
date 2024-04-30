"use client";
import { Parallax, Background } from "react-parallax";
import Banner from "./banner";
import ContentfulImage from "@/lib/contentful-image";
import Image, { StaticImageData } from "next/image";


type Props = {
  children?: React.ReactNode;
  style?: string;
  url?: string;
};

const ParallaxBG = ({ children, style, url }: Props) => {
  return (
    <div className={`parallax-bg-container relative ${style}`}>
      <Parallax bgImage={url} bgImageAlt="" className="" strength={-300}>
        {children}
      </Parallax>
    </div>
  );
};

export default ParallaxBG;
