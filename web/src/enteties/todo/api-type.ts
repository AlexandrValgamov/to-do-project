export type TResponseTodoData = {
  _id: string;
  userId: string;
  title?: string;
  description: string;
  targetDate?: string;
  priority?: number;
  tags?: string[];
  createdAt: string;
  completed: boolean;
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
  completed?: boolean;
};

export type TCreateTodoResponse = {
  message: string;
  data: TResponseTodoData[];
};
