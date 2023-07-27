// import { TypedUseSelectorHook, useDispatch,useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store";

import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from 'react-redux'

export const useAppDispatch = () => useReduxDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useReduxSelector;
