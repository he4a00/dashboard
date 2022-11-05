import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    const res = await fetch("http://localhost:3040/products/");
    const data = await res.json();
    return data;
  }
);


// export const getSingleProduct = createAsyncThunk(
//   "products/getSingleProduct",
//   async (user, thunkAPI) => {
//     const res = await fetch(`http://localhost:3040/products/${user.id}`);
//     const data = await res.json();
//     return data;
//   }
// );




const productsSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {},
  extraReducers: {
    // Get All Peoducts From API
    [getAllProducts.pending]: (state, action) => {},
    [getAllProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [getAllProducts.rejected]: (state, action) => {},

    // [getAllProducts.pending]: (state, action) => {},
    // [getAllProducts.fulfilled]: (state, action) => {
    //   state.products = action.payload;
    // },
    // [getAllProducts.rejected]: (state, action) => {},

    
  },
});

export default productsSlice.reducer;
