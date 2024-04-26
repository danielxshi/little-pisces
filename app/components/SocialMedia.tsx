import ProjectMessages from "../JSON/ProjectMessages";
import Link from "next/link";
import ContentfulImage from "@/lib/contentful-image";

export default function SocialMedia() {
  return (
    <section className="social-media-container container py-32 flex">
      <ul className="flex flex-row  m-auto justify-between ">
        {ProjectMessages.SocialMedia.map((item, index) => (
          <li className="mx-2">
            <Link className="" href={item.url}>
              {/* <ContentfulImage href=""></ContentfulImage> */}
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
