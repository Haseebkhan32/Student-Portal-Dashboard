import { configureStore } from "@reduxjs/toolkit";
import studentReducer from './Feature/AddstudentSlice'
const store = configureStore({
    reducer: {
        studentReducer
    }

})
export default store;