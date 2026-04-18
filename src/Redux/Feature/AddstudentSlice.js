import { createSlice } from "@reduxjs/toolkit";
import { AddStudents } from "../../Pages";

const initialState = [];

const AddstudentSlice = createSlice({
    name:"Addstudent",
    initialState,
    reducers : {

    addStudents: (state,action)=>{
        state.push(action.payload)
    },

}})

export const { addStudents} = AddstudentSlice.actions;
export default AddstudentSlice.reducer