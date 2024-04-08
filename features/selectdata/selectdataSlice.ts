import type { ReduxState } from '../store'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { SelectBarType } from '../../types/index'

export interface SelectBarState {
  selectdataItems: SelectBarType[]
  status: string
  error: string | undefined | null
}

const initialState: SelectBarState = {
  selectdataItems: [],
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
}

const url = '/api/selectdata'

export const fetchSelectData = createAsyncThunk(
  'selectdata/fetchSelectData',
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(url)
      return resp.data.selectresults
    } catch (error) {
      return thunkAPI.rejectWithValue(`${error}`)
    }
  }
)

export const selectdataSlice = createSlice({
  name: 'selectdata',
  initialState,
  reducers: {
    selectdataAdded: (state, action: PayloadAction<SelectBarType>) => {
      state.selectdataItems.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSelectData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchSelectData.fulfilled,
        (state, action: PayloadAction<SelectBarType[]>) => {
          state.status = 'succeeded'
          state.selectdataItems = action.payload
        }
      )
      .addCase(fetchSelectData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const getSelectData = (state: ReduxState) =>
  state.selectdata.selectdataItems
export const getSelectDataStatus = (state: ReduxState) =>
  state.selectdata.status
export const getSelectDataError = (state: ReduxState) => state.selectdata.error

export const { selectdataAdded } = selectdataSlice.actions

export default selectdataSlice.reducer
