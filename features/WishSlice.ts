import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const getInitialCart = () => {
    if (typeof window !== "undefined") {
        const savedCart = localStorage.getItem("like");
        return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
};

type CartItem = {
    id: number;
    title: string;
    price: {
        main: number;
        disc?: boolean;
        disc_percent?: number;
    };
    image?: string;
};

const initialState = {
    cart: getInitialCart(),
};

const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        setLike: (state, action: PayloadAction<CartItem[]>) => {
            state.cart = action.payload;
            localStorage.setItem("like", JSON.stringify(state.cart));
        },
        addToLike: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.cart.find((item: CartItem) => item.id === action.payload.id);
            if (!existingItem) {
                state.cart.push(action.payload);
            }
            localStorage.setItem("like", JSON.stringify(state.cart));
        },
        removeFromLike: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter((item: CartItem) => item.id !== action.payload);
            localStorage.setItem("like", JSON.stringify(state.cart));
        },
    },
});

export const { addToLike, removeFromLike, setLike } = likeSlice.actions;
export default likeSlice.reducer;