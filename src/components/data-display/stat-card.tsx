import * as React from "react";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  caption?: string;
  sparkline?: number[];
  icon?: React.ReactNode;
  iconColor?: string;
  className?: string;
}

export function StatCard({
  title,
  value,
  change,
  trend = "up",
  caption,
  sparkline,
  icon,
  iconColor = "bg-sand text-ink",
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-parchment bg-paper p-5 no-shadow transition-colors hover:border-ink/40 group",
        className
      )}
    >
      {/* Title Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {icon && (
            <div
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-md border border-parchment/60 shrink-0",
                iconColor
              )}
            >
              {icon}
            </div>
          )}
          <span className="text-[11px] font-mono uppercase tracking-[0.06em] text-smoke">
            {title}
          </span>
        </div>
        {change && (
          <div
            className={cn(
              "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-medium",
              trend === "up" && "bg-moss/10 text-moss",
              trend === "down" && "bg-red-50 text-red-700",
              trend === "neutral" && "bg-sand text-smoke"
            )}
          >
            {trend === "up" && <ArrowUpRight className="h-3 w-3" />}
            {trend === "down" && <ArrowDownRight className="h-3 w-3" />}
            {trend === "neutral" && <Minus className="h-3 w-3" />}
            <span>{change}</span>
          </div>
        )}
      </div>

      {/* Value */}
      <div className="mt-3 flex items-baseline justify-between gap-2">
        <span className="text-[26px] font-medium text-ink tracking-tight font-sans">
          {value}
        </span>
        {caption && (
          <span className="text-[11px] text-smoke font-mono">{caption}</span>
        )}
      </div>

      {/* Sparkline */}
      {sparkline && sparkline.length > 0 && (
        <div className="mt-3 flex items-end gap-0.5 h-8">
          {sparkline.map((val, idx) => {
            const max = Math.max(...sparkline);
            const heightPercent = Math.max(15, Math.round((val / max) * 100));
            return (
              <div
                key={idx}
                className="flex-1 rounded-sm bg-sand group-hover:bg-ink/20 transition-colors duration-200"
                style={{ height: `${heightPercent}%` }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
