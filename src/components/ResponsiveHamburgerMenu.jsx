import React from 'react'

export default function ResponsiveHamburgerMenu() {
  return (
    <div className='fixed top-[120px] left-0 h-screen bg-white z-10 w-full md:w-1/2'>
        <ul className='mt-8'>
            <li className='border-y mx-12 px-2 py-[10px] font-semibold text-sm tracking-wider'>Women Make Up</li>
            <li className='border-y mx-12 px-2 py-[10px] font-semibold text-sm tracking-wider'>Women Skincare</li>
            <li className='border-y mx-12 px-2 py-[10px] font-semibold text-sm tracking-wider'>Gifts & sets</li>
            <li className='border-y mx-12 px-2 py-[10px] font-semibold text-sm tracking-wider'>Branches</li>
            <li className='border-y mx-12 px-2 py-[10px] font-semibold text-sm tracking-wider'>Our Brand</li>
        </ul>
    </div>
  )
}
