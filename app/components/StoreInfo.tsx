import Link from "next/link";
import ProjectMessages from "../JSON/ProjectMessages";
import ParallaxBG from "./ParallaxBG";
import localFont from "next/font/local";
import test from "@/public/images/info-bg.jpg"

const Manrope = localFont({
  src: [
    {
      path: "../fonts/Manrope/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function StoreInfo() {
  return (
    <div className="bg-orange  relative overflow-hidden">
      <div className=" relative overflow-hidden flex flex-col ">
        <ParallaxBG
          url="/images/info-bg.jpg"
          style="text-white landing-parallax"
        >
          <section className="container md:py-16 md:grid md:grid-cols-12 flex flex-wrap">
            <div className="store-hours px-3 md:px-8 flex flex-col col-start-1 col-end-7 w-full py-8 mx-2 my-8 md:m-0">
              <h2 className="text-4xl md:text-5xl mb-8">Opening Hours</h2>
              <ul className="flex flex-col w-full">
                {ProjectMessages.OperationHours.map((item, index) => (
                  <li className="w-full lg:w-6/7 text-xl md:text-2xl mb-4 flex justify-between">
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </li>
                ))}
              </ul>{" "}
            </div>
          </section>
        </ParallaxBG>
        
      </div>
    </div>
  );
}
