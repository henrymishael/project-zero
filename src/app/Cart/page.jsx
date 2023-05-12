import Link from 'next/link'
import React from 'react'
import {FiChevronLeft} from "react-icons/fi";
import { MdOutlineSwipeLeft } from "react-icons/md";
import foodList from '@corporatenerd/app/Homepage/food'
import Image from 'next/image';
import basmatic from '/public/special.png'


export default function page() {
    return(

    <>
        <div key={foodList.foodItems.id}className='flex flex-row w-[186px] justify-between ml-[50px] pt-[60px] text-[24px]'>
        <Link href={`./details/${foodList.foodItems.slug}`}><FiChevronLeft/></Link>
        <h1 className=' mt-[-2px] font-semibold text-[18px]'>Cart</h1>
        </div>
        <div className='flex flex-row justify-center mt-[55px]'>
            <span className='text-[20px] -rotate-45'><MdOutlineSwipeLeft/></span>
            <h2 className='text-[10px]'>Swipe on an item to delete</h2>
        </div>
        <div className='w-[314px] h-[102px] bg-white m-auto mt-[18px] rounded-[20px] flex flex-row '>
            <div className='align-middle translate-y-[15%] pl-[16px]'>
                <Image src={basmatic} alt='' width='70' height='70' />
            </div>
            <div className=' text-center text-[17px] font-semibold translate-y-[20%]'>
                <h2>Special Basma...</h2>
                <h2 className='text-[#ffc83a] mt-0.5'>₦3,000</h2>
            </div>
        </div>
        <div></div>
    </>
  
    )
}
