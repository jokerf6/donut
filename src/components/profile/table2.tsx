import React from "react";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { PRODUCTS } from "@/static/data";
import ProfileTap from "./profileTap";
export default function Table2() {
  return (
    <div className="xl:hidden lg:hidden flex flex-col mt-[20px]">
      <ProfileTap title="Order History" />

      <div className=" border border-[#EAECF0] rounded-md mt-[10px]">
        {PRODUCTS.map((item: any, idx: number) => {
          return (
            <div key={idx} className=" w-full">
              <div className=" flex justify-between items-center px-[24px] py-[12px] ">
                <span className=" text-primary4  text-[16px] font-bold">
                  Order
                </span>
                <span className="border border-gray-300 py-2 px-4 bg-slate-200 underline cursor-pointer text-center">
                  #i1573
                </span>
              </div>
              <div className=" flex justify-between items-center px-[24px] py-[12px] ">
                <span className=" text-primary4  text-[16px] font-bold">
                  Date
                </span>
                <span className="font-[500] text-[16px] text-[#101828]">
                  April 24, 2023
                </span>
              </div>
              <div className=" flex justify-between items-center px-[24px] py-[12px] ">
                <span className=" text-primary4  text-[16px] font-bold">
                  Payment Status
                </span>
                <span className="font-[500] text-[16px] text-[#101828]">
                  Pending
                </span>
              </div>
              <div className=" flex justify-between items-center px-[24px] py-[12px] ">
                <span className=" text-primary4  text-[16px] font-bold">
                  Fulfillment Status{" "}
                </span>
                <span className="font-[500] text-[16px] text-[#101828]">
                  Fulfilled
                </span>
              </div>
              <div className=" flex justify-between items-center px-[24px] py-[12px] ">
                <span className=" text-primary4  text-[16px] font-bold">
                  Total{" "}
                </span>
                <span className="font-[500] text-[16px] text-[#101828]">
                  346.56 EGP
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
