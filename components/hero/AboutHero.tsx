import Image from 'next/image'
import React from 'react'

export default function AboutHero() {
    return (
        <div className='my-10 flex gap-16 items-center'>
            <div className='max-w-[525px] w-full flex flex-col gap-6'>
                <h1 className='text-[54px] font-semibold leading-16 tracking-[6%]'>Our Story</h1>
                <p className='font-normal text-[16px] leading-[26px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <p className='font-normal text-[16px] leading-[26px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <div className='overflow-hidden'>
                <Image src={'/AboutHero.png'} alt='About Hero image' width={700} height={600} priority className='w-auto h-auto transition delay-200 ease-in-out hover:scale-125' />
            </div>
        </div>
    )
}
