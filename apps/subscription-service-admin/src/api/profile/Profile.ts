import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Profile = {
  address: string | null;
  avatar: JsonValue;
  createdAt: Date;
  id: string;
  phone: string | null;
  updatedAt: Date;
  user?: User | null;
};
