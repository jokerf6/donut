"use client";
import Contact from "@/components/contact";
import Header from "@/components/header";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Donut from "@/components/donut";
import { motion } from "framer-motion";
import Donut2 from "@/components/donut/donut2";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);

  const popover = (
    <Popover
      id="popover-basic"
      // ref={popoverRef} // Ref for the popover element

      className=" font-sans   px-[40px]"
    >
      <Popover.Body>
        <div className=" flex flex-col bg-white border shadow py-[20px]">
          <p className=" mb-[10px] text-gray-400 px-[20px] text-[14px]">
            The highest price is LE 950.00{" "}
          </p>
          <hr />
          <div className=" flex gap-4 px-[20px] mt-[10px] xl:flex-row lg:flex-row md:flex-row flex-col">
            <div className=" flex gap-4 text-gray-400">
              <span>ج.م</span>
              <input
                type="number"
                className=" border p-[5px]"
                placeholder="From"
              />
            </div>
            <div className=" flex gap-4 text-gray-400">
              <span>ج.م</span>

              <input
                type="number"
                className=" border p-[5px]"
                placeholder="To"
              />
            </div>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );
  return (
    <main className="flex  min-h-screen flex-col pt-4  max-w-full  overflow-x-hidden">
      <Header
        color="text-[#2b0b16d9]  hover:text-primary4"
        current={2}
        setShow={setShow}
      />
      <div className=" font-sans xl:px-[40px] lg:px-[40px] md:px-[40px] px-[20px] z-10 my-[20px]  ">
        <h1 className=" text-[52px] font-bold text-primary4">Products</h1>
        <div className=" flex mt-[40px] justify-between">
          <div className=" flex gap-6">
            <span className="  font-semibold text-[#2b0b16d9]">Filter:</span>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              // show={showPopover} // Show popover based on state
              rootClose
              overlay={popover}
            >
              <div className="flex text-[#2b0b16d9] gap-1 items-center cursor-pointer">
                <span className="">Price</span>
                <IoIosArrowDown />
              </div>
            </OverlayTrigger>
          </div>
          <div className=" flex">
            <span className="text-[#2b0b16d9]">6 products</span>
          </div>
        </div>
      </div>
      <div className="  flex items-center justify-center">
        <motion.div className="xl:px-[40px] lg:px-[40px] md:px-[40px] px-[20px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-[80px] lg:gap-[80px] md:gap-[80px] gap-[50px]  h-full  overflow-x-auto w-fit py-[24px]">
          <Donut2 />
          <Donut2 />
          <Donut2 />
          <Donut2 />
          <Donut2 />
          <Donut2 />
          <Donut2 />
          <Donut2 />
          <Donut2 />
        </motion.div>
      </div>

      <Contact />
    </main>
  );
}
