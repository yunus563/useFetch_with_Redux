import {combineReducers, configureStore} from "@reduxjs/toolkit";
import toolkitSlice from "./Slice";

const rootReducer = combineReducers({
    toolkit: toolkitSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})