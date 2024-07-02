import { Metrics } from "../metrics/Metrics";
import { Profile } from "../profile/Profile";
import { JsonValue } from "type-fest";
import { Subscription } from "../subscription/Subscription";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  metricsItems?: Array<Metrics>;
  profiles?: Array<Profile>;
  roles: JsonValue;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
  username: string;
};
