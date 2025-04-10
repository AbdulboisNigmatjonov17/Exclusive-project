"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export default function Banner() {
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => {
                const totalSeconds =
                    prevTime.days * 86400 +
                    prevTime.hours * 3600 +
                    prevTime.minutes * 60 +
                    prevTime.seconds - 1;

                if (totalSeconds <= 0) {
                    // Reset to 1 day when countdown finishes
                    return { days: 1, hours: 0, minutes: 0, seconds: 0 };
                }

                return {
                    days: Math.floor(totalSeconds / 86400),
                    hours: Math.floor((totalSeconds % 86400) / 3600),
                    minutes: Math.floor((totalSeconds % 3600) / 60),
                    seconds: Math.floor(totalSeconds % 60)
                };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-black flex justify-between items-center p-8'>
            <div className='w-[445px] text-[#FAFAFA] flex flex-col gap-8 items-start'>
                <h4 className='text-[#00FF66]'>Categories</h4>
                <h1 className='text-5xl font-semibold leading-12 my-4 tracking-[4%]'>Enhance Your Music Experience</h1>
                <div className="flex gap-2">
                    {["days", "hours", "minutes", "seconds"].map((unit) => (
                        <div key={unit} className="bg-white text-black w-[65px] h-[65px] rounded-full flex flex-col justify-center items-center">
                            <span className="font-bold text-lg">
                                {String(timeLeft[unit as keyof typeof timeLeft]).padStart(2, '0')}
                            </span>
                            <span className="text-xs capitalize">{unit}</span>
                        </div>
                    ))}
                </div>
                <button className='bg-[#00FF66] rounded-sm py-4 px-12 cursor-pointer hover:bg-[#00ce52]'>Buy Now!</button>
            </div>
            <div className='relative w-[500px] h-[400px]'>
                <Image
                    src={'/banner.png'}
                    alt='banner image'
                    fill
                    sizes="(max-width: 600px) 100vw, 500px"
                    className='object-contain'
                    priority
                />
            </div>
        </div>
    )
}