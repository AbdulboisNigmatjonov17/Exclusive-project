"use client"
import { Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import Image from 'next/image'
import React, { useState } from 'react'

export default function Employees() {
  const [activeDot, setActiveDot] = useState(0);
  return (
    <div className='py-10 flex flex-col gap-10'>
      <div className='flex gap-7'>
        {[{ img: "/TomCruise.png", name: "Tom Cruise", job: "Founder & Chairman" },
        { img: "/EmmaWatson.png", name: "Tom Cruise", job: "Founder & Chairman" },
        { img: "/WillSmith.png", name: "Tom Cruise", job: "Founder & Chairman" },
        ].map((item, index) => (
          <div key={index} className='flex flex-col gap-8'>
            <div className='overflow-hidden'>
              <Image src={item.img} alt={`${item.name} image`} width={370} height={430} className='w-auto h-auto bg-[rgba(245,_245,_245,_1)] transition ease-in-out hover:scale-110' />
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-3xl leading-8 font-medium'>{item.name}</h2>
              <span className='text-[16px] font-normal leading-6'>{item.job}</span>
              <div className='flex gap-4'>
                <Twitter />
                <Instagram />
                <LinkedIn />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full py-3 flex gap-3 justify-center'>
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            onClick={() => setActiveDot(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${activeDot === index ? "bg-[#DB4444] border-[2px]" : "bg-[rgba(0,_0,_0,_1)] opacity-30"}`}
          ></button>
        ))}
      </div>
    </div>
  )
}
