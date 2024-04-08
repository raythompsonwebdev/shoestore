import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit'
import productsReducer from './products/productSlice'
import cartReducer from './cart/cartSlice'
import accordianReducer from './accordian/accordianSlice'
import searchdataReducer from './searchdata/searchdataSlice'
import selectdataReducer from './selectdata/selectdataSlice'
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from 'react-redux'
//import { apiSlice } from '../features/productsApiSlice'
import { middleware } from './middleware'

export const store = configureStore({
  reducer: {
    cartItems: cartReducer,
    products: productsReducer,
    accordian: accordianReducer,
    searchdata: searchdataReducer,
    selectdata: selectdataReducer,
    //[apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
})

export const useDispatch = () => useReduxDispatch<ReduxDispatch>()
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector

// Infer the `RootState` and `AppDispatch` types from the store itself
export type ReduxStore = typeof store
export type ReduxState = ReturnType<typeof store.getState>
export type ReduxDispatch = typeof store.dispatch
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>
