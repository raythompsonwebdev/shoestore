import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";
import accordianReducer from "../features/accordian/accordianSlice";
import searchbarReducer from "../features/searchbar/searchbarSlice";
import selectbarReducer from "../features/selectbar/selectbarSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
//import { apiSlice } from '../features/productsApiSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    accordian: accordianReducer,
    searchbar:searchbarReducer,
    selectbar: selectbarReducer,
    //[apiSlice.reducerPath]: apiSlice.reducer
  },
  devTools: true,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(apiSlice.middleware)
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type ReduxStore = typeof store
export type RootState = ReturnType<typeof store.getState>



