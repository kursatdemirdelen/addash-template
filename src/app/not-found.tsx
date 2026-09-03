"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";

export default function NotFound() {
  const { locale } = useTranslation();
  const isTr = locale === "tr";

  return (
    <div className="min-h-screen bg-parchment flex flex-col items-center justify-center p-6 text-center">
      <p className="text-xs font-mono uppercase tracking-[0.15em] text-smoke mb-2">
        {isTr ? "Hata 404" : "Error 404"}
      </p>

      <h1 className="text-3xl sm:text-4xl font-serif text-ink font-normal mb-3">
        {isTr ? "Sayfa Bulunamadı" : "Page Not Found"}
      </h1>

      <p className="text-sm text-smoke max-w-sm mb-6 leading-relaxed">
        {isTr
          ? "Aradığınız sayfa mevcut değil, silinmiş veya taşınmış olabilir."
          : "The page you are looking for doesn't exist, was removed, or has been moved."}
      </p>

      <Button variant="primary" asChild>
        <Link href="/dashboard" className="flex items-center gap-2">
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>{isTr ? "Ana Sayfaya Dön" : "Return to Dashboard"}</span>
        </Link>
      </Button>
    </div>
  );
}
