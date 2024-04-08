import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '../createAppAsyncThunk'
import axios from 'axios'
import type { ReduxState } from '../store'
import { AccordianType } from '../../types/index'

export interface AccordianState {
  accordianItems: AccordianType[]
  status: string
  error: string | undefined | null
}
const initialState: AccordianState = {
  accordianItems: [],
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
}

const url = '/api/accordiandata'

export const fetchAccordian = createAppAsyncThunk(
  'accordian/fetchAccordian',
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(url)
      return resp.data.accordian
    } catch (error) {
      return thunkAPI.rejectWithValue(`${error}`)
    }
  }
)

export const accordianSlice = createSlice({
  name: 'accordian',
  initialState,
  reducers: {
    accordianAdded: (state, action: PayloadAction<AccordianType>) => {
      state.accordianItems.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccordian.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchAccordian.fulfilled,
        (state, action: PayloadAction<AccordianType[]>) => {
          state.status = 'succeeded'
          state.accordianItems = action.payload
        }
      )
      .addCase(fetchAccordian.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const selectAllAccordian = (state: ReduxState) =>
  state.accordian.accordianItems
export const getAccordianStatus = (state: ReduxState) => state.accordian.status
export const getAccordianError = (state: ReduxState) => state.accordian.error

export const { accordianAdded } = accordianSlice.actions

export default accordianSlice.reducer
