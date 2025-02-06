import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { NewArrivals } from "../../../data/NewArrivals";
import ArrivalCard from "./ArrivalCard";

const NewArrivalSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-9">
      <div className="flex flex-col items-center">
        <h2 className="text-[32px] text-richblack-700">New Arrivals</h2>
        <p
          className="flex text-sm text-richblack-700 items-center cursor-pointer group hover:text-yellow-50 transition-all duration-300"
          onClick={() => navigate("/")}
        >
          View All Products{" "}
          <MdOutlineKeyboardArrowRight className="text-sm text-richblack-700 group-hover:text-yellow-50 transition-all duration-300" />
        </p>
      </div>
      <div className="flex flex-col gap-16">
        {NewArrivals.map((product, index) => (
          <ArrivalCard data={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivalSection;
