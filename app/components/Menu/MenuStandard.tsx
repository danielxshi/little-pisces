import ContentfulImage from "@/lib/contentful-image";
import ProjectMessages from "@/app/JSON/ProjectMessages";
import Link from "next/link";
import { StaticImageData } from "next/image";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

export default function MenuStandard(props: {
  price2: ReactNode;
  combo2: ReactNode;
  price1: ReactNode;
  combo1: ReactNode;
  // subtitle: ReactNode;
  image: string | StaticImageData;
  title:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
  children:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
}) {
  return (
    <div className="container pt-32 lg:grid lg:grid-cols-12 food-menu flex flex-col">
      <div className="col-start-1 col-end-5 relative">
        {/* add color block variation */}
        <div className="color-block bg-cream w-3/5 z-1 h-4/5 absolute"></div>
        <div className="food-image-container h-3/5 relative w-4/5 justify-end mr-0 ml-auto flex z-100 mt-24">
          <ContentfulImage src={props.image} fill={true} objectFit="cover" />
        </div>
      </div>

      <div className="col-start-6 col-end-13 text-white lg:mt-0 mt-16">
        <h2 className="text-6xl uppercase mb-8 md:mb-8 font-black">
          {props.title}
        </h2>
        {/* <p>{props.subtitle}</p> */}

        {props.children}

        <div className="flex flex-row mt-16">
          {/* <h3 className="text-3xl md:mr-16">LOREM</h3> */}
          <div className="w-full md:w-3/5">
            <ul className="">
              <li className="flex ml-8 mb-4 flex-row justify-between">
                <span className="md:mr-16">{props.combo1}</span>
                <span className="font-black mr-8">{props.price1}</span>
              </li>
              <li className="flex ml-8 justify-between">
                {/* <span className="mr-16">Mix and match any 5 flavors</span>
                <span className="font-black mr-8">$13.95</span>
                 */}

                <span className="md:mr-16">{props.combo2}</span>
                <span className="font-black mr-8">{props.price2}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
