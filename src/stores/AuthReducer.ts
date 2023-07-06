import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account, LocationData } from "./types";

const initialState: Account = {
  name: "Osama",
  avatar_url: "https://avatars.githubusercontent.com/u/7525670?v=4",
  phone: "+962 770561718",
  country: null,
};

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<LocationData>) => {
      state.country = action.payload;
    },
  },
});

export default authSlice.reducer;

export const { setCountry } = authSlice.actions;
