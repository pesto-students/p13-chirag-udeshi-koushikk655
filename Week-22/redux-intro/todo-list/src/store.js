import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './Reducers/todosSlice'

export const store = configureStore({

  reducer: {
    todos: todosReducer
  },
})