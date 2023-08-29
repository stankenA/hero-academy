import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filter/slice';
import cartSlice from './cart/slice';
import heroesSlice from './heroes/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    heroes: heroesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
