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
    };
}

interface ImagesProps {
    param: string | null;
}

export default function Images({ param }: ImagesProps) {
    const [data, setData] = useState<CardItem | null>(null);
    const [mainImage, setMainImage] = useState<string | null>(null);

    useEffect(() => {
        if (param) {
            const foundItem = CardsData.find((item) => String(item.id) === param);
            if (foundItem) {
                setData(foundItem);
                // Set initial main image
                setMainImage(foundItem.images.main);
            }
        }
    }, [param]);

    const handleThumbnailClick = (imgSrc: string) => {
        if (!data) return;

        // Save current main image to swap with clicked thumbnail
        const currentMain = mainImage || data.images.main;
        setMainImage(imgSrc);

        // Update the thumbnail to show previous main image
        if (imgSrc === data.images.one) {
            data.images.one = currentMain;
        } else if (imgSrc === data.images.two) {
            data.images.two = currentMain;
        } else if (imgSrc === data.images.thre) {
            data.images.thre = currentMain;
        } else if (imgSrc === data.images.four) {
            data.images.four = currentMain;
        }
    };

    if (!data) {
        return <div>Loading product images...</div>;
    }

    return (
        <div className="h-full flex gap-7">
            <div className='flex flex-col gap-4'>
                {[data.images.one, data.images.two, data.images.thre, data.images.four].map((src, index) => (
                    <div
                        key={index}
                        className='relative w-[170px] h-[140px] bg-[rgb(245,245,245)] cursor-pointer'
                        onClick={() => handleThumbnailClick(src)}
                    >
                        <div className='absolute inset-2 overflow-hidden'>
                            <Image
                                src={src}
                                alt={`product thumbnail ${index + 1}`}
                                fill
                                className='object-contain mix-blend-multiply'
                                style={{ backgroundColor: 'rgba(245,245,245,0.5)' }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative w-[500px] h-[600px] bg-[rgb(245,245,245)]">
                <div className='absolute inset-4 overflow-hidden'>
                    <Image
                        src={mainImage || data.images.main}
                        alt='main product image'
                        priority
                        fill
                        className='object-contain'
                    />
                </div>
            </div>
        </div>
    );
}