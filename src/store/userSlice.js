import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userChk",
  initialState: {
    currentUser: {
      id: 7,
      name: "developer",
      image:
        "https://imagevars.gulfnews.com/2023/06/27/Prithviraj-Sukumaran_188fc56fd28_large.jpg",
    },
  },
  reducers: {
    login: (state, action) => {
      // Assuming action.payload is an object with new user data
      state.currentUser = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
