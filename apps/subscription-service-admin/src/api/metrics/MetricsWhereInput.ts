import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type MetricsWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  typeField?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  value?: FloatNullableFilter;
};
