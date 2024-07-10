import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function DonutBox(props: { first: boolean }) {
  const { first } = props;
  return (
    <div
      className={` ${
        first ? "bg-primary2" : "bg-primary3"
      } h-full flex items-center overflow-x-hidden relative py-[70px] w-[50%] flex-col justify-between`}
    >
      {Array(3)
        .fill(0)
        .map((item: number, idx: number) => {
          console.log("hi");
          return (
            <motion.div
              key={idx}
              initial={{ x: "100vw", rotate: 360 }}
              animate={{ x: 0, rotate: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Image
                src={`/images/Donuts/${!first ? idx + 1 : idx + 4}.png`}
                alt="donut"
                width={150}
                height={150}
              />
            </motion.div>
          );
        })}
    </div>
  );
}
