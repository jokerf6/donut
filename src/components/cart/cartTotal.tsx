import React from "react";

export default function CartTotal() {
  return (
    <div
      className=" flex flex-col p-4 gap-4 xl:w-[30%] lg:w-[30%] md:w-[30%] w-full mb-[40px]"
      style={{ border: "1px solid #EAECF0" }}
    >
      <h1 className=" text-primary4 font-bold text-[18px]">Cart Total</h1>
      <div className=" flex flex-col gap-2">
        <div className=" flex justify-between items-center">
          {" "}
          <span className=" text-text">SubTotal:</span> <span>1700 EGP</span>
        </div>
        <hr />
        <div className=" flex justify-between items-center">
          {" "}
          <span className="text-text">Discount:</span> <span>0 EGP</span>
        </div>
        <hr />
        <div className=" flex justify-between items-center">
          {" "}
          <span className="text-text">Total:</span> <span>1700 EGP</span>
        </div>
      </div>
      <button className=" bg-primary4 text-white hover:shadow-lg w-full px-[40px] py-1 rounded-md">
        Proceed to checkout
      </button>
    </div>
  );
}
