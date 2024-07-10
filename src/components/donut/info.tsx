import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
export default function Info() {
  return (
    <div className="   flex-col xl:w-[50%] lg:w-[50%] md:w-[50%] w-full flex items-center justify-center h-full gap-4 pr-[40px] ">
      <h1 className="text-4xl font-bold text-primary4 w-full">Donuts</h1>
      <span className=" w-full text-gray-400">LE 650.00 EGP</span>
      <div className=" flex flex-col gap-1 w-full">
        <span className="text-primary4">Quantity</span>
        <div className="flex gap-2 text-[16px] border rounded-md items-center py-2 px-4  w-fit ">
          <FaPlus className=" cursor-pointer  text-gray-300" />
          <span className=" px-4 text-gray-400">1</span>
          <FiMinus className="  cursor-pointer text-gray-300" />
        </div>
      </div>
      <div className=" flex flex-col gap-2 w-full">
        <button className=" w-full py-[8px] hover:shadow-md border border-primary4 text-primary4">
          Add to cart
        </button>
        <button className=" w-full py-[8px] bg-primary4 hover:shadow-md text-white">
          Buy it now
        </button>
      </div>
    </div>
  );
}
