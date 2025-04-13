import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <form className='max-w-[370px] w-full max-h-full flex items-end'>
      <div className='w-full h-[530px] flex flex-col gap-10'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-4xl font-medium leading-7 tracking-[4%]'>Log in to Exclusive</h1>
          <h4 className='font-normal text-[16px] leading-6'>Enter your details below</h4>
        </div>
        <div className='flex flex-col gap-10'>
          <input type="email" name='email' required placeholder='Email adress' className='h-8 outline-none border-b-[2px] border-[rgba(0,_0,_0,_0.3)] focus:border-[rgba(0,_0,_0,_1)]' />
          <input type="password" name='password' required placeholder='Password' className='h-8 outline-none border-b-[2px] border-[rgba(0,_0,_0,_0.3)] focus:border-[rgba(0,_0,_0,_1)]' />
        </div>
        <div className='flex justify-between gap-4'>
          <button type='submit' className='w-full h-[55px] rounded-sm flex justify-center items-center bg-[#DB4444] text-white cursor-pointer hover:bg-[#aa4949]'>Login</button>
          <button type='submit' className='w-full h-[55px] text-red-600 font-normal text-[16px] leading-6'><Link href={'/register'} className='hover:font-semibold'>Forget Password?</Link></button>
        </div>
      </div>
    </form>
  )
}
