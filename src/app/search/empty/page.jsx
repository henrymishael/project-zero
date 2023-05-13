

import React from 'react'
import {FiChevronLeft} from "react-icons/fi";
import {RiSearchLine} from "react-icons/ri";
import Link from 'next/link';

export default function page() {
  return (
    <div className='h-[100%] bg-white pt-[60px] '>
        <div className='flex flex-row'>
            <div className='text-2xl 
                 pt-4 pl-[40px]'>
                <Link href='./Homepage/Food'><FiChevronLeft/></Link>
            </div>
            <div className='flex flex-row items-center  w-[256px] bg-transparent rounded-[30px]  m-auto'>
                <span className=' text-[#727272] pl-5 flex text-2xl pr-3'><RiSearchLine/></span>
                <input  className='bg-transparent h-[60px]  outline-none border-none placeholder:text-[14px]' type='text' placeholder='Search' />
            </div>
        </div>
        <div className='flex flex-col pt-[190px] items-center '>
            <span className='text-[122px] text-[#c7c7c7]'><RiSearchLine/></span>
            <h2 className='text-[28px] font-semibold pt-[20px] leading-none'>Item not found</h2>
            <h3 className='text-[17px] text-center pt-[16px] leading-[1.2em] '>Try searching the item with<br/>
            a different keyword</h3>
        </div>
        
    </div>
  )
}
