import { TResponseTodosData } from "./api-type.ts";
import { TAppTodosData } from "./app-types.ts";

export function mapTodosData(data: TResponseTodosData): TAppTodosData {
  return {
    ...data.data,
  };
}
