import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  address?: string | null;
  avatar?: InputJsonValue;
  phone?: string | null;
  user?: UserWhereUniqueInput | null;
};
