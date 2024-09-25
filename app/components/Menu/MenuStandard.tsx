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
    <div className="container pt-6 md:pt-32 lg:grid lg:grid-cols-12 food-menu flex flex-col pb-16 md:pb-0">
      
      <div className="col-start-2 col-end-12 row-start-1 flex flex-row mb-8 md:mb-8">
        <h2 className="md:text-6xl text-5xl uppercase font-black text-white">
          {props.title}
          <p className="text-base w-66 italic md:w-[550px]">{props.combo1}</p>
        </h2>
        <div className="flex flex-col my-[-4px] md:ml-14 ml-0 w-80 text-right md:text-left">
          <span className="md:text-2xl text-xl text-white font-bold">
            &nbsp;{props.price1}
          </span>
          <span className="md:text-2xl text-xl text-white font-bold">
            &nbsp;{props.price2}
          </span>
        </div>
      </div>


      <div className="col-start-7 col-end-12 relative row-start-2">
        <div className="food-image-container h-1/5 relative w-full justify-end mr-0 ml-auto flex z-100">
          <ContentfulImage src={props.image} fill={true} objectFit="contain" />
        </div>
      </div>

      <div className="col-start-2 col-end-7 row-start-2 text-white lg:mt-0 md:mt-16 mt-8">
        {props.children}
      </div>
    </div>
  );
}
