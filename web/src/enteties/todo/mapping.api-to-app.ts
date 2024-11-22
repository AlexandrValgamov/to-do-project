import { TResponseTodosData } from "./api-type.ts";
import { TAppTodosData } from "./app-types.ts";

export function mapTodosData(data: TResponseTodosData): TAppTodosData {
  return Array.isArray(data?.data) ? data.data.map((item) => {
    console.log("item.priority", item.priority);
    
    return {
      id: item._id,
      userId: item.userId,
      title: item.title || null,
      description: item.description,
      priority: item.priority ?? null,
      targetDate: item.targetDate ? item.targetDate : null,
      tags: item.tags || [],
      createdAt: item.createdAt,
      completed: item.completed,
    };
  }) : [];
}
