import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      username: null,
      loggedIn: null,
    },
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logged: (state, action) => {
      state.user.username = action.payload;
    },
  },
});

export const { login, logged } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
