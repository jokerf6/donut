"use client";
import React, { useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const VerticalSwipeToSlide: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const settings: Settings = {
    dots: false,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: (currentSlide, nextSlide) => {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: (currentSlide) => {
      console.log("after change", currentSlide);
    },
  };

  return (
    <div className="slider-container h-full flex items-center justify-center">
      <Slider ref={sliderRef} {...settings} className="  h-full">
        <div className=" flex items-center justify-center  w-full text-center">
          <div className="  w-full flex items-center justify-center">
            <Image
              width={250}
              height={250}
              className=""
              src={"/images/Donuts/1.png"}
              alt="donut"
            />
          </div>
        </div>
        <div className=" flex items-center justify-center  w-full text-center">
          <div className="  w-full flex items-center justify-center">
            <Image
              width={250}
              height={250}
              className=""
              src={"/images/Donuts/2.png"}
              alt="donut"
            />
          </div>
        </div>
        <div className=" flex items-center justify-center  w-full text-center">
          <div className="  w-full flex items-center justify-center">
            <Image
              width={250}
              height={250}
              className=""
              src={"/images/Donuts/3.png"}
              alt="donut"
            />
          </div>
        </div>
        <div className=" flex items-center justify-center  w-full text-center">
          <div className="  w-full flex items-center justify-center">
            <Image
              width={250}
              height={250}
              className=""
              src={"/images/Donuts/4.png"}
              alt="donut"
            />
          </div>
        </div>
        <div className=" flex items-center justify-center  w-full text-center">
          <div className="  w-full flex items-center justify-center">
            <Image
              width={250}
              height={250}
              className=""
              src={"/images/Donuts/5.png"}
              alt="donut"
            />
          </div>
        </div>
        <div className=" flex items-center justify-center  w-full text-center">
          <div className="  w-full flex items-center justify-center">
            <Image
              width={250}
              height={250}
              className=""
              src={"/images/Donuts/6.png"}
              alt="donut"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default VerticalSwipeToSlide;
