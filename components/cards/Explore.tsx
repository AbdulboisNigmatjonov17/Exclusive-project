"use client"
import React, { useEffect, useRef, useState } from 'react'
import Title from '../title/Title'
import { CardsData } from '@/helpers/CardsData';
import Flicking from "@egjs/react-flicking";
import "@egjs/flicking/dist/flicking.css";
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import Card from './Card';
import Button from '../btn/Button';

export default function Explore() {
    const [firstRowCards, setFirstRowCards] = useState<typeof CardsData>([]);
    const [secondRowCards, setSecondRowCards] = useState<typeof CardsData>([]);
    const [isAnimating, setIsAnimating] = useState(false);
    const flickingRef = useRef<Flicking | null>(null);

    useEffect(() => {
        const shuffled = [...CardsData].sort(() => 0.5 - Math.random());
        setFirstRowCards(shuffled.slice(0, 5));
        setSecondRowCards(shuffled.slice(5, 9));
    }, []);

    const handleNext = async () => {
        if (isAnimating || !flickingRef.current) return;

        try {
            setIsAnimating(true);
            await flickingRef.current.next();
        } catch (error) {
            console.error("Navigation error:", error);
        } finally {
            setIsAnimating(false);
        }
    };

    const handlePrev = async () => {
        if (isAnimating || !flickingRef.current) return;

        try {
            setIsAnimating(true);
            await flickingRef.current.prev();
        } catch (error) {
            console.error("Navigation error:", error);
        } finally {
            setIsAnimating(false);
        }
    };

    return (
        <div className='w-full my-20 flex flex-col gap-14'>
            <div className='flex items-end justify-between'>
                <Title content='Our Products' title='Explore Our Products' />
                <div className="flex gap-2">
                    <button
                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
                        onClick={handlePrev}
                    >
                        <ArrowBack fontSize={'large'} />
                    </button>
                    <button
                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
                        onClick={handleNext}
                    >
                        <ArrowForward fontSize={'large'} />
                    </button>
                </div>
            </div>
            <div className='w-full relative'>
                <Flicking
                    ref={flickingRef}
                    circular={true}
                    gap={10}
                    panelsPerView={4}
                    align={'center'}
                    moveType="freeScroll"
                    breakpoints={{
                        "640": { panelsPerView: 1 },
                        "768": { panelsPerView: 2 },
                        "1024": { panelsPerView: 3 },
                        "1280": { panelsPerView: 4 }
                    }}
                    className="w-full py-4"
                >
                    {firstRowCards.map((item) => (
                        <div key={item.id} className="w-[280px] mx-2">
                            <Card card={item} />
                        </div>
                    ))}
                </Flicking>
            </div>
            <div className='grid grid-cols-4 gap-6'>
                {secondRowCards.map((item) => (
                    <Card card={item} key={item.id} />
                ))}
            </div>
            <div className='w-full flex justify-center'>
                <Button />
            </div>
        </div>
    )
}
