import React, { useEffect } from "react";
import Header from "./header";
import Donut from "../donut";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Explore() {
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
    <div>
      <Header />
      <motion.div
        ref={ref}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={controls}
        className=" flex items-center justify-center "
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 mt-[45px]">
          <Donut />
          <Donut />
          <Donut />
          <Donut />
          <Donut />
          <Donut />
          <Donut />
          <Donut />
          <Donut />
          <Donut />
        </div>
      </motion.div>

      <div className=" w-full flex justify-center mt-[45px] mb-[10px]">
        <button className=" xl:w-fit lg:w-fit md:w-fit w-full font-sans py-1 px-[30px] xl:rounded-2xl lg:rounded-2xl md:rounded-2xl bg-primary4 text-white">
          view all
        </button>
      </div>
    </div>
  );
}
