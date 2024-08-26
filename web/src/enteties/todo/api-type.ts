type TTodoData = {
  _id: string,
  userId: string,
  title: string,
  description: string,
  createdAt: string,
  priority: "low" | "medium" | "high" | "highest",
}

export type TResponseTodosData = {
  data: TTodoData[];
}

export type TCreateTodoRequest = {
  title: string;
  description: string;
  userId: string;
}

export type TCreateTodoResponse = {
  message: string;
  data: TTodoData[];
}