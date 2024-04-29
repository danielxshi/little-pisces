import ContentfulImage from "@/lib/contentful-image";
import ProjectMessages from "@/app/JSON/ProjectMessages";
import Link from "next/link";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

export default function MenuStandard(props: {
  image: string;
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
        <div className="color-block bg-blue-p w-3/5 block z-1 h-4/5 absolute"></div>
        <div className="food-image-container h-4/5 relative w-4/5 justify-end mr-0 ml-auto flex z-100 mt-24">
          <ContentfulImage src={props.image} fill={true} objectFit="cover" />
        </div>
      </div>

      <div className="col-start-6 col-end-13 text-white lg:mt-0 mt-16">
        <h2 className="text-6xl uppercase md:mb-8">{props.title}</h2>

        {props.children}

        <div className="flex flex-row mt-16">
          <h3 className="text-3xl md:mr-16">LOREM</h3>
          <div className="w-3/5">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              necessitatibus cupiditate veritatis ducimus consequatur vero sed
              ipsam incidunt enim neque eos sapiente et numquam pariatur,
              perspiciatis modi explicabo? Tempora, hic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
