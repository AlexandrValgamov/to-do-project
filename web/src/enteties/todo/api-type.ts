type TTodoData = {
  _id: string,
  userId: string,
  title: string,
  description: string,
  createdAt: string,
}

export type TResponseTodosData = {
  data: TTodoData[];
}
