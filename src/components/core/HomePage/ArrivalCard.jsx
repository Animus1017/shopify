import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "./IconButton";

const ArrivalCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className=" w-full bg-pure-greys-5 flex flex-row items-center relative group hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.2),rgba(255,255,255,0.2))] transform origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100 z-20"></div>

      <div className="relative py-7">
        <img src={data.img} alt={data.productName} />
        {(data.discount || data.new) && (
          <span
            className={`absolute z-0 ${
              data.new
                ? "bg-green-800 text-white"
                : "bg-yellow-50 text-richblack-800"
            } font-bold text-xs w-[35px] h-[35px] rounded-full top-[1%] left-[1%] flex items-center justify-center`}
          >
            {data.new ? "NEW" : `${data.discount}%`}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-8 pr-20">
        <div className="flex flex-col gap-3">
          <h2 className="text-[26px] text-richblack-700 z-50">
            {data.tagLine}
          </h2>
          <div className="bg-richblack-900 h-[2px] w-2 z-50"></div>
          <div className="flex flex-col gap-1">
            <p
              className="z-50 font-normal text-xs text-richblack-400 hover:text-yellow-50 transition-all duration-200 cursor-pointer"
              onClick={() => navigate("/")}
            >
              {data.company}
            </p>
            <h6
              className="z-50 text-blue-500 hover:text-yellow-50 transition-all duration-200 cursor-pointer text-[18px] font-bold"
              onClick={() => navigate("/")}
            >
              {data.productName}
            </h6>
          </div>
          <ul className=" list-[circle] pl-[18px] flex flex-col gap-1">
            {data.productDescription.map((desc, index) => (
              <li key={index} className="text-[15px] text-richblack-500">
                {desc}
              </li>
            ))}
          </ul>
          <div className="flex gap-3 items-center">
            {data.salePrice && (
              <p
                className={`text-[34px] font-light ${
                  data.mrp ? "text-red-500" : "text-richblack-800"
                } `}
              >
                {`$${data.salePrice}`}
              </p>
            )}
            {data.mrp && (
              <p className="text-2xl font-light text-richblack-600 line-through">
                {`$${data.mrp}`}
              </p>
            )}
          </div>
        </div>
        <IconButton>{data.button}</IconButton>
      </div>
    </div>
  );
};

export default ArrivalCard;
