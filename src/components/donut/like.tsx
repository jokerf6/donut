import React from "react";
import Donut2 from "./donut2";

export default function Like() {
  return (
    <div className=" flex gap-6 w-full flex-col px-[40px] font-bold my-[40px] font-sans">
      <h1 className=" text-text text-3xl font-semibold">You may also like </h1>
      <div className="px-[40px] grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[40px]  h-full  overflow-x-auto w-fit py-[30px]">
        <Donut2 />
        <Donut2 />
        <Donut2 />
        <Donut2 />

        <Donut2 />
      </div>
    </div>
  );
}
