"use client";

import * as React from "react";
import Link from "next/link";
import {
  FileQuestion,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  RefreshCw,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { EmptyState } from "@/components/feedback/empty-state";
import { SuccessState } from "@/components/feedback/success-state";
import { SkeletonMetricCard, SkeletonTable } from "@/components/ui/skeleton";
import { Spinner, BroadsheetProgressBar } from "@/components/ui/spinner";
import { PageContainer } from "@/components/layout/page-container";
import { useTranslation } from "@/hooks/use-translation";

export function StatesPage() {
  const { t, locale } = useTranslation();
  const [activeTab, setActiveTab] = React.useState("overview");
  const [shouldCrash, setShouldCrash] = React.useState(false);
  const [isLoadingSim, setIsLoadingSim] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState("cryptographic_hash_ledger");

  // Error boundary tester
  if (shouldCrash) {
    throw new Error(
      "Intentional demonstration error triggered from the System States gallery. Testing (dashboard)/error.tsx boundary."
    );
  }

  return (
    <PageContainer className="space-y-8">
      {/* Top Banner / Masthead */}
      <div className="border-b border-parchment pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-mono tracking-[0.15em] text-smoke uppercase">
            {t.states.folioBadge}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-sand px-2 py-0.5 text-[10px] font-mono text-smoke">
            <Sparkles className="h-3 w-3 text-amber" />
            <span>{t.states.interactiveGallery}</span>
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif text-ink font-normal tracking-tight">
          {t.states.title}
        </h1>
        <p className="mt-2 text-sm text-smoke max-w-2xl leading-relaxed">
          {t.states.description}
        </p>
      </div>

      {/* Tabs Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center justify-between flex-wrap gap-3 border-b border-parchment/60 pb-3">
          <TabsList>
            <TabsTrigger value="overview">{t.states.tabs.overview}</TabsTrigger>
            <TabsTrigger value="empty">{t.states.tabs.empty}</TabsTrigger>
            <TabsTrigger value="skeletons">{t.states.tabs.skeletons}</TabsTrigger>
            <TabsTrigger value="success">{t.states.tabs.success}</TabsTrigger>
            <TabsTrigger value="testing">{t.states.tabs.testing}</TabsTrigger>
          </TabsList>

          <span className="text-xs font-mono text-smoke hidden sm:inline-block">
            {t.states.activeView}: {activeTab.toUpperCase()}
          </span>
        </div>

        {/* TAB 1: SYSTEM PAGES OVERVIEW */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 404 Card */}
            <div className="rounded-lg border border-parchment bg-paper p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-sand/60 text-smoke">
                    <FileQuestion className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-smoke px-2 py-0.5 rounded bg-sand/50">
                    HTTP 404
                  </span>
                </div>
                <h3 className="font-serif text-base text-ink mb-1">
                  {t.states.card404Title}
                </h3>
                <p className="text-xs text-smoke leading-relaxed mb-4">
                  {t.states.card404Desc}
                </p>
              </div>
              <Button variant="secondary" size="sm" asChild className="w-full justify-between">
                <Link href="/bu-sayfa-kesinlikle-yok">
                  <span>{t.states.card404Button}</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
            </div>

            {/* 403 Card */}
            <div className="rounded-lg border border-parchment bg-paper p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-amber/10 text-amber border border-amber/20">
                    <ShieldAlert className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-amber px-2 py-0.5 rounded bg-amber/10">
                    HTTP 403
                  </span>
                </div>
                <h3 className="font-serif text-base text-ink mb-1">
                  {t.states.card403Title}
                </h3>
                <p className="text-xs text-smoke leading-relaxed mb-4">
                  {t.states.card403Desc}
                </p>
              </div>
              <Button variant="secondary" size="sm" asChild className="w-full justify-between">
                <Link href="/forbidden">
                  <span>{t.states.card403Button}</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
            </div>

            {/* Success Page Card */}
            <div className="rounded-lg border border-parchment bg-paper p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-moss/10 text-moss border border-moss/20">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-moss px-2 py-0.5 rounded bg-moss/10">
                    HTTP 200
                  </span>
                </div>
                <h3 className="font-serif text-base text-ink mb-1">
                  {t.states.cardSuccessTitle}
                </h3>
                <p className="text-xs text-smoke leading-relaxed mb-4">
                  {t.states.cardSuccessDesc}
                </p>
              </div>
              <Button variant="secondary" size="sm" asChild className="w-full justify-between">
                <Link href="/success">
                  <span>{t.states.cardSuccessButton}</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
            </div>

            {/* 500 Error Boundary Card */}
            <div className="rounded-lg border border-parchment bg-paper p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-rose/10 text-rose border border-rose/20">
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-rose px-2 py-0.5 rounded bg-rose/10">
                    HTTP 500
                  </span>
                </div>
                <h3 className="font-serif text-base text-ink mb-1">
                  {t.states.card500Title}
                </h3>
                <p className="text-xs text-smoke leading-relaxed mb-4">
                  {t.states.card500Desc}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveTab("testing")}
                className="w-full justify-between"
              >
                <span>{t.states.card500Button}</span>
                <ArrowRight className="h-3 w-3" />
              </Button>
            </div>

            {/* Shimmer Suspense Card */}
            <div className="rounded-lg border border-parchment bg-paper p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-sand text-smoke">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-smoke px-2 py-0.5 rounded bg-sand/50">
                    SUSPENSE
                  </span>
                </div>
                <h3 className="font-serif text-base text-ink mb-1">
                  {t.states.cardLoadingTitle}
                </h3>
                <p className="text-xs text-smoke leading-relaxed mb-4">
                  {t.states.cardLoadingDesc}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveTab("skeletons")}
                className="w-full justify-between"
              >
                <span>{t.states.cardLoadingButton}</span>
                <ArrowRight className="h-3 w-3" />
              </Button>
            </div>

            {/* Empty States Card */}
            <div className="rounded-lg border border-parchment bg-paper p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-sand text-smoke">
                    <Layers className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-smoke px-2 py-0.5 rounded bg-sand/50">
                    4 PRESETS
                  </span>
                </div>
                <h3 className="font-serif text-base text-ink mb-1">
                  {t.states.cardEmptyTitle}
                </h3>
                <p className="text-xs text-smoke leading-relaxed mb-4">
                  {t.states.cardEmptyDesc}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveTab("empty")}
                className="w-full justify-between"
              >
                <span>{t.states.cardEmptyButton}</span>
                <ArrowRight className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* TAB 2: EMPTY STATES GALLERY */}
        <TabsContent value="empty" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Preset 1: No Data (Blank Slate) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-mono uppercase tracking-wider text-smoke">
                  {t.systemPages.empty.blankTag}
                </span>
                <span className="text-[11px] font-mono text-smoke">{'preset="no-data"'}</span>
              </div>
              <EmptyState
                preset="no-data"
                title={t.systemPages.empty.blankTitle}
                description={t.systemPages.empty.blankDesc}
                action={
                  <Button variant="primary" size="sm">
                    {t.systemPages.empty.blankAction1}
                  </Button>
                }
                secondaryAction={
                  <Button variant="secondary" size="sm">
                    {t.systemPages.empty.blankAction2}
                  </Button>
                }
              />
            </div>

            {/* Preset 2: Search Query Empty */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-mono uppercase tracking-wider text-smoke">
                  {t.systemPages.empty.searchTag}
                </span>
                <span className="text-[11px] font-mono text-smoke">{'preset="no-results"'}</span>
              </div>
              <EmptyState
                preset="no-results"
                title={`${t.systemPages.empty.searchTitlePrefix} "${searchQuery}"`}
                description={t.systemPages.empty.searchDesc}
                action={
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setSearchQuery("standard_query")}
                  >
                    {t.systemPages.empty.searchClear}
                  </Button>
                }
              />
            </div>

            {/* Preset 3: Filter Mismatch */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-mono uppercase tracking-wider text-smoke">
                  {t.systemPages.empty.filterTag}
                </span>
                <span className="text-[11px] font-mono text-smoke">{'preset="filter-empty"'}</span>
              </div>
              <EmptyState
                preset="filter-empty"
                title={t.systemPages.empty.filterTitle}
                description={t.systemPages.empty.filterDesc}
                action={
                  <Button variant="secondary" size="sm">
                    {t.systemPages.empty.filterReset}
                  </Button>
                }
              />
            </div>

            {/* Preset 4: Network Disconnect / In-line Error */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-mono uppercase tracking-wider text-smoke">
                  {t.systemPages.empty.errorTag}
                </span>
                <span className="text-[11px] font-mono text-smoke">{'preset="error"'}</span>
              </div>
              <EmptyState
                preset="error"
                title={t.systemPages.empty.errorTitle}
                description={t.systemPages.empty.errorDesc}
                action={
                  <Button variant="primary" size="sm" className="gap-1.5">
                    <RefreshCw className="h-3 w-3" />
                    <span>{t.systemPages.empty.errorRetry}</span>
                  </Button>
                }
              />
            </div>
          </div>
        </TabsContent>

        {/* TAB 3: SHIMMER & SKELETON GALLERY */}
        <TabsContent value="skeletons" className="space-y-6">
          <div className="flex items-center justify-between bg-paper border border-parchment p-4 rounded-lg">
            <div>
              <h3 className="font-serif text-sm font-medium text-ink">
                {t.systemPages.shimmer.boxTitle}
              </h3>
              <p className="text-xs text-smoke">
                {t.systemPages.shimmer.boxDesc}
              </p>
            </div>
            <Button
              variant={isLoadingSim ? "primary" : "secondary"}
              size="sm"
              onClick={() => setIsLoadingSim(!isLoadingSim)}
            >
              {isLoadingSim ? t.systemPages.shimmer.btnReveal : t.systemPages.shimmer.btnShimmer}
            </Button>
          </div>

          {/* Metric Cards */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-smoke block px-1">
              {t.systemPages.shimmer.kpiTitle}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {isLoadingSim ? (
                <>
                  <SkeletonMetricCard />
                  <SkeletonMetricCard />
                  <SkeletonMetricCard />
                  <SkeletonMetricCard />
                </>
              ) : (
                <>
                  <div className="rounded-lg border border-parchment bg-paper p-5">
                    <p className="text-xs text-smoke">{t.systemPages.shimmer.stat1}</p>
                    <p className="text-2xl font-serif text-ink mt-1">$4,819,200</p>
                    <p className="text-[11px] text-moss mt-2 font-mono">{t.systemPages.shimmer.stat1Trend}</p>
                  </div>
                  <div className="rounded-lg border border-parchment bg-paper p-5">
                    <p className="text-xs text-smoke">{t.systemPages.shimmer.stat2}</p>
                    <p className="text-2xl font-serif text-ink mt-1">1,942</p>
                    <p className="text-[11px] text-moss mt-2 font-mono">{t.systemPages.shimmer.stat2Trend}</p>
                  </div>
                  <div className="rounded-lg border border-parchment bg-paper p-5">
                    <p className="text-xs text-smoke">{t.systemPages.shimmer.stat3}</p>
                    <p className="text-2xl font-serif text-ink mt-1">38</p>
                    <p className="text-[11px] text-smoke mt-2 font-mono">{t.systemPages.shimmer.stat3Trend}</p>
                  </div>
                  <div className="rounded-lg border border-parchment bg-paper p-5">
                    <p className="text-xs text-smoke">{t.systemPages.shimmer.stat4}</p>
                    <p className="text-2xl font-serif text-ink mt-1">0</p>
                    <p className="text-[11px] text-moss mt-2 font-mono">{t.systemPages.shimmer.stat4Trend}</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Tabular Shimmer */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-smoke block px-1">
              {t.systemPages.shimmer.tableTitle}
            </span>
            {isLoadingSim ? (
              <SkeletonTable rows={4} columns={4} showToolbar={false} />
            ) : (
              <div className="rounded-lg border border-parchment bg-paper overflow-hidden no-shadow">
                <div className="grid grid-cols-4 border-b border-parchment px-4 py-3 bg-sand/20 text-xs font-mono text-smoke uppercase">
                  <span>{t.systemPages.shimmer.colFolio}</span>
                  <span>{t.systemPages.shimmer.colCategory}</span>
                  <span>{t.systemPages.shimmer.colTimestamp}</span>
                  <span className="text-right">{t.systemPages.shimmer.colAmount}</span>
                </div>
                <div className="divide-y divide-parchment text-xs">
                  <div className="grid grid-cols-4 items-center px-4 py-3">
                    <span className="font-medium text-ink">Treasury Transfer #891</span>
                    <span className="text-smoke">{t.systemPages.shimmer.row1Cat}</span>
                    <span className="font-mono text-smoke">14:22 UTC</span>
                    <span className="font-mono font-medium text-moss text-right">+$45,000.00</span>
                  </div>
                  <div className="grid grid-cols-4 items-center px-4 py-3">
                    <span className="font-medium text-ink">Vendor Settlement #890</span>
                    <span className="text-smoke">{t.systemPages.shimmer.row2Cat}</span>
                    <span className="font-mono text-smoke">12:10 UTC</span>
                    <span className="font-mono font-medium text-rose text-right">-$12,400.00</span>
                  </div>
                  <div className="grid grid-cols-4 items-center px-4 py-3">
                    <span className="font-medium text-ink">Dividend Distribution</span>
                    <span className="text-smoke">{t.systemPages.shimmer.row3Cat}</span>
                    <span className="font-mono text-smoke">09:45 UTC</span>
                    <span className="font-mono font-medium text-rose text-right">-$80,000.00</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Spinner Showcase */}
          <div className="space-y-3 pt-4 border-t border-parchment">
            <span className="text-xs font-mono uppercase tracking-wider text-smoke block px-1">
              {locale === "tr"
                ? "Yükleme Göstergeleri & Geçiş Animasyonları"
                : "Loading Spinners & Transition Indicators"}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-parchment bg-paper p-5 flex flex-col items-center justify-center text-center space-y-3 min-h-[140px]">
                <Spinner size="lg" />
                <span className="text-xs text-smoke font-mono">
                  {locale === "tr" ? "Dairesel Yükleyici (Dual-Ring)" : "Dual-Ring Spinner"}
                </span>
              </div>
              <div className="rounded-lg border border-parchment bg-paper p-5 flex flex-col items-center justify-center text-center space-y-3 min-h-[140px]">
                <div className="relative flex items-center justify-center">
                  <Spinner size="lg" />
                  <div className="absolute h-2 w-2 rounded-full bg-ink/60 animate-ping" />
                </div>
                <span className="text-xs text-smoke font-mono">
                  {locale === "tr" ? "Darbeli Yükleyici (Pulsing)" : "Pulsing Spinner"}
                </span>
              </div>
              <div className="rounded-lg border border-parchment bg-paper p-5 flex flex-col items-center justify-center text-center space-y-3 min-h-[140px]">
                <BroadsheetProgressBar />
                <span className="text-xs text-smoke font-mono">
                  {locale === "tr" ? "İlerleme Çubuğu (Progress Bar)" : "Indeterminate Progress Bar"}
                </span>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* TAB 4: SUCCESS */}
        <TabsContent value="success" className="space-y-6">
          <div className="rounded-lg border border-parchment bg-paper p-6 sm:p-10">
            <SuccessState
              title={t.systemPages.receipt.title}
              description={t.systemPages.receipt.description}
              actionHref="/dashboard"
              actionLabel={t.systemPages.receipt.btnReturn}
            />
          </div>
        </TabsContent>

        {/* TAB 5: FAULT TESTING / ERROR BOUNDARY */}
        <TabsContent value="testing" className="space-y-6">
          <div className="rounded-lg border border-rose/30 bg-rose/5 p-6 text-center max-w-xl mx-auto space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose/10 text-rose border border-rose/20">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl text-ink">
              {t.systemPages.testing.title}
            </h3>
            <p className="text-xs text-smoke leading-relaxed">
              {t.systemPages.testing.description}
            </p>
            <Button
              variant="destructive"
              onClick={() => setShouldCrash(true)}
              className="mt-2"
            >
              {t.systemPages.testing.button}
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}
