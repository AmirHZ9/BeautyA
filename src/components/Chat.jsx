import React, { useEffect, useState } from "react";

export default function Chat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 500) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
 
  });
  const goToTop = ()=>{
    window.scrollTo({top:0,behavior:"smooth"}) 

  }
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end">
      <button
        onClick={goToTop}
        className={`bg-white py-3 px-4 mb-4 border-2 border-[#79043c] ${
          show ? "block" : "hidden"
        }`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12L5.41 13.41L11 7.83V20H13V7.83L18.58 13.42L20 12L12 4L4 12Z"
            fill="#A10550"
          />
        </svg>
      </button>
      <button className=" bg-[#79043c] px-4 py-2 flex items center text-white">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L18 2V14L3.17 14L2 15.17L2 2ZM2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0L2 0ZM4 10H12V12H4L4 10ZM4 7L16 7V9H4V7ZM4 4L16 4V6L4 6L4 4Z"
            fill="white"
          />
        </svg>
        <span className="ml-2 hidden sm:inline-block">Online Chat</span>
      </button>
    </div>
  );
}
