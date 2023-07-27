import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSort: 'influence',
  selectedFaction: 'All',
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSelectedSort(state, action) {
      state.selectedSort = action.payload;
    },
    setSelectedFaction(state, action) {
      state.selectedFaction = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    }
  },
});

export const { setSelectedSort, setSelectedFaction, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
