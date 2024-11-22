export type TTodoData = {
  id: string;
  userId: string;
  title: string | null;
  description: string;
  priority: number | null;
  targetDate: string | null;
  tags: string[];
  createdAt: string;
  completed: boolean;
};

export type TAppTodosData = TTodoData[];

export type TAppTodoRequest = {
  userId: string;
  title: string | null;
  description: string;
  targetDate: Date | null;
  priority: number | null;
  tags: string[];
  completed?: boolean;
}
