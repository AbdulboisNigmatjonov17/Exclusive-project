import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/features/CartSlice';
import likeReducer from '@/features/WishSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    like: likeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
