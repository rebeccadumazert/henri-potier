import cartSlice from './cart'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
})
