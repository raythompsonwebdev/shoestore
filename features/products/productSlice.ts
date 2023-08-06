import type { RootState } from '../../app/store'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {ProductType} from '../../types/index'
export interface ProductsState {
  productItems: ProductType[];
  status: string;
  error: string | undefined | null;
}

const initialState : ProductsState = {
  productItems: [] ,
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
} ;

const url = 'http://localhost:3000/api/productsdata';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(url);
      return resp.data ;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    productAdded: (state , action: PayloadAction<ProductType>) => {
      console.log(state)
      state.productItems.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action : PayloadAction<ProductType[]>) => {
        // console.log(action.payload);
        state.status = 'succeeded'
        state.productItems = action.payload ;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      });
  },
});

export const selectAllProducts = (state: RootState ) => state.products.productItems;
export const getProductsStatus = (state: RootState ) => state.products.status;
export const getProductsError = (state: RootState ) => state.products.error;

export const selectProductByName = (state : RootState, name:string) =>
    state.products.productItems.find((product: { name: string; }) => product.name === name);

export const { productAdded } = productSlice.actions;

export default productSlice.reducer;
