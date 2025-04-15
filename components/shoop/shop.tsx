import Link from 'next/link';
import Image from 'next/image';

export default function Cart() {
  return (
    <div className='Container pt-20'>
      <div className='flex items-center gap-3'>
        <Link href={"/"} className='font-normal text-sm leading-5 text-[rgba(0,0,0,0.5)]'>Home</Link>
        <span className='text-[14px] '>/</span>
        <h1 className='font-normal text-[14px] leading-5 text-[rgba(0,0,0,1)]'>Cart</h1>
      </div>
      <div>
        <ul className='flex items-center justify-center mt-[104px] gap-[284px]'>
          <li>Product</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Subtotal</li>
        </ul>
        <div>
          <div>
        <Image src="" alt="" width={54} height={54} />
        <h1></h1>
        <button></button>
        <h1></h1>
        </div>
        </div>
      </div>
    </div>
  )
}
