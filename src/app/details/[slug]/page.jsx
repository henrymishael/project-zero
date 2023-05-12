'use client';

import Image from 'next/image';
import React from 'react'
import {FiChevronLeft} from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useParams, useRouter } from 'next/navigation';
import foodList from '@corporatenerd/app/Homepage/food';
import Link from 'next/link';

const productDetails = ({params}) => {

  const router = useParams();

  const {slug} = params;
  const product = foodList.foodItems.find(x => x.slug === slug);
  if (!product){
    return (
      <div>
        Not Found
      </div>
    )
  }
return(
  <>
   
    <div key={product.id} className='bg-white h-[100%]'>
      <div className='pt-[65px] h-auto text-2xl flex flex-row  justify-between w-[314px]  m-auto'> 
          <Link href='./Homepage/Food'><FiChevronLeft/></Link>
          <MdOutlineFavoriteBorder/>
      </div>
      <div className=' w-[241px] h-[241px] m-auto mt-[24px]'>
          <Image src={product.image} alt='' width='235px' height='235px' />
      </div>
      <div className='flex flex-col items-center m-auto text-center  mt-[24px] w-[254px]'>
        <p className='text-[24px] font-semibold'>{product.name}</p>
        <p className='text-[18px] font-bold pt-3 text-[#ffc83a]'>{product.price}</p>
      </div>
      <div className=' w-[314px] mt-[24px] m-auto border-b-2 border-black '>
        <h2 className='text-[15px] font-semibold'>Rating 5.0 {product.rating}</h2>
      </div>
      <div className='w-[314px] text-[15px] mt-3 m-auto text-[#727272]'>
        <div>
          <h2 className='text-[17px] text-black font-semibold' >Delivery Info</h2>
          <p>Delivered between monday May and thursday 20 from 8pm to 8:32 pm</p>
        </div>
        <div className='mt-[36px]'>
          <h2 className='text-[17px] text-black font-semibold'>Return Policy</h2>
          <p>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</p>
        </div>
      </div>
      <div className='flex justify-center mt-[30px] text-white'>
            <Link href='./Cart'>
              <button className='  w-[314px] h-[70px]   rounded-[30px] bg-[#ffc83a] hover:bg-white hover:text-[#ffc83a] hover:border-[#ffc83a]  hover:border-2'>Add to Cart</button>
            </Link>

      </div>
    </div>

  </>
  );
};
export default productDetails;