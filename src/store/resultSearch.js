import { createSlice } from '@reduxjs/toolkit'

const resultsBooksSlice = createSlice({
  name: 'resultsSearch',
  initialState: { current: [] },
  reducers: {
    booksBySearch(state, action) {
      return action.payload
    },
  },
})
export const { booksBySearch } = resultsBooksSlice.actions
export default resultsBooksSlice.reducer
