import { TAppUserData } from "@/enteties/user/app.types";

export interface IUserState {
  isAuth: boolean;
  userData: TAppUserData | null;
}
