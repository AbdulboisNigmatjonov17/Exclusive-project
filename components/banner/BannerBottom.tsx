import { GppBadOutlined, HeadsetMicOutlined, LocalShippingOutlined } from '@mui/icons-material'
import React from 'react'

export default function BannerBottom() {
  return (
    <div className='my-20 flex justify-center gap-20'>
      {[{ icon: <LocalShippingOutlined fontSize='large' />, title: "FREE AND FAST DELIVERY", about: "Free delivery for all orders over $140" },
      { icon: <HeadsetMicOutlined fontSize='large' />, title: "24/7 CUSTOMER SERVICE", about: "Friendly 24/7 customer support" },
      { icon: <GppBadOutlined fontSize='large' />, title: "MONEY BACK GUARANTEE", about: "We reurn money within 30 days" },
      ].map((item, index) => (
        <div key={index} className='flex flex-col items-center text-center gap-6'>
          <div className='w-20 h-20 flex items-center justify-center bg-[rgba(47,_46,_48,_0.5)] text-white rounded-full'>
            <div className='bg-black rounded-full w-14 h-14 flex items-center justify-center'>
              {item.icon}
            </div>
          </div>
          <div>
            <h2 className='text-xl font-semibold leading-7'>{item.title}</h2>
            <h3>{item.about}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
