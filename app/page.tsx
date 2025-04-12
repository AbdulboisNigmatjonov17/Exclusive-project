"use client"
import Banner from '@/components/banner/Banner'
import Boxes from '@/components/banner/Boxes'
import BestSelling from '@/components/cards/BestSelling'
import CategoryCards from '@/components/cards/CategoryCards'
import Explore from '@/components/cards/Explore'
import FlashSales from '@/components/cards/FlashSale'
import NewArrivel from '@/components/cards/NewArrivel'
import Hero from '@/components/hero/Hero'
import { BannerBottom } from '@/helpers/BannerBottom'

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
      <Explore />
      <NewArrivel />
      lolo
      <Boxes data={BannerBottom} />
    </>
  )
}