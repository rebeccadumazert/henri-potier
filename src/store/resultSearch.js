import { createSlice } from '@reduxjs/toolkit'

const resultsBooksSlice = createSlice({
  name: 'resultsSearch',
  initialState: { current: [] },
  reducers: {
    booksBySearch(state, action) {
      state.current.push(action.payload)
    },
  },
})
export const { booksBySearch } = resultsBooksSlice.actions
export default resultsBooksSlice.reducer
