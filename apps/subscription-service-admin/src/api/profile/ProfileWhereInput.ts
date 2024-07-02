import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  address?: StringNullableFilter;
  avatar?: JsonFilter;
  id?: StringFilter;
  phone?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
