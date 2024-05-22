import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./CreateSlice"
const Store = configureStore({
    reducer:{
        TodoReducer : TodoReducer
    }
})

export default Store