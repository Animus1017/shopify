import React, { useState, useRef } from "react";
import Slider from "react-slick";

const reviews = [
  {
    review:
      "“Excellent product, delivered sooner than said. Smooth easy purchase. Pleasant cycling experience.”",
    author: "George Croft",
    date: "01/01/2025",
  },
  {
    review:
      "“Amazing quality! Highly recommend this for anyone looking for a smooth ride.”",
    author: "Sarah Johnson",
    date: "10/12/2024",
  },
  {
    review:
      "“Absolutely love it! Exceeded my expectations. Will buy again for sure.”",
    author: "Michael Brown",
    date: "05/08/2024",
  },
];

const ReviewsSection = () => {
  const [displayIndex, setDisplayIndex] = useState(0);
  const sliderRef = useRef(null); // Reference to Slider component

  const settings = {
    className: "",
    dots: false, // Hide default dots since we are using custom dots
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setDisplayIndex(newIndex), // Update active dot
  };

  return (
    <div className="w-full mx-auto">
      <div className="w-full">
        <Slider ref={sliderRef} {...settings}>
          {reviews.map((review, index) => (
            <div key={index}>
              <div className="flex flex-col gap-12 items-center">
                <div className="flex flex-col items-center gap-5">
                  <div className="text-2xl text-yellow-50 tracking-[-.5rem]">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="text-3xl text-richblack-700 text-center w-4/6">
                    {review.review}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-richblack-700">{review.author}</p>
                  <p className="text-sm text-richblack-700">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Dots Section */}
        <div className="flex justify-center gap-4 mt-6">
          {reviews.map((_, index) => (
            <div
              key={index}
              onClick={() => sliderRef.current.slickGoTo(index)} // Change slide on click
              className={`cursor-pointer transition-all duration-500 rounded-3xl ${
                displayIndex === index
                  ? "bg-yellow-50 w-8"
                  : "bg-richblack-300 w-2"
              } h-2`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
