import Image from "next/image";
import Link from "next/link";
import Foto from "../../public/ps5.png";
import Bank from "./Bank.svg";

export default function Checkout() {
  return (
    <div className="Container pt-[80px] pb-[140px]">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="font-normal text-sm leading-5 text-[rgba(0,0,0,0.5)]"
        >
          Home
        </Link>
        <span className="text-[14px]">/</span>
        <h1 className="font-normal text-[14px] leading-5 text-[rgba(0,0,0,1)]">
          My Account
        </h1>
      </div>
      <div className="flex items-start justify-between mt-20 gap-12">
        <div>
          <h1 className="font-medium text-4xl leading-[30px]">Billing Details</h1>
          <div>
            <label className="flex flex-col font-normal text-base mt-[48px] leading-6 text-[rgba(0,0,0,0.9)]">
              First Name
              <input
                type="text"
                className="w-[470px] pl-3 h-[50px] bg-[#F5F5F5] mt-2"
              />
            </label>
            <label className="flex flex-col mt-8 font-normal text-base leading-6 text-[rgba(0,0,0,0.9)]">
              Company Name
              <input
                type="text"
                className="w-[470px] h-[50px] pl-3 bg-[#F5F5F5] mt-2"
              />
            </label>
            <label className="flex flex-col mt-8 font-normal text-base leading-6 text-[rgba(0,0,0,0.9)]">
              Street Address*
              <input
                type="text"
                className="w-[470px] h-[50px] pl-3 bg-[#F5F5F5] mt-2"
              />
            </label>
            <label className="flex flex-col mt-8 font-normal text-base leading-6 text-[rgba(0,0,0,0.9)]">
              Apartment, floor, etc. (optional)
              <input
                type="text"
                className="w-[470px] h-[50px] pl-3 bg-[#F5F5F5] mt-2"
              />
            </label>
            <label className="flex flex-col mt-8 font-normal text-base leading-6 text-[rgba(0,0,0,0.9)]">
              Town/City*
              <input
                type="text"
                className="w-[470px] h-[50px] pl-3 bg-[#F5F5F5] mt-2"
              />
            </label>
            <label className="flex flex-col mt-8 font-normal text-base leading-6 text-[rgba(0,0,0,0.9)]">
              Phone Number*
              <input
                type="tel"
                className="w-[470px] h-[50px] pl-3 bg-[#F5F5F5] mt-2"
              />
            </label>
            <label className="flex flex-col mt-8 font-normal text-base leading-6 text-[rgba(0,0,0,0.9)]">
              Email Address*
              <input
                type="email"
                className="w-[470px] h-[50px] pl-3 bg-[#F5F5F5] mt-2"
              />
            </label>

            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                className="bg-[#DB4444] accent-[#DB4444] w-4 h-4 mr-4"
              />
              <span className="text-base font-normal leading-6">
                Save this information for faster check-out next time
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-28">
          <div className="flex items-center gap-6">
            <Image src={Foto} alt="Foto" width={48} height={48} />
            <div className="flex items-center justify-between w-[300px]">
              <span>LCD Monitor</span>
              <span>$650</span>
            </div>
          </div>
          <div className="flex items-center mt-8">
            <input
              type="radio"
              name="paymet"
              className="mr-4 w-4 h-4 bg-black accent-black"
            />
            <span>Bank</span>
            <Image
              className="ml-[155px]"
              src={Bank}
              alt="Icon"
              width={192}
              height={28}
            />
          </div>
          <div className="mt-8">
            <input
              type="radio"
              name="paymet"
              className="mr-4 w-4 h-4 bg-black accent-black"
            />
            <span>Cash on delivery</span>
          </div>
          <div className="flex items-center mt-8 gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="rounded-[4px] pl-6 h-14 w-[300px] border"
            />
            <button
              type="submit"
              className="bg-[#DB4444] hover:bg-[#b63636] h-14 px-12 rounded-[4px] text-white font-medium text-base cursor-pointer"
            >
              Apply Coupon
            </button>
          </div>
          <button
            className="bg-[#DB4444] hover:bg-[#b63636] py-4 px-12 rounded-[4px] text-white font-medium text-base cursor-pointer self-start mt-6"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
