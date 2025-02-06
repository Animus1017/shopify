import React from "react";
import { ProductWeekData } from "../../../data/productofweek";
import WeekProductCard from "./WeekProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./ProductofWeek.css";
import { useNavigate } from "react-router-dom";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className={`transition-all duration-300 bg-richblack-700 hover:bg-black p-1 rounded-full absolute top-1/2 right-0 `}
      onClick={onClick}
    >
      <LiaAngleRightSolid className="text-white text-2xl" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className={`transition-all duration-300 bg-richblack-700 hover:bg-black p-1 rounded-full absolute top-1/2 -left-0 z-50`}
      onClick={onClick}
    >
      <LiaAngleLeftSolid className="text-white text-2xl" />
    </button>
  );
}

const ProductofWeek = () => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-3xl font-medium text-richblack-700">
          Products of The Week
        </h2>
        <p
          className="flex text-sm text-richblack-700 items-center cursor-pointer group hover:text-yellow-50 transition-all duration-300"
          onClick={() => navigate("/")}
        >
          View All Products{" "}
          <MdOutlineKeyboardArrowRight className="text-sm text-richblack-700 group-hover:text-yellow-50 transition-all duration-300" />
        </p>
      </div>
      <Slider {...settings} className="max-w-maxContent slick-list ">
        {ProductWeekData.map((product, index) => (
          <WeekProductCard
            key={index}
            data={product}
            width="w-[443px]"
            height="h-[650px]"
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductofWeek;
