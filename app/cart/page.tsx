"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, setCart, updateQuantity } from "@/features/CartSlice";
import { CardsData } from "@/helpers/CardsData";
import Link from "next/link";
import Image from "next/image";
import { RootState } from "@/redux/store";  // Agar sizda store to'liq tiplashgan bo'lsa

interface CartItem {
  id: number;
  title: string;
  price: { main: number };
  quantity: number;
  images: { main: string }
}

export default function Cart() {
  const [coupon, setCoupon] = useState("");
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      try {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
          const parsedCart = JSON.parse(savedCart);
          if (Array.isArray(parsedCart)) {
            dispatch(setCart(parsedCart));
          }
        }
      } catch (error) {
        console.error("LocalStorage'dan savat yuklanmadi:", error);
      }
    }
  }, [dispatch]);

  const filteredCart = useMemo(() => {
    return cart.reduce((acc: Array<{ id: number; title: string; price: { main: number }; quantity: number }>, item: { id: number; quantity: number }) => {
      const product = CardsData.find((p) => p.id === item.id);
      if (product) {
        acc.push({ ...product, quantity: item.quantity });
      }
      return acc;
    }, []);
  }, [cart]);

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId: number, newQty: number) => {
    const current = cart.find((item: CartItem) => item.id === productId);
    const amount = Number(newQty) - current.quantity;
    dispatch(updateQuantity({ id: productId, amount }));
  };

  const totalPrice = filteredCart.reduce(
    (sum: number, item: CartItem) => sum + item.price.main * item.quantity,
    0
  );

  return (
    <section className="md:max-w-[1200px] w-full mx-auto lg:pb-0 pb-10">
      {filteredCart.length === 0 ? (
        <div className="text-center py-10">
          <p>Savat bosh</p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 py-10">
          <nav className="text-sm mb-6 text-gray-500">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-black font-medium">Cart</span>
          </nav>

          <div className="overflow-x-auto">
            <table className="min-w-full border-t border-b border-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Quantity</th>
                  <th className="py-3 px-4">Subtotal</th>
                  <th className="py-3 px-4">Remove</th>
                </tr>
              </thead>
              <tbody>
                {filteredCart.map((item: CartItem) => (
                  <tr key={item.id} className="border-t border-gray-200">
                    <td className="py-4 px-4 flex items-center gap-4">
                      <Image
                        src={item.images.main}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                      <span>{item.title}</span>
                    </td>
                    <td className="py-4 px-4">${item.price.main}</td>
                    <td className="py-4 px-4">
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, Number(e.target.value))
                        }
                        className="border px-2 py-1 rounded"
                      >
                        {[1, 2, 3, 4, 5].map((qty) => (
                          <option key={qty} value={qty}>
                            {qty.toString().padStart(2, "0")}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-4 px-4 font-semibold">
                      ${(item.price.main * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="text-sm px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-8 gap-6">
            <div className="flex flex-col gap-4 w-full md:w-2/3">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border px-4 py-2 w-1/2 rounded"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                  Apply Coupon
                </button>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/"
                  className="border px-4 py-2 rounded hover:bg-gray-100 transition text-center"
                >
                  Return To Shop
                </Link>
                <button
                  className="border px-4 py-2 rounded hover:bg-gray-100 transition"
                  onClick={() => { }}
                >
                  Update Cart
                </button>
              </div>
            </div>

            <div className="border p-6 rounded w-full md:w-1/3">
              <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
              <div className="flex justify-between py-2 border-b">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span>Shipping:</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between py-2 font-bold text-lg">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <Link href="/">
                <button className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}