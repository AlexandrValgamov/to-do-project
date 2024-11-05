type TTodoData = {
  _id: string,
  userId: string,
  title?: string,
  description: string,
  date: string,
  priority?: number,
  tags?: string[],
  createdAt: string,
}

export type TResponseTodosData = {
  data: TTodoData[];
}

export type TCreateTodoRequest = {
  userId: string;
  title?: string;
  description: string;
  date?: Date;
  priority?: number;
  tags?: string[];
}

export type TCreateTodoResponse = {
  message: string;
  data: TTodoData[];
}