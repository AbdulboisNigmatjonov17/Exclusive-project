import React from 'react'
import Title from '../title/Title'

export default function NewArrivel() {
    return (
        <div className='w-full flex flex-col gap-14 my-20'>
            <Title content='Featured' title='New Arrival' />
            <div className='w-full flex gap-8'>
                <div
                    style={{ backgroundImage: `url(/ps5.png)` }}
                    className='bg-black bg-no-repeat bg-bottom text-[#FAFAFA] w-full h-[600px] rounded-sm flex items-end p-8'>
                    <div className='w-[245px] flex flex-col items-start gap-4 '>
                        <h2 className='text-2xl font-semibold leading-6'>PlayStation 5</h2>
                        <p className='text-sm leading-[21px] font-normal'>Black and White version of the PS5 coming out on sale.</p>
                        <button className='underline underline-offset-4 font-medium text-[16px] leading-6'>Shop Now</button>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div
                        style={{ backgroundImage: `url(/woman.png)` }}
                        className='bg-black bg-no-repeat bg-right text-[#FAFAFA] w-full h-[285px] rounded-sm flex items-end p-8'>
                        <div>
                            <div className='w-[245px] flex flex-col items-start gap-4 '>
                                <h2 className='text-2xl font-semibold leading-6'>Women’s Collections</h2>
                                <p className='text-sm leading-[21px] font-normal'>Featured woman collections that give you another vibe.</p>
                                <button className='underline underline-offset-4 font-medium text-[16px] leading-6'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-8'>
                        <div
                            style={{ backgroundImage: `url(/speaker.png)` }}
                            className='bg-black bg-no-repeat bg-center text-[#FAFAFA] w-full h-[285px] rounded-sm flex items-end p-8'>
                            <div>
                                <div className='w-[245px] flex flex-col items-start gap-4 text-shadow-lg'>
                                    <h2 className='text-2xl font-semibold leading-6'>Women’s Collections</h2>
                                    <p className='text-sm leading-[21px] font-normal'>Featured woman collections that give you another vibe.</p>
                                    <button className='underline underline-offset-4 font-medium text-[16px] leading-6'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{ backgroundImage: `url(/perfume.png)` }}
                            className='bg-black bg-no-repeat bg-center text-[#FAFAFA] w-full h-[285px] rounded-sm flex items-end p-8 '>
                            <div>
                                <div className='w-[245px] flex flex-col items-start gap-4 text-shadow-lg'>
                                    <h2 className='text-2xl font-semibold leading-6'>Women’s Collections</h2>
                                    <p className='text-sm leading-[21px] font-normal'>Featured woman collections that give you another vibe.</p>
                                    <button className='underline underline-offset-4 font-medium text-[16px] leading-6'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
