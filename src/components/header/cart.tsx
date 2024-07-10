import Link from "next/link";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

export default function Cart() {
  return (
    <div className=" flex gap-2">
      <Link
        href={"/cart"}
        className=" text-center bg-white xl:w-[40px] lg:w-[40px] mg:w-[40px] w-[30px] xl:h-[40px] lg:h-[40px] mg:h-[40px] h-[30px] rounded-full flex items-center justify-center font-bold text-primary4"
      >
        <BsCart2 />
      </Link>
      <Link
        href={"/profile"}
        className=" text-center bg-white xl:w-[40px] lg:w-[40px] mg:w-[40px] w-[30px] xl:h-[40px] lg:h-[40px] mg:h-[40px] h-[30px] rounded-full flex items-center justify-center font-bold text-primary4"
      >
        <IoPersonOutline />
      </Link>
    </div>
  );
}
