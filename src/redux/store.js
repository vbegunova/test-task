import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { advertsReducer } from './advertsSlice';

const rootReducer = combineReducers({
  adverts: advertsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});