import type { ReduxState } from '../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '../createAppAsyncThunk'
import axios from 'axios'
import { ProductType } from '../../types/index'
export interface ProductsState {
  productItems: Array<ProductType>
  status: string
  error: string | undefined | null
}

const initialState: ProductsState = {
  productItems: [],
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
}

const url = '/api/productsdata'

export const fetchProducts = createAppAsyncThunk(
  'products/fetchProducts',
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(url)
      return resp.data.products
    } catch (error) {
      return thunkAPI.rejectWithValue(`${error}`)
    }
  }
)

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productAdded: (state, action: PayloadAction<ProductType>) => {
      state.productItems.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Array<ProductType>>) => {
          state.status = 'succeeded'
          state.productItems = action.payload
        }
      )
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const selectAllProducts = (state: ReduxState) =>
  state.products.productItems
export const getProductsStatus = (state: ReduxState) => state.products.status
export const getProductsError = (state: ReduxState) => state.products.error

// function should only accept one argument - state - function returns function with name parameter added as an argument
// export const selectProductByName = (state: ReduxState) => (name: string) =>
//   state.products.productItems.find((product) => product.name === name)

export const selectProductByName = (
  state: ReduxState,
  name: string | string[] | undefined
) => state.products.productItems.find((product) => product.name === name)

export const { productAdded } = productSlice.actions

export default productSlice.reducer
