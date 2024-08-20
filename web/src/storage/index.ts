import { TResponseUserData } from "@/enteties/user/api.types";

export class Storage {
  public setUserData(userData: TResponseUserData) {
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  public getUserData() {
    return JSON.parse(localStorage.getItem("userData") || "{}");
  }

  public removeUserData() {
    localStorage.removeItem("userData");
  }
}

export const storage = new Storage();
