import type { RootState } from '../../app/store'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
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

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(url)
      return resp.data.products
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong')
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
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Array<ProductType>>) => {
          state.status = 'succeeded'
          state.productItems = action.payload
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const selectAllProducts = (state: RootState) =>
  state.products.productItems
export const getProductsStatus = (state: RootState) => state.products.status
export const getProductsError = (state: RootState) => state.products.error

export const selectProductByName = (state: RootState, name: string | string[] | undefined) =>
  state.products.productItems.find((product) => product.name === name)

export const { productAdded } = productSlice.actions

export default productSlice.reducer
