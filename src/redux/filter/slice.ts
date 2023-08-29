import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFilterSliceState } from './types';

const initialState: IFilterSliceState = {
  selectedSort: 'alphabet',
  selectedFaction: 'All',
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSelectedSort(state, action: PayloadAction<'influence' | 'price' | 'alphabet'>) {
      state.selectedSort = action.payload;
    },
    setSelectedFaction(state, action: PayloadAction<string>) {
      state.selectedFaction = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setFilters(state, action: PayloadAction<IFilterSliceState>) {
      state.selectedSort = action.payload.selectedSort;
      state.selectedFaction = action.payload.selectedFaction;
      state.searchValue = action.payload.searchValue;
    },
  },
});

export const { setSelectedSort, setSelectedFaction, setSearchValue, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
