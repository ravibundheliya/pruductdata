import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './store/counterSlice'
import cartSlice from './store/cartSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
  },
})