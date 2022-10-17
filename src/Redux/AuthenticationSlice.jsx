import { createSlice } from "@reduxjs/toolkit";
import { Authentication } from "../Network/Authentication";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    user: undefined,
  },
  reducers: {
    refreshStateUser(state) {
      const accessToken = Authentication.getAccessToken();
      Authentication.refreshStateUser(accessToken).then((response) => {
        if (response.ok) {
          response.json().then((user) => {
            state.user = user;
          });
        } else {
          state.user = undefined;
        }
      });
    },
    signOut(state) {
      Authentication.signOut(() => {
        state.user = undefined;
      });
    },
  },

});

export const { refreshStateUser, signOut } = authenticationSlice.actions;

export const authenticationReducer = authenticationSlice.reducer;
