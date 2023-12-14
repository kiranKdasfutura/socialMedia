// import { configureStore } from "@reduxjs/toolkit";
// import darkModeSlice from "./darkModeSlice";
// import userSlice from "./userSlice";

// export const store = configureStore({
//   reducer: {
//     theme:darkModeSlice,
//     user:userSlice,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkModeSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    theme: darkModeSlice.reducer, // Access the reducer field of the slice
    user: userSlice.reducer, // Access the reducer field of the slice
  },
});

