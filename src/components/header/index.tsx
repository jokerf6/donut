import React, { useState } from "react";
import Logo from "./logo";
import Taps from "./taps";
import Translate from "./cart";
import { RiMenu2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function Header(props: {
  color: string;
  current: number;
  setShow: any;
}) {
  const { color, setShow } = props;

  return (
    <div className="  xl:px-[40px] lg:px-[40px] md:px-[40px] px-[20px] w-full  flex items-center justify-between z-10">
      {
        <RiMenu2Line
          onClick={() => setShow(true)}
          className=" text-[#2b0b16d9] cursor-pointer z-1 xl:hidden lg:hidden md:hidden flex"
        />
      }

      <Logo />
      <Taps color={color} current={props.current} />
      <Translate />
    </div>
  );
}
