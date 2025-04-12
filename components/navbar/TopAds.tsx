"use client"
import { ExpandMore } from '@mui/icons-material';
import React from 'react';

const TopAds = () => {
    return (
        <div className="w-full h-[5dvh] py-2 text-white bg-black ">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
                <div className='w-[80%] flex items-center justify-center'>
                    <p className="text-sm md:text-base font-normal text-center md:text-left">
                        Summer Sale For All Swim Suits And Free Express Delivery OFF 5004
                    </p>
                    <button className="bg-black text-white px-5 py-2 rounded-none text-sm font-bold uppercase tracking-wide underline">
                        ShopNow
                    </button>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium cursor-pointer">English <ExpandMore /></span>
                </div>
            </div>
        </div>
    );
};

export default TopAds;