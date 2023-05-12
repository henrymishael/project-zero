import React from 'react'
import logo from '/public/logonew.png'
import pizza from '/public/burger.png'
import burger from '/public/pizza.png'
import boy from '/public/boy.png'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    
      
      <>
        <div className='mt-[20px] h-[896px] w-[414px] border-solid border-2  bg-[#ffc83a]  '>
          <div>
            <Image className='mt-[70px] ml-[42px]' src={logo} alt='my-logo' height='200' width='200'/>
            <h1 className='size text-5xl font-cabin text-white font-bold ml-[58px] mt-[15px]'> Food for <br/>Everyone</h1>
          </div>
          <div className='flex flex-row     h-[auto] w-[auto] mt-[80px]'>
            <div className='flex pt-20 flex-col'>
              <div>
                <Image src={burger} alt='pizza-slice' height='119' width='131'/>
              </div>
              <div className='pl-2'>
                <Image src={pizza} alt='pizza-slice' height='124' width='155'/>
              </div>
            </div>
            <div className=' flex'>
            <Image src={boy} alt='pizza-slice' height='395' width='241'/>
            </div>
          </div>
          
          <div className='flex justify-center mt-10 text-[#ffc83a]'>
            <Link href='./Account/Login'>
              <button className='w-[314px] h-[70px]   rounded-[30px] bg-white hover:bg-[#ffc83a] hover:text-white hover:border-white hover:border-2    '>Get Started</button>
            </Link>
          </div>
        
        </div>
      </>
  
  
  )
}
