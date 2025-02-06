import React from "react";
import { useNavigate } from "react-router-dom";

const IconButton = ({ children, linkto }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(linkto)}
      className="w-fit text-xl border-2 rounded-full p-1 z-50 border-richblack-900 text-richblack-900 group-hover:text-white group-hover:bg-yellow-25 transition-all duration-300 group-hover:border-yellow-25"
    >
      {children}
    </button>
  );
};

export default IconButton;
