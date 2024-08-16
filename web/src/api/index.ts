import axios, { AxiosInstance } from "axios";
import ApiRequest from "./modules/request";

class Api {
  axios: AxiosInstance;

  ApiRequest: ApiRequest;

  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:3001",
    });
    this.ApiRequest = new ApiRequest(this.axios);
  }
}

const api = new Api();

export default api;
