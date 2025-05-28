"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function ScrollLine() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <div ref={ref} className="fixed top-0 left-10 h-screen w-1 bg-transparent z-50">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="origin-top bg-white w-full h-full rounded-full"
        />
      </div>
    </>
  );
}
