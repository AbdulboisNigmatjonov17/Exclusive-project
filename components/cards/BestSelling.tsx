"use client"
import { useEffect, useState } from 'react';
import Title from '../title/Title'
import { CardsData } from '@/helpers/CardsData';
import Card from './Card';

export default function BestSelling() {
    const [randomCards, setRandomCards] = useState<typeof CardsData>([]);

    useEffect(() => {
        const shuffled = [...CardsData].sort(() => 0.5 - Math.random());
        setRandomCards(shuffled.slice(0, 4));
    }, []);

    return (
        <div className='mb-20 w-full flex flex-col gap-14'>
            <div className='w-full flex justify-between items-end'>
                <Title content='This Month' title='Best Selling Products' />
                <button className='w-[160px] h-[55px] rounded-sm flex justify-center items-center bg-[#DB4444] text-white cursor-pointer hover:bg-[#aa4949]'>
                    View All
                </button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {randomCards.map((item) => (
                    <Card card={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}