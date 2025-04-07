'use client';
import { FooterData } from '@/helpers/Footer'
import { Facebook, Instagram, LinkedIn, Send, Twitter } from '@mui/icons-material'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-black'>
      <div className='Container flex flex-wrap justify-between text-white py-[60px]'>
        <div className='w-[215px] flex flex-col gap-4'>
          <h2 className='font-bold text-2xl'>Exclusive</h2>
          <h3 className='font-medium text-[20px] leading-[28px]'>Subscribe</h3>
          <h4 className='text-[16px] text-[#FAFAFA] font-normal leading-[24px]'>Get 10% off your first order</h4>
          <form className='w-full border-[1.5px] border-[#FAFAFA] rounded-sm py-3 px-4 flex gap-8'>
            <input type="email" required placeholder='Enter your email' className='w-full outline-none' />
            <button type="submit" aria-label="Submit">
              <Send className='cursor-pointer' />
            </button>
          </form>
        </div>
        {
          FooterData.map((item) => (
            <ul key={item.id} className='w-[175px] flex flex-col gap-4'>
              <h3 className='font-medium text-[20px] leading-[28px]'>{item.h3}</h3>
              <li className='text-[16px] text-[#FAFAFA] font-normal leading-[24px]'>{item.li1}</li>
              <li className='text-[16px] text-[#FAFAFA] font-normal leading-[24px]'>{item.li2}</li>
              <li className='text-[16px] text-[#FAFAFA] font-normal leading-[24px]'>{item.li3}</li>
              <li className='text-[16px] text-[#FAFAFA] font-normal leading-[24px]'>{item.li4}</li>
              <li className='text-[16px] text-[#FAFAFA] font-normal leading-[24px]'>{item.li5}</li>
            </ul>
          ))
        }
        <div className='w-[215px] flex flex-col gap-4'>
          <h3 className='font-medium text-[20px] leading-[28px]'>Download App</h3>
          <p className='text-[#FAFAFA] font-medium text-[12px] leading-[18px] opacity-70'>Save $3 with App New User Only</p>
          <div className='flex gap-2.5'>
            <Image width={75} height={75} src="/Qrcode.png" alt="qr code" className='w-auto h-auto' />
            <div className='flex flex-col justify-between'>
              <Image width={105} height={30} src="/GooglePlay.png" alt="google play" className='w-auto h-auto' />
              <Image width={105} height={30} src="/Appstore.png" alt="app store" className='w-auto h-auto' />
            </div>
          </div>
          <div className='w-full flex justify-between pr-[30px]'>
            <Facebook />
            <Twitter />
            <Instagram />
            <LinkedIn />
          </div>
        </div>
      </div>
      <hr className='text-white opacity-50' />
      <div className='w-full py-4 flex justify-center text-white opacity-40'>
        <small className='text-[16px] font-normal leading-6'>© Copyright Rimel 2022. All right reserved</small>
      </div>
    </footer>
  )
}
