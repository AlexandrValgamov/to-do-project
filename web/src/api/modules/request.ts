import {
  TApiTodoRequest,
  TCreateTodoResponse,
  TDeleteTodoResponse,
  TResponseTodosData,
} from "@/enteties/todo/api-type";
import { TResponseUserData } from "@/enteties/user/api.types";
import { TLoginRequest } from "@/enteties/user/app.types";
import { Axios } from "axios";

export default class ApiRequest {
  axios: Axios;

  constructor(axios: Axios) {
    this.axios = axios;
  }

  async getUserData(): Promise<TResponseUserData> {
    const { data } = await this.axios.get("/users");
    return data;
  }

  async getTodosByUserId(userId: string): Promise<TResponseTodosData> {
    const { data } = await this.axios.get(`/todos/${userId}`);
    return data;
  }

  async createTodo(data: TApiTodoRequest): Promise<TCreateTodoResponse> {
    const { data: newData } = await this.axios.post("/todos", data);
    return newData;
  }

  async deleteTodo(todoId: string): Promise<TDeleteTodoResponse> {
    const { data } = await this.axios.delete(`/todos/${todoId}`);
    return data;
  }

  async createUser(data: TLoginRequest): Promise<TResponseUserData> {
    const { data: newData } = await this.axios.post("/signup", data);
    return newData;
  }

  async login(data: TLoginRequest): Promise<TResponseUserData> {
    const { data: newData } = await this.axios.post("/signin", data);
    return newData;
  }
}
