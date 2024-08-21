import { TAppTodosData } from "@/enteties/todo/app-types";

export interface ITodosState {
  todosData: TAppTodosData | [];
  isLoading: boolean;
}
