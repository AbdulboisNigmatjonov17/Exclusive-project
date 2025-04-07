'use client';
import { FavoriteBorder, PersonOutlineOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='Container h-[10dvh] flex justify-between'>
      <div className='w-[645px] flex justify-between items-center'>
        <Link href={'/'}>
          <Image width={120} height={25} src="/Logo.svg" alt="Exclusive Logo" className='w-auto h-auto' />
        </Link>
        <ul className='flex gap-[48px]'>
          <li>
            <Link href={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link href={'/contact'}>
              Contact
            </Link>
          </li>
          <li>
            <Link href={'/about'}>
              About
            </Link>
          </li>
          <li>
            <Link href={'/register'}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
      <div className='w-[395px] flex justify-between items-center'>
        <form className='w-[245px] bg-[#F5F5F5] flex justify-between py-2 px-3 rounded-[4px]'>
          <input type="text" placeholder='What are you looking for?' className='w-full outline-none' />
          <Search />
        </form>
        <Link href={'/wishlist'}>
          <FavoriteBorder />
        </Link>
        <Link href={'/cart'}>
          <ShoppingCartOutlined />
        </Link>
        <Link href={'/account'}>
          <PersonOutlineOutlined />
        </Link>
      </div>
    </nav>
  )
}
