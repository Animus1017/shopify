import React from "react";
import IconButton from "./IconButton";
import { useNavigate } from "react-router-dom";

const WeekProductCard = ({ data, width, height }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${width} ${height} relative group hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.2),rgba(255,255,255,0.2))] transform origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100 z-20"></div>

      <div className="relative py-7">
        <img src={data.img} alt={data.productName} />
        <div className=" flex flex-col gap-1 absolute z-0 top-[5%] left-[5%]">
          {data.discount && (
            <span className="  bg-yellow-50 text-richblack-800 text-xs px-[13px] py-[7px] rounded-2xl font-medium ">
              {data.discount}
              {"%"}
            </span>
          )}
          {data.new && (
            <span className=" bg-green-800 text-white text-xs px-[13px] py-[7px] rounded-2xl font-medium">
              NEW
            </span>
          )}
          {data.hot && (
            <span className="bg-red-500 text-white text-xs px-[13px] py-[7px] rounded-2xl font-medium">
              HOT
            </span>
          )}
        </div>
      </div>
      <div className="bg-pure-greys-5 justify-between min-h-[190.17px] group-hover:bg-white transition-all duration-500 py-6 px-8 flex flex-col flex-grow">
        <div className="flex flex-col gap-1">
          <p
            className="z-50 font-normal text-xs text-richblack-400 hover:text-yellow-50 transition-all duration-200 cursor-pointer"
            onClick={() => navigate("/")}
          >
            {data.company}
          </p>
          <h6
            className="z-50 text-blue-500 hover:text-yellow-50 transition-all duration-200 cursor-pointer text-sm font-bold"
            onClick={() => navigate("/")}
          >
            {data.productName}
          </h6>
        </div>
        <ul className=" list-[circle] pl-[18px]">
          {data.productDescription.map((desc, index) => (
            <li key={index} className="text-[15px] text-richblack-500">
              {desc}
            </li>
          ))}
        </ul>
        <div>
          {data.salePrice || data.mrp ? (
            <div className="flex justify-between">
              <div className="flex gap-3">
                {data.salePrice && (
                  <p
                    className={`text-xl font-light ${
                      data.mrp ? "text-red-500" : "text-richblack-800"
                    } `}
                  >
                    {`$${data.salePrice}`}
                  </p>
                )}
                {data.mrp && (
                  <p className="text-xs font-light text-richblack-600 line-through pt-[10px]">
                    {`$${data.mrp}`}
                  </p>
                )}
              </div>
              <IconButton>{data.button}</IconButton>
            </div>
          ) : (
            <p className="text-richblack-800 text-xl font-light">Sold</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeekProductCard;
