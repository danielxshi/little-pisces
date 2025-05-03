//Represents Slug Nav
"use client";

import Link from "next/link";
import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/Circle Logo -  Transparent BG v3.webp";
import ContentfulImage from "@/lib/contentful-image";
// import { getLocale, toggleLocale } from "@/src/i18n";
import Navbar from "./Navbar";

type Props = {
  onClick: () => void;
  // onLogoClick: () => void;
};

// function localeClicked() {
//   toggleLocale();
//   location.reload();
// }

class SlugNav extends Component<Props, any> {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    // const locale = getLocale();
    return (
      // <AnimatePresence>
      <Navbar style={""}>
        <div className="w-full bg-orange h-full absolute z-0"></div>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.25, ease: "easeInOut" }}
          className="container"
        >
          <div>
            <div className="inner-header">
              <div className="logo">
                <Link
                  // onClick={() => {
                  //   this.props.onLogoClick();
                  // }}
                  href="/"
                >
                  <ContentfulImage
                    width={45}
                    height={45}
                    quality={100}
                    src={logo}
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.nav>
      </Navbar>
      // </AnimatePresence>
    );
  }
}
export default SlugNav;
