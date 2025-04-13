"use client"
import React, { useEffect, useState } from 'react'
import Title from '../title/Title'
import { CardsData } from '@/helpers/CardsData';
import Card from './Card';

export default function RelatedItem() {
    const [randomCards, setRandomCards] = useState<typeof CardsData>([]);

    useEffect(() => {
        const shuffled = [...CardsData].sort(() => 0.5 - Math.random());
        setRandomCards(shuffled.slice(0, 4));
    }, []);
    return (
        <div className='my-10'>
            <Title content='Related Item' title='' />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {randomCards.map((item) => (
                    <Card card={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}
