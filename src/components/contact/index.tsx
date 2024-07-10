"use client";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { FaTripadvisor } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FACEBOOK, INSTAGRAM, TIKTOK } from "@/static/links";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  function handelSubmit(e: any) {
    e.preventDefault(); // Prevent default form submission

    // Access form data (optional, for potential future use)
    const name = e.target.name.value;
    const message = e.target.message.value;

    // Create WhatsApp link with pre-filled message (URL-encode for special characters)
    const encodedMessage = encodeURIComponent(
      `Hey Fahd, I am ${name}. ${message}`
    );
    const whatsappLink = `https://wa.me/+20114847888628?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  }

  return (
    <div
      className={`    w-full  pt-[20px] flex flex-col font-sans
       relative`}
    >
      <hr className=" border  w-full" />
      <div className=" xl:px-[40px] lg:px-[40px] md:px-[40px] px-[20px] flex w-full py-[20px] items-center justify-between">
        <div className=" items-center flex gap-[10px] text-primary4">
          <FaInstagram />
          <Link href={INSTAGRAM} className=" hover:underline" target="_blank">
            Instagram
          </Link>
        </div>
        <div className=" items-center flex gap-[10px] text-primary4">
          <FaTiktok />

          <Link href={TIKTOK} target="_blank" className=" hover:underline">
            Tiktok
          </Link>
        </div>
        <div className=" items-center flex gap-[10px] text-primary4">
          <FaFacebook />{" "}
          <Link href={FACEBOOK} className=" hover:underline" target="_blank">
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
}
