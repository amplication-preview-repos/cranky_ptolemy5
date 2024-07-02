import { User } from "../user/User";

export type Metrics = {
  createdAt: Date;
  id: string;
  timestamp: Date | null;
  typeField: string | null;
  updatedAt: Date;
  user?: User | null;
  value: number | null;
};
