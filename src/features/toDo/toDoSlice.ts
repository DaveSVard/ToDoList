import { createSlice } from "@reduxjs/toolkit";
import { ToDo } from "../type";
import { RootState } from "../../app/store";

if(!localStorage.base || JSON.parse(localStorage.base).length == 0) {
    localStorage.setItem("base", JSON.stringify(
        [
            {id: 1, name: "ToDo", done: false, description: "Do something"},
            {id: 2, name: "ToDo", done: false, description: "Do something"},
            {id: 3, name: "ToDo", done: false, description: "Do something"},
        ]))
}

const initialState:{toDoList: ToDo[]} = {
    toDoList: localStorage.base ? JSON.parse(localStorage.base) : []
}


export const toDoSlice = createSlice({
    name: "toDo",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            state.toDoList.push(action.payload)
            localStorage.setItem("base", JSON.stringify(state.toDoList))
            
        },
        deleteToDo: (state, action) => {
            state.toDoList = state.toDoList.filter(elm => elm.id != action.payload)
            localStorage.setItem("base", JSON.stringify(state.toDoList))
        },
        doToDo: (state, action) => {
            state.toDoList.find((elm) => {
                if (elm.id == action.payload) {
                    elm.done = !elm.done;
                }
            });
            localStorage.setItem("base", JSON.stringify(state.toDoList))
        }
    }
})

export const {addToDo, deleteToDo, doToDo} = toDoSlice.actions
export const selectToDo = (state: RootState) => state.toDo.toDoList
export default toDoSlice.reducer