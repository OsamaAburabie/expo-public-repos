import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account, LocationData } from "./types";

const initialState: Account = {
  name: "Osama",
  avatar_url:
    "https://lh3.googleusercontent.com/a/AAcHTtf5s1dkUkpHecth8PfzFTfS93ZTSYjd6PXbxSMDa0w99rw=s576-c-no",
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
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar_url = action.payload;
    },
  },
});

export default authSlice.reducer;

export const { setCountry, setAvatar } = authSlice.actions;
