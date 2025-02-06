import React from "react";
import { BestSellers } from "../../../data/BestSellers";
import WeekProductCard from "./WeekProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./ProductofWeek.css";
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
const BestSeller = () => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  console.log(BestSellers);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl font-medium text-richblack-700">
          Best Sellers
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
        {BestSellers.map((product, index) => (
          <WeekProductCard
            key={index}
            data={product}
            width="w-[266px]"
            height="h-[490px]"
          />
        ))}
      </Slider>
    </div>
  );
};

export default BestSeller;
