"use client"
import Banner from '@/components/banner/Banner'
import BestSelling from '@/components/cards/BestSelling'
import CategoryCards from '@/components/cards/CategoryCards'
import FlashSales from '@/components/cards/FlashSale'
import Hero from '@/components/hero/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <FlashSales />
      <hr className='opacity-30 my-20' />
      <CategoryCards />
      <hr className='opacity-30 my-20' />
      <BestSelling />
      <Banner />
    </>
  )
}