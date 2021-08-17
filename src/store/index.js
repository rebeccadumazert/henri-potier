import cartSlice from './cart'
import { configureStore } from '@reduxjs/toolkit'
import resultsBooksSlice from './resultSearch'

export default configureStore({
  reducer: {
    cart: cartSlice,
    resultsSearch: resultsBooksSlice,
  },
})
