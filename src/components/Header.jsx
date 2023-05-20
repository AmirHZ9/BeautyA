import React, { useState } from "react";
import ResponsiveHamburgerMenu from "./ResponsiveHamburgerMenu";
import logo from "../assets/Logo.png";
export default function Header() {
  const [show, setShow] = useState(false);
  const menuHandler = (event) => {
    console.log(event);
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
    console.log(show);
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-30 pt-14 pb-6 px-5 xl:px-28 flex justify-between items-center">
      <div className="xl:hidden ">
        <ul className="flex">
          <li
            className="px-3 cursor-pointer"
            name="hMenu"
            onClick={menuHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ${show ? "hidden" : "block"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ${show ? "block" : "hidden"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </li>
        </ul>
      </div>
      <div>
        <img src={logo} alt="beautyA" />
      </div>
      <div className="hidden xl:block  ">
        <ul className="flex">
          <li className="px-10 text-grayText font-bold text-base">
            Women Make Up
          </li>
          <li className="px-10 text-grayText font-bold text-base">
            Women Skincare
          </li>
          <li className="px-10 text-grayText font-bold text-base">
            Gifs & Sets
          </li>
          <li className="px-10 text-grayText font-bold text-base">Branches</li>
          <li className="px-10 text-grayText font-bold text-base">Our Brand</li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center">
          <li className="pad-1 m-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </li>
          <li className="w-px h-6 bg-grayBorder "></li>
          <li className="m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </li>
          <li className="text-base text-[#0c0c0c]">
            US<span className="text-sm text-[#606060]">(EN)</span>
          </li>
        </ul>
      </div>
      {show ? <ResponsiveHamburgerMenu /> : ""}
    </div>
  );
}
