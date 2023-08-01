import type { RootState } from '../../app/store'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {SelectBar} from '../../types/index'

export interface SelectBarState {
  selectbarItems: SelectBar[];
  status: string;
  error: string | undefined | null;
}

const initialState : SelectBarState = {
  selectbarItems: [] ,
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
} ;

const url = 'http://localhost:3000/api/selectdata';

export const fetchSelectData = createAsyncThunk(
  'selectdata/fetchSelectData',
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(url);
      return resp.data ;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const selectbarSlice = createSlice({
  name: "selectbar",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selectbarAdded: (state , action: PayloadAction<SelectBar>) => {
      console.log(state)
      state.selectbarItems.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSelectData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchSelectData.fulfilled, (state, action : PayloadAction<SelectBar[]>) => {
        // console.log(action.payload);
        state.status = 'succeeded'
        state.selectbarItems = action.payload ;
      })
      .addCase(fetchSelectData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      });
  },
});

export const selectAllSelectBar = (state: RootState ) => state.selectbar.selectbarItems;
export const getSelectBarStatus = (state: RootState ) => state.selectbar.status;
export const getSelectBarError = (state: RootState ) => state.selectbar.error;

export const { selectbarAdded } = selectbarSlice.actions;

export default selectbarSlice.reducer;
