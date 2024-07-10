import Image from "next/image";
import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { motion } from "framer-motion";

export default function Donut2() {
  return (
    <motion.div
      className=" flex  w-full  flex-col items-start hover:cursor-pointer"
      initial="hidden"
      animate="visible"
      whileHover={{
        position: "relative",
        zIndex: 1,
        background: "white",
        scale: 1.2,
        transition: {
          duration: 0.2,
        },
      }}
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.1,
          },
        },
      }}
    >
      <Image
        src={"/images/Donuts/1.png"}
        alt="Donut"
        width={200}
        height={200}
      />

      <h1 className=" font-sans font-bold text-[#505050] text-start xl:text-[18px] lg:text-[18px] md:text-[18px] text-[12px]">
        Lotus Pancake Donut
      </h1>
      <div className=" flex items-start justify-between gap-2 font-sans">
        {/* <button className=" flex items-center gap-1 hover:bg-primary1 hover:text-white duration-1000 ease-in-out border border-primary1 text-primary1 py-1 px-4 rounded-2xl">
          Add To Cart <LuShoppingCart />
        </button> */}
        <span className=" text-[#636363]">LE 45 EGP</span>
      </div>
    </motion.div>
  );
}
