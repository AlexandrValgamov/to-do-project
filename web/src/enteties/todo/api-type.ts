export type TResponseTodoData = {
  _id: string;
  userId: string;
  title?: string;
  description: string;
  targetDate?: string;
  priority?: number;
  tags?: string[];
  createdAt: string;
};

export type TResponseTodosData = {
  data: TResponseTodoData[];
};

export type TApiTodoRequest = {
  userId: string;
  title?: string;
  description: string;
  targetDate?: string;
  priority?: number;
  tags?: string[];
};

export type TCreateTodoResponse = {
  message: string;
  data: TResponseTodoData[];
};
