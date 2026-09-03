"use client";

import { Spinner } from "@/components/ui/spinner";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

export function LoadingState({
  message,
  className,
}: {
  message?: string;
  className?: string;
}) {
  const { t } = useTranslation();
  const resolvedMessage = message ?? t.common.loading;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 text-center space-y-3",
        className
      )}
    >
      <Spinner size="md" />
      <p className="text-xs text-smoke font-mono tracking-[0.08em]">{resolvedMessage}</p>
    </div>
  );
}
