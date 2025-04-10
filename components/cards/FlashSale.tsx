"use client";

import { useState, useEffect, useRef } from 'react';
import Flicking from "@egjs/react-flicking";
import "@egjs/flicking/dist/flicking.css";
import { CardsData } from '@/helpers/CardsData';
import Card from './Card';
import Title from '../title/Title';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import Button from '../btn/Button';

export default function FlashSales() {
    const flickingRef = useRef<any>(null);
    const [currentProducts, setCurrentProducts] = useState<typeof CardsData[0][]>([]);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        initializeFlashSale();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    const initializeFlashSale = () => {
        const storedEndDate = localStorage.getItem('flashSaleEnd');
        const storedProducts = localStorage.getItem('flashSaleProducts');

        if (storedEndDate && storedProducts) {
            const endDate = new Date(storedEndDate);
            const now = new Date();

            if (now < endDate) {
                setCurrentProducts(JSON.parse(storedProducts));
                return;
            }
        }

        createNewFlashSale();
    };

    const createNewFlashSale = () => {
        const shuffled = [...CardsData].sort(() => 0.5 - Math.random());
        const selectedProducts = shuffled.slice(0, 5);
        const now = new Date();
        const endDate = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000);

        localStorage.setItem('flashSaleEnd', endDate.toString());
        localStorage.setItem('flashSaleProducts', JSON.stringify(selectedProducts));
        setCurrentProducts(selectedProducts);
    };

    const updateCountdown = () => {
        const endDateStr = localStorage.getItem('flashSaleEnd');
        if (!endDateStr) return;

        const endDate = new Date(endDateStr);
        const now = new Date();
        const diff = endDate.getTime() - now.getTime();

        if (diff <= 0) {
            createNewFlashSale();
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
    };

    const handleNext = () => {
        const flicking = flickingRef.current;
        if (!flicking) return;

        if (!flicking.animating) {
            flicking.next();
        }
    };

    const handlePrev = () => {
        const flicking = flickingRef.current;
        if (!flicking) return;

        if (!flicking.animating) {
            flicking.prev();
        }
    };

    return (
        <div className="w-full flex flex-col gap-10 my-10">
            <div className="flex flex-col sm:flex-row justify-between items-end mb-6 gap-4">
                <div className='max-w-[600px] w-full flex items-end justify-between'>
                    <Title content={'Today’s'} title={'Flash Sales'} />

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="flex gap-2">
                            {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
                                <div key={idx} className="bg-gray-800 text-white px-3 py-1 rounded-md flex flex-col items-center">
                                    <span className="font-bold text-lg">
                                        {String(timeLeft[unit as keyof typeof timeLeft]).padStart(2, '0')}
                                    </span>
                                    <span className="text-xs capitalize">{unit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Prev / Next Button */}
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

            {/* Flicking Slider */}
            <Flicking
                ref={flickingRef}
                circular={true}
                gap={10}
                panelsPerView={4}
                moveType="freeScroll"
                className="overflow-hidden"
            >
                {currentProducts.map((product) => (
                    <div key={product.id} className="mr-4 w-[250px] sm:w-[280px]">
                        <Card card={product} />
                    </div>
                ))}
            </Flicking>
            <div className='w-full flex justify-center'>
                <Button />
            </div>
        </div>
    );
}
