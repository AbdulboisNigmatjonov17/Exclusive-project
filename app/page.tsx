"use client"
import Card from '@/components/cards/Card'
import Hero from '@/components/hero/Hero'
import { CardsData } from '@/helpers/CardsData'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {CardsData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </>
  )
}