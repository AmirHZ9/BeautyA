import React from "react";
import banner from "../assets/offers/offers.png";
export default function SpecialOffers() {
  return (
    <div className="flex xl:px-[108px] justify-center  items-center flex-wrap xl:flex-nowrap xl:bg-pink xl:justify-between  mt-14">
      <div>
        <img src={banner} alt="banner"  />
      </div>
      <div className="mt-14 mx-12 xl:ml-12 xl:mr-[108px] mb-10">
        <h1 className="font-bold text-2xl">Special Offers</h1>
        <p className="font-bold text-primary text-[32px] mt-2 mb-4">Save Up To 50%</p>
        <p>
         <span className="font-semibold xl:font-normal">Mother’s Day is coming!</span>  <br /> For everything she’s given you, it's
          time to give back. Shower her with love, happiness, and the best of
          Beautya.
        </p>
        <p className="font-bold text-primary mt-2 hidden xl:block">
          visit your local beautya branches to find out more about our special
          offers in make up and skincare products.{" "}
        </p>
        <div className="flex justify-center xl:justify-end">
          <button className="border border-primary text-primary xl:bg-primary xl:text-white px-9 py-2 mt-2">
            Find Branches
          </button>
        </div>
      </div>
    </div>
  );
}
