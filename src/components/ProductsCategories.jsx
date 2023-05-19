import React from "react";
import gifts from "../assets/product categories/gifts image.png";
import makeup from "../assets/product categories/make up image.png";
import skincare from "../assets/product categories/skincare image.png";
import brand from "../assets/product categories/ourBrand.png";
import brandM from "../assets/product categories/BrandMobile.png";
export default function ProductsCategories() {
  return (
    <div>
      <h2 className="font-bold text-2xl  mt-20 mb-8 text-center">
        Products’ categories
      </h2>
      <div>
        <ul className="flex justify-center items-center font-semibold  text-sm md:text-lg md:font-normal">
          <li className="mx-5 mb-4 text text-center">
            <img src={makeup} alt="make up" />
            <p className="mt-4">Women Make Up</p>
          </li>
          <li className="mx-5 mb-2 text text-center">
            <img src={skincare} alt="skincare" />
            <p className="mt-4">Women Skincare</p>
          </li>
          <li className="mx-5 mb-2 text text-center">
            <img src={gifts} alt="gifts" />
            <p className="mt-4">Gifts & Sets</p>
          </li>
        </ul>
      </div>
      <div className="h-[193px] mb-16 lg:mx-[108px] flex  md:h-auto mt-14  bg-bgBanner relative">
        <div className="hidden text-white my-10 ml-[104px] mr-6 md:block  ">
          <p className="mb-2 font-bold text-2xl ">Our Brand</p>
          <p className=" leading-7 ">
            We believe that beauty thrives in diversity and discovery. Our
            purpose is to expand the way the world sees beauty by empowering the
            Extraordinary in each of us.
          </p>
          <button className="border px-9 py-2 mt-2">Discover More</button>
        </div>
        <div className=" text-white my-10   md:hidden flex w-full justify-center">
          <p className="mb-2 font-bold text-2xl absolute top-4  text-center">Our Brand</p>
          <div className="absolute top-[278px] flex flex-col justify-center items-center">
            <p className=" leading-7 text-black px-5 mb-3 text-justify">
              We believe that beauty thrives in diversity and discovery. Our
              purpose is to expand the way the world sees beauty by empowering
              the Extraordinary in each of us.
            </p>
            <button className="border border-black text-black px-9  py-2 mt-2">
              Discover More
            </button>
          </div>
        </div>
        <div className="absolute top-16 flex justify-center w-full md:relative md:block md:w-auto md:top-0">
          <img
            src={brand}
            alt="brandimg "
            className="hidden md:block md:h-full md:object-cover"
          />
          <img src={brandM} alt="BrandM" className="md:hidden" />
        </div>
      </div>
    </div>
  );
}
