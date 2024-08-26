type TTodoData = {
  _id: string;
  userId: string;
  title: string;
  description: string;
  createdAt: string;
  priority: "low" | "medium" | "high" | "highest",
};

export type TAppTodosData = TTodoData[];
