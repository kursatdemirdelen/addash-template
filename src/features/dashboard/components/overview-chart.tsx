"use client"

import * as React from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { mockRevenueData } from "@/lib/mock-data/analytics"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useTranslation } from "@/hooks/use-translation"

export function OverviewChart() {
  const { t } = useTranslation()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const chartData = React.useMemo(() => {
    return mockRevenueData.map((d) => ({
      month: d.month,
      revenue: d.revenue,
    }))
  }, [])

  if (!mounted) {
    return (
      <Card className="h-[360px] flex items-center justify-center">
        <p className="text-xs text-smoke font-mono">{t.common.loading}</p>
      </Card>
    )
  }

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-3">
        <div>
          <CardTitle>{t.dashboard.revenueTitle}</CardTitle>
          <CardDescription>{t.dashboard.revenueDescription}</CardDescription>
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
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#121212" stopOpacity={0.12} />
                  <stop offset="95%" stopColor="#121212" stopOpacity={0} />
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
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border border-parchment bg-paper p-3 text-xs no-shadow space-y-1 w-36 font-mono">
                        <p className="font-semibold text-ink border-b border-parchment pb-1">
                          {label} 2026
                        </p>
                        <div className="flex justify-between">
                          <span className="text-smoke">{t.analytics.revenue}</span>
                          <span className="text-ink font-medium">
                            {payload[0]?.value?.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#121212"
                strokeWidth={1.5}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
