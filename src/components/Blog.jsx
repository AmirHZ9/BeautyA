import React from "react";
import Blog1 from "../assets/blog/blog1.png"
import Blog2 from "../assets/blog/blog2.png"
import Blog3 from "../assets/blog/blog3.png"
export default function Blog() {
  return (
    <div className="mx-[108px]">
      <h1 className="font-bold text-2xl w-full text-center mt-14 mb-8">Our Blog</h1>
      <div>
        <ul className="flex justify-center items-center">
          <li className="mr-6 border border-[#dfdfdf] hidden xl:block">
            <img src={Blog1} alt="blogimg" className="w-full object-cover" />

            <div  className="m-6">
                <p className="font-bold text-xl mb-2 ">How to get clear skin fast</p>
                <ul className="font-semibold text-xs text-grayblog flex mb-4">
                    <li className="pr-2 border-r border-grayblog ">Skincare</li>
                    <li className="px-2 border-r border-grayblog ">Dr. Wade Warren</li>
                    <li className="px-2 ">Jan 20, 2021</li>
                </ul>
                <p>Many people find it difficult to get clear skin. The methods for getting clear skin will vary,</p>
            </div>
          </li>
          <li className="mr-6 border border-[#dfdfdf] hidden xl:block">
            <img src={Blog2} alt="blogimg" className="w-full object-cover"/>
            <div className="m-6">
            <p className="font-bold text-xl mb-2  ">How to get clear skin fast</p>
            <ul className="font-semibold text-xs text-grayblog flex mb-4">    
                <li className="pr-2 border-r border-grayblog ">Skincare</li>
                <li className="px-2 border-r border-grayblog ">Dr. Wade Warren</li>
                <li className="px-2 ">Jan 20, 2021</li>
                </ul>
            <p>Many people find it difficult to get clear skin. The methods for getting clear skin will vary,</p>

            </div>
          </li>
          <li className="mr-6 border border-[#dfdfdf]">
            <img src={Blog3} alt="blogimg" className="w-full object-cover"/>
            <div className="m-6">

            <p className="font-bold text-xl mb-2  ">How to get clear skin fast</p>
            <ul className="font-semibold text-xs text-grayblog flex mb-4">    
                <li className="pr-2 border-r border-grayblog ">Skincare</li>
                <li className="px-2 border-r border-grayblog ">Dr. Wade Warren</li>
                <li className="px-2 ">Jan 20, 2021</li>
                </ul>
            <p>Many people find it difficult to get clear skin. The methods for getting clear skin will vary,</p>
            </div>
          </li>
        </ul>
      </div>
      <div className=" ">
        <ul className="flex justify-center mt-7">
          <li className="w-6 h-1 bg-[#A10550] border border-[#fa58a6] mx-1"></li>
          <li className="w-6 h-1 bg-[#cbcbcb] mx-1"></li>
          <li className="w-6 h-1 bg-[#cbcbcb] mx-1"></li>
        </ul>
      </div>
    </div>
  );
}
