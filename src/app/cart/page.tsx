"use client";
import Cart from "@/components/cart";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [show, setShow] = useState(false);

  return (
    <main className="flex  min-h-screen flex-col pt-4  w-full ">
      <div className=" h-screen w-full opacity-10 absolute top-0 left-0 flex items-center justify-between z-0 overflow-hidden">
        <Image
          src={"/images/Donuts/1.png"}
          alt="img"
          width={400}
          height={400}
          className=" "
        />
        <Image
          src={"/images/Donuts/4.png"}
          alt="img"
          width={400}
          height={400}
          className=" "
        />
        <Image
          src={"/images/Donuts/2.png"}
          alt="img"
          width={400}
          height={400}
          className=" "
        />
      </div>
      <Header
        color="text-[#2b0b16d9]  hover:text-primary4"
        current={0}
        setShow={setShow}
      />
      <div className=" font-sans px-[20px] z-10  ">
        <Cart />
      </div>
      <Contact />
    </main>
  );
}
