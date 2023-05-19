import React from "react";
import banner from "../assets/new/main.png";
import product1 from "../assets/new/product1.png";
import product2 from "../assets/new/product2.png";
export default function New() {
  return (
    <div className=" bg-newbg pb-10">
      <h1 className="w-full text-center pt-9 text-white font-bold text-2xl">
        New In
      </h1>
      <div className="flex justify-center mx-5  md:px-[108px] mt-8">
        <div className=" mr-6">
          <img src={banner} alt="banner" />
          <p className="text-secondary font-bold text-xl md:text-2xl">
            Beautya La Mousse Off/On Foaming Cleaner
          </p>
          <p className="text-white text-justify">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis en im velit mollit.
          </p>
        </div>
        <div className="hidden md:block">
          <ul className="flex">
            <li className="mr-6 bg-white">
              <img src={product1} alt="product1" />
              <div className="mx-4 mt-4 mb-6">
                <p className="text-primary font-bold">
                  Beautya Capture Total Dreamskin Care & Perfect
                </p>
                <p className="text-xs mt-2">
                  Anti-Aging Face Serum, with Purifying French Water Lily
                </p>
                <span className="mt-2">$76.00</span>
              </div>
            </li>
            <li className="bg-white">
              <img src={product2} alt="product2" />
              <div className="mx-4 mt-4 mb-6">
                <p className="text-primary font-bold">
                  Beautya Capture Total Dreamskin Care & Perfect
                </p>
                <p className="text-xs mt-2">
                  Anti-Aging Face Serum, with Purifying French Water Lily
                </p>
                <span className="mt-2">$76.00</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ul className="md:hidden flex justify-center mt-7 ">
          <li className="w-6 h-1 bg-[#A10550] border border-[#fa58a6] mx-1"></li>
          <li className="w-6 h-1 bg-[#cbcbcb] mx-1"></li>
          <li className="w-6 h-1 bg-[#cbcbcb] mx-1"></li>
          <li className="w-6 h-1 bg-[#cbcbcb] mx-1"></li>
        </ul>
    </div>
  );
}
