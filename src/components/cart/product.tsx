import { CART_HEADER, PRODUCTS, ProductType } from "@/static/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { HiOutlineTrash } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

const Product = () => {
  return (
    <div className=" w-full  overflow-y-hidden  xl:flex lg:flex hidden flex-col ">
      <div className=" w-full custonScroll2 overflow-x-auto h-fit border-t border-b rounded-md border-r border-l border-[#EAECF0]">
        <table className="table-auto w-full overflow-x-auto    ">
          <thead>
            <tr
              className={`   border-b  shadow-primary1     text-primary4 text-left text-[12px] font-[500]    `}
            >
              {CART_HEADER.map((item: String, idx: number) => {
                return (
                  <th
                    key={idx}
                    className={` 
                        
                      w-[20%]
                     px-[24px] py-[12px] text-start `}
                  >
                    <span className="flex gap-2  text-[17px] justify-start cursor-pointer items-start">
                      {item}
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((item: ProductType, idx: number) => {
              return (
                <tr
                  key={idx}
                  className={` ${
                    PRODUCTS.length - 1 !== idx ? "border-b" : ""
                  } h-[20px]    ${
                    idx === PRODUCTS.length - 1 ? "rounded-[20px]" : ""
                  } border-[#EAECF0] text-start    `}
                >
                  <td className="py-[12px]  pl-[100px] max-h-[20px] w-[400px] ">
                    <Image
                      alt="img"
                      src={item.image}
                      height={40}
                      width={40}
                      className=" w-[40px]  flex h-[40px] rounded-[6px]"
                    />
                  </td>
                  <td className="py-[12px]   px-[24px] max-h-[20px] w-[400px] ">
                    <span className=" font-[500] text-[16px]  text-[#101828]">
                      {item && item.name}
                    </span>
                  </td>
                  <td className="py-[12px]  px-[24px] max-h-[20px] w-[400px]">
                    <span className=" font-[500] text-[16px] text-[#101828]">
                      {item && item.price}
                    </span>
                  </td>
                  <td className=" py-[12px]  px-[24px] max-h-[20px] w-[400px] ">
                    <div className="flex gap-2 text-[16px] border rounded-md items-center py-2  w-fit px-4">
                      <FaPlus className=" cursor-pointer" />
                      <span>1</span>
                      <FiMinus className=" cursor-pointer" />
                    </div>
                  </td>
                  <td className="py-[12px]  px-[24px] max-h-[20px] w-fit">
                    <span className=" font-[500] text-[16px] text-[#101828]">
                      {item && item.price}
                    </span>
                  </td>
                  <td className="py-[12px]  px-[24px] max-h-[20px] w-[400px]">
                    <HiOutlineTrash className=" cursor-pointer" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
