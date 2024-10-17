import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from '../types/Types'

const initialState :TodoInitialState = {
    todos: []
}

export const TodoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        createTodo : (state:TodoInitialState,action:PayloadAction<TodoType>) => {
            state.todos = [...state.todos,action.payload];
        }
    }
})

export const {createTodo} = TodoSlice.actions;
export default TodoSlice.reducer;