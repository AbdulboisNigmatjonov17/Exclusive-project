import Boxes from '@/components/banner/Boxes'
import Employees from '@/components/employees/Employees'
import AboutHero from '@/components/hero/AboutHero'
import { AboutBoxes } from '@/helpers/AboutBoxes'
import { BannerBottom } from '@/helpers/BannerBottom'
import React from 'react'

export default function About() {
  return (
    <>
      <AboutHero />
      <Boxes data={AboutBoxes} />
      <Employees />
      <Boxes data={BannerBottom} />
    </>
  )
}
