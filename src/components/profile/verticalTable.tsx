import React from "react";
import ProfileTap from "./profileTap";

const VerticalTable = ({ data }: any) => {
  return (
    <div className="p-4 w-full xl:text-[18px] lg:text-[18px] md:text-[18px] text-[12px] ">
      <ProfileTap title="Account Details" />
      <div className=" flex mt-3">
        <div className="border border-gray-300 w-[200px] py-2 px-4 text-primary4 text-center font-bold">
          <span>Name:</span>
        </div>
        <div className="border w-full border-gray-300 py-2 px-4 text-center">
          <span>Fahd hakim</span>
        </div>
      </div>
      <div className=" flex mt-3">
        <div className="border border-gray-300 w-[200px] py-2 px-4 text-primary4 text-center font-bold">
          <span>E-mail:</span>
        </div>
        <div className="border w-full border-gray-300 py-2 px-4 text-center">
          <span>fhakem75@gmail.com</span>
        </div>
      </div>
      <div className=" flex mt-3">
        <div className="border border-gray-300 w-[200px] py-2 px-4 text-primary4 text-center font-bold">
          <span>Phone:</span>
        </div>
        <div className="border w-full border-gray-300 py-2 px-4 text-center">
          <span>+201092725145</span>
        </div>
      </div>
    </div>
  );
};

export default VerticalTable;
