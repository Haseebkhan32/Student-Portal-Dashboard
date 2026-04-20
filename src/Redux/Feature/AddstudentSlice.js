import { createSlice } from "@reduxjs/toolkit";
import { AddStudents } from "../../Pages";

const initialState = JSON.parse(localStorage.getItem('studentsData')) || [];

const AddstudentSlice = createSlice({
    name: "Addstudent",
    initialState,
    reducers: {

        addStudents: (state, action) => {
            state.push(action.payload)
            localStorage.setItem( 'studentsData' , JSON.stringify(state ))
        },

    }
})

export const { addStudents } = AddstudentSlice.actions;
export default AddstudentSlice.reducer