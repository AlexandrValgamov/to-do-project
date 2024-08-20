import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { ITodosState } from "./types";
import { TResponseTodosData } from "@/enteties/todo/api-type";
import { mapTodosData } from "@/enteties/todo/mapping.api-to-app";

const initialState: ITodosState = {
  todosData: null,
};

const todosSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state: Draft<ITodosState>,
      { payload }: PayloadAction<TResponseTodosData>
    ) => {
      state.todosData = mapTodosData(payload);
    },
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice.reducer;
