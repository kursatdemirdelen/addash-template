"use client";

import * as React from "react";
import { ChevronDown, CreditCard, Plug, Rocket, Search, ShieldCheck, type LucideIcon } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";
import { getMockHelp, type HelpCategoryId } from "@/lib/mock-data/help";

const ICON: Record<HelpCategoryId, LucideIcon> = {
  start: Rocket,
  billing: CreditCard,
  security: ShieldCheck,
  integrations: Plug,
};

export function HelpPage() {
  const { t, locale } = useTranslation();
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState<string | null>("f0");
  const { categories, faqs } = React.useMemo(() => getMockHelp(locale), [locale]);

  const needle = query.trim().toLowerCase();
  const results = needle ? faqs.filter((f) => `${f.question} ${f.answer}`.toLowerCase().includes(needle)) : faqs;

  return (
    <PageContainer className="space-y-8">
      <PageHeader title={t.help.title} description={t.help.description} />

      <div className="relative max-w-xl">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-smoke" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.help.search}
          aria-label={t.help.search}
          className="h-11 pl-10"
        />
      </div>

      {!needle && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = ICON[category.id];
            return (
              <Card key={category.id} className="p-5 transition-colors hover:bg-sand/30">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-parchment bg-sand">
                  <Icon className="h-4 w-4 text-ink" />
                </span>
                <p className="mt-3 font-serif text-[17px] text-ink">{category.title}</p>
                <p className="mt-1 text-[12px] leading-snug text-smoke">{category.description}</p>
                <p className="mt-3 text-[10px] font-mono uppercase tracking-[0.08em] text-smoke">
                  {category.articles} {t.help.articles}
                </p>
              </Card>
            );
          })}
        </div>
      )}

      <section className="space-y-3">
        <p className="text-[10px] font-mono uppercase tracking-[0.08em] text-smoke">{t.help.faq}</p>
        {results.length === 0 ? (
          <Card className="p-8 text-center text-[13px] text-smoke">{t.help.empty}</Card>
        ) : (
          <Card className="divide-y divide-parchment/60 overflow-hidden">
            {results.map((faq) => {
              const isOpen = open === faq.id || !!needle;
              return (
                <div key={faq.id}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen && !needle ? null : faq.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[14px] text-ink hover:bg-sand/30"
                  >
                    {faq.question}
                    <ChevronDown className={cn("h-4 w-4 shrink-0 text-smoke transition-transform", isOpen && "rotate-180")} />
                  </button>
                  {isOpen && <p className="px-5 pb-4 text-[13px] leading-relaxed text-smoke">{faq.answer}</p>}
                </div>
              );
            })}
          </Card>
        )}
      </section>
    </PageContainer>
  );
}
