import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { current: [] },
  reducers: {
    addToCart(state, action) {
      state.current.push(action.payload)
    },
  },
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
