import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, fetchAllAdverts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFetchFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  if (action.meta.arg.page === 1) {
    state.items = action.payload;
  } else {
    state.items.push(...action.payload);
  }
};

const handleAllFetchFulfilled = (state, action) => {
  state.quantity = action.payload.length;
  state.bditems = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const loadFavoritesFromLS = () => {
  const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return savedFavorites;
};

const saveFavoritesToLS = favorites => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    bditems: [],
    items: [],
    quantity: 0,
    isLoading: false,
    error: null,
    favorites: loadFavoritesFromLS(),
  },
  reducers: {
    addFavorite(state, action) {
      const advertId = action.payload;
      state.favorites.push(advertId);
      saveFavoritesToLS(state.favorites);
    },
    removeFavorite(state, action) {
      const advertId = action.payload;
      state.favorites = state.favorites.filter(id => id !== advertId);
      saveFavoritesToLS(state.favorites);
    },
    clearAdverts(state) {
      state.items = [];
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, handleFetchFulfilled)
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchAllAdverts.fulfilled, handleAllFetchFulfilled),
});

export const {
  addFavorite,
  removeFavorite,
  clearAdverts,
  clearFavoriteAdverts,
} = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
