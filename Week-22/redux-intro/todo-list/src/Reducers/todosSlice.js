import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push({text: action.payload, completed: false})
            // console.log("done", action)
        },
        deleteTask: (state, action) => {
            state.splice(action.payload, 1)
        },
        markAsCompleted: (state, action) => {
            state[action.payload].completed = true;
        }

    }
})
export const { addTask, deleteTask, markAsCompleted} = todosSlice.actions
export default todosSlice.reducer