import React from "react";

export default function ProfileTap(props: { title: string }) {
  const { title } = props;
  return <span className=" text-[#101828] text-xl font-bold">{title}:</span>;
}
