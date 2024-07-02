import { Metrics as TMetrics } from "../api/metrics/Metrics";

export const METRICS_TITLE_FIELD = "typeField";

export const MetricsTitle = (record: TMetrics): string => {
  return record.typeField?.toString() || String(record.id);
};
