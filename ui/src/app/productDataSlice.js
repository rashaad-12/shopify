import { createSlice } from '@reduxjs/toolkit';

const productDataSlice = createSlice({
  name: 'productData',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setProducts, setLoading, setError } = productDataSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await fetch('/data.json');
    const data = await response.json();
    dispatch(setProducts(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const selectProducts = (state) => state.productData.products;

export default productDataSlice.reducer;
