import MenuStandard from "../components/Menu/MenuStandard";
import MenuSecondary from "../components/Menu/MenuSecondary";
import ProjectMessages from "../JSON/ProjectMessages";
import taiyaki from "../../public/DSCF4600.webp";
import Head from "next/head";
// import test from "../../public/Circle Logo - Orange Fish v3.webp";
// import test2 from "../../public/favicon.ico"

export const metadata = {
  title: `Little Pisces Menu`,
  // icons: {
  //   icon: `../../public/favicon.ico`,
  // },
  // description: ``,
};

export default function Menu() {
  return (
    <div className="min-h-screen bg-orange md:pb-32 pb-16">
      <Head>
        <title>Little Pisces Menu</title>
        <link rel="apple-touch-icon" href="../../public/favicon.ico" />
        <link rel="apple-touch-icon" href="../../public/favicon.ico?v=2" />
        <link
          rel="shortcut icon"
          href="../../public/favicon.ico?v=2"
          type="image/x-icon"
        />
        <link
          rel="shortcut icon"
          href="../../public/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <MenuStandard
        title="Taiyaki"
        image={taiyaki}
        combo1="mix and match any 2 flavors"
        price1=""
        combo2="mix and match any 5 flavors"
        price2=""
      >
        <div className="w-full">
          <ul className="w-3/5">
            {ProjectMessages.MenuTaiyaki.map((item, index) => (
              <li className="w-full flex justify-between mb-4 ml-8">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </MenuStandard>
      <MenuStandard
        title="Soft Serve"
        image="https://images.unsplash.com/photo-1636564499112-6113e73c504a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        combo1="in a cup"
        price1=""
        combo2="in a taiyaki cone"
        price2=""
      >
        <div className="w-full">
          <ul className="w-3/5">
            {ProjectMessages.MenuSoftServe.map((item, index) => (
              <li className="w-full flex justify-between mb-4 ml-8">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </MenuStandard>
      {/* <MenuStandard
        title="TAIYAKI SOFT SERVE"
        image="https://images.unsplash.com/photo-1636564499112-6113e73c504a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <div className="w-full">
          <ul className="w-4/5">
            {ProjectMessages.MenuSoftServe.map((item, index) => (
              <li className="w-full flex justify-between mb-4 ml-8">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </MenuStandard> */}
      <MenuStandard
        title="DRINKS"
        image="https://images.unsplash.com/photo-1589638895165-e80df3583854?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        combo1=""
        price1=""
        combo2=""
        price2=""
      >
        <div className="w-full">
          <ul className="w-4/5">
            {ProjectMessages.MenuDrinks.map((item, index) => (
              <li className="w-full flex justify-between mb-4 ml-8">
                <span>{item.name}</span>
                <span className="md:mr-32">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </MenuStandard>
    </div>
  );
}
