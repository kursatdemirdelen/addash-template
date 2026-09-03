"use client";

import * as React from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { locale } = useTranslation();
  const isTr = locale === "tr";

  React.useEffect(() => {
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand text-smoke mb-4 border border-parchment/60">
        <AlertTriangle className="h-5 w-5 text-rose" />
      </div>

      <p className="text-xs font-mono uppercase tracking-[0.15em] text-smoke mb-2">
        {isTr ? "Hata 500" : "Error 500"}
      </p>

      <h1 className="text-2xl sm:text-3xl font-serif text-ink font-normal mb-3">
        {isTr ? "Bir Sorun Oluştu" : "Something Went Wrong"}
      </h1>

      <p className="text-sm text-smoke max-w-sm mb-6 leading-relaxed">
        {isTr
          ? "Sayfa yüklenirken beklenmeyen bir hata meydana geldi. Lütfen tekrar deneyin."
          : "An unexpected error occurred while loading this page. Please try again."}
      </p>

      <div className="flex items-center gap-3">
        <Button variant="primary" onClick={() => reset()} className="flex items-center gap-1.5">
          <RotateCcw className="h-3.5 w-3.5" />
          <span>{isTr ? "Tekrar Dene" : "Try Again"}</span>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/dashboard" className="flex items-center gap-1.5">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>{isTr ? "Ana Sayfa" : "Dashboard"}</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
