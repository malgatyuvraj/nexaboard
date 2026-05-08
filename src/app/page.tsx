import Link from "next/link";
import { Nav } from "@/components/nav";
import { quickStats, metrics } from "@/lib/metrics";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Nav />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(99,102,241,0.16),_transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
              New in NexaBoard · real-time SaaS analytics
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              The command center for your SaaS growth.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              NexaBoard unifies revenue, engagement, retention, and product
              performance in one clean workspace so your team can act fast.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Launch dashboard
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                See features
              </a>
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Live performance</p>
                  <h2 className="text-2xl font-semibold text-white">
                    Team revenue snapshot
                  </h2>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
                  +14.6% this quarter
                </span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {metrics.slice(0, 2).map((metric) => (
                  <div
                    key={metric.key}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-sm text-slate-400">{metric.label}</p>
                    <p className="mt-3 text-3xl font-semibold text-white">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm text-cyan-300">{metric.delta}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Built for operators
              </p>
              <p className="mt-4 text-lg leading-7 text-slate-200">
                Fast visual reporting, clean API surfaces, and a dashboard
                experience that feels modern from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Revenue intelligence", "Track MRR, ARR, and expansion at a glance."],
              ["Retention signals", "Spot churn risk before it becomes a revenue problem."],
              ["Product usage", "Understand how users move through your app."],
            ].map(([title, body]) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Ready to ship
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Start with the dashboard.
              </h2>
            </div>
            <Link
              href="/dashboard"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Open NexaBoard
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
