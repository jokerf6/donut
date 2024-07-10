import React from "react";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { PRODUCTS } from "@/static/data";
export default function SmallProduct() {
  return (
    <div className="xl:hidden lg:hidden flex flex-col border border-[#EAECF0] rounded-md">
      {PRODUCTS.map((item: any, idx: number) => {
        return (
          <div key={idx} className=" w-full">
            <div className=" flex justify-between items-center px-[24px] py-[12px] ">
              <span className=" text-primary4  text-[22px] font-bold"></span>
              <Image
                alt="img"
                src={item.image}
                height={40}
                width={40}
                className=" w-[40px]  flex h-[40px] rounded-[6px]"
              />{" "}
            </div>
            <div className=" flex justify-between items-center px-[24px] py-[12px] ">
              <span className=" text-primary4  text-[22px] font-bold">
                Product
              </span>
              <span className="font-[500] text-[16px] text-[#101828]">
                {item && item.name}
              </span>
            </div>
            <div className=" flex justify-between items-center px-[24px] py-[12px] ">
              <span className=" text-primary4  text-[22px] font-bold">
                Price
              </span>
              <span className="font-[500] text-[16px] text-[#101828]">
                {item && item.price}
              </span>
            </div>
            <div className=" flex justify-between items-center px-[24px] py-[12px] ">
              <span className=" text-primary4  text-[22px] font-bold">
                Quantity
              </span>
              <div className="flex gap-2 text-[16px] border rounded-md items-center py-2  w-fit px-4">
                <FaPlus className=" cursor-pointer" />
                <span>1</span>
                <FiMinus className=" cursor-pointer" />
              </div>
            </div>
            <div className=" flex justify-between items-center px-[24px] py-[12px] ">
              <span className=" text-primary4  text-[22px] font-bold">
                Subtotal
              </span>
              <span className="font-[500] text-[16px] text-[#101828]">
                {item && item.price}
              </span>
            </div>
            <div className=" flex justify-between items-center px-[24px] py-[12px] ">
              <button className=" bg-primary4 w-full py-[8px] hover:shadow-md text-white">
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
