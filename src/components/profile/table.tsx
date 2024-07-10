// RestaurantMenu.js
import React from "react";
import ProfileTap from "./profileTap";

const Table = () => {
  // Example data for the restaurant menu
  const menuItems = [
    {
      id: 1,
      Order: "#18044",
      Date: "April 24, 2023",
      Payment: "Pending",
      Fulfillment: "Fulfilled",
      Total: 346.56,
    },
  ];

  return (
    <div className="p-4 w-full  xl:flex lg:flex md:flex hidden flex-col ">
      <ProfileTap title="Order History" />
      <table className={`restaurant-menu mt-[10px] w-full  `}>
        <thead className="  ">
          <tr>
            <th className="border border-gray-300 text-primary4 font-medium ">
              Order
            </th>
            <th className="border border-gray-300 text-primary4 font-medium py-2 px-4">
              Date
            </th>
            <th className="border border-gray-300 text-primary4 font-medium py-2 px-4">
              Payment Status
            </th>
            <th className="border border-gray-300 text-primary4 font-medium py-2 px-4">
              Fulfillment Status{" "}
            </th>
            <th className="border border-gray-300 text-primary4 font-medium py-2 px-4">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 py-2 px-4 bg-slate-200 underline cursor-pointer text-center">
                {item.Order}
              </td>
              <td className="border border-gray-300 py-2 px-4 text-center">
                {item.Date}
              </td>
              <td className="border border-gray-300 py-2 px-4 text-center">
                {item.Payment}
              </td>
              <td className="border border-gray-300 py-2 px-4 text-center">
                {item.Fulfillment}
              </td>
              <td className="border border-gray-300 py-2 px-4 text-center">
                {item.Total} EGP
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
