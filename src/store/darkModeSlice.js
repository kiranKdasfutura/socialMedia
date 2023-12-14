// darkModeSlice.js
import { createSlice } from "@reduxjs/toolkit";
export const darkModeSlice = createSlice({
  name: "mode",
  initialState: {
    theme: false,
  },
  reducers: {
    toggleTheme: (state, action) => {
      console.log(action);
      state.theme = !action.payload;
    },
  },
});

export const { toggleTheme } = darkModeSlice.actions;
export default darkModeSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// export const darkModeSlice = createSlice({
//   name: "mode",
//   initialState: {
//     theme: false,
//     user: {
//       id: 7,
//       name: "developer",
//       image:
//         "https://imagevars.gulfnews.com/2023/06/27/Prithviraj-Sukumaran_188fc56fd28_large.jpg",
//     },
//   },
//   reducers: {
//     toggleTheme: (state, action) => {
//       state.theme = !action.payload;
//     },
//   },
// });

// export const { toggleTheme } = darkModeSlice.actions;
// export default darkModeSlice.reducer;
