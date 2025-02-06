import React, { useState } from "react";
import sliderImage1 from "../../../assets/images/electro-slideshow-h16-1.png";
import sliderImage2 from "../../../assets/images/electro-slideshow-h16-2.png";
import Button from "./Button";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
const imgSrc = [sliderImage1, sliderImage2];
const HomeSlider = () => {
  const [displayIndex, setDisplayImg] = useState(0);
  const rightClickHandler = () => {
    const newIndex = (displayIndex + 1) % imgSrc.length;
    setDisplayImg(newIndex);
    console.log(newIndex);
  };
  const leftClickHandler = () => {
    const newIndex = (displayIndex - 1 + imgSrc.length) % imgSrc.length;
    setDisplayImg(newIndex);
    console.log(newIndex);
  };

  return (
    <div className="relative group flex flex-col items-center gap-14">
      <img
        src={imgSrc[displayIndex]}
        alt="sliderImg"
        className="w-full h-full cursor-pointer"
      />
      <div className="bg-yellow-50 text-richblack-700 py-5 px-12 rounded-2xl w-fit absolute -bottom-0 right-[5%]">
        <div
          key={displayIndex}
          className="flex flex-col gap-1 items-start transition-[opacity] duration-700 delay-1000 opacity-100 animate-fade-in"
        >
          <p className="text-[15px]">New Arrival!</p>
          <h3 className="text-[26px] font-bold">M3 Super Sprint</h3>
          <p className="text-sm">
            13-inch ultimate on-the-go laptop, 15-inch for multitasking.
          </p>
          <p className="text-3xl font-medium">$109,900.00</p>
          <Button active={false} linkto="/" className="bg-yellow-50">
            START BUYING
          </Button>
        </div>
      </div>
      <button
        className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-richblack-700 hover:bg-black p-5 rounded-full absolute left-[3%] top-[45%]"
        onClick={leftClickHandler}
      >
        <LiaAngleLeftSolid className="text-white text-2xl" />
      </button>
      <button
        className="transition-all duration-300 bg-richblack-700 hover:bg-black p-5 rounded-full absolute right-[3%] top-[45%] opacity-0 group-hover:opacity-100"
        onClick={rightClickHandler}
      >
        <LiaAngleRightSolid className="text-white text-2xl" />
      </button>
      <div className="flex gap-4">
        <div
          onClick={leftClickHandler}
          className={`${
            displayIndex === 0 ? "bg-yellow-50 w-10" : "bg-richblack-300 w-2"
          } h-2 rounded-3xl transition-all duration-500 cursor-pointer`}
        ></div>
        <div
          onClick={rightClickHandler}
          className={`${
            displayIndex === 1
              ? "bg-yellow-50 w-10 origin-right"
              : "bg-richblack-300 w-2"
          } h-2 rounded-full transition-all duration-500 cursor-pointer`}
        ></div>
      </div>
    </div>
  );
};

export default HomeSlider;
