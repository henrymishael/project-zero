import Image from 'next/image'
import React from 'react'
import logo from '/public/logonew.png'
import Link from 'next/link'

export default function page() {
  return (
    <>
    <div className=' bg-white  rounded-b-[30px] shadow-lg h-[329px] '>
      <div className='flex justify-center pt-20'>
        <Image src={logo} alt='my logo'/>
      </div>
      <div className='flex flex-row justify-around pt-[112px] font-semibold text-[18px]'>
        <div>
          <Link href='./Account/Login'>
          <button className='w-[150px] h-[60px] '>Login</button>
          </Link>
        </div>
        <div>
        <Link href='./Account/Signup'>
        <button className='w-[150px] h-[60px] border-b-4 border-[#ffc83a]'>Sign-up</button>
        </Link>
        </div>
      </div>
    </div>
    <div className=''>
    <div className='flex flex-col mt-[55px] items-center text-gray-400'>
      <div className='flex flex-col w-[314px] h-[59px]  '>
        <label className='text-[15px] pb-[10px]' for='name' id='name'>Full Name</label> 
        <input className='text-black text-[17px] border-b-[0.5px] border-black outline-none  bg-transparent ' type="text" for='name' id='name' /> <br/>
      </div>  
      <div className='flex flex-col w-[314px] h-[59px] pt-[36px]  '>
        <label className='text-[15px] pb-[10px]' for='Email' id='Email'>Email address</label> 
        <input className='text-black text-[17px] border-b-[0.5px] border-black outline-none  bg-transparent ' type="text" for='Email' id='Email' /> <br/>
      </div>
      <div className='flex flex-col w-[314px] h-[59px] pt-[76px]'>
        <label className='text-[15px] pb-[10px]' for='pass' id='pass'>Password </label> 
        <input className='text-black text-[17px] border-b-[0.5px] border-black outline-none  bg-transparent' type="text" for='pass' id='pass' />
      </div>
    </div>
    <div className='flex flex-col mt-[90px] w-[314px] m-auto justify-center'>
    <div className='text-black flex font-semibold  text-[17px] '>
        <h3>Already have an account?
          <Link href='./Account/Login'>
          <span className='text-[#ff0000]'> Login</span>
          </Link>
        </h3>
    </div>
      
      <div className='flex justify-center pt-[90px] text-white'>
            <Link href='./Homepage/Food'>
              <button className='  w-[314px] h-[70px]   rounded-[30px] bg-[#ffc83a] hover:bg-white hover:text-[#ffc83a] hover:border-[#ffc83a]  hover:border-2'>Sign up</button>
            </Link>
          </div>
    </div>
    </div>
     
    
      
    </>
  )
}
