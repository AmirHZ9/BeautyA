import React from 'react'
import barcode from "../assets/virtual/barcod.png"
import banner from "../assets/virtual/image1.png"
export default function SkincareAnanlsis() {
  return (
    <div className='flex flex-col-reverse xl:flex-row justify-between m-auto mt-14 w-6/12 xl:w-auto bg-pink xl:bg-newbg text-white xl:mx-[108px]'>
        
        <div className='mt-7 xl:ml-[104px] text-black xl:text-white mx-4 xl:mr-4 mb-7'>
            <h1 className='font-bold text-2xl hidden xl:block'>NEW Virtual Skincare Analysis</h1>
            <p className='text-sm'>Looking for a full skincare routine? Our NEW Virtual Skincare Analysis Tool evaluates your skin and provides the most personalized recommendations. </p>
            <div className='flex justify-between mt-2'>
                <div className='flex justify-center w-full mt-4 xl:block xl:w-auto xl:mt-0'>
                    <p className='font-bold  hidden xl:block mb-4'>Scan with your phone to get started</p>
                    <span className='texxt-sm hidden xl:block'>Or</span> <br />
                   

                    <button className='text-white bg-primary xl:border-2 xl:border-white xl:bg-transparent px-4 py-2'>answer the Questionnaire</button>
                    <button className='border-white xl:bg-transparent px-4 py-2 xl:hidden text-primary'>take a selfie</button>
                   
                </div>
                    <img src={barcode} alt="barcode"  className='hidden xl:block'/>
                </div>
       </div>
        <div>
        <h1 className='font-bold text-2xl text-center text-black xl:hidden mt-3 mb-4'>NEW Virtual Skincare Analysis</h1>

            <img src={banner} alt="banner" className='h-full w-full object-cover'/>
        </div>
    </div>
  )
}
