"use client"

import { FavoriteBorder, VisibilityOutlined } from "@mui/icons-material";
import StarRating from "../star/Star";

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
    return (
        <div key={card.id} className="w-[270px] h-[350px]">
            <div
                className="h-[250px] bg-contain bg-center p-3 rounded-sm"
                style={{
                    backgroundImage: `url(${card.images.main ? card.images.main : "/default-product-img.jpg"})`
                }}
            >
                {card.price.disc && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                        -{card.price.disc_percent}%
                    </div>
                )}
                <div>
                    <div className="w-[35px] h-[35px] flex items-center justify-center bg-white rounded-full">
                        <FavoriteBorder />
                    </div>
                    <div className="w-[35px] h-[35px] flex items-center justify-center bg-white mt-2 rounded-full">
                        <VisibilityOutlined />
                    </div>
                </div>
            </div>
            <div>
                <h3>{card.title}</h3>
                <span className="text-red-400">
                    ${card.price.main}
                </span>
                <StarRating />
            </div>
        </div>
    )
}
