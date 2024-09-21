"use client";
// Represents Project Info Modal
import Link from "next/link";
import gsap from "gsap";
import ProjectMessages from "../JSON/ProjectMessages";
import React, {
  useRef,
  useEffect,
  useCallback,
  Children,
  useState,
  SetStateAction,
  MutableRefObject,
} from "react";
import localFont from "next/font/local";

import ReactDom from "react-dom";
import { useSpring, animated as a } from "react-spring";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import dallas from "../images/dallas.webp";
import austin from "../images/austin.webp";
import newyork from "../images/newyork.webp";

import gallery1 from "../images/1650-day.webp";
import gallery2 from "../images/618-lobby.webp";
import gallery3 from "../images/pendrell-aerial.webp";
import test from "../../public/images/dec7/P8.webp";

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  //   handleCity,
  staggerRevealClose,
} from "./Animation";
// import FooterMessages from "../JSON/FooterItems";
import ContentfulImage from "@/lib/contentful-image";
// import { getLocalizedMessages } from "@/src/i18n";

// const quicksand = localFont({
//   src: [
//     {
//       path: "../fonts/playfair/PlayfairDisplay-VariableFont_wght.ttf",
//       weight: "400",
//       style: "normal",
//     },
//   ],
// });

type Props = {
  showModal: any;
  setShowModal: any;
  state: any;
  ListClick: any;
};

const Background = styled.div`
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: -webkit-fit-content;
`;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #fff;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 99;
  border-radius: 3px;
  overflow-y: scroll;
`;

const cities = [
  {
    url: "/posts/1650-on-second",
    name: "1650 ON SECOND",
    image: "https://i.imgur.com/hvXK67e.jpeg",
  },
  {
    url: "/posts/618-carnavron",
    name: "618 CARNAVRON",
    image: "https://i.imgur.com/Ogkc2c7.jpg",
  },
  {
    url: "/posts/pendrell-street",
    name: "EDITION",
    image: "https://i.imgur.com/3loZccM.jpeg",
  },
];

export const BurgerModal = ({
  showModal,
  setShowModal,
  state,
  ListClick,
}: Props) => {
  let menuLayer: React.MutableRefObject<null> | HTMLDivElement | null;
  let reveal1: React.MutableRefObject<null> | HTMLDivElement | null;
  let reveal2: React.MutableRefObject<null> | HTMLDivElement | null;
  let cityBackground: React.MutableRefObject<null> | HTMLDivElement | null;
  let line1:
    | React.MutableRefObject<null>
    | HTMLDivElement
    | HTMLAnchorElement
    | null;
  let line2:
    | React.MutableRefObject<null>
    | HTMLDivElement
    | HTMLAnchorElement
    | null;
  let line3:
    | React.MutableRefObject<null>
    | HTMLDivElement
    | HTMLAnchorElement
    | null;
  let info = useRef(null);

  const modalRef = React.useRef<HTMLInputElement>(null);

  const animation = useSpring({
    config: {
      duration: 400,
    },
    x: showModal ? "0%" : "100%",
  });

  const closeModal = (e: { target: HTMLInputElement | null }) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const [hidden, setHidden] = useState(false);
  const [element, setElement] = useState<null | HTMLDivElement>(null);

  return (
    <header className="burger-menu md:hidden">
      <AnimatePresence>
        {showModal ? (
          <motion.div ref={modalRef}>
            <Background ref={modalRef}>
              <a.div className="" style={animation}>
                <ModalWrapper className="w-screen" ref={(el) => setElement(el)}>
                  <motion.div
                    className=""
                    animate={hidden ? "hidden" : "visible"}
                  >
                    <div className="hamburger-menu">
                      <div className=""></div>
                      <div className="menu-layer ">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                          className="w-screen h-full"
                        >
                          <div className="wrapper">
                            <div className="menu-links">
                              <div className="flex flex-col h-fit w-full">
                                <nav>
                                  <ul>
                                    <li
                                    // className={` ${quicksand.className}`}
                                    >
                                      <Link
                                        className="pl-8 md:pl-16"
                                        onMouseEnter={(e) => handleHover(e)}
                                        onMouseOut={(e) => handleHoverExit(e)}
                                        // ref={(el) => (line3 = el)}
                                        href="/"
                                        onClick={() => {
                                          ListClick.onClick();
                                        }}
                                      >
                                        {/* {localizedMessages.PROJECT} */}
                                        HOME
                                      </Link>
                                    </li>
                                    <li
                                    // className={` ${quicksand.className}`}
                                    >
                                      <Link
                                        className="pl-8 md:pl-16"
                                        onMouseEnter={(e) => handleHover(e)}
                                        onMouseOut={(e) => handleHoverExit(e)}
                                        // ref={(el) => (line3 = el)}
                                        href="/menu"
                                        onClick={() => {
                                          ListClick.onClick();
                                        }}
                                      >
                                        {/* {localizedMessages.PROJECT} */}
                                        MENU
                                      </Link>
                                    </li>
                                    <li
                                    // className={` ${quicksand.className}`}
                                    >
                                      <Link
                                        className="pl-8 md:pl-16"
                                        onMouseEnter={(e) => handleHover(e)}
                                        onMouseOut={(e) => handleHoverExit(e)}
                                        // ref={(el) => (line3 = el)}
                                        href="https://www.clover.com/online-ordering/littlepisces"
                                        onClick={() => {
                                          ListClick.onClick();
                                        }}
                                      >
                                        {" "}
                                        ORDER
                                        {/* {localizedMessages.CONTACT} */}
                                      </Link>
                                    </li>
                                    <li
                                    // className={` ${quicksand.className}`}
                                    >
                                      <Link
                                        className="pl-8 md:pl-16"
                                        onMouseEnter={(e) => handleHover(e)}
                                        onMouseOut={(e) => handleHoverExit(e)}
                                        // ref={(el) => (line1 = el)}
                                        href="/contact"
                                        onClick={() => {
                                          ListClick.onClick();
                                        }}
                                      >
                                        CONTACT
                                        {/* {localizedMessages.COMPANY} */}
                                      </Link>
                                    </li>
                                  </ul>
                                </nav>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </ModalWrapper>
              </a.div>
            </Background>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default BurgerModal;
