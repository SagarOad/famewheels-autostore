// src/store/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product_slug: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product_slug = action.payload.product_slug;
    },
    clearProduct: (state) => {
      state.product_slug = "";
    },
  },
});

export const { setProduct, clearProduct } = productSlice.actions;

export default productSlice.reducer;
