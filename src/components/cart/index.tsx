import React from "react";
import Product from "./product";
import SubHeader from "../header/subHeader";
import Coupon from "./coupon";
import SmallProduct from "./smallProduct";

export default function Cart() {
  return (
    <div className=" px-[20px] flex flex-col gap-10 ">
      <SubHeader path="Home / " current=" Cart" />
      <Product />
      <SmallProduct />
      <Coupon />
    </div>
  );
}
