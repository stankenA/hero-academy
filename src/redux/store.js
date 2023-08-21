import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import heroesSlice from './slices/heroesSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    heroes: heroesSlice,
  },
});
