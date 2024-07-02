import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MetricsListRelationFilter } from "../metrics/MetricsListRelationFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  metricsItems?: MetricsListRelationFilter;
  profiles?: ProfileListRelationFilter;
  subscriptions?: SubscriptionListRelationFilter;
  username?: StringFilter;
};
