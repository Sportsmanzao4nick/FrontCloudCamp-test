import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PersonalNameType } from "../types";

const initialStateName: PersonalNameType = {
  values: {
    nickname: "",
    name: "",
    surname: "",
    male: "",
  },
};

const personalNameSlice = createSlice({
  name: "personalName",
  initialState: initialStateName,
  reducers: {
    setName: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const { setName } = personalNameSlice.actions;

export default personalNameSlice.reducer;
