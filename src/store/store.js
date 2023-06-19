import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import boardSlice from "./boardSlice";

export default configureStore({
    reducer: {
        todo: todoSlice,
        board: boardSlice
    }
})