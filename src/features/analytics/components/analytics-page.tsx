"use client";

import * as React from "react";
import {
  BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calendar, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { mockRevenueData } from "@/lib/mock-data/analytics";
import { formatCurrency } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";

// Derived monthly table data
const monthlyRows = mockRevenueData.map((d, i, arr) => {
  const prev = arr[i - 1];
  const net = d.revenue - d.expenses;
  const margin = Math.round((net / d.revenue) * 100);
  const growth = prev ? Math.round(((d.revenue - prev.revenue) / prev.revenue) * 100) : null;
  return { ...d, net, margin, growth };
});

function DeltaIcon({ dir }: { dir: "up" | "down" | "neutral" }) {
  if (dir === "up") return <TrendingUp className="h-3.5 w-3.5 text-moss shrink-0" />;
  if (dir === "down") return <TrendingDown className="h-3.5 w-3.5 text-red-500 shrink-0" />;
  return <Minus className="h-3.5 w-3.5 text-smoke shrink-0" />;
}

function dirColor(dir: "up" | "down" | "neutral"): string {
  if (dir === "up") return "text-moss";
  if (dir === "down") return "text-red-600";
  return "text-smoke";
}

export function AnalyticsPage() {
  const { t, locale } = useTranslation();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const scorecards = [
    {
      label: t.analytics.grossRevenue,
      value: "$332,440",
      sub: locale === "tr" ? "Kümülatif YTD" : "Cumulative YTD",
      delta: "+14.2%",
      dir: "up" as const,
    },
    {
      label: t.analytics.operatingMargin,
      value: "58.2%",
      sub: locale === "tr" ? "Giderler sonrası" : "After expenses",
      delta: "+4.1 pp",
      dir: "up" as const,
    },
    {
      label: t.analytics.expenses,
      value: "$139,900",
      sub: locale === "tr" ? "Kümülatif YTD" : "Cumulative YTD",
      delta: "-2.4%",
      dir: "up" as const,
    },
    {
      label: t.analytics.avgTransaction,
      value: "$36,938",
      sub: "Jan – Sep 2026",
      delta: locale === "tr" ? "9 dönem" : "9 periods",
      dir: "neutral" as const,
    },
    {
      label: locale === "tr" ? "Zirve Ayı" : "Peak Month",
      value: locale === "tr" ? "Ağustos" : "August",
      sub: "$45,200",
      delta: "+14.4%",
      dir: "up" as const,
    },
    {
      label: t.analytics.growthRate,
      value: "+14.2%",
      sub: locale === "tr" ? "Yıllık Gelir" : "Revenue YoY",
      delta: locale === "tr" ? "Yüksek" : "Outperforming",
      dir: "up" as const,
    },
  ];

  return (
    <PageContainer className="space-y-8">
      <PageHeader
        title={t.analytics.title}
        description={t.analytics.description}
        action={
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="h-3.5 w-3.5 mr-1.5" />
              Jan – Sep 2026
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-3.5 w-3.5 mr-1.5" />
              {t.analytics.exportCsv}
            </Button>
          </div>
        }
      />

      {/* ── 1. Horizontal Performance Scorecard ── */}
      <Card className="overflow-hidden">
        <CardHeader>
          <div>
            <CardTitle>{t.analytics.scorecardTitle}</CardTitle>
            <CardDescription>{t.analytics.scorecardDescription}</CardDescription>
          </div>
        </CardHeader>
        <div className="grid grid-cols-2 divide-x divide-y divide-parchment sm:grid-cols-3 lg:grid-cols-6 border-t border-parchment">
          {scorecards.map((s) => (
            <div key={s.label} className="p-4 space-y-1.5 hover:bg-sand/20 transition-colors">
              <p className="text-[10px] font-mono uppercase tracking-[0.06em] text-smoke">{s.label}</p>
              <p className="text-[18px] font-medium text-ink leading-none tracking-tight">{s.value}</p>
              <p className="text-[11px] text-smoke">{s.sub}</p>
              <div className="flex items-center gap-1 pt-0.5">
                <DeltaIcon dir={s.dir} />
                <span className={`text-[11px] font-medium font-mono ${dirColor(s.dir)}`}>
                  {s.delta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* ── 2. Dual Charts ── */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Revenue Trend (Area) */}
        <Card>
          <CardHeader>
            <div>
              <CardTitle>{t.analytics.revenueTrend}</CardTitle>
              <CardDescription>{locale === "tr" ? "Zaman içindeki gelir ve gider dağılımı" : "Monthly intake vs expenses over time"}</CardDescription>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-mono text-smoke shrink-0">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-ink inline-block" />{t.analytics.revenue}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-smoke/40 inline-block" />{t.analytics.expenses}
              </span>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            {mounted ? (
              <div className="h-[240px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockRevenueData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                    <defs>
                      <linearGradient id="areaRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-ink)" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="var(--color-ink)" stopOpacity={0.0} />
                      </linearGradient>
                      <linearGradient id="areaExpenses" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-smoke)" stopOpacity={0.12} />
                        <stop offset="95%" stopColor="var(--color-smoke)" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-parchment)" vertical={false} opacity={0.6} />
                    <XAxis
                      dataKey="month"
                      stroke="var(--color-smoke)"
                      fontSize={11}
                      tickLine={false}
                      axisLine={{ stroke: "var(--color-parchment)" }}
                      fontFamily="var(--font-sans)"
                    />
                    <YAxis
                      stroke="var(--color-smoke)"
                      fontSize={10}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(v) => `$${v / 1000}k`}
                      fontFamily="var(--font-sans)"
                    />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border border-parchment bg-paper p-3 text-xs no-shadow space-y-1">
                              <p className="font-serif font-medium text-ink">{label} 2026</p>
                              {payload.map((p) => (
                                <p key={p.dataKey} className="text-[11px] font-mono" style={{ color: p.color }}>
                                  {p.name}: {formatCurrency(Number(p.value))}
                                </p>
                              ))}
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      name={t.analytics.revenue}
                      stroke="var(--color-ink)"
                      strokeWidth={1.5}
                      fillOpacity={1}
                      fill="url(#areaRevenue)"
                    />
                    <Area
                      type="monotone"
                      dataKey="expenses"
                      name={t.analytics.expenses}
                      stroke="var(--color-smoke)"
                      strokeWidth={1.5}
                      strokeDasharray="4 4"
                      fillOpacity={1}
                      fill="url(#areaExpenses)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-xs text-smoke font-mono">{t.common.loading}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Monthly Breakdown (Stacked Bar) */}
        <Card>
          <CardHeader>
            <div>
              <CardTitle>{t.analytics.monthlyBreakdown}</CardTitle>
              <CardDescription>{locale === "tr" ? "Aylık net kâr ve işletme marjı" : "Net profit margin vs operational expenses"}</CardDescription>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-mono text-smoke shrink-0">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-ink inline-block" />{t.analytics.net}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-sand inline-block border border-parchment" />{t.analytics.expenses}
              </span>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            {mounted ? (
              <div className="h-[240px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyRows} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-parchment)" vertical={false} opacity={0.6} />
                    <XAxis
                      dataKey="month"
                      stroke="var(--color-smoke)"
                      fontSize={11}
                      tickLine={false}
                      axisLine={{ stroke: "var(--color-parchment)" }}
                      fontFamily="var(--font-sans)"
                    />
                    <YAxis
                      stroke="var(--color-smoke)"
                      fontSize={10}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(v) => `$${v / 1000}k`}
                      fontFamily="var(--font-sans)"
                    />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          const d = monthlyRows.find((r) => r.month === label);
                          return (
                            <div className="rounded-lg border border-parchment bg-paper p-3 text-xs no-shadow space-y-1 font-mono">
                              <p className="font-serif font-medium text-ink mb-1">{label} 2026</p>
                              <p className="text-ink">{t.analytics.revenue}: {formatCurrency(d?.revenue ?? 0)}</p>
                              <p className="text-smoke">{t.analytics.expenses}: {formatCurrency(d?.expenses ?? 0)}</p>
                              {d && (
                                <p className="text-smoke pt-1 border-t border-parchment/60 mt-1">
                                  {t.analytics.net}: <span className="text-moss font-medium">{formatCurrency(d.net)}</span> ({d.margin}%)
                                </p>
                              )}
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="net" name={t.analytics.net} fill="var(--color-ink)" radius={[2, 2, 0, 0]} maxBarSize={28} />
                    <Bar dataKey="expenses" name={t.analytics.expenses} fill="var(--color-sand)" stroke="var(--color-parchment)" radius={[2, 2, 0, 0]} maxBarSize={28} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-[240px] flex items-center justify-center">
                <p className="text-xs text-smoke font-mono">{t.common.loading}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* ── 3. Monthly Data Table ── */}
      <Card>
        <CardHeader>
          <div>
            <CardTitle>{t.analytics.periodDetail}</CardTitle>
            <CardDescription>{locale === "tr" ? "Net kâr ve marjları içeren tam aylık döküm" : "Full monthly breakdown with net profit and margin"}</CardDescription>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-sand text-smoke border border-parchment/60 shrink-0">
            Jan – Sep 2026
          </span>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-parchment bg-sand/20">
                {[
                  t.analytics.month,
                  t.analytics.revenue,
                  t.analytics.expenses,
                  t.analytics.net,
                  t.analytics.margin,
                  t.analytics.yoyGrowth,
                ].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {monthlyRows.map((row) => (
                <tr
                  key={row.month}
                  className="border-b border-parchment/50 last:border-b-0 hover:bg-sand/20 transition-colors"
                >
                  <td className="px-5 py-3 font-medium text-ink text-[13px]">{row.month} 2026</td>
                  <td className="px-5 py-3 font-mono text-[13px] text-ink">{formatCurrency(row.revenue)}</td>
                  <td className="px-5 py-3 font-mono text-[13px] text-smoke">{formatCurrency(row.expenses)}</td>
                  <td className="px-5 py-3 font-mono text-[13px] text-moss font-medium">{formatCurrency(row.net)}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-20 rounded-full bg-sand overflow-hidden">
                        <div
                          className="h-full rounded-full bg-ink"
                          style={{ width: `${row.margin}%` }}
                        />
                      </div>
                      <span className="text-[12px] font-mono text-ink">{row.margin}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    {row.growth !== null ? (
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-mono font-medium ${
                          row.growth >= 0 ? "text-moss" : "text-red-600"
                        }`}
                      >
                        {row.growth >= 0 ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : (
                          <TrendingDown className="h-3 w-3" />
                        )}
                        {row.growth >= 0 ? "+" : ""}
                        {row.growth}%
                      </span>
                    ) : (
                      <span className="text-[11px] text-smoke font-mono">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            {/* Summary Footer */}
            <tfoot>
              <tr className="border-t border-parchment bg-sand/20">
                <td className="px-5 py-3 text-[11px] font-medium text-smoke uppercase tracking-wider font-mono">
                  {locale === "tr" ? "Toplam / Ort." : "Total / Avg"}
                </td>
                <td className="px-5 py-3 font-mono text-[13px] font-medium text-ink">
                  {formatCurrency(monthlyRows.reduce((s, r) => s + r.revenue, 0))}
                </td>
                <td className="px-5 py-3 font-mono text-[13px] text-smoke">
                  {formatCurrency(monthlyRows.reduce((s, r) => s + r.expenses, 0))}
                </td>
                <td className="px-5 py-3 font-mono text-[13px] font-medium text-moss">
                  {formatCurrency(monthlyRows.reduce((s, r) => s + r.net, 0))}
                </td>
                <td className="px-5 py-3 text-[12px] font-mono text-ink">
                  {Math.round(monthlyRows.reduce((s, r) => s + r.margin, 0) / monthlyRows.length)}% {locale === "tr" ? "ort." : "avg"}
                </td>
                <td className="px-5 py-3" />
              </tr>
            </tfoot>
          </table>
        </div>
      </Card>
    </PageContainer>
  );
}
