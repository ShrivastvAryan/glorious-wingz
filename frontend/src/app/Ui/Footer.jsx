import React from 'react'
import Link from 'next/link'
import { Youtube,Mail,Instagram } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {

  const footerElement=[
    {
      name:"Home",
      link:"/"
    },
    {
      name:"Events",
      link:"/"
    },
     {
      name:"Contact",
      link:"/"
    },
     {
      name:"About",
      link:"/"
    },
  ]
  return (
    <div className='mt-20'>

      {/*<div className='w-[70vw] mx-auto h-[2px] bg-[#962528] mt-24'></div>*/}
      <div className='mt-5 mx-auto relative w-full flex items-center justify-center'>
        <Image className='object-cover' src='/logo.jpg' width={100} height={100}/>
      </div>

      <div className='w-full flex justify-center items-center my-12'>
      <div className='flex gap-8'>
        {footerElement.map((element,index)=>(
          <Link key={index} href={element.link} className='hover:text-[#962528] font-semibold'>
          <p>{element.name}</p>
          </Link>
        ))}
      </div>
      </div>

      <div className='w-full flex justify-around pt-10 font-semibold'>

        <div className='flex flex-col gap-1'>
          <div className='text-xl'>Contact Us</div>

          <div className='pt-4'>
          <p>+91 99535XXXX</p>
          <p>abcd@gmail.com</p>
          </div>
        </div>

         <div className='flex flex-col gap-1'>
          <div className='text-xl'>Working Hours</div>

          <div className='pt-4'>
          <p>8:00AM - 8:00PM</p>
          
          </div>
        </div>

      </div>

      <div className='w-full flex justify-center items-center gap-6 pt-14 text-xl'>

        <Youtube />
        <Instagram />
        <Mail />
      </div>

      <p className='text-center py-10 text-sm'>
         © 2025 Gloriouz Events. All rights reserved
      </p>

    </div>
  )
}

export default Footer