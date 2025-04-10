import React from "react";
import HomeSlider from "../components/core/HomePage/HomeSlider";
import delivery from "../assets/homepage icons/delivery.svg";
import feedback from "../assets/homepage icons/feedback.svg";
import returnImg from "../assets/homepage icons/return.svg";
import payment from "../assets/homepage icons/payment.svg";
import ProductofWeek from "../components/core/HomePage/ProductofWeek";
import ActivitySection from "../components/core/HomePage/ActivitySection";
import NewArrivalSection from "../components/core/HomePage/NewArrivalSection";
import TradeSection from "../components/core/HomePage/TradeSection";
import BestSeller from "../components/core/HomePage/BestSeller";
import ReviewsSection from "../components/core/HomePage/ReviewsSection";
import FaqsSection from "../components/core/HomePage/FaqsSection";
import SubscribeSection from "../components/core/HomePage/SubscribeSection";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      {/* section 1 */}
      <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center gap-8">
        <p className="text-[42px] font-thin flex flex-col items-center">
          Sails through work and play. <br />
          <span className="font-bold">Designed to go places.</span>
        </p>
        <HomeSlider />
        <div className="w-full flex justify-around">
          <div className="flex gap-7 items-center">
            <img src={delivery} alt="delivery" />
            <div className="flex flex-col">
              <h4 className="font-bold text-richblack-700">Free Delivery</h4>
              <p className="text-richblack-700">from $50</p>
            </div>
          </div>
          <div className="flex gap-7 items-center">
            <img src={feedback} alt="feedback" />
            <div className="flex flex-col">
              <h4 className="font-bold text-richblack-700">99% Customer</h4>
              <p className="text-richblack-700">Feedbacks</p>
            </div>
          </div>
          <div className="flex gap-7 items-center">
            <img src={returnImg} alt="return" />
            <div className="flex flex-col">
              <h4 className="font-bold text-richblack-700">365 Days</h4>
              <p className="text-richblack-700">for free return</p>
            </div>
          </div>
          <div className="flex gap-7 items-center">
            <img src={payment} alt="payment" />
            <div className="flex flex-col">
              <h4 className="font-bold text-richblack-700">Payment</h4>
              <p className="text-richblack-700">Secure System</p>
            </div>
          </div>
        </div>
      </div>
      {/* section2 */}
      <div className="py-16">
        <ProductofWeek />
      </div>
      {/* section3 */}
      <div>
        <ActivitySection />
      </div>
      {/* section4 */}
      <div className="py-16">
        <NewArrivalSection />
      </div>
      {/* section5 */}
      <div>
        <TradeSection />
      </div>
      {/* section6 */}
      <div className="py-16">
        <BestSeller />
      </div>
      {/* section7 */}
      <div className="mx-auto w-11/12 max-w-maxContent">
        <ReviewsSection />
      </div>
      {/* section8 */}
      <div className="mx-auto w-11/12 max-w-maxContent py-16">
        <FaqsSection />
      </div>
      {/* section9 */}
      <div className="mx-auto w-11/12 max-w-maxContent py-16">
        <SubscribeSection />
      </div>
      <div className="w-screen">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
