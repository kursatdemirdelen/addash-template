"use client";

import * as React from "react";
import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

export interface AccessDeniedCardProps {
  title?: string;
  description?: string;
  className?: string;
}

export function AccessDeniedCard({
  title,
  description,
  className,
}: AccessDeniedCardProps) {
  const { t } = useTranslation();
  const f = t.systemPages.forbidden;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-8 sm:p-12 text-center max-w-md mx-auto rounded-lg border border-parchment bg-paper shadow-xs",
        className
      )}
    >
      {/* Icon Shield */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand/80 text-smoke mb-4 border border-parchment/60">
        <ShieldAlert className="h-5 w-5" />
      </div>

      <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-smoke mb-1.5">
        {f.badge}
      </span>

      <h2 className="text-xl sm:text-2xl font-serif text-ink font-normal mb-2">
        {title || f.title}
      </h2>

      <p className="text-xs sm:text-sm text-smoke max-w-xs mb-6 leading-relaxed">
        {description || f.description}
      </p>

      {/* Action Button */}
      <Button variant="primary" asChild>
        <Link href="/dashboard" className="flex items-center gap-1.5">
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>{f.returnDashboard}</span>
        </Link>
      </Button>
    </div>
  );
}
