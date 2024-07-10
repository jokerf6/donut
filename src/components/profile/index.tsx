"use client";
import React, { useState } from "react";
import SubHeader from "../header/subHeader";
import ProfileNav from "./profileNav";
import History from "./history";
import RestaurantMenu from "./table";
import Table from "./table";
import VerticalTable from "./verticalTable";
import Addresses from "./addresses";
import Table2 from "./table2";

export default function Profile() {
  const data = [
    { Name: "John", Age: 28, City: "New York" },
    { Name: "Jane", Age: 35, City: "San Francisco" },
    { Name: "Doe", Age: 40, City: "Los Angeles" },
  ];
  const [current, setCurrent] = useState(1);
  return (
    <div className=" px-[20px] flex flex-col gap-10 ">
      <SubHeader path="Home / " current=" Profile" />
      <div className=" flex items-start gap-5 xl:flex-row lg:flex-row md:flex-row flex-col ">
        <ProfileNav current={current} setCurrent={setCurrent} />
        {current === 1 && (
          <div className=" flex flex-col  gap-6 w-full">
            <Table />
            <Table2 />
            <VerticalTable data={data} />
          </div>
        )}
        {current === 2 && <Addresses />}
      </div>
    </div>
  );
}
