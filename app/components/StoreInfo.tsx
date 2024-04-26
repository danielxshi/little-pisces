import Link from "next/link";
import ProjectMessages from "../JSON/ProjectMessages";
import ParallaxBG from "./ParallaxBG";

export default function StoreInfo() {
  return (
    <div className="bg-orange md:pb-32 relative">
      <ParallaxBG
        url="https://images.unsplash.com/photo-1576156650634-9cf0b09391ca?q=80&w=3090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style="text-white landing-parallax"
      >
        <section className="container md:py-16 grid grid-cols-12">
          <div className="flex flex-col col-start-1 col-end-6">
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
      <div className="absolute md:py-16 right-0 top-0 grid grid-cols-12 container store-info-wrapper">
        <div className="col-start-7 col-end-13">
          <div className="ml-16">
            <h2 className="text-7xl mb-8 text-white title-orange text-shadow-strong">TAIYAKI & </h2>
            <h2 className="text-7xl mb-8 text-white title-orange text-shadow-strong">SOFT SERVE</h2>
          </div>
          <div className="h-full pb-8 flex flex-col w-full bg-white text-black">
            <div className="ml-16 align-center flex flex-col m-auto">
              <ul className="flex flex-col">
                {ProjectMessages.StoreInfo.map((item, index) => (
                  <li className="">
                    <span>{item.content}</span>
                  </li>
                ))}
              </ul>
              <span className="border-black border-solid border-y-1 line mb-4"></span>
              <div>
                <h3 className="uppercase font-bold">NOW HIRING</h3>
                <ul>
                  {ProjectMessages.ContactInfo.map((item, index) => (
                    <Link href="" className="">
                      <span>{item.content}</span>
                    </Link>
                  ))}
                </ul>
                <div>
                  <button className="z-10 text-black text-lg lang-btn uppercase border-black border-solid rounded-xl px-4 border">
                    apply
                  </button>{" "}
                  <button className="z-10 text-black text-lg lang-btn uppercase border-black border-solid rounded-xl px-4 border">
                    google maps
                  </button>
                </div>
              </div>
            </div>
            {/* Span LINE */}
          </div>
        </div>
      </div>
    </div>
  );
}
