import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {FiChevronLeft} from "react-icons/fi";
import thumbs from '../../../public/image18.png'

export default function page() {
  return (
    <div className='h-[100%] bg-white pt-[60px] '>
        
        <div className='flex flex-row  '>
            <span className='text-[24px] font-semibold pl-[40px]'><FiChevronLeft/></span>
            <h2 className='text-[18px] font-semibold pl-[110px] '>Reviews</h2>
        </div>
        <div className='flex flex-col pt-[190px] items-center '>
            <Image src={thumbs} alt='' w='121' h='121'/>
           
            <h2 className='text-[28px] font-semibold pt-[38px] leading-none'>No Review yet</h2>
            
        </div>
        <div className='flex justify-center pt-[288px] text-white font-semibold text-[17px]'>
            <Link href='./Account/Login'>
              <button className='w-[314px] h-[70px]   rounded-[30px] bg-[#ffc83a] hover:bg-white hover:text-[#ffc83a] hover:border-[#ffc83a] hover:border-2    '>Start Ordering</button>
            </Link>
        </div>
    </div>
    
  )
}
