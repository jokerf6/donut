import { cn } from "@/lib/cn";
import { TAPS } from "@/static/data";
import Link from "next/link";
import React from "react";

export default function Taps(props: { color: string; current: number }) {
  const { color, current } = props;
  return (
    <div className={cn(" xl:flex lg:flex md:flex hidden  gap-4  ", color)}>
      {TAPS.map((item: { name: string; href: string }, idx: number) => {
        return (
          <Link
            href={item.href}
            key={idx}
            className={cn(`cursor-pointer    ease-in-out duration-1000`, color)}
            style={{
              color: `${current === idx + 1 ? "#f0226c" : ""}`,
            }}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
