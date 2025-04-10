import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

const SubscribeSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="text-richblack-700 flex items-center flex-col gap-[14px]">
      <h2 className="text-[32px] text-center">
        Sign up & Receive a 20% Off <br /> Coupon From Electro!
      </h2>
      <p className="text-[15px]">
        Receive updates, access to exclusive deals, and more.
      </p>
      <forms onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="relative border border-richblack-200 rounded-3xl w-5/12 flex items-center py-1 px-1 justify-between mx-auto">
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid Email",
              },
            })}
            placeholder="Enter your email"
            className="outline-none p-2 w-11/12"
          />
          <Button active={true}>
            <input
              type="submit"
              disabled={isSubmitting}
              value={isSubmitting ? "SUBSCRIBING" : "SUBSCRIBE"}
              className="cursor-pointer"
            />
          </Button>
        </div>
      </forms>
      <p className="text-xs text-richblack-500">
        $20 Coupon can only be used on whole unit products, not accessories or
        parts.
      </p>
    </div>
  );
};

export default SubscribeSection;
