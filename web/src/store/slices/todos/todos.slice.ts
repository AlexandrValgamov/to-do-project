import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { ITodosState } from "./types";
import { TResponseTodosData } from "@/enteties/todo/api-type";
import { mapTodosData } from "@/enteties/todo/mapping.api-to-app";

const initialState: ITodosState = {
  todosData: [],
  isLoading: false,
};
// TODO add delete todo method
const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (
      state: Draft<ITodosState>,
      { payload }: PayloadAction<TResponseTodosData>
    ) => {
      state.todosData = mapTodosData(payload);
    },
    addTodo: (
      state: Draft<ITodosState>,
      { payload }: PayloadAction<TResponseTodosData>
    ) => {
      state.todosData = [...mapTodosData(payload), ...state.todosData];
    },
    setTodosLoading: (
      state: Draft<ITodosState>,
      { payload }: PayloadAction<boolean>
    ) => {
      state.isLoading = payload;
    },
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice.reducer;
