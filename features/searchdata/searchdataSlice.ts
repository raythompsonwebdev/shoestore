import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../../app/store'
import {SearchBarType} from '../../types/index'

export interface SearchBarState {
  searchdataItems: SearchBarType[];
  status: string;
  error: string | undefined | null;
}
const initialState : SearchBarState = {
  searchdataItems: [],
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
} ;

const url = 'http://localhost:3000/api/searchdata';

export const fetchSearchData = createAsyncThunk(
  'searchdata/fetchSearchData',
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(url);
      return resp.data;

    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const searchdataSlice = createSlice({
  name: "searchbar",
  initialState,
  reducers: {
    searchdataAdded: (state, action: PayloadAction<SearchBarType>) => {
      state.searchdataItems.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchSearchData.fulfilled, (state, action : PayloadAction<SearchBarType[]>) => {
        state.status = 'succeeded'
        state.searchdataItems = action.payload;
      })
      .addCase(fetchSearchData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      });
  },
});

export const getSearchData = (state: RootState ) => state.searchdata.searchdataItems;
export const getSearchBarStatus = (state: RootState ) => state.searchdata.status;
export const getSearchBarError = (state: RootState ) => state.searchdata.error;

export const { searchdataAdded } = searchdataSlice.actions;

export default searchdataSlice.reducer;
