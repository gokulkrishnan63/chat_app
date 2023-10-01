import { createSlice } from "@reduxjs/toolkit";

// this themeslice for changing the background color for entire app;
export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: true,
  reducers: {
    toggleTheme: (state) => {
    return   state = !state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
