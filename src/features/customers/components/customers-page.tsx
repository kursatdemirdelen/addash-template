"use client";

import * as React from "react";
import { mockCustomers, type Customer } from "@/lib/mock-data/customers";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { UserPlus, Search, Building2, Globe, Mail, PhoneCall } from "lucide-react";
import { formatCurrency, cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";

const PLAN_BADGES: Record<Customer["plan"], string> = {
  Enterprise: "bg-ink text-paper border-ink",
  Pro:        "bg-violet/10 text-violet border-violet/20",
  Starter:    "bg-sand text-ink border-parchment",
};

export function CustomersPage() {
  const { t, locale } = useTranslation();
  const [activeTab, setActiveTab] = React.useState<"All" | "Active" | "Trial" | "Churned">("All");
  const [search, setSearch] = React.useState("");

  const statusTabs = [
    { key: "All" as const, label: t.common.all },
    { key: "Active" as const, label: t.common.active },
    { key: "Trial" as const, label: t.common.trial },
    { key: "Churned" as const, label: t.common.churned },
  ];

  const filtered = React.useMemo(() => {
    return mockCustomers.filter((c) => {
      const matchesTab = activeTab === "All" || c.status === activeTab;
      const matchesSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.company.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);

  const totalMrr = mockCustomers.reduce((acc, c) => acc + c.mrr, 0);
  const activeCount = mockCustomers.filter((c) => c.status === "Active").length;
  const trialCount = mockCustomers.filter((c) => c.status === "Trial").length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge variant="moss" dot>{t.common.active}</Badge>;
      case "Trial":
        return <Badge variant="sky" dot>{t.common.trial}</Badge>;
      case "Churned":
        return <Badge variant="smoke">{t.common.churned}</Badge>;
      default:
        return <Badge variant="smoke">{status}</Badge>;
    }
  };

  return (
    <PageContainer className="space-y-6">
      <PageHeader
        title={t.customers.title}
        description={t.customers.description}
        action={
          <Button variant="primary" size="sm">
            <UserPlus className="h-3.5 w-3.5 mr-1.5" />
            {t.customers.addCustomer}
          </Button>
        }
      />

      {/* KPI strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="p-4 space-y-1">
          <p className="text-[10px] font-mono uppercase tracking-[0.06em] text-smoke">{t.customers.kpi.totalAccounts}</p>
          <p className="text-[20px] font-medium text-ink leading-tight">{mockCustomers.length}</p>
          <p className="text-[11px] text-smoke">{locale === "tr" ? "8 kayıtlı organizasyon" : "8 organizations registered"}</p>
        </Card>
        <Card className="p-4 space-y-1">
          <p className="text-[10px] font-mono uppercase tracking-[0.06em] text-smoke">{t.customers.kpi.activeAccounts}</p>
          <p className="text-[20px] font-medium text-moss leading-tight">{activeCount}</p>
          <p className="text-[11px] text-smoke">%62.5 {locale === "tr" ? "aktiflik oranı" : "active ratio"}</p>
        </Card>
        <Card className="p-4 space-y-1">
          <p className="text-[10px] font-mono uppercase tracking-[0.06em] text-smoke">{t.customers.kpi.inTrial}</p>
          <p className="text-[20px] font-medium text-sky leading-tight">{trialCount}</p>
          <p className="text-[11px] text-smoke">{locale === "tr" ? "Dönüşüm süreci açık" : "Conversion window open"}</p>
        </Card>
        <Card className="p-4 space-y-1">
          <p className="text-[10px] font-mono uppercase tracking-[0.06em] text-smoke">{t.customers.kpi.trackedMrr}</p>
          <p className="text-[20px] font-medium text-ink leading-tight">{formatCurrency(totalMrr)}</p>
          <p className="text-[11px] text-smoke">{locale === "tr" ? "Ödeme yapan hesaplar" : "Across paying accounts"}</p>
        </Card>
      </div>

      {/* Filter + Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="inline-flex items-center rounded-full bg-sand p-1 border border-parchment/60 select-none">
          {statusTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "rounded-full px-3 py-1 text-[12px] font-medium transition-all cursor-pointer",
                activeTab === tab.key
                  ? "bg-paper text-ink border border-parchment/40"
                  : "text-smoke hover:text-ink"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-smoke pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.customers.searchPlaceholder}
            className="h-8 w-full rounded-full border border-parchment bg-paper pl-8 pr-3 text-[12px] text-ink placeholder:text-smoke focus:outline-none focus:border-ink"
          />
        </div>
      </div>

      {/* Customers Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-parchment bg-sand/20">
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke">{t.customers.columns.client}</th>
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke hidden sm:table-cell">{t.customers.columns.company}</th>
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke">{t.customers.columns.plan}</th>
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke">{t.customers.columns.mrr}</th>
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke">{t.customers.columns.status}</th>
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke hidden md:table-cell">{t.customers.columns.lastContact}</th>
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke text-right">{t.customers.columns.actions}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b border-parchment/50 last:border-b-0 hover:bg-sand/20 transition-colors"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={customer.avatarUrl}
                        fallback={customer.initials}
                        size="sm"
                      />
                      <div>
                        <p className="font-medium text-[13px] text-ink">{customer.name}</p>
                        <p className="text-[11px] font-mono text-smoke">{customer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 hidden sm:table-cell">
                    <div className="flex items-center gap-1.5 text-[12px] text-ink">
                      <Building2 className="h-3.5 w-3.5 text-smoke shrink-0" />
                      <span>{customer.company}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={cn(
                        "px-2 py-0.5 rounded-full text-[10px] font-mono border font-medium",
                        PLAN_BADGES[customer.plan]
                      )}
                    >
                      {customer.plan}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 font-mono text-[13px] text-ink font-medium">
                    {formatCurrency(customer.mrr)}
                    <span className="text-[10px] text-smoke font-normal">/mo</span>
                  </td>
                  <td className="px-5 py-3.5">
                    {getStatusBadge(customer.status)}
                  </td>
                  <td className="px-5 py-3.5 hidden md:table-cell font-mono text-[11px] text-smoke">
                    {customer.lastContact}
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1 text-smoke">
                      <a
                        href={`mailto:${customer.email}`}
                        className="p-1 rounded hover:text-ink transition-colors"
                        title="Email"
                      >
                        <Mail className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center text-xs text-smoke font-mono">
            {t.customers.empty}
          </div>
        )}
      </Card>
    </PageContainer>
  );
}
