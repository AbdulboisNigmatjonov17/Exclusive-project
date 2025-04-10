"use client"
import { ArrowForward } from '@mui/icons-material'
import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
    const [activeDot, setActiveDot] = useState(0);

    return (
        <section className="flex justify-between mb-20">
            <ul className='w-[217px] border-r-[0.5px] border-[rgba(0,_0,_0,_0.2)] pr-4 pt-10'>
                {
                    ["Woman’s Fashion", "Men’s Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby’s & Toys", "Groceries & Pets", "Health & Beauty",].map((item, index) => (
                        <li key={index} className='mb-4 font-medium text-[16px] leading-6'>{item}</li>
                    ))
                }
            </ul>
            <div className='max-w-[900px] bg-black text-white mt-10 ml-11'>
                <div className='w-full flex justify-between items-center'>
                    <div className='pl-16 flex flex-col gap-5'>
                        <div className='flex items-center gap-3.5'>
                            <Image src={'/AppleLogo.png'} alt='Apple Logo' width={40} height={50} priority className='w-auto h-auto' />
                            <h4>iPhone 14 Series</h4>
                        </div>
                        <h1 className='text-5xl font-semibold leading-[60px]'>Up to 10% off Voucher</h1>
                        <h3 className='underline underline-offset-4 text-[16px] font-medium leading-6'>Shop Now <ArrowForward /></h3>
                    </div>
                    <Image src={'/heroIphone.png'} alt='Hero Iphone' width={500} height={400} priority className='w-auto h-auto mt-4' />
                </div>
                <div className='w-full py-3 flex gap-3 justify-center'>
                    {[0, 1, 2, 3, 4].map((index) => (
                        <button
                            key={index}
                            onClick={() => setActiveDot(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer ${activeDot === index ? "bg-[#DB4444] border-[2px]" : "bg-white opacity-50"}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    )
}