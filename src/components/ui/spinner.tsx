"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-10 w-10",
};

export function Spinner({
  size = "md",
  className,
  ...props
}: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("inline-flex items-center justify-center shrink-0", className)}
      {...props}
    >
      <svg
        className={cn("animate-spin text-ink", sizeMap[size])}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-20 stroke-current"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          className="opacity-80 fill-current"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

/**
 * Broadsheet Progress Bar (Indeterminate)
 */
export function BroadsheetProgressBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full max-w-xs h-1 bg-sand dark:bg-sand/40 rounded-full overflow-hidden relative",
        className
      )}
    >
      <div
        className="absolute inset-y-0 h-full bg-ink dark:bg-paper rounded-full"
        style={{
          width: "40%",
          animation: "progress 1.5s ease-in-out infinite",
        }}
      />
    </div>
  );
}
