"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-parchment flex flex-col items-center justify-center p-6 text-center">
      <p className="text-xs font-mono uppercase tracking-[0.15em] text-smoke mb-2">
        {t.systemPages.notFound.status}
      </p>

      <h1 className="text-3xl sm:text-4xl font-serif text-ink font-normal mb-3">
        {t.systemPages.notFound.title}
      </h1>

      <p className="text-sm text-smoke max-w-sm mb-6 leading-relaxed">
        {t.systemPages.notFound.description}
      </p>

      <Button variant="primary" asChild>
        <Link href="/dashboard" className="flex items-center gap-2">
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>{t.systemPages.notFound.returnDashboard}</span>
        </Link>
      </Button>
    </div>
  );
}
