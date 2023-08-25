import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};

function countTotalPrice(state) {
  state.totalPrice = state.items.reduce((sum, item) => {
    return (item.count * item.price) + sum;
  }, 0);
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
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

      countTotalPrice(state);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => (item.id !== action.payload.id)
        || (item.type !== action.payload.type)
        || (item.lvl !== action.payload.lvl));
      countTotalPrice(state);
    },
    decrementItem(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id
        && item.type === action.payload.type
        && item.lvl === action.payload.lvl);

      existingItem.count--;
      countTotalPrice(state);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    }
  },
});

export const { addItem, removeItem, decrementItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
