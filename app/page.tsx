import Landing from "./components/landing";
import StoreInfo from "./components/StoreInfo";
import Carousel from "./components/Carousel";

export default function Page() {
  return (
    <div className="">
      <Landing />
      <StoreInfo />
      <div className="bg-orange">
        <div className="max-w-[1300px] m-auto">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
