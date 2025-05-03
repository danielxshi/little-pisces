"use client";
// Represents Project Info Modal
import Link from "next/link";
import gsap from "gsap";
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
  width: 1/3;
  height: 100vh;
  color: #fff;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 99;
  border-radius: 3px;
  overflow-y: scroll;
`;

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
    x: showModal ? "300%" : "400%",
  });

  const closeModal = (e: { target: HTMLInputElement | null }) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const [hidden, setHidden] = useState(false);
  const [element, setElement] = useState<null | HTMLDivElement>(null);

  return (
    <header className="burger-menu hidden md:block">
      <AnimatePresence>
        {showModal ? (
          <motion.div ref={modalRef}>
            <Background ref={modalRef}>
              <a.div className="" style={animation}>
                <ModalWrapper
                  className="w-screen md:w-[50vw]"
                  ref={(el) => setElement(el)}
                >
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
                          className="w-screen md:w-[50vw] h-full"
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
                                        className="pl-8"
                                        onMouseEnter={(e) => handleHover(e)}
                                        onMouseOut={(e) => handleHoverExit(e)}
                                        // ref={(el) => (line3 = el)}
                                        href="/"
                                        onClick={() => {
                                          ListClick.onClick();
                                        }}
                                      >
                                        {/* {localizedMessages.PROJECT} */}
                                        Home
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="pl-8 w-[50vw]"
                                        onMouseEnter={(e) => handleHover(e)}
                                        onMouseOut={(e) => handleHoverExit(e)}
                                        // ref={(el) => (line3 = el)}
                                        href="/lougheed"
                                        onClick={() => {
                                          ListClick.onClick();
                                        }}
                                      >
                                        {/* {localizedMessages.PROJECT} */}
                                        Lougheed Menu
                                      </Link>
                                    </li>
                                    <li
                                    >
                                      <Link
                                        className="pl-8"
                                        onMouseEnter={(e) => handleHover(e)}
                                        onMouseOut={(e) => handleHoverExit(e)}
                                        // ref={(el) => (line3 = el)}
                                        href="https://www.clover.com/online-ordering/littlepisces"
                                        onClick={() => {
                                          ListClick.onClick();
                                        }}
                                      >
                                        {" "}
                                        &nbsp;&nbsp;Pickup
                                        {/* {localizedMessages.CONTACT} */}
                                      </Link>
                                    </li>
                                    <li
                                    // className={` ${quicksand.className}`}
                                    >
                                      <Link
                                        className="pl-8"
                                        onMouseEnter={(e) => handleHover(e)}
                                        onMouseOut={(e) => handleHoverExit(e)}
                                        // ref={(el) => (line3 = el)}
                                        href="https://www.ubereats.com/store/little-pisces-taiyaki-%26-soft-serve/e1sv_PokUp-ooc7R2Cq_1A"
                                        onClick={() => {
                                          ListClick.onClick();
                                        }}
                                      >
                                        {" "}
                                        &nbsp;&nbsp;Delivery
                                        {/* {localizedMessages.CONTACT} */}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="pl-8"
                                        onMouseEnter={(e) => handleHover(e)}
                                        onMouseOut={(e) => handleHoverExit(e)}
                                        // ref={(el) => (line3 = el)}
                                        href="/richmond"
                                        onClick={() => {
                                          ListClick.onClick();
                                        }}
                                      >
                                        {/* {localizedMessages.PROJECT} */}
                                        Richmond Menu
                                      </Link>
                                    </li>
                                    <li
                                    >
                                      <Link
                                        className="pl-8"
                                        onMouseEnter={(e) => handleHover(e)}
                                        onMouseOut={(e) => handleHoverExit(e)}
                                        // ref={(el) => (line3 = el)}
                                        href="https://little-pisces.member.rewardup.io/"
                                        onClick={() => {
                                          ListClick.onClick();
                                        }}
                                      >
                                        {" "}
                                        Loyalty
                                        {/* {localizedMessages.CONTACT} */}
                                      </Link>
                                    </li>
                                    <li
                                    // className={` ${quicksand.className}`}
                                    >
                                      <Link
                                        className="pl-8"
                                        onMouseEnter={(e) => handleHover(e)}
                                        onMouseOut={(e) => handleHoverExit(e)}
                                        // ref={(el) => (line1 = el)}
                                        href="/contact"
                                        onClick={() => {
                                          ListClick.onClick();
                                        }}
                                      >
                                        Contact
                                        {/* {localizedMessages.COMPANY} */}
                                      </Link>
                                    </li>
                                  </ul>
                                </nav>

                                <div className="foot-notes flex flex-col bottom-0 justify-between pl-8 md:p-16 w-3/5 md:w-4/5">
                                  <div className="flex-col flex ">
                                    {/* <p className="">604 706 5876</p> */}
                                    {/* <Link href="https://www.google.com/maps/place/Little+Pisces/@49.2438823,-122.893232,15z/data=!4m2!3m1!1s0x0:0xc9eb0fd6b40fa8f4?sa=X&ved=1t:2428&ictx=111">
                                      4501 North Rd, Unit 202B
                                    </Link> */}
                                  </div>
                                </div>
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
