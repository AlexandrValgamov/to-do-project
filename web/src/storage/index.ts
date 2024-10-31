import { TResponseUserData } from "@/enteties/user/api.types";
import { TAppUserData } from "@/enteties/user/app.types";

export class Storage {
  public setUserData(userData: TResponseUserData) {
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  public getUserData(): TAppUserData {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  }

  public removeUserData() {
    localStorage.removeItem("userData");
  }
}

export const storage = new Storage();
