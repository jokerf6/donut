import React from "react";

export default function SubHeader(props: { path: string; current: string }) {
  const { path, current } = props;
  return (
    <div className=" flex gap-2 mt-[40px]">
      <span className=" text-[#D7D7D7]">{path} </span>
      <span className=" text-[#101828]">{current}</span>
    </div>
  );
}
