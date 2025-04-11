"use client"
import React from 'react';

interface BoxItem {
  icon: React.ReactNode;
  title: string;
  about: string;
  text?: string;
  border?: string;
}

interface BoxesProps {
  data?: BoxItem[]; // optional qilish ham mumkin
}

export default function Boxes({ data = [] }: BoxesProps) {
  return (
    <div className='my-20 flex justify-center gap-20'>
      {data.map((item, index) => (
        <div
          key={index}
          className={`w-[270px] h-[230px] flex flex-col justify-center items-center text-center gap-6 rounded-sm ${item.border || "border-none"} transition duration-300 ease-in-out hover:bg-[#DB4444] hover:text-white`}
        >
          <div className='w-20 h-20 flex items-center justify-center bg-[rgba(47,_46,_48,_0.5)] text-white rounded-full'>
            <div className='bg-black rounded-full w-14 h-14 flex items-center justify-center'>
              {item.icon}
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className={`${item.text || ""} font-semibold leading-7`}>{item.title}</h2>
            <h3 className='font-normal text-[16px] leading-6'>{item.about}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}