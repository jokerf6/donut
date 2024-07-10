import { ABOUT_TIPS, AboutTipType } from "@/static/data";
import React, { ReactElement } from "react";

export default function AboutTaps() {
  return (
    <div className=" bg-primary1 flex xl:flex-row lg:flex-row md:flex-row flex-col items-center text-center  xl:px-[40px] lg:px-[40px] md:px-[40px] px-[20px] py-8 justify-between gap-8">
      {ABOUT_TIPS.map((item: AboutTipType, idx: number) => {
        return (
          <div key={idx} className=" text-white  flex flex-col items-center">
            <item.icon className=" text-[40px] bg-primary4  shadow-xl py-2 rounded-full" />
            <span className=" mt-[15px] font-sans font-bold text-primary4">
              {item.title}
            </span>
            <span className=" font-sans text-sm">{item.brief}</span>
          </div>
        );
      })}
    </div>
  );
}
