import { configureStore } from "@reduxjs/toolkit";
import collaborativeReducer from './collaborativeSlice';


const store = configureStore({
    reducer : {
        collaborative:collaborativeReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;