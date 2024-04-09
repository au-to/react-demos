import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterStore'

const store = configureStore({
  counter: counterReducer
})

export default store