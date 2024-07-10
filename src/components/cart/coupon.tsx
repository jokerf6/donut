import React from "react";
import CartTotal from "./cartTotal";

export default function Coupon() {
  return (
    <div className=" flex justify-between xl:flex-row lg:flex-row md:flex-row flex-col xl:gap-0 lg:gap-0 md:gap-0 gap-10">
      <div className=" flex gap-2 h-fit xl:flex-row lg:flex-row md:flex-row flex-col">
        <input
          style={{ border: "1px solid #fccde1" }}
          className=" xl:w-[300px] lg:w-[300px] md:w-[300px] w-full rounded-md py-3 px-6"
          placeholder="Coupon Code"
        />
        <button className=" bg-primary4 text-white hover:shadow-lg xl:w-fit lg:w-fit md:w-fit w-full px-[40px] py-1 rounded-md">
          Apply Coupon
        </button>
      </div>
      <CartTotal />
    </div>
  );
}
