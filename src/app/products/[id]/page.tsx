"use client";
import Contact from "@/components/contact";
import Info from "@/components/donut/info";
import Like from "@/components/donut/like";
import Header from "@/components/header";
import SubHeader from "@/components/header/subHeader";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);

  return (
    <main className="flex  min-h-screen flex-col pt-4  w-full ">
      <Header
        color="text-[#2b0b16d9]  hover:text-primary4"
        current={0}
        setShow={setShow}
      />
      <div className=" xl:px-[40px] lg:px-[40px] md:px-[40px] px-[20px] mb-[20px] mt-[10px]  font-sans">
        <SubHeader path="Home / Products" current=" / Donut" />
      </div>

      <div className=" w-full justify-between items-center flex px-[20px]  font-sans xl:flex-row lg:flex-row md:flex-row flex-col">
        <motion.div
          // animate={{ rotate: 360 }} // Animation definition
          transition={{ duration: 1 }} // Animation duration
          whileHover={{ rotate: 360 }} // Scale up on hover
          // whileTap={{ scale: 0.9 }} // Scale
          className=" xl:w-[50%] lg:w-[50%] md:w-[50%] w-full flex  xl:px-[40px] lg:px-[40px] md:px-[40px] px-[20px]"
        >
          <Image
            src={"/images/Donuts/1.png"}
            alt="Donut"
            width={490}
            height={490}
          />
        </motion.div>
        <Info />
      </div>
      <Like />
      <Contact />
    </main>
  );
}
