import React from "react";
import slider from "../assets/Banner.jpeg";
export default function Slider() {
  return (
    <div className="relative">
      <img src={slider} alt="slider" />
      <div className="absolute  bg-bgSlider w-full h-full top-0"></div>
      <div className="absolute w-full flex flex-col items-center bottom-6 xl:bottom-24 ">
        <p className="text-base md:text-4xl font-bold text-white">
          Unlock Your Natural Glow{" "}
        </p>
        <button className="border-2 border-white text-white px-12 py-2 mt-6">
          Know More
        </button>
      </div>
      <div className="absolute bottom-[-28px] w-full">
        <ul className="flex justify-center mt-7">
          <li className="w-6 h-1 bg-[#A10550] border border-[#fa58a6] mx-1"></li>
          <li className="w-6 h-1 bg-[#cbcbcb] mx-1"></li>
          <li className="w-6 h-1 bg-[#cbcbcb] mx-1"></li>
        </ul>
      </div>
      <div className="absolute bg-[rgba(12,12,12,0.4)] hidden  right-0 top-0 h-full w-20 md:flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <div className="absolute bg-[rgba(12,12,12,0.4)] hidden left-0 top-0 h-full w-20 md:flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
}
