import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

export default function Header() {
  return (
    <div className=" w-full flex justify-between items-center">
      <span className=" font-sans xl:text-[30px] lg:text-[30px] md:text-[30px] text-[18px] font-bold text-primary4">
        Explore Our Products
      </span>
      <div className=" flex gap-6 items-center">
        <FaArrowLeft className=" cursor-pointer" />
        <FaArrowRight className=" cursor-pointer" />
      </div>
    </div>
  );
}
