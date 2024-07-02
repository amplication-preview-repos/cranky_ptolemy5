import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MetricsCreateInput = {
  timestamp?: Date | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
  value?: number | null;
};
