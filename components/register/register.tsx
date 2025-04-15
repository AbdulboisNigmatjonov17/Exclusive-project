import React from 'react'
import Link from 'next/link'

export default function Register() {
  return (
    <div className='Container pt-[80px] pb-[140px]'>
      <div className='flex items-center justify-between gap-3'>
        <div className='flex items-center gap-3'>
          <Link href="/" className='font-normal text-sm leading-5 text-[rgba(0,0,0,0.5)]'>Home</Link>
          <span className='text-[14px]'>/</span>
          <h1 className='font-normal text-[14px] leading-5 text-[rgba(0,0,0,1)]'>My Account</h1>
        </div>
        <h1 className='text-sm font-normal leading-5'>
          Welcome! <span className='text-[#DB4444]'>Md Rimel</span>
        </h1>
      </div>
      <div className='flex items-start mt-20 gap-10'>
        <div>
          <h1 className='font-medium text-base leading-6'>Manage My Account</h1>
          <h2 className="font-normal text-base leading-6 text-[#DB4444] pt-4 pl-9">My Profile</h2>
          <h2 className='font-normal text-base leading-6 text-[rgba(0,0,0,0.5)] pt-4 pl-9'>Address Book</h2>
          <h2 className='font-normal text-base leading-6 text-[rgba(0,0,0,0.5)] pt-4 pl-9'>My Payment Options</h2>
          <h1 className='font-medium text-base leading-6 pt-6'>My Orders</h1>
          <h2 className='font-normal text-base leading-6 text-[rgba(0,0,0,0.5)] pt-4 pl-9'>My Returns</h2>
          <h2 className='font-normal text-base leading-6 text-[rgba(0,0,0,0.5)] pt-4 pl-9'>My Cancellations</h2>
          <h2 className='font-medium text-base leading-6 pt-4'>My WishList</h2>
        </div>

        <div className='border-2 border-[rgba(0,0,0,0.05)] w-[870px] h-[630px] rounded-[4px] py-10 px-20'>
          <div className="flex items-center">
            <h1 className='font-medium text-[20px] leading-7 text-[#DB4444]'>Edit Your Profile</h1>
          </div>

          <div className='grid grid-cols-2'>
            <label className='flex flex-col mt-4'>
              First Name
              <input
                className='mt-3 pl-4 rounded-[4px] w-[330px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                type="text"
                placeholder='Md'
              />
            </label>
            <label className='flex flex-col mt-4'>
              Last Name
              <input
                className='mt-3 pl-4 rounded-[4px] w-[330px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                type="text"
                placeholder='Rimel'
              />
            </label>
            <label className='flex flex-col mt-4'>
              Email
              <input
                className='mt-3 pl-4 rounded-[4px] w-[330px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                type="email"
                placeholder='rimel1111@gmail.com'
              />
            </label>
            <label className='flex flex-col mt-4'>
              Address
              <input
                className='mt-3 pl-4 rounded-[4px] w-[330px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                type="text"
                placeholder='Kingston, 5236, United State'
              />
            </label>
          </div>
          <div>
            <h1 className='font-normal text-base leading-6 mt-6'>Password Changes</h1>
              <input
                className='mt-2 pl-4 rounded-[4px] w-[710px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                type="text"
                placeholder='Current Passwod'
              />
              <input
                className='mt-7 pl-4 rounded-[4px] w-[710px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                type="text"
                placeholder='New Passwod'
              />
              <input
                className='mt-7 pl-4 rounded-[4px] w-[710px] h-[50px] bg-[rgba(245,245,245,0.9)]'
                type="text"
                placeholder='Confirm New Passwod'
              />
          </div>
          <div className='text-end'>
          <button className='pr-8'>Cancel</button>
          <button className="bg-[rgba(219,68,68,1)] py-4 px-12 rounded-[4px] text-white font-medium text-base mt-6 cursor-pointer">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}
