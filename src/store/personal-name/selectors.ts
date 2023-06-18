import {RootState} from "../types";

export const getPersonalNameData = (state: RootState) => state.personalName;

export const getPersonalNameValues = (state: RootState) => getPersonalNameData(state).values;
