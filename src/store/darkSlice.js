import { createSlice } from "@reduxjs/toolkit";

export const darkSlice = createSlice({
  name: "dark",
  initialState: { darkMode: false },
  reducers: {
    black: (state) => {
      state.darkMode = true;
    },
    light: (state) => {
      state.darkMode = false;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export default darkSlice.reducer;

export const darkActions = darkSlice.actions;
