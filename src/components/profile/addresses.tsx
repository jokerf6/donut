import React from "react";
import ProfileTap from "./profileTap";
import AddressStore from "@/store/addresses";
import Inputs from "../default/inputs";
import ReactSelect from "react-select";
import { CITIES } from "@/static/cities";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function Addresses() {
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      width: "100%", // Set the desired width here
      height: "100%", // Set the desired width here
      border: "2px solid #d3d0d0",
      borderRadius: "4px",
      backgroundColor: "#fafafa",
      color: "#929292",
      boxShadow: "none",
      "&:hover": {
        border: "2px solid #d3d0d0",
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#d3d0d0" : "transparent",
      color: state.isSelected ? "#ffffff" : "#000000",
      "&:hover": {
        backgroundColor: "#d3d0d0",
        color: "#929292",
      },
    }),
    menu: (provided: any) => ({
      ...provided,

      backgroundColor: "#ffffff",
      height: "200px",
      overflow: "hidden",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      borderRadius: "4px",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      fontSize: "12px",
      color: "#929292",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#000000",
    }),
  };
  const {
    setShow,
    setShow2,

    setTitle,
    setBody,
    setName,
    name,
    brief,
    setBrief,
    phone,
    city,
    setCity,
    setPhone,
    handleClose,
  } = AddressStore();
  return (
    <div className="p-4 w-full ">
      <div className=" flex justify-between w-full items-center">
        <ProfileTap title="Addresses" />
        <button
          onClick={() => {
            setTitle("Add Address");
            setBody(() => {
              return (
                <div className=" flex flex-col  mt-[-20px] ">
                  <Inputs
                    text="Name"
                    holder="Recipient's name"
                    name="name"
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                  />
                  <Inputs
                    text="Phone"
                    holder="Recipient's phone"
                    name="phone"
                    value={phone}
                    onChange={(e: any) => setPhone(e.target.value)}
                  />
                  <div className=" w-full mt-[10px]">
                    <ReactSelect
                      options={CITIES.map(
                        (des: { id: number; name: string }) => ({
                          value: des.id,
                          label: des.name,
                        })
                      )}
                      defaultValue={city}
                      onChange={(e: any) => setCity(e)}
                      styles={customStyles}
                      placeholder="City"
                    />
                  </div>
                  <textarea
                    value={brief}
                    placeholder="Address"
                    name="Address"
                    rows={4}
                    onChange={(e: any) => setBrief(e.target.value)}
                    className=" w-full  border-[#d3d0d0] border-[2px] px-4 mt-[10px] py-2 text-sm rounded-md placeholder:text-placeholder"
                  />
                  <div className=" flex gap-1 mt-[20px]">
                    <button className=" w-full text-center py-[2px] rounded-sm bg-primary4 text-white">
                      Add
                    </button>
                    <button
                      className=" w-full  border-primary4 text-center py-[2px] rounded-sm text-primary4"
                      onClick={() => {
                        handleClose();
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              );
            });
            setShow(true);
          }}
          className=" border border-primary4 bg-primary4 py-[4px] px-[20px] rounded-sm w-fit hover:shadow-xl text-white"
        >
          Add New Address
        </button>
      </div>
      <div className=" mt-[10px] flex flex-col gap-4">
        <div className=" flex flex-col gap-1">
          <span>Fahd abdelhakem said </span>
          <p>
            1 شارخ خاتم المرسلين مدينه النجوم بولاق الدكرور - نزله الرشاح من علي
            الدائري
          </p>
          <span>Giza</span>
          <div className=" flex justify-between items-center gap-2">
            <button className=" bg-primary4 py-[2px] px-[20px] rounded-md w-full hover:shadow-xl text-white">
              Edit
            </button>
            <button className=" border border-primary4 py-[2px] px-[20px] rounded-md w-full hover:shadow-xl text-primary4">
              Delete
            </button>
          </div>
        </div>
        <div className=" flex flex-col gap-1">
          <span>Fahd abdelhakem said </span>
          <p>
            1 شارخ خاتم المرسلين مدينه النجوم بولاق الدكرور - نزله الرشاح من علي
            الدائري
          </p>
          <span>Giza</span>
          <div className=" flex justify-between items-center gap-2">
            <button
              onClick={() => {
                setShow2(true);
                setTitle("Edit Address");
                setName("Fahd abdelhakem said");
                setBrief(
                  " 1 شارخ خاتم المرسلين مدينه النجوم بولاق الدكرور - نزله الرشاح من علي  الدائري"
                );
                setCity("Giza");
                setPhone("+201092725145");
              }}
              className=" bg-primary4 py-[2px] px-[20px] rounded-md w-full hover:shadow-xl text-white"
            >
              Edit
            </button>
            <button
              onClick={() => {
                setTitle("Delete Address");
                setName("Fahd Hakem");
                setBody(() => {
                  return (
                    <div
                      className={
                        "rounded-[12px] flex flex-col gap-[12px] items-center border-[2px] p-[12px] w-full border-[#EAECF0]  "
                      }
                    >
                      <span className="text-red-600 font-semibold !leading-8">
                        You are about to delete <strong>Fahd Hakem</strong>
                      </span>
                      <div className="flex justify-between w-full px-5 items-center">
                        <button
                          className="bg-red-600 rounded-xl p-2"
                          onClick={() => {
                            // mutation2.mutate();
                          }}
                        >
                          <MdOutlineDeleteOutline className=" text-white" />
                        </button>
                        <button
                          className="rounded-md p-2 font-semibold border cursor-pointer"
                          onClick={() => handleClose()}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  );
                });
                setShow(true);
              }}
              className=" border border-primary4 py-[2px] px-[20px] rounded-md w-full hover:shadow-xl text-primary4"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
