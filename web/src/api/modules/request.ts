import { Axios } from "axios";

export default class ApiRequest {
  axios: Axios;

  constructor(axios: Axios) {
    this.axios = axios;
  }

  fetch() {
    return this.axios.get("/");
  }
}
