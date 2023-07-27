import { configureStore , type ThunkAction, type Action} from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";
import { apiSlice } from '../features/productsApiSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/* Types */
export type ReduxStore = typeof store
export type ReduxState = ReturnType<typeof store.getState>
export type ReduxDispatch = typeof store.dispatch
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>
