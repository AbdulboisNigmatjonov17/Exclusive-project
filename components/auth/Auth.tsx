import Image from 'next/image'
import React from 'react'
interface AuthProp {
    component: React.ReactNode
}
export default function Auth({ component }: AuthProp) {
    return (
        <div className='flex gap-20 my-10'>
            <div>
                <Image src={'/auth.png'} alt='Auth image' priority width={700} height={500} className=''/>
            </div>
            {component}
        </div>
    )
}
