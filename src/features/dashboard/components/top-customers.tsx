"use client"

import Link from "next/link"
import { getMockCustomers } from "@/lib/mock-data/customers"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { ArrowUpRight } from "lucide-react"
import { formatCurrency } from "@/lib/utils"
import { useTranslation } from "@/hooks/use-translation"

export function TopCustomers() {
  const { t, locale } = useTranslation()
  const customers = getMockCustomers(locale)
    .filter((c) => c.mrr > 0)
    .sort((a, b) => b.mrr - a.mrr)
    .slice(0, 5)

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex-row items-center justify-between pb-3">
        <CardTitle>{t.dashboard.topCustomersTitle}</CardTitle>
        <Link
          href="/customers"
          className="flex items-center gap-1 text-[11px] text-smoke hover:text-ink transition-colors font-mono"
        >
          {t.dashboard.viewAll}
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </CardHeader>

      <CardContent className="pt-0 pb-2 px-0 flex-1">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="flex items-center justify-between gap-3 px-5 py-2.5 border-b border-parchment/40 last:border-b-0"
          >
            <div className="flex items-center gap-3 min-w-0">
              <Avatar
                src={customer.avatarUrl}
                fallback={customer.initials}
                size="sm"
              />
              <div className="min-w-0">
                <p className="text-[13px] font-medium text-ink truncate leading-none">
                  {customer.company}
                </p>
                <p className="text-[11px] text-smoke mt-0.5 truncate leading-none">
                  {customer.plan}
                </p>
              </div>
            </div>
            <span className="text-[12px] font-medium text-ink font-mono shrink-0">
              {formatCurrency(customer.mrr)}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
