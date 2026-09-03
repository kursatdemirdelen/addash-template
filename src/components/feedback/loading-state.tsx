import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function LoadingState({
  message = "Loading broadsheet ledger...",
  className,
}: {
  message?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 text-center",
        className
      )}
    >
      <Loader2 className="h-6 w-6 animate-spin text-smoke mb-3" />
      <p className="text-xs text-smoke tracking-[0.05em]">{message}</p>
    </div>
  );
}
