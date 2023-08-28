import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export const fetchHeroes = createAsyncThunk<THeroItem[], string>('heroes/fetchHeroesStatus', async (url) => {
  const { data } = await axios.get<THeroItem[]>(url);
  return data;
});

type THeroItem = {
  id: string,
  name: string,
  type: string,
  lvl: number,
  price: number,
  img: string,
  count: number,
};

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
};

interface IHeroSliceState {
  heroes: THeroItem[],
  status: Status,
  errorMessage?: string,
};

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
