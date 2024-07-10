import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Image
      src={"/images/logo.png"}
      className=" xl:m-0 lg:m-0 md:m-0 mr-[-30px]"
      alt="Logo"
      width={50}
      height={50}
    />
  );
}
