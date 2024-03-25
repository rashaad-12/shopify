// store.js
import { configureStore } from '@reduxjs/toolkit';
import productDataReducer from './productDataSlice';

export const store = configureStore({
  reducer: {
    productData: productDataReducer,
  },
});
