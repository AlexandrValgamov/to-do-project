import { TApiTodoRequest } from "./api-type";
import { TAppTodoRequest } from "./app-types";

export function mapAppToApiTodosData(data: TAppTodoRequest): TApiTodoRequest {
  return {
    userId: data.userId,
    description: data.description,
    ...(data.title ? { title: data.title } : {}),
    ...(data.tags.length > 0 ? { tags: data.tags } : {}),
    ...(data.priority ? { priority: data.priority } : {}),
    ...(data.targetDate ? { targetDate: data.targetDate.toISOString() } : {}),
  };
}
