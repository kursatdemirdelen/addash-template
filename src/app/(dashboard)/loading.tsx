"use client";

import { PageContainer } from "@/components/layout/page-container";
import { Spinner, BroadsheetProgressBar } from "@/components/ui/spinner";
import { useTranslation } from "@/hooks/use-translation";

export default function DashboardLoading() {
  const { locale } = useTranslation();

  return (
    <PageContainer className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="flex flex-col items-center gap-4 max-w-xs w-full">
        {/* Editorial Spinner with center pulse */}
        <div className="relative flex items-center justify-center">
          <Spinner size="lg" />
          <div className="absolute h-2 w-2 rounded-full bg-ink/60 dark:bg-paper/60 animate-ping" />
        </div>

        {/* Masthead Label */}
        <div className="space-y-1">
          <h2 className="font-serif text-base font-normal tracking-tight text-ink">
            Addash Broadsheet
          </h2>
          <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-smoke">
            {locale === "tr" ? "Çalışma Alanı Yükleniyor…" : "Loading Workspace…"}
          </p>
        </div>

        {/* Hairline Editorial Progress Bar */}
        <BroadsheetProgressBar className="mt-1" />
      </div>
    </PageContainer>
  );
}
