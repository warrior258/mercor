import { createSlice } from "@reduxjs/toolkit";
import { progresses } from "../data";

const boardSlice = createSlice({
    name: 'board',
    initialState: {
        data: progresses
    },
    reducers: {
        add: (state, action) => {
            state.data.unshift(action.payload)
        }
    }
})

export const { add } = boardSlice.actions;
export default boardSlice.reducer;