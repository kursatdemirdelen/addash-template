import * as React from "react";
import { cn } from "@/lib/utils";

export interface MetricProps {
  label: string;
  value: string | number;
  subvalue?: string;
  className?: string;
}

export function Metric({ label, value, subvalue, className }: MetricProps) {
  return (
    <div className={cn("space-y-0.5", className)}>
      <p className="text-[11px] text-smoke font-normal tracking-[0.04em] uppercase">
        {label}
      </p>
      <p className="text-[18px] font-medium text-ink tracking-tight font-sans">
        {value}
      </p>
      {subvalue && (
        <p className="text-[11px] text-smoke">{subvalue}</p>
      )}
    </div>
  );
}
