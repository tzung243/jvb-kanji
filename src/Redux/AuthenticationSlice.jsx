import { createSlice } from "@reduxjs/toolkit";
import { Authentication } from "../Network/Authentication";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    user: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    signOut(state) {
      Authentication.signOut(() => {
        state.user = null;
      });
    },
  },
});

export const { setUser, signOut } = authenticationSlice.actions;

export const authenticationReducer = authenticationSlice.reducer;
