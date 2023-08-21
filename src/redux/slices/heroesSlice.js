import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHeroes = createAsyncThunk('heroes/fetchHeroesStatus', async (url) => {
  const res = await axios.get(url);
  return res.data;
});

const initialState = {
  heroes: [],
  status: '', // loading | success | error
};

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    setHeroes(state, action) {
      state.heroes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroes.pending, (state) => {
        state.status = "loading";
        state.heroes = [];
      })
      .addCase(fetchHeroes.fulfilled, (state, action) => {
        state.heroes = action.payload;
        state.status = "success";
      })
      .addCase(fetchHeroes.rejected, (state) => {
        state.status = "error";
        state.heroes = [];
      })
  }
});

export const { setHeroes } = heroesSlice.actions;

export default heroesSlice.reducer;
