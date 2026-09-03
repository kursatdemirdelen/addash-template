import * as React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  shimmer?: boolean;
}

/**
 * Primitive skeleton block with pulse animation
 */
export function Skeleton({
  className,
  shimmer = true,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded bg-sand/70 dark:bg-sand/30",
        shimmer && "animate-pulse",
        className
      )}
      {...props}
    />
  );
}

/**
 * Metric card skeleton matching StatCard anatomy exactly (CLS = 0)
 */
export function SkeletonMetricCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-parchment bg-paper p-5 space-y-3.5 no-shadow",
        className
      )}
    >
      {/* Top Title Row: Icon + category title on left, trend badge on right */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Skeleton className="h-7 w-7 rounded-md shrink-0" />
          <Skeleton className="h-3 w-20 rounded-sm" />
        </div>
        <Skeleton className="h-5 w-14 rounded-full" />
      </div>

      {/* Value Row: Large metric stat + caption */}
      <div className="flex items-baseline justify-between pt-1">
        <Skeleton className="h-7 w-28 rounded-sm" />
        <Skeleton className="h-3 w-16 rounded-sm" />
      </div>

      {/* Sparkline Row: 9 staggered miniature bars */}
      <div className="flex items-end gap-1 h-8 pt-1">
        {[30, 45, 40, 65, 55, 80, 70, 85, 90].map((height, idx) => (
          <Skeleton
            key={idx}
            className="flex-1 rounded-sm"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Tabular skeleton matching DataTable structure 1:1
 * Renders as a true semantic table with strictly aligned columns across all screen sizes.
 */
export function SkeletonTable({
  rows = 5,
  columns = 5,
  showToolbar = true,
  showPagination = true,
  className,
}: {
  rows?: number;
  columns?: number;
  showToolbar?: boolean;
  showPagination?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("w-full space-y-3", className)}>
      {/* Optional Toolbar Shimmer */}
      {showToolbar && (
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-48 sm:w-64 rounded-full" />
            <Skeleton className="h-7 w-32 rounded-full hidden sm:block" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-24 rounded-md" />
          </div>
        </div>
      )}

      {/* Semantic Table Container */}
      <div className="w-full overflow-hidden rounded-lg border border-parchment bg-paper no-shadow">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-parchment bg-sand/30">
                {Array.from({ length: columns }).map((_, i) => (
                  <th key={i} className="px-4 py-3">
                    <Skeleton
                      className={cn(
                        "h-3 rounded-sm",
                        i === 0 ? "w-28" : i === columns - 1 ? "w-12 ml-auto" : "w-20"
                      )}
                    />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: rows }).map((_, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={cn(
                    "border-b border-parchment/60 last:border-b-0",
                    rowIndex % 2 === 1 ? "bg-sand/15" : "bg-paper"
                  )}
                >
                  {/* Column 1: Primary Entity (Avatar + Text) */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-7 w-7 rounded-full shrink-0" />
                      <div className="space-y-1.5 min-w-0">
                        <Skeleton className="h-3.5 w-24 sm:w-32 rounded-sm" />
                        <Skeleton className="h-2.5 w-16 sm:w-24 rounded-sm" />
                      </div>
                    </div>
                  </td>

                  {/* Middle Columns: Proportionately sized cells */}
                  {Array.from({ length: columns - 2 }).map((_, colIndex) => (
                    <td key={colIndex} className="px-4 py-3">
                      <Skeleton
                        className={cn(
                          "h-3.5 rounded-sm",
                          colIndex % 3 === 0
                            ? "w-20"
                            : colIndex % 3 === 1
                            ? "w-16"
                            : "w-24"
                        )}
                      />
                    </td>
                  ))}

                  {/* Last Column: Status badge / actions */}
                  {columns > 1 && (
                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end">
                        <Skeleton className="h-5 w-16 rounded-full" />
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer & Pagination Shimmer */}
        {showPagination && (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between px-4 py-3 border-t border-parchment bg-paper">
            <Skeleton className="h-3 w-40 rounded-sm" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-7 w-16 rounded-md" />
              <Skeleton className="h-3 w-20 rounded-sm" />
              <Skeleton className="h-7 w-16 rounded-md" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Chart canvas skeleton matching OverviewChart
 */
export function SkeletonChart({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-parchment bg-paper p-5 space-y-6 no-shadow",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-36 rounded-sm" />
          <Skeleton className="h-3 w-52 rounded-sm" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
      </div>

      {/* Bars representation */}
      <div className="flex items-end justify-between gap-2 h-48 pt-4 px-2">
        {[45, 60, 35, 75, 50, 90, 65, 80, 55, 70, 85, 95].map((val, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
            <Skeleton
              className="w-full rounded-t-sm"
              style={{ height: `${val}%` }}
            />
            <Skeleton className="h-2 w-4 rounded-xs" />
          </div>
        ))}
      </div>
    </div>
  );
}
