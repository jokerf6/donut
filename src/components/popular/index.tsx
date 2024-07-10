import React, { useEffect } from "react";
import Donut from "../donut";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Popular() {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when 50% of the component is in view
    triggerOnce: true, // Only trigger once
  });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [controls, inView]);

  return (
    <div className="flex flex-col items-center w-full bg-white  ">
      <h1 className="text-primary4 font-sans font-bold text-5xl w-full text-center mb-12 py-[20px]">
        Popular Products
      </h1>
      <motion.div
        ref={ref}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={controls}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[50px] h-full items-center overflow-x-auto w-full py-[20px]"
      >
        <Donut />
        <Donut />
        <Donut />
        <Donut />
        <Donut />
      </motion.div>
    </div>
  );
}
