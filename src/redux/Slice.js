import {createSlice} from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        todos: []
    },
    reducers: {
        // increment(state) {
        //     state.count = state.count + 1
        // },
        // decrement(state) {
        //     state.count = state.count - 1
        // },
        // addTodo(state, action) {
        //     state.todos.push(action.payload)
        // },
        // removeLastTodo(state) {
        //     state.todos.pop()
        // }
        getApi(state, action){
          state.todos = action.payload
        }
    }
})

export default toolkitSlice.reducer
export const {increment, decrement, addTodo, removeLastTodo, getApi} = toolkitSlice.actions