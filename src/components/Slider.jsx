import React from 'react'
import slider from "../assets/Banner.jpeg"
export default function Slider() {
  return (
    <div className='relative'>
        <img src={slider} alt="slider" />
        <div className='absolute  bg-bgSlider w-full h-full top-0' ></div>
        <div  className='absolute w-full flex flex-col items-center bottom-6 xl:bottom-24 '>
            <p className='text-base md:text-4xl font-bold text-white'>Unlock Your Natural Glow </p>
            <button className='border-2 border-white text-white px-12 py-2 mt-6'>Know More</button>
        </div>
    </div>
  )
}
