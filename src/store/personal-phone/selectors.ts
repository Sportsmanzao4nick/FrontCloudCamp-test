import {RootState} from "../types";

export const getPersonalPhoneData = (state: RootState) => state.personalPhone;

export const getPersonalPhoneValues = (state: RootState) => getPersonalPhoneData(state).values;