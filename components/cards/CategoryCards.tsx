"use client"
import React, { useRef } from 'react'
import Title from '../title/Title'
import { ArrowBack, ArrowForward, CameraAlt, Computer, Headphones, Smartphone, SportsEsports, Watch } from '@mui/icons-material'
import Flicking from "@egjs/react-flicking";
import "@egjs/flicking/dist/flicking.css";

export default function CategoryCards() {
    const flickingRef = useRef<any>(null);

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
        <div className='w-full flex flex-col gap-14'>
            <div className='w-full flex justify-between items-end'>
                <Title content='Categories' title='Browse By Category' />
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
            <Flicking
                ref={flickingRef}
                circular={true}
                gap={10}
                panelsPerView={5}
                moveType="freeScroll"
                className="overflow-hidden "
            >
                {[{ icon: <Smartphone fontSize='large' />, name: "Phones" },
                { icon: <Computer fontSize='large' />, name: "Computers" },
                { icon: <Watch fontSize='large' />, name: "SmartWatch" },
                { icon: <CameraAlt fontSize='large' />, name: "Camera" },
                { icon: <Headphones fontSize='large' />, name: "HeadPhones" },
                { icon: <SportsEsports fontSize='large' />, name: "Gaming" }].map((product, index) => (
                    <div key={index} className="mr-[30px] w-[170px] h-[145px] flex flex-col items-center justify-center border-[1px] border-[#0000004D] rounded-sm transition duration-300 ease-in-out hover:bg-[#DB4444] hover:text-white">
                        <div className='w-[56px] h-[56px] flex justify-center items-center'>
                            {product.icon}
                        </div>
                        <h3 className=''>{product.name}</h3>
                    </div>
                ))}
            </Flicking>
        </div>
    )
}
