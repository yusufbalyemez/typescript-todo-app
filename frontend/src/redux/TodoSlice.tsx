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
        },
        removeTodoById:(state:TodoInitialState,action:PayloadAction<Number>) => {
            state.todos = [...state.todos.filter((todo:TodoType)=> todo.id !== action.payload )]
        },
        updateTodoById:(state:TodoInitialState,action:PayloadAction<TodoType>) => {
            state.todos = [...state.todos.map((todo:TodoType)=> todo.id !== action.payload.id ? todo:action.payload)]
        }
    }
})

export const {createTodo,removeTodoById,updateTodoById} = TodoSlice.actions;
export default TodoSlice.reducer;