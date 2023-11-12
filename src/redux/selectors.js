import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.items;
export const selectQuantity = state => state.adverts.quantity;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;
export const selectFavoriteIds = state => state.adverts.favorites;
export const selectBDItems = state => state.adverts.bditems;

export const selectFavoritesAdverts = createSelector(
  [selectBDItems, selectFavoriteIds],
  (adverts, favoriteIds) => {
    return adverts.filter(advert => favoriteIds.includes(advert.id));
  }
);
