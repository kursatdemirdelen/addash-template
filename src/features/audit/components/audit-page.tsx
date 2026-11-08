"use client";

import * as React from "react";
import { CreditCard, FileText, KeyRound, Search, ShieldAlert, type LucideIcon } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";
import { getMockAuditLog, type AuditType } from "@/lib/mock-data/audit";

const ICON: Record<AuditType, { Icon: LucideIcon; tone: string }> = {
  security: { Icon: ShieldAlert, tone: "bg-rose/10 border-rose/20 text-rose" },
  content: { Icon: FileText, tone: "bg-sky/10 border-sky/30 text-sky" },
  billing: { Icon: CreditCard, tone: "bg-amber/10 border-amber/30 text-amber" },
  access: { Icon: KeyRound, tone: "bg-moss/10 border-moss/30 text-moss" },
};

type Filter = "all" | AuditType;
const FILTERS: Filter[] = ["all", "security", "content", "billing", "access"];

export function AuditPage() {
  const { t, locale } = useTranslation();
  const [filter, setFilter] = React.useState<Filter>("all");
  const [query, setQuery] = React.useState("");
  const entries = React.useMemo(() => getMockAuditLog(locale), [locale]);

  const needle = query.trim().toLowerCase();
  const rows = entries.filter(
    (e) =>
      (filter === "all" || e.type === filter) &&
      (!needle || `${e.actor} ${e.action} ${e.target}`.toLowerCase().includes(needle)),
  );

  return (
    <PageContainer className="space-y-6">
      <PageHeader title={t.audit.title} description={t.audit.description} />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label={t.audit.title}>
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
              {t.audit.filters[f]}
            </button>
          ))}
        </div>
        <div className="relative sm:w-64">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-smoke" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.audit.search}
            aria-label={t.audit.search}
            className="pl-9"
          />
        </div>
      </div>

      <Card className="overflow-hidden">
        {rows.length === 0 ? (
          <p className="p-8 text-center text-[13px] text-smoke">{t.audit.empty}</p>
        ) : (
          <ul className="divide-y divide-parchment/60">
            {rows.map((entry) => {
              const { Icon, tone } = ICON[entry.type];
              return (
                <li key={entry.id} className="flex items-start gap-4 p-4">
                  <span className={cn("mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border", tone)}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] leading-snug text-ink">
                      <span className="font-semibold">{entry.actor}</span> {entry.action}{" "}
                      <span className="font-medium">{entry.target}</span>
                    </p>
                    <p className="mt-1 text-[11px] text-smoke">
                      {entry.time} · <span className="font-mono">{entry.ip}</span>
                    </p>
                  </div>
                  <span className="hidden text-[10px] font-mono uppercase tracking-[0.08em] text-smoke sm:block">
                    {t.audit.filters[entry.type]}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </Card>
    </PageContainer>
  );
}
