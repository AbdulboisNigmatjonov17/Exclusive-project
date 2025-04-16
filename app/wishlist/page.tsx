"use client"

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import Link from "next/link"
import { removeFromLike } from "@/features/WishSlice"
import { useState } from "react"
import { Delete } from "@mui/icons-material"
import BestSelling from "@/components/cards/BestSelling"
import { addToCart } from "@/features/CartSlice"

type CartItem = {
  id: number;
  title: string;
  price: {
    main: number;
    disc?: boolean;
    disc_percent?: number;
  };
  images?: { main: string };
};

export default function Wishlist() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const { cart: wishlist } = useSelector((state: RootState) => state.like)
  const dispatch = useDispatch();

  const handleremovelike = (id: number) => {
    dispatch(removeFromLike(id));
  }

  const handleMoveAllToBag = () => {
    // Bu yerda hamma mahsulotlarni savatga qo'shish logikasi
    alert("All items moved to bag");
  }
  const handleAddToCart = (item: CartItem) => {
    if (!item) return;
    dispatch(addToCart({ id: item.id }));
  };
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-6">Wishlist ({wishlist.length})</h1>
        {wishlist.length > 0 && (
          <div className="my-8">
            <button
              onClick={handleMoveAllToBag}
              className="w-full py-3 px-5 border border-black text-black rounded-md font-medium cursor-pointer hover:bg-black hover:text-white transition"
            >
              Move All To Bag
            </button>
          </div>
        )}
      </div>

      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map((item: CartItem) => {
          const discountedPrice = item.price.disc && item.price.disc_percent
            ? Math.round(item.price.main * (1 - item.price.disc_percent / 100))
            : null;

          return (
            <div key={item.id} className="w-full h-[350px]">
              <div
                className="h-[250px] bg-center p-3 rounded-sm flex items-start justify-between relative bg-no-repeat bg-[rgba(245,_245,_245,_1)] transition-all duration-300"
                style={{
                  backgroundImage: `url(${item.images?.main || "/default-product-img.jpg"})`,
                  backgroundSize: hoveredItem === item.id ? "cover" : "contain",
                  backgroundPosition: "center"
                }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.price.disc && (
                  <div className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                    -{item.price.disc_percent}%
                  </div>
                )}
                <div className="w-full flex flex-col items-end">
                  <button
                    onClick={() => handleremovelike(item.id)}
                    className="w-[35px] h-[35px] flex items-center justify-center bg-white rounded-full cursor-pointer hover:bg-gray-100"
                  >
                    <Delete fontSize="small" />
                  </button>
                </div>
                <button
                  onClick={() => handleAddToCart(item)}
                  className={`cursor-pointer absolute bottom-0 left-0 w-full flex justify-center py-2 bg-black text-white rounded-sm transition-all duration-300 ${hoveredItem === item.id ? "opacity-100" : "opacity-0"}`}
                >
                  Add to Cart
                </button>
              </div>
              <div className="mt-4">
                <h3 className="font-medium text-sm truncate">{item.title}</h3>
                {item.price.disc ? (
                  <div className="flex gap-3 items-center">
                    <span className="text-red-400 font-medium">
                      ${discountedPrice}
                    </span>
                    <s className="text-gray-400 font-medium text-sm">${item.price.main}</s>
                  </div>
                ) : (
                  <span className="text-red-400 font-medium">
                    ${item.price.main}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {wishlist.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Your wishlist is empty.</p>
          <Link href="/products" className="mt-4 inline-block px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
            Xaridni Davom Ettirish
          </Link>
        </div>
      )}
      <BestSelling />
    </div>
  )
}