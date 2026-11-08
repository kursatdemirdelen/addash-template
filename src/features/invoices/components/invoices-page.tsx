"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";
import { mockInvoices, type InvoiceStatus } from "@/lib/mock-data/invoices";

const VARIANT: Record<InvoiceStatus, "moss" | "amber" | "rose" | "sand"> = {
  paid: "moss",
  pending: "amber",
  overdue: "rose",
  draft: "sand",
};

type Filter = "all" | InvoiceStatus;
const FILTERS: Filter[] = ["all", "paid", "pending", "overdue", "draft"];

export function InvoicesPage() {
  const { t, locale } = useTranslation();
  const [filter, setFilter] = React.useState<Filter>("all");

  const money = (value: number) =>
    new Intl.NumberFormat(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
  const date = (value: string) =>
    new Intl.DateTimeFormat(locale, { day: "numeric", month: "short", year: "numeric" }).format(new Date(value));
  const sum = (status: InvoiceStatus) =>
    mockInvoices.filter((i) => i.status === status).reduce((total, i) => total + i.amount, 0);

  const stats = [
    { label: t.invoices.stats.paid, value: money(sum("paid")), tone: "text-moss" },
    { label: t.invoices.stats.pending, value: money(sum("pending")), tone: "text-amber" },
    { label: t.invoices.stats.overdue, value: money(sum("overdue")), tone: "text-rose" },
    { label: t.invoices.stats.drafts, value: String(mockInvoices.filter((i) => i.status === "draft").length), tone: "text-ink" },
  ];
  const rows = filter === "all" ? mockInvoices : mockInvoices.filter((i) => i.status === filter);

  return (
    <PageContainer className="space-y-6">
      <PageHeader
        title={t.invoices.title}
        description={t.invoices.description}
        action={
          <Button size="sm">
            <Plus className="mr-1.5 h-3.5 w-3.5" />
            {t.invoices.create}
          </Button>
        }
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-5">
            <p className="text-[10px] font-mono uppercase tracking-[0.08em] text-smoke">{stat.label}</p>
            <p className={cn("mt-2 font-serif text-[26px] leading-none", stat.tone)}>{stat.value}</p>
          </Card>
        ))}
      </div>

      <div className="flex flex-wrap gap-2" role="tablist" aria-label={t.invoices.title}>
        {FILTERS.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-3 py-1 text-[12px] transition-colors",
              filter === f ? "border-ink bg-ink text-paper" : "border-parchment text-smoke hover:text-ink",
            )}
          >
            {t.invoices.filters[f]}
          </button>
        ))}
      </div>

      <Card className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-[13px]">
          <thead>
            <tr className="border-b border-parchment text-[10px] font-mono uppercase tracking-[0.08em] text-smoke">
              <th className="px-5 py-3 font-normal">{t.invoices.columns.number}</th>
              <th className="px-5 py-3 font-normal">{t.invoices.columns.customer}</th>
              <th className="px-5 py-3 font-normal">{t.invoices.columns.issued}</th>
              <th className="px-5 py-3 font-normal">{t.invoices.columns.due}</th>
              <th className="px-5 py-3 text-right font-normal">{t.invoices.columns.amount}</th>
              <th className="px-5 py-3 font-normal">{t.invoices.columns.status}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-parchment/60">
            {rows.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-sand/30">
                <td className="px-5 py-3 font-mono text-ink">{invoice.number}</td>
                <td className="px-5 py-3 text-ink">{invoice.customer}</td>
                <td className="px-5 py-3 text-smoke">{date(invoice.issued)}</td>
                <td className="px-5 py-3 text-smoke">{date(invoice.due)}</td>
                <td className="px-5 py-3 text-right tabular-nums text-ink">{money(invoice.amount)}</td>
                <td className="px-5 py-3">
                  <Badge variant={VARIANT[invoice.status]} dot>
                    {t.invoices.statuses[invoice.status]}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </PageContainer>
  );
}
