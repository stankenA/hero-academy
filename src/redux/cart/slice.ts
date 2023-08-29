import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { ICartSliceState, TCartItem } from './types';

export const initialState: ICartSliceState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TCartItem>) {
      const existingItem = state.items.find((item) => item.id === action.payload.id
        && item.type === action.payload.type
        && item.lvl === action.payload.lvl);

      if (existingItem) {
        existingItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<TCartItem>) {
      state.items = state.items.filter((item) => (item.id !== action.payload.id)
        || (item.type !== action.payload.type)
        || (item.lvl !== action.payload.lvl));
      state.totalPrice = calcTotalPrice(state.items);
    },
    decrementItem(state, action: PayloadAction<TCartItem>) {
      const existingItem = state.items.find((item) => item.id === action.payload.id
        && item.type === action.payload.type
        && item.lvl === action.payload.lvl);

      if (existingItem) {
        existingItem.count--;
        state.totalPrice = calcTotalPrice(state.items);
      }
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    }
  },
});

export const { addItem, removeItem, decrementItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
