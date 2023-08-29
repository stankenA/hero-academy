import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { THeroItem } from './types';

export const fetchHeroes = createAsyncThunk<THeroItem[], string>('heroes/fetchHeroesStatus', async (url) => {
  const { data } = await axios.get<THeroItem[]>(url);
  return data;
});
