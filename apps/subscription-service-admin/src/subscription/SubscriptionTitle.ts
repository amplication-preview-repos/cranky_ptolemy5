import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "plan";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.plan?.toString() || String(record.id);
};
