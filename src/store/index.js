import { configureStore } from "@reduxjs/toolkit";
import products from "./productsSlice";
import darkReducer from "./darkSlice";

export default configureStore({
  reducer: {
    products,
    dark:darkReducer,
  },
});
