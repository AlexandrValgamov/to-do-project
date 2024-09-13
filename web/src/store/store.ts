import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user/user.slice.ts";
import todosReducer from "./slices/todos/todos.slice.ts";

const appReducer = combineReducers({
  userSlice: userReducer,
  todosSlice: todosReducer,
});

export const store = configureStore({
  reducer: appReducer,
});
 
export type RootState = ReturnType<typeof appReducer>;
export type AppDispatch = typeof store.dispatch;
export const dispatch = store.dispatch;
