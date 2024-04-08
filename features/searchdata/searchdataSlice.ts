import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit'
import axios from 'axios'
import type { ReduxState } from '../store'
import { SearchBarType } from '../../types/index'

export interface SearchBarState {
  searchdataItems: SearchBarType[]
  status: string
  error: string | undefined | null
}
const initialState: SearchBarState = {
  searchdataItems: [],
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
}

const url = '/api/searchdata'

export const fetchSearchData = createAsyncThunk(
  'searchdata/fetchSearchData',
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(url)
      return resp.data.searchresults
    } catch (error) {
      return thunkAPI.rejectWithValue(`${error}`)
    }
  }
)

export const searchdataSlice = createSlice({
  name: 'searchbar',
  initialState,
  reducers: {
    searchdataAdded: (state, action: PayloadAction<SearchBarType>) => {
      state.searchdataItems.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchSearchData.fulfilled,
        (state, action: PayloadAction<SearchBarType[]>) => {
          state.status = 'succeeded'
          state.searchdataItems = action.payload
        }
      )
      .addCase(fetchSearchData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const getSearchData = (state: ReduxState) =>
  state.searchdata.searchdataItems
export const getSearchBarStatus = (state: ReduxState) => state.searchdata.status
export const getSearchBarError = (state: ReduxState) => state.searchdata.error

export const { searchdataAdded } = searchdataSlice.actions

export default searchdataSlice.reducer
