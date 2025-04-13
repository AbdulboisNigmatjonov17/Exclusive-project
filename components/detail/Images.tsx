"use client";
import { CardsData } from '@/helpers/CardsData';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface CardItem {
    id: string | number;
    images: {
        main: string;
        one: string;
        two: string;
        thre: string;
        four: string;
        // Add other image properties if available
    };
    // Add other card properties if needed
}

interface ImagesProps {
    param: string | null;
}

export default function Images({ param }: ImagesProps) {
    const [data, setData] = useState<CardItem | null>(null);

    useEffect(() => {
        if (param) {
            const foundItem = CardsData.find((item) => String(item.id) === param);
            if (foundItem) {
                setData(foundItem);
            }
        }
    }, [param]);

    if (!data) {
        return <div>Loading product images...</div>;
    }

    return (
        <div className="h-full flex gap-7">
            <div className='flex flex-col gap-4'>
                <Image src={data.images.one} alt='product image' priority width={170} height={140} className='w-auto h-auto' />
                <Image src={data.images.two} alt='product image' priority width={170} height={140} className='w-auto h-auto' />
                <Image src={data.images.thre} alt='product image' priority width={170} height={140} className='w-auto h-auto' />
                <Image src={data.images.four} alt='product image' priority width={170} height={140} className='w-auto h-auto' />
            </div>
            <div className="">
                <Image src={data.images.main} alt='product image' priority width={500} height={600} className='w-auto h-auto' />
            </div>
            {/* Add thumbnail gallery here if needed */}
        </div>
    );
}