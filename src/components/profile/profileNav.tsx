import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { PROFILE_TAP } from "@/static/data";
import { IconType } from "react-icons";

export default function ProfileNav(props: {
  current: number;
  setCurrent: any;
}) {
  const { current, setCurrent } = props;
  return (
    <div className=" border flex flex-col xl:w-[400px] lg:w-[400px] md:w-[400px] w-full">
      {PROFILE_TAP.map(
        (tap: { title: string; icon: IconType }, idx: number) => {
          return (
            <>
              <div
                onClick={() => setCurrent(idx + 1)}
                key={idx}
                className={` ${
                  current === idx + 1
                    ? "bg-primary4 text-white font-bold"
                    : "text-[#b4b4b4]"
                } flex gap-1 cursor-pointer hover:bg-primary1 ease-in-out duration-1000 hover:text-white hover:font-bold items-center py-[5px] px-[15px] `}
              >
                {<tap.icon />}
                <span>{tap.title}</span>
              </div>
              {idx !== PROFILE_TAP.length - 1 && <hr />}
            </>
          );
        }
      )}
    </div>
  );
}
