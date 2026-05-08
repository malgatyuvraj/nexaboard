import type { Metric } from "@/lib/metrics";

export function MetricCard({ metric }: { metric: Metric }) {
  const trendClass =
    metric.trend === "up"
      ? "text-emerald-300 bg-emerald-400/10 ring-emerald-400/20"
      : "text-rose-300 bg-rose-400/10 ring-rose-400/20";

  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-400">{metric.label}</p>
          <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white">
            {metric.value}
          </h3>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${trendClass}`}
        >
          {metric.delta}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{metric.description}</p>
    </article>
  );
}
