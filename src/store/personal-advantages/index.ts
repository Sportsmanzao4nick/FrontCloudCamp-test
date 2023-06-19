import reducer from "./personal-name-slice";
import * as personalSelectors from "./selectors";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../types";
import { TypedUseSelectorHook } from "react-redux";

export { personalSelectors };

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default reducer;
