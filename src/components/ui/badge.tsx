import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "neutral"
    | "sand"
    | "moss"
    | "smoke"
    | "warning"
    | "sky"
    | "violet"
    | "rose"
    | "amber";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "neutral",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    neutral: "bg-paper text-ink border border-parchment",
    sand: "bg-sand text-ink border border-parchment/60",
    moss: "bg-moss/10 text-moss border border-moss/30",
    smoke: "bg-slate-500/10 text-slate-500 border border-slate-500/25",
    warning: "bg-amber-50 text-amber-900 border border-amber-200",
    sky: "bg-sky/10 text-sky border border-sky/30",
    violet: "bg-violet/10 text-violet border border-violet/30",
    rose: "bg-rose/10 text-rose border border-rose/30",
    amber: "bg-amber/10 text-amber border border-amber/30",
  };

  const dotColors = {
    neutral: "bg-smoke",
    sand: "bg-ink",
    moss: "bg-moss",
    smoke: "bg-slate-500",
    warning: "bg-amber",
    sky: "bg-sky",
    violet: "bg-violet",
    rose: "bg-rose",
    amber: "bg-amber",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-[0.05em] select-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full shrink-0", dotColors[variant])}
        />
      )}
      {children}
    </div>
  );
}
