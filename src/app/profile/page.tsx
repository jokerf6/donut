"use client";
import Cart from "@/components/cart";
import Contact from "@/components/contact";
import EditAddress from "@/components/editAddress";
import Header from "@/components/header";
import Model from "@/components/model";
import Profile from "@/components/profile";
import AddressStore from "@/store/addresses";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const { name, show, setShow, Body, handleClose, title, show2, setShow2 } =
    AddressStore();
  const [show3, setShow3] = useState(false);

  return (
    <>
      <Model
        show={show}
        setShow={setShow}
        title={title}
        Body={Body}
        close={handleClose}
      />
      <EditAddress
        name={name}
        show={show2}
        setShow={setShow2}
        title={title}
        close={handleClose}
      />
      <main className="flex  min-h-screen flex-col pt-4   justify-between max-w-screen ">
        <div>
          <Header
            color="text-[#2b0b16d9]  hover:text-primary4"
            current={0}
            setShow={setShow3}
          />{" "}
          <div className=" font-sans xl:px-[20px] lg:px-[20px] md:px-[20px]  z-10  ">
            <Profile />
          </div>
        </div>
        <Contact />
      </main>
    </>
  );
}
