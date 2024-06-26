"use client";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  scroll,
} from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import React from "react";

interface Props {
  children?: ReactNode;
  style: string;
  // any props that come into the component
}

const Navbar = ({ children, ...props }: Props) => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(true);
  const [brandHidden, setHiddenBranding] = useState(false);

  useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (window.scrollY > 0) {
      setHidden(false);
    } else if (window.scrollY >= 0 || window.scrollY <= 25) {
      setHidden(true);
      setHiddenBranding(false);
    } else if (window.scrollY <= 10) {
      setHiddenBranding(false);
    }
    // else if (latest > previous && latest > 150) {
    //   //   setHiddenBranding(true);
    // }
  });

  return (
    <section className={`${props.style}`}>
      <header>{children}</header>
      <motion.div
        initial={{ opacity: 0 }}
        variants={{
          visible: { opacity: 0.85 },
          hidden: { opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.95, ease: "easeInOut", delay: 0.25 }}
        className={`navbar top-0 fixed h-20 w-screen ${hidden ? " " : "  "}`}
      ></motion.div>
    </section>
  );
};

export default Navbar;
