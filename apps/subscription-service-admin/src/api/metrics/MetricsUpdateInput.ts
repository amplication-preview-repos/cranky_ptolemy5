import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MetricsUpdateInput = {
  timestamp?: Date | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
  value?: number | null;
};
