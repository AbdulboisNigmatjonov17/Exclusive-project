import Link from "next/link"
import Icon from './icons-phone.svg'
import Image from "next/image"
import Icon2 from "./icons-mail.svg"

export default function Contact() {
  return (
    <div className="Container pt-[80px] pb-[140px]">
      <div className='flex items-center  gap-3'>
        <Link href={"/"} className='font-normal text-sm leading-5 text-[rgba(0,0,0,0.5)]'>Home</Link>
        <span className='text-[14px]'>/</span>
        <h1 className='font-normal text-[14px] leading-5 text-[rgba(0,0,0,1)]'>Cart</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="pt-10 px-[35px] pb-[51px] mt-20 border-4 border-[rgba(0,0,0,0.02)] rounded-[4px] w-[340px] h-[457px]">
          <div className="flex items-center gap-4">
            <Image src={Icon} alt="Phone-Icon" height={40} width={40} />
            <h1>Call To Us</h1>
          </div>
          <p className="text-sm leading-[21px] pt-6">We are available 24/7, 7 days a week.</p>
          <p className="text-sm leading-[21px] pt-4">Phone: +8801611112222</p>
          <div className="border w-[270px] mt-8"></div>
          <Image className="pt-8" src={Icon2} alt="Icon2" height={40} width={40} />
          <p className="text-sm leading-[21px] pt-6">Fill out our form and we will contact <br /> you within 24 hours.</p>
          <p className="text-sm leading-[21px] pt-4">Emails: customer@exclusive.com</p>
          <p className="text-sm leading-[21px] pt-4">Emails: support@exclusive.com</p>
        </div>
        <div className="gap-4 py-10 px-8 mt-20  border-4 border-[rgba(0,0,0,0.02)] rounded-[4px] w-[800px] h-[457px]">
          <div className="flex items-center gap-4">
            <input className="bg-[rgba(245,245,245,0.9)] pl-4 rounded-[4px] w-[235px] h-[50px] border-none" type="text" placeholder="Your Name *" />
            <input className="bg-[rgba(245,245,245,0.9)] pl-4 rounded-[4px] w-[235px] h-[50px] border-none" type="email" placeholder="Your Email *" />
            <input className="bg-[rgba(245,245,245,0.9)] pl-4 rounded-[4px] w-[235px] h-[50px] border-none" type="phone" placeholder="Your Phone *" />
          </div>
          <div className="bg-[rgba(245,245,245,0.9)] p-3.5 w-[737px] h-[207px] rounded-[4px] mt-8">
            <input className="outline-none w-full" type="text" placeholder="Your Massage" />
          </div>
          <button className="bg-[rgba(219,68,68,1)] py-4 px-12 rounded-[4px] text-white font-medium text-base mt-8">Send Massage</button>
        </div>
      </div>
    </div>
  )
}