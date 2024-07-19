import MenuStandard from "../components/Menu/MenuStandard";
import MenuSecondary from "../components/Menu/MenuSecondary";
import ProjectMessages from "../JSON/ProjectMessages";
import taiyaki from "../../public/DSCF4600.webp";
import Head from "next/head";
import ContentfulImage from "@/lib/contentful-image";

export const metadata = {
  title: `Little Pisces Menu`,
  // icons: {
  //   icon: `../../public/apple-icon.png?v=2`,
  // },
  // description: ``,
};

export default function Menu() {
  return (
    <div className="min-h-screen bg-orange md:pb-32 pb-16 pt-32 md:pt-0">
      <MenuStandard
        title="Taiyaki"
        image={"/images/menu1.jpg"}
        combo1="mix and match any 2 flavors"
        price1={JSON.stringify(
          ProjectMessages.TaiyakiPrices[0]["price"]
        ).replaceAll('"', "")}
        combo2="mix and match any 5 flavors"
        price2={JSON.stringify(
          ProjectMessages.TaiyakiPrices[1]["price"]
        ).replaceAll('"', "")}
      >
        <div className="w-full">
          <ul className="w-4/5">
            {ProjectMessages.MenuTaiyaki.map((item, index) => (
              <li className="w-full flex justify-between mb-4 ml-8">
                <div className="w-16 h-16">
                  <ContentfulImage
                    src={`/images/menu-icons/${item.image}`}
                    fill={true}
                  ></ContentfulImage>
                </div>
                <div className="flex w-3/5 text-left ml-8">
                  <span className="self-center">{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </MenuStandard>
      <MenuStandard
        title="Soft Serve"
        image="/images/menu2.jpg"
        combo1="in a cup"
        price1={JSON.stringify(
          ProjectMessages.SoftservePrices[0]["price"]
        ).replaceAll('"', "")}
        combo2="with a taiyaki cone"
        price2={JSON.stringify(
          ProjectMessages.SoftservePrices[1]["price"]
        ).replaceAll('"', "")}
      >
        <div className="w-full">
          <ul className="w-4/5">
            {ProjectMessages.MenuSoftServe.map((item, index) => (
              <li className="w-full flex justify-between mb-4 ml-8">
                <div className="w-16 h-16">
                  <ContentfulImage
                    src={`/images/menu-icons/${item.image}`}
                    fill={true}
                  ></ContentfulImage>
                </div>
                <div className="flex w-3/5 text-left ml-8">
                  <span className="self-center">{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </MenuStandard>
      <MenuStandard
        title="DRINKS"
        image="/images/menu3.jpg"
        combo1=""
        price1=""
        combo2=""
        price2=""
      >
        <div className="w-full">
          <ul className="w-4/5">
            {ProjectMessages.MenuDrinks.map((item, index) => (
              <li className="w-full flex justify-between mb-4 ml-8">
                <div className="flex w-3/5 text-left ">
                  <span className="">{item.name}</span>
                </div>
                <span className="md:mr-32">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </MenuStandard>
    </div>
  );
}
