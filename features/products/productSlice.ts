import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product{
  all?:string;
  cartImg: string;
  color: string;
  gender: string;
  imgUrl:string;
  likes?: number;
  name: string;
  price: string
  prodId:number;
  qty?: string;
  size: string;
  style:string;
  text?:string | undefined | null ;
  _id: string;
}

export interface ProductState {
  value: Product[] ;
}

const initialState: ProductState = {
  value: [],
};


export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
