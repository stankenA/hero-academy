import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHeroSliceState, Status, THeroItem } from './types';
import { fetchHeroes } from './asyncActions';

const initialState: IHeroSliceState = {
  heroes: [],
  status: Status.LOADING,
  errorMessage: '',
};

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    setHeroes(state, action: PayloadAction<THeroItem[]>) {
      state.heroes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroes.pending, (state) => {
        state.status = Status.LOADING;
        state.heroes = [];
      })
      .addCase(fetchHeroes.fulfilled, (state, action) => {
        state.heroes = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchHeroes.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.errorMessage = action.error.message;
        state.heroes = [];
      })
  }
});

export const { setHeroes } = heroesSlice.actions;

export default heroesSlice.reducer;
