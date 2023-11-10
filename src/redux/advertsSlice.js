import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAdverts,
  fetchAllAdverts,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFetchFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(...action.payload);
};

const handleAllFetchFulfilled = (state, action) => {
  state.quantity = action.payload.length;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    selectedItem: null,
    quantity: 0,
    isLoading: false,
    isLoadingModal: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, handleFetchFulfilled)
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchAllAdverts.fulfilled, handleAllFetchFulfilled),
});

export const advertsReducer = advertsSlice.reducer;
