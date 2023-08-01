import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../../app/store'
import {SearchBar} from '../../types/index'

export interface SearchBarState {
  searchbarItems: Array<SearchBar>;
  status: string;
  error: string | undefined | null;
}
const initialState : SearchBarState = {
  searchbarItems: [],
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
} ;

const url = 'http://localhost:3000/api/searchbardata';

export const fetchSearchBar = createAsyncThunk(
  'accordian/fetchSearchBar',
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(url);
      console.log(resp)
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const searchbarSlice = createSlice({
  name: "searchbar",
  initialState,
  reducers: {
    searchbarAdded: (state, action: PayloadAction<SearchBar>) => {

      state.searchbarItems.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchBar.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchSearchBar.fulfilled, (state, action : PayloadAction<Array<SearchBar>>) => {
        state.status = 'succeeded'
        state.searchbarItems = action.payload;
      })
      .addCase(fetchSearchBar.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      });
  },
});

export const selectAllSearchBar = (state: RootState ) => state.searchbar.searchbarItems;
export const getSearchBarStatus = (state: RootState ) => state.searchbar.status;
export const getSearchBarError = (state: RootState ) => state.searchbar.error;

export const { searchbarAdded } = searchbarSlice.actions;

export default searchbarSlice.reducer;
