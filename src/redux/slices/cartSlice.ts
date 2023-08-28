import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type TCartItem = {
  id: string,
  type: string,
  lvl: number,
  name: string,
  price: number,
  img: string,
  count: number,
};

interface ICartSliceState {
  items: TCartItem[],
  totalPrice: number,
};


const initialState: ICartSliceState = {
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

      state.totalPrice = state.items.reduce((sum, item) => {
        return (item.count * item.price) + sum;
      }, 0);
    },
    removeItem(state, action: PayloadAction<TCartItem>) {
      state.items = state.items.filter((item) => (item.id !== action.payload.id)
        || (item.type !== action.payload.type)
        || (item.lvl !== action.payload.lvl));
      state.totalPrice = state.items.reduce((sum, item) => {
        return (item.count * item.price) + sum;
      }, 0);
    },
    decrementItem(state, action: PayloadAction<TCartItem>) {
      const existingItem = state.items.find((item) => item.id === action.payload.id
        && item.type === action.payload.type
        && item.lvl === action.payload.lvl);

      if (existingItem) {
        existingItem.count--;
        state.totalPrice = state.items.reduce((sum, item) => {
          return (item.count * item.price) + sum;
        }, 0);
      }
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    }
  },
});

export const selectCart = (state: RootState) => state.cart;

export const { addItem, removeItem, decrementItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
