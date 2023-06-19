import {RootState} from "../types";

export const getPersonalAdvantagesData = (state: RootState) => state.personalAdvantages;

export const getPersonalAdvantagesValues = (state: RootState) => getPersonalAdvantagesData(state).values;