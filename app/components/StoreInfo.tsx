import Link from "next/link";
import ProjectMessages from "../JSON/ProjectMessages";
import ParallaxBG from "./ParallaxBG";
import localFont from "next/font/local";

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
    <div className="bg-orange md:pb-32 relative overflow-hidden">
      <div className="md:pb-32 relative overflow-hidden flex flex-col ">
        <ParallaxBG
          url="https://images.unsplash.com/photo-1576156650634-9cf0b09391ca?q=80&w=3090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style="text-white landing-parallax"
        >
          <section className="container md:py-16 md:grid md:grid-cols-12 flex flex-wrap">
            <div className="flex flex-col col-start-1 col-end-6 w-full py-16 md:py-0">
              <h2 className="text-5xl mb-8">Cafe Info</h2>
              <ul className="flex flex-col">
                {ProjectMessages.OperationHours.map((item, index) => (
                  <li className="w-3/5 text-2xl mb-4 flex justify-between">
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </li>
                ))}
              </ul>{" "}
            </div>
          </section>
        </ParallaxBG>
        <div className="container">
          <div className=" md:absolute md:py-16 right-0 top-0 md:grid md:grid-cols-12 relative flex store-info-wrapper w-[90vw] m-auto">
            <div className="md:col-start-7 md:col-end-13 flex flex-col md:block w-full">
              <div className="md:ml-16 mb-8 pt-8 md:pt-0 ml-0 w-full">
                <h2 className="font-black text-7xl leading-tight tracking-tighter text-white title-orange text-shadow-strong">
                  TAIYAKI &{" "}
                </h2>
                <h2 className="text-7xl mb-8 text-white title-orange text-shadow-strong">
                  SOFT SERVE
                </h2>
              </div>
              <div className="h-full md:pb-8 pt-16 pb-16 md:pt-0 flex flex-col md:w-full max-w-[80rem] bg-white text-black rounded-l-xl">
                <div className="ml-16 align-center flex flex-col m-auto">
                  <ul className="flex flex-col">
                    {ProjectMessages.StoreInfo.map((item, index) => (
                      <li className="text-2xl">
                        <span>{item.content}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="opacity-45 border-black border-solid border-y-1 line mb-8"></span>
                  <div>
                    {/* <h3 className="uppercase font-bold">NOW HIRING</h3> */}
                    {/* <ul>
                      {ProjectMessages.ContactInfo.map((item, index) => (
                        <Link href="" className="">
                          <span>{item.content}</span>
                        </Link>
                      ))}
                    </ul> */}
                    <div>
                      <Link
                        href="mailto:jacky@littlepisces.ca"
                        className="mr-4 z-10 py-1 text-black text-lg lang-btn  border-black border-solid rounded-3xl px-4 border"
                      >
                        contact
                      </Link>{" "}
                      <Link
                        href="https://www.google.com/maps/place/4501+North+Rd+%23202b,+Burnaby,+BC+V3N+4R7/@49.2439464,-122.8940462,17z/data=!3m1!4b1!4m5!3m4!1s0x5486783d355af23f:0x47fd170423aa20d2!8m2!3d49.2439464!4d-122.8940462?entry=ttu"
                        className="z-10 py-1 text-black text-lg lang-btn  border-black border-solid rounded-3xl px-4 border"
                      >
                        google maps
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Span LINE */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
