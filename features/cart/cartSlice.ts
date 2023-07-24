import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://localhost:3000/homepageproducts';

const initialState = {
  cartItems: [],
  amount: 21,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      const resp = await fetch(url);

      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  },
);

export default cartSlice.reducer;
