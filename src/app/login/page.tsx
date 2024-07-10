import Inputs from "@/components/default/inputs";
import VerticalSwipeToSlide from "@/components/login/left";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { SiGmail } from "react-icons/si";

import { FaGoogle } from "react-icons/fa";

export default function page() {
  return (
    <div className=" w-full h-[100vh] flex">
      <div className=" relative w-full h-full bg-primary1">
        <Image
          src={"/images/logo.png"}
          className=" absolute top-[30px] left-[30px]"
          alt="Logo"
          width={50}
          height={50}
        />
        <VerticalSwipeToSlide />
      </div>
      <div className=" relative  w-full h-full bg-white flex items-center justify-center">
        <div className="  font-sans flex flex-col gap-2 w-[80%]">
          <div className=" flex flex-col gap-1">
            <Inputs text="number" holder="phone number" />
            <Inputs text="password" holder="password" type="password" />
          </div>

          <div className=" flex flex-row-reverse">
            <Link
              href={"forget"}
              className=" text-primary1 hover:text-primary4 hover:underline duration-1000"
            >
              Forget Password ?
            </Link>
          </div>
          <button className=" w-full mt-[15px] bg-primary4 text-center py-2 text-white rounded-md">
            Log in
          </button>
          <div className=" flex gap-1 items-center justify-center">
            <hr className=" w-full  border border-[#d3d0d0]" />
            <span className=" my-[10px] text-center w-full text-[#d3d0d0]">
              or continue with{" "}
            </span>
            <hr className=" w-full  border border-[#d3d0d0]" />
          </div>
          <div className=" my-[10px] flex justify-center items-center gap-10">
            <FaGoogle className="text-[#DB4437] text-[40px]" />
            <ImFacebook2 className=" text-[#1877F2] text-[40px]" />
          </div>
          <span className=" text-primary1 text-center  left-0 w-full absolute bottom-10">
            don't have an account ?{" "}
            <Link href={"/signup"} className=" text-primary4 hover:underline">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
