"use client";

import * as React from "react";
import Link from "next/link";
import { Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

export interface SuccessStateProps {
  title?: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
  className?: string;
}

export function SuccessState({
  title,
  description,
  actionHref = "/dashboard",
  actionLabel,
  className,
}: SuccessStateProps) {
  const { locale } = useTranslation();
  const isTr = locale === "tr";

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-8 sm:p-12 text-center max-w-md mx-auto rounded-lg border border-parchment bg-paper shadow-xs",
        className
      )}
    >
      {/* Check Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-moss/10 text-moss mb-4 border border-moss/30">
        <Check className="h-5 w-5 stroke-[2.5]" />
      </div>

      <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-moss mb-1.5">
        {isTr ? "İşlem Başarılı" : "Success"}
      </span>

      <h2 className="text-xl sm:text-2xl font-serif text-ink font-normal mb-2">
        {title || (isTr ? "İşlem Tamamlandı" : "Operation Completed")}
      </h2>

      <p className="text-xs sm:text-sm text-smoke max-w-xs mb-6 leading-relaxed">
        {description ||
          (isTr
            ? "Değişiklikler başarıyla kaydedildi."
            : "Your changes have been saved successfully.")}
      </p>

      <Button variant="primary" asChild>
        <Link href={actionHref} className="flex items-center gap-1.5">
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>
            {actionLabel || (isTr ? "Ana Sayfaya Dön" : "Return to Dashboard")}
          </span>
        </Link>
      </Button>
    </div>
  );
}
