import MenuStandard from "../components/Menu/MenuStandard";
import MenuSecondary from "../components/Menu/MenuSecondary";
import ProjectMessages from "../JSON/ProjectMessages";
import taiyaki from "../../public/DSCF4600.webp";
import Head from "next/head";
import ContentfulImage from "@/lib/contentful-image";

export const metadata = {
  title: `Little Pisces Richmond Menu`,
  // icons: {
  //   icon: `../../public/apple-icon.png?v=2`,
  // },
  // description: ``,
};

export default function Richmond() {
  return (
    <div className="min-h-screen menu-page md:pb-32 pb-16 pt-32 md:pt-0">
      <div>
        <a
          //className="pl-8 md:pl-16"
          href="https://www.clover.com/online-ordering/littlepisces"
        >
          ORDER PICKUP
        </a>
      </div>
      <MenuStandard
        title="Taiyaki"
        image="/images/carousel/carousel4.jpg"
        combo1="Mix and match among the following taiyaki flavors"
        price1={JSON.stringify(
          ProjectMessages.TaiyakiPrices[0]["price"]
        ).replaceAll('"', "")}
        combo2="mix and match any 5 flavors"
        price2={JSON.stringify(
          ProjectMessages.TaiyakiPrices[1]["price"]
        ).replaceAll('"', "")}
      >
        <div className="w-full">
          <ul className="w-full">
            {ProjectMessages.RichmondTaiyaki.map((item, index) => (
              <li className="w-full flex mb-[-2.5rem]">
                <div className="w-24 h-24 md:ml-[-2rem] min-w-[100px] max-w-[100px] min-h-[100px] max-h-[120px]">
                  <ContentfulImage
                    src={`/images/menu-icons/${item.image}`}
                    fill={true}
                    objectFit="contain"
                  ></ContentfulImage>
                </div>
                <div className="flex w-4/5 text-left ml-0">
                  <span className="self-center text-xl">{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </MenuStandard>
      <MenuStandard
        title="Soft Serve"
        image="/images/carousel/carousel1.jpg"
        combo1="Just a cup or with an upside down taiyaki cone (we also have pints available)"
        price1={JSON.stringify(
          ProjectMessages.SoftservePrices[0]["price"]
        ).replaceAll('"', "")}
        combo2="with a taiyaki cone"
        price2={JSON.stringify(
          ProjectMessages.SoftservePrices[1]["price"]
        ).replaceAll('"', "")}
      >
        <div className="w-full">
          <ul className="w-full">
            {ProjectMessages.RichmondSoftServe.map((item, index) => (
              <li className="w-full flex mb-[-2.5rem] ">
                <div className="w-26 h-26 md:ml-[-2rem] min-w-[100px] max-w-[100px] min-h-[100px] max-h-[120px]">
                  <ContentfulImage
                    src={`/images/menu-icons/${item.image}`}
                    fill={true}
                    objectFit="contain"
                  ></ContentfulImage>
                </div>
                <div className="flex w-4/5 text-left ml-0">
                  <span className="self-center text-xl">{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </MenuStandard>
      <MenuStandard
        title="DRINKS"
        image="/images/menu3.jpg"
        combo1="Hot (12oz) or Iced (16oz)"
        price1=""
        combo2=""
        price2=""
      >
        <div className="w-full">
          <ul className="w-full">
            {ProjectMessages.RichmondDrinks.map((item, index) => (
              <li className="w-full flex md:mb-[-2.5rem] mb-[-2.5rem]">
                <div className="w-26 h-26 md:ml-[-2rem] min-w-[100px] max-w-[100px] min-h-[100px] max-h-[120px]">
                  <ContentfulImage
                    src={`/images/menu-icons/${item.image}`}
                    fill={true}
                    objectFit="contain"
                  ></ContentfulImage>
                </div>
                <div className="flex w-full text-left ml-0">
                  <span className="text-xl self-center">{item.name}</span>
                </div>
                <span className="md:mr-32 text-xl self-center ml-0">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </MenuStandard>
    </div>
  );
}
