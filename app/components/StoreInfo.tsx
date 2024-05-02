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
                  <li className="w-full md:w-3/5 text-2xl mb-4 flex justify-between">
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
                <h2 className="md:block hidden font-black text-7xl leading-tight tracking-tighter text-white title-orange text-shadow-strong">
                  TAIYAKI &{" "}
                </h2>
                <h2 className="md:block hidden font-black text-7xl mb-8 text-white title-orange text-shadow-strong">
                  SOFT SERVE
                </h2>
              </div>
              <div className="h-full md:pb-8 pt-16 pb-16 md:pt-0 flex flex-col md:w-full max-w-[80rem] bg-white text-black sm:rounded-xl md:rounded-l-xl">
                <div className="mx-4 md:ml-16 align-center flex flex-col m-auto">
                  <Link
                    className="w-fit h-fit"
                    href="https://www.google.com/maps/place/Little+Pisces/@49.2438823,-122.893232,15z/data=!4m2!3m1!1s0x0:0xc9eb0fd6b40fa8f4?sa=X&ved=1t:2428&ictx=111"
                  >
                    <ul className="w-fit h-fit flex flex-col">
                      {ProjectMessages.StoreInfo.map((item, index) => (
                        <li className="text-xl md:text-2xl">
                          <span>{item.content}</span>
                        </li>
                      ))}
                    </ul>
                  </Link>
                  <span className="opacity-45 border-black border-solid border-y-1 line mb-8"></span>
                  <div>
                    <div>
                      <Link
                        href="mailto:jacky@littlepisces.com"
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
