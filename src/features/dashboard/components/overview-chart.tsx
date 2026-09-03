"use client";

import * as React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { mockRevenueData } from "@/lib/mock-data/analytics";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

import { useTranslation } from "@/hooks/use-translation";

export function OverviewChart() {
  const { t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const chartData = React.useMemo(() => {
    return mockRevenueData.map((d) => ({
      month: d.month,
      completed: d.revenue,
      requests: d.expenses,
      ratio: Math.round((d.revenue / (d.revenue + d.expenses)) * 100),
    }));
  }, []);

  if (!mounted) {
    return (
      <Card className="h-[360px] flex items-center justify-center">
        <p className="text-xs text-smoke font-mono">{t.common.loading}</p>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-3">
        {/* left: title + description */}
        <div>
          <CardTitle>{t.dashboard.throughputTitle}</CardTitle>
          <CardDescription>{t.dashboard.throughputDescription}</CardDescription>
        </div>
        {/* right: legend */}
        <div className="flex items-center gap-3 text-[11px] font-mono text-smoke shrink-0">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-ink inline-block" />
            {t.dashboard.completed}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-smoke/40 inline-block" />
            {t.dashboard.requests}
          </span>
        </div>
      </CardHeader>

      <CardContent className="pt-2 flex-1">
        <div className="h-[260px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#121212" stopOpacity={0.12} />
                  <stop offset="95%" stopColor="#121212" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#616161" stopOpacity={0.08} />
                  <stop offset="95%" stopColor="#616161" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e6e4e0" vertical={false} />
              <XAxis
                dataKey="month"
                stroke="#616161"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#616161"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `${v / 1000}k`}
              />
              <ReferenceLine
                y={40000}
                stroke="#4caf50"
                strokeDasharray="4 4"
                label={{
                  value: "Target 40k",
                  fill: "#2e7d32",
                  fontSize: 10,
                  position: "right",
                }}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const item = payload[0]?.payload;
                    return (
                      <div className="rounded-lg border border-parchment bg-paper p-3 text-xs no-shadow space-y-1 w-44 font-mono">
                        <p className="font-semibold text-ink border-b border-parchment pb-1">
                          {label} 2026
                        </p>
                        <div className="flex justify-between">
                          <span className="text-smoke">Completed</span>
                          <span className="text-ink font-medium">
                            {item.completed.toLocaleString()} ops
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-smoke">Requests</span>
                          <span className="text-ink">
                            {item.requests.toLocaleString()} ops
                          </span>
                        </div>
                        <div className="flex justify-between pt-1 border-t border-parchment/60">
                          <span className="text-smoke">Throughput</span>
                          <span className="text-moss font-medium">
                            {item.ratio}%
                          </span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="completed"
                stroke="#121212"
                strokeWidth={1.5}
                fill="url(#colorCompleted)"
              />
              <Area
                type="monotone"
                dataKey="requests"
                stroke="#616161"
                strokeWidth={1}
                fill="url(#colorRequests)"
                strokeDasharray="4 2"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
