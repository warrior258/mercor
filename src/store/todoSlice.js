import { createSlice } from "@reduxjs/toolkit";
import { todos } from "../data";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        data: todos
    },
    reducers : {
        remove: (state, action) => {
            state.data = state.data.filter((task) => task.id !== action.payload);
        }   
    }
});

export const { remove } = todoSlice.actions;
export default todoSlice.reducer;