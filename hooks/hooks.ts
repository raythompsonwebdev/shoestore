// import { TypedUseSelectorHook, useDispatch,useSelector } from "react-redux";
import { RootState } from "../app/store";

import {
  useSelector as useReduxSelector,
  //useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from 'react-redux'

//export const useAppDispatch = () => useReduxDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useReduxSelector;

/* Types */
// export type ReduxStore = typeof store
// export type ReduxState = ReturnType<typeof store.getState>
// export type ReduxThunkAction<ReturnType = void> = ThunkAction<
//   ReturnType,
//   ReduxState,
//   unknown,
//   Action
// >
