import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/cartitems';




// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initialState = {
    cartItems: [],
    qty: 21,
    total: 0,
    isLoading: true,
};

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name, thunkAPI) => {
    try {
      console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      const resp = await axios.get(url);
      // console.log(resp)
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action : PayloadAction<number>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item:{prodId:number}) => item.prodId !== itemId);
    },
    increase: (state, { payload }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const cartItem : any = state.cartItems.find((item:{prodId:number}) => item.prodId === payload.prodId);
      console.log(cartItem)
      cartItem.qty = cartItem?.qty + 1;
    },
    decrease: (state, { payload }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const cartItem :any = state.cartItems.find((item:{prodId:number}) => item.prodId === payload.prodId);
      cartItem.qty = cartItem?.qty - 1;
    },
    calculateTotals: (state) => {
      let qty = 0;
      let total = 0;
      state.cartItems.forEach((item:{qty:number, price: number}) => {
        qty += item.qty;
        total += item.qty * item.price;
      });
      state.qty = qty;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
  },
);

//export const selectAllProducts = (state) => state.cartItems.cartItems;

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
