import React from "react";
import product1 from "../assets/Sellers/product1.png";
import product2 from "../assets/Sellers/product2.png";
import product3 from "../assets/Sellers/product3.png";
import product4 from "../assets/Sellers/product4.png";
export default function BestSellers() {
  return (
    <div className="mt-60 md:mt-0">
      <h1 className="w-full text-center text-black font-bold text-2xl mb-8">Our Best Sellers</h1>
      <div>
        <ul className="flex justify-center flex-wrap">
          <li className="mx-4  mb-4 border w-[288px]  border-[#DFDFDF]">
            <img src={product1} alt="product" />
            <div className="mx-4 mb-4 mt-6 ">
            <p className="text-primary font-bold">Beautya Capture Total Dreamskin Care & Perfect</p>
            <p className="text-black text-sx my-2">Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration</p>
            <span className="text-lg">$76.00</span>

            </div>
          </li>
          <li className="mx-4 mb-4 border w-[288px]  border-[#DFDFDF]">
            <img src={product2} alt="product" />
            <div className="mx-4 mb-4 mt-6 ">
            <p className="text-primary font-bold">Beautya Capture Total Dreamskin Care & Perfect</p>
            <p className="text-black text-sx my-2">Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration</p>
            <span className="text-lg">$76.00</span>

            </div>
          </li>
          <li className="mx-4 mb-4 border  w-[288px] border-[#DFDFDF]">
            <img src={product3} alt="product" />
            <div className="mx-4  mb-4 mt-6 ">
            <p className="text-primary font-bold">Beautya Capture Total Dreamskin Care & Perfect</p>
            <p className="text-black text-sx my-2">Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration</p>
            <span className="text-lg">$76.00</span>

            </div>
          </li>
          <li className="mx-4 mb-4  border  w-[288px] border-[#DFDFDF]">
            <img src={product4} alt="product" />
            <div className="mx-4 mb-4 mt-6 ">
            <p className="text-primary font-bold">Beautya Capture Total Dreamskin Care & Perfect</p>
            <p className="text-black text-sx my-2">Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration</p>
            <span className="text-lg">$76.00</span>

            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
