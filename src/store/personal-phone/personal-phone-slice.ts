import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PersonPhoneType } from "../types";

const initialStatePhone: PersonPhoneType = {
  values: {
    phone: "",
    mail: ""
  },
};

const personalPhoneSlice = createSlice({
  name: "personalPhone",
  initialState: initialStatePhone,
  reducers: {
    setPhone: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const { setPhone } = personalPhoneSlice.actions;

export default personalPhoneSlice.reducer;