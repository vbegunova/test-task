import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://654bd0ee5b38a59f28efc19e.mockapi.io/api';
const END_POINT = '/adverts';

export const fetchAllAdverts = createAsyncThunk(
  'adverts/fetchAllAdverts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(END_POINT);
      console.log(response.data.length);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`${END_POINT}?page=${page}&limit=12`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);