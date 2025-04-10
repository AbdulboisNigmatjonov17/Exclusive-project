"use client"

import { FavoriteBorder, VisibilityOutlined } from "@mui/icons-material";
import StarRating from "../star/Star";
import { useState } from "react";

interface CardProps {
    id: number;
    title: string;
    price: {
        main: number;
        disc: boolean;
        disc_percent: number;
    };
    images: {
        main?: string;
        one?: string;
        two?: string;
        three?: string;
        four?: string;
    };
    colors: {
        color1?: string;
        color2?: string;
    };
    about?: string;
}
export default function Card({ card }: { card: CardProps }) {
    const [show, setShow] = useState(false);

    return (
        <div key={card.id} className="w-[270px] h-[350px]">
            <div
                className="h-[250px] bg-contain bg-center p-3 rounded-sm flex items-start justify-between relative"
                style={{
                    backgroundImage: `url(${card.images.main ? card.images.main : "/default-product-img.jpg"})`
                }}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
            >
                {card.price.disc && (
                    <div className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                        -{card.price.disc_percent}%
                    </div>
                )}
                <div className="w-full flex flex-col items-end">
                    <div className="w-[35px] h-[35px] flex items-center justify-center bg-white rounded-full cursor-pointer">
                        <FavoriteBorder />
                    </div>
                    <div className="w-[35px] h-[35px] flex items-center justify-center bg-white mt-2 rounded-full cursor-pointer">
                        <VisibilityOutlined />
                    </div>
                </div>
                <button
                    onClick={()=> alert(`${card.id} number of button has clicked`)}
                    className={`cursor-pointer absolute bottom-0 left-0 w-full flex justify-center py-2 bg-black text-white rounded-sm transition duration-300 ease-in-out ${show ? "opacity-100" : "opacity-0"
                        }`}
                >
                    Add to Cart
                </button>
            </div>
            <div className="mt-4">
                <h3 className="font-medium">{card.title}</h3>
                <span className="text-red-400 font-medium">
                    ${card.price.main}
                </span>
                <StarRating />
            </div>
        </div>
    )
}