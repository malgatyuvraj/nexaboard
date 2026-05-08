export type MetricKey = "revenue" | "users" | "churn" | "sessionTime";

export type Metric = {
  key: MetricKey;
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
  description: string;
};

export const metrics: Metric[] = [
  {
    key: "revenue",
    label: "Revenue",
    value: "$128.4K",
    delta: "+18.2% MoM",
    trend: "up",
    description: "Recurring revenue from active subscriptions and add-ons.",
  },
  {
    key: "users",
    label: "Users",
    value: "24,801",
    delta: "+4.7% WoW",
    trend: "up",
    description: "Total active users across teams, workspaces, and roles.",
  },
  {
    key: "churn",
    label: "Churn",
    value: "2.1%",
    delta: "-0.4 pts",
    trend: "down",
    description: "Logo churn measured over the trailing 30-day window.",
  },
  {
    key: "sessionTime",
    label: "Session Time",
    value: "12m 43s",
    delta: "+9.1%",
    trend: "up",
    description: "Average engagement per session across the core dashboard.",
  },
];

export const quickStats = [
  { label: "API uptime", value: "99.98%" },
  { label: "P95 latency", value: "182 ms" },
  { label: "Open alerts", value: "3" },
];
