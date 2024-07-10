"use client";
import AboutTaps from "@/components/aboutTaps";
import Contact from "@/components/contact";
import Explore from "@/components/Explore";
import Header from "@/components/header";
import DonutBox from "@/components/home/DonutBox";
import Popular from "@/components/popular";
import { Seymour_One } from "next/font/google";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

import Image from "next/image";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import Taps from "@/components/header/taps";
import Link from "next/link";
import { TIKTOK } from "@/static/links";

const seymourOne = Seymour_One({ weight: "400", subsets: ["cyrillic"] });
function Over(props: { show: boolean; setShow: any }) {
  const { show, setShow } = props;
  const handleClose = () => setShow(false);
  return (
    <Offcanvas
      show={show}
      onHide={() => setShow(false)}
      rootClose
      placement="start"
      className={
        "   absolute top-0 left-0  outline-none p-8 xl:w-[40vw] lg:w-[40vw] md:w-[40vw] w-[100vw]   bg-white h-[100vh] z-20"
      }
    >
      <Offcanvas.Header
        closeButton
        className=" flex flex-row-reverse mb-[10px]"
      >
        <IoClose
          className=" text-[24px] cursor-pointer"
          onClick={() => setShow(false)}
        />
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Taps
          color="flex flex-col gap-4 text-[#070707] hover:text-primary4 "
          current={1}
        />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
export default function Home() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  return (
    <main className="flex min-h-screen relative  flex-col pt-4 max-w-[100vw]  ">
      {/* <div className=" flex w-screen  h-[90vh]   left-0 top-0 absolute !bg-[url('/images/home.png')] z-10 bg-no-repeat bg-center bg-contain  "></div> */}
      <Header
        color=" hover:text-primary4 text-white"
        current={1}
        setShow={setShow}
      />

      <div className=" flex h-[100vh] absolute top-0 left-0  z-1 w-full ">
        <div className=" xl:w-[50%] lg:w-[50%] md:w-[50%] w-full h-full bg-primary1  flex items-center  xl:px-[70px] lg:px-[70px] md:px-[70px] px-[20px] ">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.1,
                },
              },
            }}
            className=" w-full  overflow-hidden"
          >
            <h1
              className={`  text-primary4 xl:text-[80px]  lg:text-[70px] md:text-[50px]  text-[45px]  font-bold  leading-[100px] ${seymourOne.className}`}
            >
              SWEET DONUTS
            </h1>
            <p className=" text-white mt-[20px] font-bold">
              Treat yourself to a delicious <br /> doughnut delight
            </p>
            <div className=" flex gap-4 mt-[30px]">
              <Link
                href={"/products"}
                className=" bg-primary4 text-center text-white w-[150px] px-4 flex items-center justify-center py-2 rounded-3xl font-sans"
              >
                Products
              </Link>
              <Link
                href={TIKTOK}
                className=" bg-white text-primary4 text-center px-4 py-2 w-[150px] rounded-3xl font-sans"
              >
                How its made
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="    w-[50%] xl:flex lg:flex md:flex hidden h-[100%] ">
          <DonutBox first={false} />
          <DonutBox first={true} />
        </div>
      </div>
      <div className="mt-[95vh] flex w-full  flex-col px-10 relative    gap-14">
        <Over show={show} setShow={setShow} />

        <Popular />
        <AboutTaps />
        <Explore />
      </div>
      <Contact />
    </main>
  );
}
