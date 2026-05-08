import { MetricCard } from "@/components/metric-card";
import { Nav } from "@/components/nav";
import { metrics } from "@/lib/metrics";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Nav />

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Dashboard
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white">
              Performance overview
            </h1>
            <p className="mt-3 max-w-2xl text-slate-300">
              Keep track of business health with fast, readable metrics and an
              API-first backend.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
            Last refreshed: just now
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.key} metric={metric} />
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Insights</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Revenue growth", "+18.2% vs. last month"],
                ["User activation", "81% of new signups reached the first milestone"],
                ["Churn watchlist", "3 enterprise accounts need attention"],
                ["Session depth", "Average sessions increased by 9.1%"],
              ].map(([title, value]) => (
                <div key={title} className="rounded-2xl bg-slate-900/80 p-4">
                  <p className="text-sm text-slate-400">{title}</p>
                  <p className="mt-2 text-base font-medium text-white">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-6">
            <h2 className="text-xl font-semibold text-white">API endpoints</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>
                <span className="font-medium text-cyan-300">GET</span> /health
              </li>
              <li>
                <span className="font-medium text-cyan-300">GET</span> /metrics
              </li>
            </ul>
            <p className="mt-6 text-sm leading-6 text-slate-300">
              These routes power health checks and metric retrieval for external
              monitoring or dashboards.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
