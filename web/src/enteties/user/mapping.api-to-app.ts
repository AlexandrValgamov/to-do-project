import { TResponseUserData } from "./api.types.ts";
import { TAppUserData } from "./app.types.ts";

export function mapUserData(data: TResponseUserData): TAppUserData {
  return { ...data };
}
