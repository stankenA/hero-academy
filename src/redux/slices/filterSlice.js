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
    },
    setFilters(state, action) {
      state.selectedSort = action.payload.sort;
      state.selectedFaction = action.payload.faction;
      state.searchValue = action.payload.search;
    },
  },
});

export const { setSelectedSort, setSelectedFaction, setSearchValue, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
