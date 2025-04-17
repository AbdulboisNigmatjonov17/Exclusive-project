"use client";
import Image from "next/image";
import Link from "next/link";
import Bank from "./Bank.svg";
import { useEffect, useState } from "react";
import { CardsData } from "@/helpers/CardsData";

interface CartItem {
  id: number;
  title: string;
  price: { main: number };
  quantity: number;
  images: { main: string };
}

export default function Checkout() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        const parsedCart = JSON.parse(cartData);

        const itemsWithDetails = parsedCart.map((item: { id: number; quantity: number }) => {
          const product = CardsData.find((p) => p.id === item.id);
          return product ? { ...product, quantity: item.quantity } : null;
        }).filter(Boolean);

        setCartItems(itemsWithDetails);

        const calculatedSubtotal = itemsWithDetails.reduce(
          (sum: number, item: CartItem) => sum + item.price.main * item.quantity,
          0
        );

        setSubtotal(calculatedSubtotal);
        setTotal(calculatedSubtotal);
      }
    }
  }, []);

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
        <Link
          href="/"
          className="font-normal text-sm leading-5 text-[rgba(0,0,0,0.5)]"
        >
          My Account
        </Link>
        <span className="text-[14px]">/</span>
        <Link
          href="/"
          className="font-normal text-sm leading-5 text-[rgba(0,0,0,0.5)]"
        >
          Product
        </Link>
        <span className="text-[14px]">/</span>
        <Link
          href="/"
          className="font-normal text-sm leading-5 text-[rgba(0,0,0,0.5)]"
        >
          View Cart
        </Link>
        <span className="text-[14px]">/</span>
        <h1 className="font-normal text-[14px] leading-5 text-[rgba(0,0,0,1)]">
          CheckOut
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
          <div className="w-full grid grid-cols-1 gap-5">
            {cartItems.map((item) => (
              <div key={item.id} className="w-full flex items-center justify-between gap-6">
                <div className="flex  items-center gap-5">
                  <Image
                    src={item.images.main}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <span>{item.title}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>${item.price.main} × {item.quantity}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5 border-t mt-8 pt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
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